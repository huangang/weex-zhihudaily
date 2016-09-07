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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/ac6bf4d63e7f780904c33e5f2a125b6d", [], function(__weex_require__, exports, __weex_module__){

	;
	    __webpack_require__(13);
	    var modal = __weex_require__('@weex-module/modal');
	    var stream = __weex_require__('@weex-module/stream');
	    var navigator = __weex_require__('@weex-module/navigator');

	    function getData(url, callback) {
	        stream.sendHttp({
	            method: 'GET',
	            url: url
	        }, function (ret) {
	            callback(JSON.parse(ret));
	        });
	    }

	    __weex_module__.exports = {
	        data: function () {return {
	          newsId:0,
	          width: 0,
	          height: 0,
	          news:{}
	        }},
	        created: function () {
	            var self = this;
	            var config  = this.$getConfig();
	            this.width = config.env.deviceWidth;
	            this.height = config.env.deviceHeight;

	            var bundleUrl = this.$getConfig().bundleUrl;
	            this.newsId = self.getParameterByName('id', bundleUrl);
	            if (this.newsId.lastIndexOf('?') != -1) {
	                this.newsId = this.newsId.substr(0, contentId.lastIndexOf('?'));
	            }
	            //获取参数
	          // modal.toast({'message': 'hide me!' + this.newsId, 'duration': 1});
	          self.getNews(this.newsId);
	          this.$on('naviBar.leftItem.click',function(e){
	              //pop back
	              var params = {
	                  'animated' : 'true',
	              }
	              navigator.pop(params, function(e) {});
	          });
	        },
	        methods: {
	          pagestart: function(){
	                //TODO: loading
	            },
	            pagefinish: function(){
	                //TODO: close loading
	            },
	            error: function(){
	                //TODO: show infowindow
	            },
	            getParameterByName: function (name, url) {
	                name = name.replace(/[\[\]]/g, "\\$&");
	                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	                        results = regex.exec(url);
	                if (!results) return null;
	                if (!results[2]) return '';
	                return decodeURIComponent(results[2].replace(/\+/g, " "));
	            },
	            getNews: function(id){
	              var self = this;
	              getData('http://news-at.zhihu.com/api/4/news/' + id, function(ret){
	                  self.news = ret;
	              });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navpage"
	    },
	    {
	      "type": "web",
	      "classList": [
	        "web"
	      ],
	      "attr": {
	        "src": function () {return this.news.share_url}
	      },
	      "style": {
	        "height": function () {return this.height}
	      },
	      "events": {
	        "pagestart": "pagestart",
	        "pagefinish": "pagefinish",
	        "error": "error"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "text": {
	    "fontSize": 26
	  },
	  "web": {
	    "flex": 1
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/ac6bf4d63e7f780904c33e5f2a125b6d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 13:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#E0E0E0"
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 68,
	    "top": 20,
	    "height": 50,
	    "textAlign": "center",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif",
	    "lineHeight": 50
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 33,
	    "fontWeight": "bold",
	    "textOverflow": "ellipsis",
	    "height": 42,
	    "lines": 1
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 20,
	    "top": 20,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ }

/******/ });