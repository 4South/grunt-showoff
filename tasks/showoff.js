/*
 * grunt-showoff
 * https://github.com/4South/grunt-showoff
 *
 * Copyright (c) 2013 steve kane
 * Licensed under the MIT license.
 */

'use strict';

var hljs = require('highlight.js');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var highlightHandlebars = function ( filepath, options ) {
    var content = grunt.file.read( filepath )
      , lang = options.lang
      , highlightedHtml = hljs.highlight( lang, content ).value
      , output = "<pre><code>" + highlightedHtml + "</code></pre>";

      return output;
  };

  grunt.registerMultiTask('showoff', 'parse sourcefiles with highlight.js and output handlebars templates', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: ', ',
      lang: '',
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return highlightHandlebars( filepath, options );
      }).join(grunt.util.normalizelf(options.separator));

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
