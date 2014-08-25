# grunt-xplain v0.2.3

> Generates API docs from unit tests using xplain

[![NPM][grunt-xplain-icon] ][grunt-xplain-url]

[![Build status][grunt-xplain-ci-image] ][grunt-xplain-ci-url]
[![dependencies][grunt-xplain-dependencies-image] ][grunt-xplain-dependencies-url]
[![devdependencies][grunt-xplain-devdependencies-image] ][grunt-xplain-devdependencies-url]

[grunt-xplain-icon]: https://nodei.co/npm/grunt-xplain.png?downloads=true
[grunt-xplain-url]: https://npmjs.org/package/grunt-xplain
[grunt-xplain-ci-image]: https://travis-ci.org/bahmutov/grunt-xplain.png?branch=master
[grunt-xplain-ci-url]: https://travis-ci.org/bahmutov/grunt-xplain
[grunt-xplain-dependencies-image]: https://david-dm.org/bahmutov/grunt-xplain.png
[grunt-xplain-dependencies-url]: https://david-dm.org/bahmutov/grunt-xplain
[grunt-xplain-devdependencies-image]: https://david-dm.org/bahmutov/grunt-xplain/dev-status.png
[grunt-xplain-devdependencies-url]: https://david-dm.org/bahmutov/grunt-xplain#info=devDependencies



Grunt wrapper for [xplain](https://github.com/bahmutov/xplain)

### Install

`npm install grunt-xplain --save-dev`

### Example

Generate API doc into folder `api` from JavaScript source files
in the `src` and `test` folders using Jasmine framework

```js
// Gruntfile.js
grunt.initConfig({
  xplain: {
    options: {
      output: 'api',
      framework: 'jasmine'
    },
    src: ['src/*.js', 'test/*.js']
  }
});
grunt.loadNpmTasks('grunt-xplain');
grunt.registerTask('default', ['xplain']);
```

### Unit test to Markdown

You can update existing code blocks in Markdown documents
by finding unit tests with same names.

    // test/add-spec.js
    it('adds numbers', function () {
      lazyAss(add(2, 3) === 5);
      lazyAss(add(2, -3) === -1);
    });
    // test/api.md
    some text, followed by ### <test name> line

    ### adds numbers

    // Gruntfile.js
    xplain: {
      options: {
        framework: 'jasmine'
      },
      toMarkdown: {
        options: {
          output: 'test/api.md'
        },
        src: ['test/*-spec.js']
      }
    }

The block `### adds number` will be updated to

    ### adds numbers

        add(2, 3); // 5
        add(2, -3); // -1

For examples, see [Gruntfile.js]



### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/grunt-xplain/issues) on Github



## MIT License

The MIT License (MIT)

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



