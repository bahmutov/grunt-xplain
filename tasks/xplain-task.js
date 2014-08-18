/*
 * grunt-blank
 * https://github.com/bahmutov/grunt-blank
 *
 * Copyright (c) 2014 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var taskName = 'blank';
var taskInfo = 'Finds empty, blank or small files';

var fs = require('fs');
var check = require('check-types');
require('lazy-ass');

module.exports = function(grunt) {

  function isLargerThan(minBytes, filename) {
    lazyAss(check.positiveNumber(minBytes), 'invalid min bytes', minBytes);
    lazyAss(check.unemptyString(filename), 'expected filename', filename);

    var stat = fs.statSync(filename);
    grunt.verbose.writeln(filename, stat.size);
    return stat.size > minBytes;
  }

  function findBlank(self) {
    var options = self.options({
      minBytes: 2
    });
    lazyAss(check.positiveNumber(options.minBytes),
      'invalid minBytes in options', options);

    var largenThanMinBytes = isLargerThan.bind(null, options.minBytes);

    var allLarger = self.files.every(function (fileInputs) {
      return fileInputs.src.every(largenThanMinBytes);
    });

    if (!allLarger) {
      grunt.log.error('Some files are smaller than', options.minBytes, 'bytes');
    }
    return allLarger;
  }

  grunt.registerMultiTask(taskName, taskInfo, function () {
    return findBlank(this);
  });
};
