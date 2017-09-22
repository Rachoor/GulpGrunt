module.exports={
	options: {
        livereload: true
    },
    sass: {
        files: ['src//*.css', 'src//*.sass'], 
        tasks: ['sass', 'cssmin']
    },
    js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
    }
}