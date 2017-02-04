'use strict';

//Config
import config from '../gulp.config';
let {SRC_DIR, PUB_DIR} = config;


//Common Modules
import gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';
let G = GulpLoadPlugins(config.GLP);


//Specials Modules
import webpack from 'webpack-stream';


//Compile
module.exports = () => {
	return gulp.src(SRC_DIR._BASE)
		.pipe(webpack(require('../webpack.config.js')))
		.on('error', G.notify.onError(function(error){
			return 'Error: ' + error.message;
		}))
		.pipe(gulp.dest(PUB_DIR._BASE + PUB_DIR._JS));
}