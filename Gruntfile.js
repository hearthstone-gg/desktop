module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  nodewebkit: {
    options: {
        platforms: ['win','osx'],
        buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved
        version: '0.12.0',
        macIcns: './app/logo.icns'
    },
    src: ['./app/**/*'] // Your node-webkit app 
  },
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-node-webkit-builder');

// Default task(s).
grunt.registerTask('default', []);
grunt.registerTask('build', ['nodewebkit']);
};