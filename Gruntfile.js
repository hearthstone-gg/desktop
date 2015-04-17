module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  nodewebkit: {
    options: {
        platforms: ['win','osx'],
        buildDir: './webkitbuilds', // Where the build version of my node-webkit app is saved 
    },
    src: ['./app/**/*'] // Your node-webkit app 
  },
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-node-webkit-builder');

// Default task(s).
grunt.registerTask('default', []);

};