# grunt-blank v0.1.1

> Finds empty, blank or small files

[![NPM][grunt-blank-icon] ][grunt-blank-url]

[![Build status][grunt-blank-ci-image] ][grunt-blank-ci-url]
[![dependencies][grunt-blank-dependencies-image] ][grunt-blank-dependencies-url]
[![devdependencies][grunt-blank-devdependencies-image] ][grunt-blank-devdependencies-url]

[grunt-blank-icon]: https://nodei.co/npm/grunt-blank.png?downloads=true
[grunt-blank-url]: https://npmjs.org/package/grunt-blank
[grunt-blank-ci-image]: https://travis-ci.org/bahmutov/grunt-blank.png?branch=master
[grunt-blank-ci-url]: https://travis-ci.org/bahmutov/grunt-blank
[grunt-blank-dependencies-image]: https://david-dm.org/bahmutov/grunt-blank.png
[grunt-blank-dependencies-url]: https://david-dm.org/bahmutov/grunt-blank
[grunt-blank-devdependencies-image]: https://david-dm.org/bahmutov/grunt-blank/dev-status.png
[grunt-blank-devdependencies-url]: https://david-dm.org/bahmutov/grunt-blank#info=devDependencies



### Install

`npm install grunt-blank --save-dev`

### Example

Checks if all JavaScript files are non-empty.

```js
// Gruntfile.js
grunt.initConfig({
  blank: {
    options: {
      minBytes: 2
    },
    src: ['src/**/*.js']
  }
});
grunt.loadNpmTasks('grunt-blank');
grunt.registerTask('default', ['blank']);
```



### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/grunt-blank/issues) on Github



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



