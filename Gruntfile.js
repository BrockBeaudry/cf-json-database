'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      data: ['db'],
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          console: true,
          module: true
        }
      },
    },

    connect: {
        options: {
            port: process.env.PORT || 3000,
          
        },

        all: {},
    },

    watch: {
      options: {
        livereload: true
      },

      db: {
        files: ['db/*.json']
      },

      src: {
        files: ['src/*.js',],
        tasks: [],
      },

      lib: {
        files: ['lib/*.js'],
      },
    },

    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
    },

      all: { src: ['test/mocha/*.js'] }
    },

  });
 
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('test', ['simplemocha', 'clean:data']);  

};