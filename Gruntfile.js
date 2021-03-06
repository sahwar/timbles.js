module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig( {
    pkg: grunt.file.readJSON( 'package.json' ),
    jshint: {
      all: [ 'Gruntfile.js', 'timbles.js', 'tests/test-scripts/*.js' ]
    },
    jscs: {
      src: [ 'Gruntfile.js', 'timbles.js', 'tests/test-scripts/*.js' ],
      options: {
        config: '.jscsrc',
        verbose: true // Create output with rule names
      }
    }
  } );

  // Load the JSHint and JSCS plugins.
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-jscs' );

  // Default task(s).
  grunt.registerTask( 'default', [ 'jshint', 'jscs' ] );
};
