Package.describe({
  name: 'merlin:foundation-blaze',
  version: '0.1.0',
  summary: 'Blaze wrappers for Zurb Foundation Components',
  git: 'https://github.com/merlinpatt/foundation-blaze',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('zurb:foundation-sites@6.1.2');
  api.imply('zurb:foundation-sites@6.1.2');

  api.addFiles([
    'client/lib/helpers.js',

    'client/close_button.html',
    'client/progress_bar.html',
    'client/switch.html',

    'client/dropdown.html',
    'client/dropdown.js',

    'client/dropdown_menu.html',
    'client/dropdown_menu.js',

    'client/orbit.html',
    'client/orbit.js',

    'client/reveal.html',
    'client/reveal.js',

    'client/slider.html',
    'client/slider.js',

    'client/tooltip.html',
    'client/tooltip.js'
  ], 'client');
});
