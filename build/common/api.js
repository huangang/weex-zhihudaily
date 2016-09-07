/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/54ca0e8892314678d3f5d7a2e3962d1b", [], function(__weex_require__, exports, __weex_module__){

	;
	var stream = __weex_require__('@weex-module/stream');
	var apiURL = {
	    //baseUrl: 'http://news-at.zhihu.com/api/4/',
	    baseUrl: 'http://pegasus.dev/zhihudaily?url=', // 本地调试用
	    startImage: 'start-image/1080*1776',
	    news: 'news/latest',
	    beforeNews: 'news/before/',
	    storyExtra: 'story-extra/',
	    longComments: 'story/%d/long-comments',
	    shortComments: 'story/%d/short-comments',
	    themes: 'themes',
	};

	function getData(url, callback) {
	    stream.sendHttp({
	        method: 'GET',
	        url: url
	    }, function (ret) {
	        callback(ret);
	    });
	}
	exports.apiUrl = apiURL;
	exports.startImage = function (callback) {
	    getData(apiURL.baseUrl + apiURL.startImage, callback);
	};
	exports.getNewsList = function (callback) {
	    getData(apiURL.baseUrl + apiURL.news, callback);
	};
	exports.getNewsById = function (id , callback) {
	    getData(apiURL.baseUrl + apiURL.news + "/" +id, callback);
	};
	exports.getBeforeNews = function (time , callback) {
	    getData(apiURL.baseUrl + apiURL.beforeNews + time, callback);
	};
	exports.getStoryExtra = function(id, callback){
	  getData(apiURL.baseUrl + apiURL.storyExtra + id, callback);
	};
	exports.longComments = function(id, callback){
	    getData(apiURL.baseUrl + apiURL.longComments.replace('%d', id) , callback);
	};
	exports.shortComments = function(id, callback){
	    getData(apiURL.baseUrl + apiURL.shortComments.replace('%d', id), callback);
	};

	})
	;__weex_bootstrap__("@weex-component/54ca0e8892314678d3f5d7a2e3962d1b", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);