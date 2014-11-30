# Materialize sass
[Materialize css theme](http://materializecss.com) built via scss files

*WARNING*: Work in progress, you have to attach yourself the needed javascript

### Install

`meteor add grigio:materialize-sass`

### Usage

Create in your project `ruby-sass.json` and `client/overrides.scss`

```
{
  "file": "client/overrides.scss"
}
```

```
// your customizations
$button-color: darkblue;

// ..and now the original theme
@import ".meteor/local/build/programs/server/assets/packages/grigio_materialize-sass/materialize/sass/materialize";
```

You also need to symlink the `font` assets.
```
$(cd public/ && ln -s ../.meteor/local/build/programs/web.browser/packages/grigio_materialize-sass/materialize/font font)
```