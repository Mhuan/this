(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=script&lang=js&":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
				data: function data() {
								return {
												data: {}
								};
				},
				created: function created() {
								this.csh();
				},

				methods: {
								csh: function csh() {

												var vue = this;

												var id = this.$route.params.id;

												if (id == undefined) {
																this.$router.push({ name: 'faxian' });
												}

												this.$ajax.get('http://gongsixiangmu.1kesong.com/api/v1/article?id=' + id).then(function (res) {

																vue.data = res.data;
												}).catch(function (error) {

																console.log(error);
												});
								}
				}
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.head[data-v-6c9b8bd3]{\n        position: relative;\n        width: 100%;\n        height: auto;\n        background: #26a2ff;\n        color: white;\n}\n.head .head-title[data-v-6c9b8bd3]{\n        text-align: center;\n        line-height: 50px;\n        font-size: 18px;\n}\n.head>a[data-v-6c9b8bd3]{\n        width: 30px;\n        line-height: 50px;\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        color: white;\n}\n.bg[data-v-6c9b8bd3]{\n    \tbackground-color: white;\n    \theight:100%;\n}\n.tit[data-v-6c9b8bd3]{\n    \tpadding-left: 5%;\n\t    width: 100%;\n\t    height: 60px;\n\t    color: #333;\n\t    font-size: 20px;\n\t    padding-top: 12px;\n}\n.title[data-v-6c9b8bd3]{\n    \tpadding: 0 5%;\n\t    line-height: 28px;\n\t    /* letter-spacing: 0px; */\n\t    color: #333;\n\t    font-size: 15px;\n}\n.im[data-v-6c9b8bd3]{\n    \twidth: 90%;\n\t    margin: 0 auto;\n\t    margin-top: 10px;\n}\n.im > img[data-v-6c9b8bd3]{\n    \twidth: 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&", function() {
		var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=template&id=6c9b8bd3&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg" }, [
    _c("div", [
      _c(
        "div",
        { staticClass: "head" },
        [
          _c("div", { staticClass: "head-title" }, [_vm._v("文章详情")]),
          _vm._v(" "),
          _c("router-link", {
            staticClass: "mintui mintui-back",
            attrs: { to: { name: "faxian" } }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tit" }, [_vm._v(_vm._s(_vm.data.title))]),
      _vm._v(" "),
      _c("div", { staticClass: "title" }, [_vm._v(_vm._s(_vm.data.content))]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            width: "100%",
            height: "30px",
            "line-height": "30px",
            "font-size": "13px"
          }
        },
        [
          _c(
            "div",
            { staticStyle: { float: "right", "padding-right": "5%" } },
            [_vm._v("阅读量:" + _vm._s(_vm.data.rnum))]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/templates/faxian/xiangqing.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/templates/faxian/xiangqing.vue?vue&type=template&id=6c9b8bd3&scoped=true&");
/* harmony import */ var _xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/templates/faxian/xiangqing.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c9b8bd3",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("vue"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('6c9b8bd3', component.options)
    } else {
      api.reload('6c9b8bd3', component.options)
    }
    module.hot.accept("./src/templates/faxian/xiangqing.vue?vue&type=template&id=6c9b8bd3&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/templates/faxian/xiangqing.vue?vue&type=template&id=6c9b8bd3&scoped=true&");
(function () {
      api.rerender('6c9b8bd3', {
        render: _xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/templates/faxian/xiangqing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/templates/faxian/xiangqing.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=style&index=0&id=6c9b8bd3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_style_index_0_id_6c9b8bd3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/faxian/xiangqing.vue?vue&type=template&id=6c9b8bd3&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/xiangqing.vue?vue&type=template&id=6c9b8bd3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_xiangqing_vue_vue_type_template_id_6c9b8bd3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);