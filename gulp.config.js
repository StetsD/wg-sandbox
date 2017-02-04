'use strict';

const config = {

	//Project name
		NAME: 'My Project' || 'SandBox',

	//Browser-sync options
		BS: {
			server: './public',
			port: process.env.PORT || 3000,
			index: "_navigator.html"
		},
	
	//Watch options
		WATCH:{
			js: true,
			css: true,
			pug: true,
			images: true,
			fonts: false,
			data: false
		},

	//Environment variable (development = 'dev' / production = 'prod')
		NODE_ENV: !process.env.NODE_ENV || process.env.NODE_ENV === 'dev',

	//INPUT
		SRC_DIR: {
			
			_BASE: './sources',
			_JS: '/js',
			_CSS: '/css',
			_IMG: '/img',
			_TEMP: '/layouts',
			_FONT: '/fonts',
			_DATA: '/_data',
			
			_CSS_INPUT: '/common.scss',
			_TEMP_INPUT: '/pages/*.pug',
			_IMG_INPUT: '/**/*.{png,gif,jpg,svg,jpeg}',
			_FONT_INPUT: '/**/*.{eot,svg,ttf,woff,woff2}',
			_DATA_INPUT: '/**/*.json'
		},

	//OUTPUT
		PUB_DIR: {
			_BASE: './public',
			_JS: '/js',
			_CSS: '/css',
			_IMG: '/img',
			_TEMP: '/',
			_FONT: '/fonts',
			_DATA: '/_data'
		},

	//Gulp-load-plugins module
		GLP:{
			camelize: true,
			pattern: ['gulp-*', 'gulp.*']
		},

	//Gulp-image options
		GI:{
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: false,
			jpegoptim: true,
			mozjpeg: true,
			gifsicle: true,
			svgo: true,
			concurrent: 10
		}
};

module.exports = config;