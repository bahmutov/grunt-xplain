/*
 * grunt-blank
 * https://github.com/bahmutov/grunt-blank
 *
 * Copyright (c) 2014 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
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

    blank: {
      options: {
        minBytes: 2
      },
      src: ['Gruntfile.js', 'tasks/*.js'],
      invalid: ['Gruntfile.js', 'tasks/*.js', 'test/*.js']
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
    ['jshint', 'jshint-solid', 'nice-package', 'blank:src', 'readme']);
};
