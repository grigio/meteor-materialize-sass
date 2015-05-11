Package.describe({
  name: 'grigio:materialize-sass',
  summary: 'Materialize scss theme',
  git: "https://github.com/grigio/meteor-materialize-sass.git",
  version: "0.0.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery');
  api.use('grigio:ruby-sass@0.0.8');

  // UI
  api.use('hammer:hammer@2.0.4_2');
  api.use('percolate:velocityjs@1.1.0');

  var path = Npm.require('path');
  var asset_path = path.join('materialize');

  api.addFiles(path.join(asset_path, 'sass/components', '_buttons.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_cards.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_collapsible.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_color.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_dropdown.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_form.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_global.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_grid.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_icons-material-design.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_materialbox.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_mixins.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_modal.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_navbar.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_normalize.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_prefixer.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_preloader.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_roboto.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_sideNav.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_slider.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_table_of_contents.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_tabs.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_toast.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_tooltip.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_typography.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_variables.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components', '_waves.scss'), 'server');

  api.addFiles(path.join(asset_path, 'sass', 'materialize.scss'), 'server');

  // javascript libs
  // api.addFiles(path.join(asset_path, 'js', 'velocity.min.js'), 'client');
  // api.addFiles(path.join(asset_path, 'js', 'hammer.min.js'), 'client');

  // javascript
  api.addFiles(path.join(asset_path, 'js', 'jquery.easing.1.3.js'), 'client');

  api.addFiles(path.join(asset_path, 'js', 'animation.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'buttons.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'cards.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'character_counter.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'collapsible.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'dropdown.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'forms.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'global.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'leanModal.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'materialbox.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'parallax.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'pushpin.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'scrollFire.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'scrollspy.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'sideNav.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'slider.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'tabs.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'toasts.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'tooltip.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'transitions.js'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'waves.js'), 'client');


  api.addFiles(path.join(asset_path, 'sass/components/date_picker', '_default.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components/date_picker', '_default.date.scss'), 'server');
  api.addFiles(path.join(asset_path, 'sass/components/date_picker', '_default.time.scss'), 'server');



  // fonts
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Bold.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Light.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Medium.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Thin.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.woff'), 'client');

});