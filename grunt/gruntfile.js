module.exports = function(grunt) {
    
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
        options: {
          //reporter: require('jshint-stylish') 
        },
        build: ['gruntfile.js', 'src/**/*.js']
    },

    uglify: {
        options: {
        },
        build: {
          files: {
            'dist/js/magic.min.js': 'src/js/magic.js'
          }
        }
    }, 

    cssmin: {
        options: {
        },
        build: {
          files: {
            'dist/css/style.min.css': 'src/css/style.css'
          }
        }
      },
    
    sass: {
        build: {
          files: {
            'dist/css/style.css': 'src/css/style.sass'
          }
        }
      }

    });

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'sass']); 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
    