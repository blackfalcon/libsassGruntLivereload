module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/app.css': 'sass/app.sass'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.sass'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};


