## Example

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
