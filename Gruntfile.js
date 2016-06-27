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
              cwd: 'views/assets/style',
              src: ['style.less'],
              dest: 'views/assets/style',
              expand: true,
              ext: '.min.css'
          }
      },
      watch: {
          less: {
              files: ['views/assets/style/*.less'],
              tasks: ['less:dev'],
              options: {
                  spawn: false,
              },
          }
      },
       clean: {
           options: { force: true },
           all: ['views/assets/style/style.min.css']
       }
  });

  grunt.registerTask('dev', ['watch:less']);
};
