## Example

Generate API doc into folder `api` from JavaScript source files
in the `test` folder, expecting Jasmine framework

```js
// Gruntfile.js
grunt.initConfig({
  xplain: {
    options: {
      dir: 'api',
      framework: 'jasmine'
    },
    src: ['test/*.js']
  }
});
grunt.loadNpmTasks('grunt-xplain');
grunt.registerTask('default', ['xplain']);
```
