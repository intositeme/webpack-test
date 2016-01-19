var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


gulp.task('default', function() {
  	return gulp.src(['assets/main.js'])
    .pipe(webpackStream({
	    	
    		entry: {
				main: './assets/main.js',
				about: './assets/sub-page.js'
			},
			output: {
				filename: '[name].js'
			},
			plugins: [ new CommonsChunkPlugin({
				name: "init",
				filename: "init.js",
				async: true
			}) ]
    	}))
    .pipe(gulp.dest('public/js'));
});