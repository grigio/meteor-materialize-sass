# Materialize sass (Not mantained anymore)
[Materialize css theme](http://materializecss.com) built via scss files

*WARNING*: Work in progress, you have to attach yourself the needed javascript

## Prerequisite

You need [sass](http://sass-lang.com/install) CLI utility installed (not libsass/node-sass)

### Install

`meteor add grigio:materialize-sass`

### Usage

Create in your project:

```javascript
// ruby-sass.json
{
  "file": "client/overrides.scss"
}
```

```scss
//client/overrides.scss

// your customizations
$button-color: darkblue;

// ..and now the original theme
//@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/materialize";

// or the singles .scss

// Mixins
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/prefixer";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/mixins";

// Reset
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/normalize";

// components
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/color";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/global";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/icons-material-design";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/grid";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/navbar";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/roboto";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/typography";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/cards";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/toast";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/tabs";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/tooltip";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/buttons";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/dropdown";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/waves";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/modal";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/collapsible";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/materialbox";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/form";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/table_of_contents";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/sideNav";
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/components/preloader";

// Currently broken or disabled
// @import "components/date_picker/default.scss";
// @import "components/date_picker/default.date.scss";
// @import "components/date_picker/default.time.scss";
```

You also need to symlink the `font` assets.
```
$(cd public/ && ln -s ../.meteor/local/build/programs/web.browser/packages/grigio_materialize-sass/materialize/font font)
```

### License

Copyright (C) 2014 Luigi Maselli - http://grigio.org - MIT Licence
