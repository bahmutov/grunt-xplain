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
        framework: 'jasmine'
      },
      toHtml: {
        options: {
          output: 'api'
        },
        src: ['test/*.js']
      },
      toMarkdown: {
        options: {
          output: 'test/api.md'
        },
        src: ['test/*.js']
      }
    },

    readme: {
      options: {
        readme: './docs/README.tmpl.md',
        docs: '.',
        templates: './docs'
      }
    }
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);
  grunt.loadTasks('tasks');

  grunt.registerTask('default',
    ['jshint', 'jshint-solid', 'nice-package', 'xplain:toHtml', 'readme']);
};
