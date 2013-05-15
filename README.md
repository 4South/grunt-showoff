# grunt-showoff

> converts source files (usually javascript) to handlebars files that have been run through highlight.js

## Getting Started
This plugin requires Grunt `~0.4.0`

Additionally, if you wish to use these handlebars files inside a project you will need to include one of the many .css files available for highlighting the outputted
html from [highlight.js](http://highlightjs.org).

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-showoff --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-showoff');
```

## The "showoff" task

### Overview
In your project's Gruntfile, add a section named `showoff` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  showoff: {
    options: {
      lang: 'javascript',
    },
    glob_to_multiple: {
      expand: true,
      cwd: 'where/your/files/are',
      src: ['**/*.js'],
      dest: 'where/your/output/goes',
      ext: '.handlebars',
    },
  },
})
```

### Options

####Options.lang
Specify what language highlight.js will use to highlight your output.  For example, 'javascript'.  See highlight.js docs for exact names for each language.


## Contributing
Please submit issues/pull requests to the github repository for this project.  Contributions are absolutely welcome!

## Release History
May14, 2013 0.1.2
