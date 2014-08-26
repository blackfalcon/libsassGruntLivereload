module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'stylesheets/app.css': 'sass/app.sass'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};


