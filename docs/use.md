## Example

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
