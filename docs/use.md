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

## Unit test to Markdown

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
