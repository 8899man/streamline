require.config({
  /* starting point for application */
  hbs: {
    disableI18n: true, // This disables the i18n helper and doesn't require the json i18n files (e.g. en_us.json)
    helperPathCallback: // Callback to determine the path to look for helpers
      function(name) { // ('/template/helpers/'+name by default)
        return 'modules/Helpers';
      },
    templateExtension: 'html', // Set the extension automatically appended to templates
    compileOptions: {} // options object which is passed to Handlebars compiler
  },
  /**
   * Requested as soon as the loader has processed the configuration. It does
   * not block any other require() calls from starting their requests for
   * modules, it is just a way to specify some modules to load asynchronously
   * as part of a config block.
   * @type {Array} An array of dependencies to load.
   */
  deps: ['marionette', 'globalize', 'utils/LangSupport'],

  /**
   * The number of seconds to wait before giving up on loading a script.
   * @default 7 seconds
   * @type {Number}
   */
  waitSeconds: 30,


  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'bootstrap.notify': {
      deps: ['jquery']
    },
    underscore: {
      exports: '_'
    },
    marionette: {
      deps: ['backbone']
    },
    backgrid: {
      deps: ['backbone']
    },
    'backgrid-paginator': {
      deps: ['backbone', 'backgrid']
    },
    'backgrid-filter': {
      deps: ['backbone', 'backgrid', ]
    },
    'backbone.forms': {
      deps: ['backbone']
    },
    'backbone-forms.templates': {
      deps: ['backbone-forms.list', 'backbone.forms']
    },
    'bootstrap.filestyle': {
      deps: ['jquery', 'bootstrap']
    },
    'bootstrap-multiselect': {
      deps: ['jquery', 'bootstrap']
    },
    'Backbone.BootstrapModal': {
      deps: ['jquery', 'underscore', 'backbone']
    },
    'jquery-toggles': {
      deps: ['jquery']
    },
    'jquery-multiselect': {
      deps: ['jquery'],
      exports : 'jquery-multiselect'
    },
    'jquery-multiselect-filter': {
      deps: ['jquery', 'jquery-multiselect'],
      exports : 'jquery-multiselect-filter'
    },
    'bootstrap-tag': {
      deps: ['jquery'],
    },
    'bootstrap-wizard': {
      deps: ['jquery'],
    },
    'jquery-ui': {
      deps: ['jquery'],
    },
    'jquery-timeago': {
      deps: ['jquery'],
    },
    globalize: {
      exports: 'Globalize'
    },
    moment: {
      deps: ['jquery'],
      exports: 'moment'
    },
    hbs: {
      deps: ['underscore', 'handlebars']
    },
    d3: {
      exports: 'd3'
    },
    'd3-tip': {
      deps: ['d3'],
      exports: 'd3-tip'
    },
    'typeahead': {
      deps: ['jquery']
    },
    jsPlumb: {
      deps: ['jquery'],
      exports: 'jsPlumb'
    },
    select2: {
      deps: ['jquery'],
      exports: 'select2'
    },
    'codemirror': {
      deps: ['jquery'],
      exports: 'codemirror'
    },
    'sql': {
      deps: ['jquery']
    }
  },

  paths: {
    'jquery': '../libs/bower/jquery/js/jquery',
    'backbone': '../libs/bower/backbone/js/backbone',
    'underscore': '../libs/bower/underscore/js/underscore',
    'marionette': '../libs/bower/backbone.marionette/js/backbone.marionette',
    'backbone.wreqr': '../libs/bower/backbone.wreqr/js/backbone.wreqr',
    'backbone.babysitter': '../libs/bower/backbone.babysitter/js/backbone.babysitter',
    'backbone.forms': '../libs/bower/backbone-forms/js/backbone-forms',
    'backbone-forms.list': '../libs/bower/backbone-forms/js/list',
    'backbone-forms.templates': '../libs/bower/backbone-forms/js/bootstrap',
    'Backbone.BootstrapModal': '../libs/bower/backbone.bootstrap-modal/js/backbone.bootstrap-modal',
    'backbone.paginator': '../libs/bower/backbone.paginator/js/backbone.paginator',
    'backgrid': '../libs/bower/backgrid/js/backgrid',
    'backgrid-paginator': '../libs/bower/backgrid-paginator/js/backgrid-paginator',
    'backgrid-filter': '../libs/bower/backgrid-filter/js/backgrid-filter',    
    'bootstrap': '../libs/bower/bootstrap/js/bootstrap',
    'bootstrap.filestyle': '../libs/bower/bootstrap/js/bootstrap-filestyle.min',
    'bootstrap.notify': '../libs/bower/bootstrap/js/bootstrap-notify',
    'bootstrap-multiselect': '../libs/bower/bootstrap-multiselect/js/bootstrap-multiselect',
    'jquery-toggles': '../libs/bower/jquery-toggles/js/toggles.min',
    'bootstrap-tag': '../libs/other/bootstrap-tag/js/bootstrap-tag',
    'jquery-multiselect': '../libs/bower/jquery-multiselect/js/jquery.multiselect',
    'jquery-multiselect-filter': '../libs/bower/jquery-multiselect/js/jquery.multiselect.filter',
    'jquery-ui': '../libs/bower/jquery-ui/js/jquery-ui-1.10.4.custom.min',
    'jquery-timeago': '../libs/bower/jquery-timeago/js/jquery.timeago',
    'globalize': '../libs/bower/globalize/js/globalize',
    'gblMessages' : '../scripts/globalize',
    'moment': '../libs/bower/moment/js/moment-with-langs.min',
    'requirejs.text': '../libs/bower/requirejs-text/js/text',
    'bootbox': '../libs/bower/bootbox/js/bootbox',
    'handlebars': '../libs/other/require-handlebars-plugin/js/handlebars',
    'i18nprecompile': '../libs/other/require-handlebars-plugin/js/i18nprecompile',
    'json2': '../libs/other/require-handlebars-plugin/js/json2',
    'hbs': '../libs/other/require-handlebars-plugin/js/hbs',
    'select2': '../libs/other/select2/js/select2-min',
    'd3':'../libs/other/d3/d3.min',
    'd3-tip':'../libs/other/d3/d3-tip',
    'typeahead': '../libs/other/typeahead/js/typeahead',
    'tmpl': 'templates',
    'jsPlumb':'../libs/other/jsplumb/js/jsPlumb-2.0.4',
    'codemirror':'../libs/other/codemirror/lib/codemirror',
    'sql':'../libs/other/codemirror/mode/sql',
  },

  /**
   * If set to true, an error will be thrown if a script loads that does not
   * call define() or have a shim exports string value that can be checked.
   * To get timely, correct error triggers in IE, force a define/shim export.
   * @type {Boolean}
   */
  enforceDefine: false
});

require(['App',
      'router/Router',
      'utils/Overrides',
      'jquery-ui',
      'bootstrap',
      'backbone.forms',
      'select2',
      'typeahead',
      'bootstrap-tag',
      'jsPlumb'
  ], function(App, Router) {
  App.appRouter = new Router();
  App.start();
});