module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    xplain: {
      options: {
        dir: 'api'
      },
      src: ['test/*.js']
    },

    readme: {
      options: {
        readme: './docs/README.tmpl.md',
        docs: '.',
        templates: './docs'
      }
    }
  });

  grunt.loadTasks('tasks');
  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default',
    ['jshint', 'jshint-solid', 'nice-package', 'xplain', 'readme']);
};
