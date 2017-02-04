'use strict';

//Config
import config from '../gulp.config';
let {SRC_DIR, PUB_DIR, WATCH} = config;


//Common Modules
import gulp from 'gulp';


//Specials Modules
import BS from 'browser-sync';
let BSReload = BS.reload;
import sequence from 'run-sequence';


gulp.task('reload', function(){
	return BSReload();
})


//Starts Server
module.exports = () => {
	function BsServe(){
		BS.init(config.BS);
	}

	sequence('clean', ['js', 'styles', 'pug', 'images', 'fonts', 'data'], 'navigator', BsServe);

	if(WATCH.js){gulp.watch(SRC_DIR._BASE + SRC_DIR._JS + '/**/*.js', ()=>sequence('js', 'reload'))}
	if(WATCH.css){gulp.watch(SRC_DIR._BASE + SRC_DIR._CSS + '/**/*.scss', ()=>sequence('styles', 'reload'))}
	if(WATCH.pug){gulp.watch(SRC_DIR._BASE + SRC_DIR._TEMP + '/**/*.pug', ()=>sequence('pug', 'reload'))}
	if(WATCH.images){gulp.watch('.' + SRC_DIR._IMG + SRC_DIR._IMG_INPUT, {cwd: SRC_DIR._BASE}, ()=>sequence('images', 'reload'))}
	if(WATCH.fonts){gulp.watch('.' + SRC_DIR._FONT + SRC_DIR._FONT_INPUT, {cwd: SRC_DIR._BASE}, ()=>sequence('fonts', 'reload'))}
	if(WATCH.data){gulp.watch('.' + SRC_DIR._DATA + SRC_DIR._DATA_INPUT, {cwd: SRC_DIR._BASE}, ()=>sequence('data', 'reload'))}
};