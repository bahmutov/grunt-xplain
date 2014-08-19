var taskName = 'xplain';
var taskInfo = 'Generates API docs using xplain';

var check = require('check-types');
require('lazy-ass');
var xplain = require('xplain');

module.exports = function(grunt) {

  function runExplain(self) {
    var options = self.options({
      dir: 'api',
      framework: 'jasmine'
    });

    var allFiles = [];
    self.files.forEach(function (fileInputs) {
      allFiles = allFiles.concat(fileInputs.src);
    });

    lazyAss(check.array(allFiles), 'expected array', allFiles);
    lazyAss(allFiles.every(check.unemptyString), 'expected all strings', allFiles);

    var done = self.async();
    lazyAss(check.fn(done), 'could not get async done function');

    xplain.document({
      outputFolder: options.dir,
      patterns: allFiles,
      framework: options.framework
    }).then(function (results) {
      grunt.verbose.writeln(JSON.stringify(results, null, 2));
      done(true);
    }).done();
  }

  grunt.registerMultiTask(taskName, taskInfo, function () {
    return runExplain(this);
  });
};
