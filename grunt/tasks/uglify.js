grunt.initConfig({
    uglify: {
        options: {
        },    
        dev: { 
            files: { 'dist/js/magic.min.js': ['src/js/magic.js', 'src/js/magic2.js'] } 
        }, 
        production: { 
            files: { 'dist/js/magic.min.js': 'src/**/*.js' } 
        }, 
        build: {
            files: {
                'dist/js/magic.min.js': 'src/js/magic.js'
            }
        }
    }
})