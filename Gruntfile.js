module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.sass',
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: '**/*.sass',
        tasks: ['sass'],
      },
      css: {
        files: '**/*.css',
        tasks: [],
      },
      html: {
        files: '**/*.html',
        tasks: [],
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: 'localhost',
          protocol: 'http',
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);

};
