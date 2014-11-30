var PATH   = Npm.require("path");
var FS     = Npm.require("fs");
var MATCH  = Npm.require('minimatch');
var FUTURE = Npm.require('fibers/future');
var EXEC   = Npm.require('child_process').exec;
var AEXEC  = FUTURE.wrap(EXEC, 1);

// Utils
var Utils = {
  isEmpty: function(obj) {
    if (typeof obj === "object") {
      if (obj instanceof Array)
        return obj.length === 0;
      else {
        return Object.keys(obj).length === 0;
      }
    }
    else {
      return !Boolean(obj);
    }
  },

  readJSON: function(file) {
    var content = FS.readFileSync(file);
    return JSON.parse(content);
  },

  fileModifiedTime: function(file) {
    var stat = FS.statSync(file);
    return stat ? stat.mtime.getTime() : null;
  },

  params: {
    bool: function(name, value) {
      return function(v) {
        if (v === value)
          return name;
        else
          return null;
      }
    },
    param: function(name) {
      return function(value) {
        if (value)
          return name + " " + value;
        else
          return null;
      }
    }
  }
}

// Cache
var Cache = function() {
  if (this instanceof Cache) {
    return Cache.instance = Cache.instance || this;
  }
  else {
    return Cache.instance = Cache.instance || new Cache;
  }
}

Cache.prototype = {
  storage: {},

  forceWrite: function(key, data, time) {
    time = time || (new Date).getTime()
    this.storage[key] = {
      data: data,
      modified: time
    }
  },

  outdated: function(key, time) {
    return !this.storage[key] || !time || this.storage[key].modified < time;
  },

  outdatedFile: function(path) {
    var time = Utils.fileModifiedTime(path);
    return this.outdated(path, time);
  },

  write: function(key, data, time) {
    time = time || (new Date).getTime()
    if (this.outdated(key, time)) {
      this.forceWrite(key, data, time);
      return true;
    }
    return false;
  },

  writeFile: function(path, data, time) {
    time = time || (new Date).getTime()
    if (this.outdatedFile(path, time)) {
      this.forceWrite(path, data, time);
      return true;
    }
    return false;
  },

  get: function (key) {
    return this.storage[key] && this.storage[key].data || null;
  }
}

// Command
var Cmd = function(optionsFile) {
  this._optionsFile = optionsFile;
}

Cmd.prototype = {
  _cache: new Cache(),
  _compiler: "sass",
  _optionsMap: {
    "style":           Utils.params.param("--style"),
    "cacheLocation":   Utils.params.param("--cache-location"),
    "import":          Utils.params.param("--load-path"),
    "precision":       Utils.params.param("--precision"),
    "require":         Utils.params.param("--require"),
    "defaultEncoding": Utils.params.param("--default-encoding"),

    "unixNewlines":    Utils.params.bool("--unix-newlines", true),
    "comments":        Utils.params.bool("--line-comments", true),
    "scss":            Utils.params.bool("--scss",          true),
    "compass":         Utils.params.bool("--compass",       true),
    "noCache":         Utils.params.bool("--no-cache",      true),
    "sourcemap":       Utils.params.bool("--sourcemap",     true)
  },

  options: function() {
    if (this._cache.outdatedFile(this._optionsFile)) {
      var data = Utils.readJSON(this._optionsFile);
      this._cache.writeFile(this._optionsFile, data);
    }
    return this._cache.get(this._optionsFile);
  },

  getFile: function(options, file) {
    if (typeof options === "string") {
      return options;
    }
    else if (typeof options === "object") {
      for (var option in options) {
        var patterns = options[option];
        if (typeof patterns === "string") {
          patterns = [patterns];
        }
        if (patterns instanceof Array) {
          for (var i in patterns) {
            pattern = patterns[i];
            if (MATCH(file, pattern)) {
              return option;
            }
          }
        }
      }
    }
    return null;
  },

  buildCmd: function(options, file) {
    var result = [];
    result.push(this._compiler);
    for (var key in this._optionsMap) {
      var r = this._optionsMap[key](options[key]);
      if (r) result.push(r);
    }
    result.push(file);
    return result.join(" ");
  },

  exec: function(path) {
    var options = this.options();
    if (!options) throw "Options not loaded";

    var file = this.getFile(options.files || options.file, path);
    if (!file) throw "Config files don't match '" + path + "'";

    var time = Utils.fileModifiedTime(path);
    if (this._cache.outdated(file, time)) {
      cmd = this.buildCmd(options, file);
      var data = AEXEC(cmd).wait();
      this._cache.write(file, data);
    }
    return {
      data: this._cache.get(file),
      file: file + ".css"
    }
  },

  getError: function() {
    return this._error;
  }
}

// Main
var compile = function(compileStep) {
  var optionsFile = PATH.join(process.cwd(), 'ruby-sass.json');
  var cmd   = new Cmd(optionsFile);
  var path  = compileStep.inputPath;

  try {
    var data = cmd.exec(path);
    compileStep.addStylesheet({
      path: data.file,
      data: data.data
    });
  }
  catch (error) {
    compileStep.error({
      message: "Sass compiler error: \n" + error.message
    });
  }
}

Plugin.registerSourceHandler("scss", {archMatching: 'web'}, compile);
Plugin.registerSourceHandler("sass", {archMatching: 'web'}, compile);
