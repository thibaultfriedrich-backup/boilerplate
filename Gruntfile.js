'use strict';

module.exports = function(grunt) {

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
      less: {
          options: {
              compress: true,
              ieCompat: true
          },
          dev: {
              cwd: 'views/static/style',
              src: ['style.less'],
              dest: 'views/static/style',
              expand: true,
              ext: '.min.css'
          }
      },
      watch: {
          less: {
              files: ['views/static/style/*.less'],
              tasks: ['less:dev'],
              options: {
                  spawn: false,
              },
          }
      },
       clean: {
           options: { force: true },
           all: ['views/static/style/style.min.css']
       }
  });

  grunt.registerTask('dev', ['watch:less']);
};
