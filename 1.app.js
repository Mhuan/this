(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=script&lang=js&":
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
                                                biaoti: [],
                                                a: [],
                                                allLoaded: false,
                                                aaa: 0,
                                                kg: false,
                                                wrapperHeight: 0,
                                                listbox: 1000
                                };
                },
                created: function created() {
                                this.csh();
                },
                mounted: function mounted() {
                                this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
                },

                methods: {
                                csh: function csh() {

                                                var vue = this;

                                                //http://gongsixiangmu.1kesong.com/api/v1/Cat/all  获取所有文章分类  get 方式

                                                this.$ajax.get('http://gongsixiangmu.1kesong.com/api/v1/Cat/all').then(function (res) {

                                                                vue.biaoti = res.data;

                                                                setTimeout(function () {
                                                                                vue.listbox = vue.$refs.liBox.children.length * vue.$refs.liBox.children[0].offsetWidth + 36;
                                                                                vue.djbd(0, res.data[0].id);
                                                                }, 1);
                                                }).catch(function (error) {

                                                                console.log(error);
                                                });

                                                //http://gongsixiangmu.1kesong.com/api/v1/catArticle?cid=8 get  参数 分类cid 获取某个分类下所有文章


                                                //http://gongsixiangmu.1kesong.com/api/v1/article?id=23 根据文章id 获取文章详情


                                                //http://gongsixiangmu.1kesong.com/api/v1/reading?id=23 get 方式提交 点击文章 增加阅读数 
                                },
                                djbd: function djbd(ind, cid) {

                                                var vue = this;

                                                for (var i = 0; i < this.$refs.liBox.children.length; i++) {
                                                                this.$refs.liBox.children[i].className = "";
                                                }

                                                this.$refs.liBox.children[ind].className = 'action';

                                                vue.$ajax.get('http://gongsixiangmu.1kesong.com/api/v1/catArticle?cid=' + cid).then(function (res) {

                                                                // if(res.data.data != und)
                                                                if (res.data.data == undefined) {
                                                                                vue.a = [];
                                                                                vue.$toast({
                                                                                                message: res.data.msg,
                                                                                                position: 'middle',
                                                                                                duration: 1000
                                                                                });
                                                                                return;
                                                                }

                                                                vue.a = res.data.data;
                                                }).catch(function (error) {

                                                                console.log(error);
                                                });
                                },
                                loadBottom: function loadBottom() {},
                                tzym: function tzym(id) {

                                                var vue = this;

                                                vue.$ajax.get('http://gongsixiangmu.1kesong.com/api/v1/reading?id=' + id).then(function (res) {

                                                                vue.$router.push({ name: 'xiangqing', params: { id: id } });
                                                }).catch(function (error) {

                                                                console.log(error);
                                                });
                                }
                }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg[data-v-4cc19030]{\n    position: relative;\n}\n.tou[data-v-4cc19030]{\n    width: 100%;\n    height: auto;\n    background: linear-gradient(to right, #3aaffc 0%,#3f89ec 100%);\n    overflow-y: hidden;\n    overflow-x: auto;\n    white-space: nowrap;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999999;\n}\n.tou[data-v-4cc19030]::-webkit-scrollbar{\n    display: none;\n}\n.bg[data-v-4cc19030]{\n    background-color:white;\n}\n.tou .tou-ul[data-v-4cc19030]{\n    overflow: hidden;\n    height: 50px;\n}\n.tou .tou-ul>li[data-v-4cc19030]{\n    width: 60px;\n    float: left;\n    text-align: center;\n    height: auto;\n    line-height: 45px;\n    font-size: 16px;\n}\n.tou .tou-ul>li[data-v-4cc19030]{color: #fff;\n}\n.tou .tou-ul>li.action[data-v-4cc19030]{\n    font-size: 20px;\n}\n.tou .search[data-v-4cc19030]{\n    width: 36px;\n    height: auto;\n    line-height: 45px;\n    font-size: 20px;\n    color: #fff;\n    position: fixed;\n    top: 0;\n    right: 0;\n    text-align: center;\n    background-color: rgba(62,145,239,0.8);\n}\n.box[data-v-4cc19030]{\n    margin-top: 50px;\n    margin-bottom: 50px;\n    overflow: scroll;\n    background-color: #efeff4;\n}\n.lidiv[data-v-4cc19030]{\n    width: 100%;\n    height: 90px;\n    padding: 10px;\n    overflow: hidden;\n    border-bottom: 1px solid #ccc;\n    background-color: white;\n}\n.lidiv > div[data-v-4cc19030]:first-child{\n    width: 70%;\n    float: left;\n    font-size: 14px;\n}\n.lidiv > div:first-child > div[data-v-4cc19030]:first-child{\n    width: 100%;\n    height: 46px;\n    overflow: hidden;\n}\n.lidiv > div:first-child > div[data-v-4cc19030]:last-child{\n    color: #666;\n    font-size: 12px;\n}\n.lidiv > div[data-v-4cc19030]:last-child{\n    width: 30%;\n    float: right;\n    height: 70px;\n    overflow: hidden;\n}\n.lidiv > div:last-child img[data-v-4cc19030]{\n    width: 100%;\n}\n.lidiv > div:first-child > div:last-child > span[data-v-4cc19030]{\n    margin-right: 10px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&", function() {
		var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=template&id=4cc19030&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "bg" },
    [
      _c("div", { staticClass: "tou" }, [
        _c(
          "ul",
          {
            ref: "liBox",
            staticClass: "tou-ul",
            style: { width: _vm.listbox + "px" }
          },
          _vm._l(_vm.biaoti, function(val, ind) {
            return _c(
              "li",
              {
                on: {
                  click: function($event) {
                    _vm.djbd(ind, val.id)
                  }
                }
              },
              [_vm._v(_vm._s(val.name))]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "wrapper",
          staticClass: "box",
          style: { height: _vm.wrapperHeight + "px" }
        },
        [
          _c(
            "mt-loadmore",
            {
              attrs: {
                autoFill: true,
                bottomAllLoaded: _vm.kg,
                "bottom-method": _vm.loadBottom,
                "bottom-all-loaded": _vm.allLoaded
              }
            },
            _vm._l(_vm.a, function(value, ind) {
              return _c(
                "div",
                {
                  staticClass: "lidiv",
                  attrs: { "data-v-4cc19030": "" },
                  on: {
                    click: function($event) {
                      _vm.tzym(value.id)
                    }
                  }
                },
                [
                  _c("div", [
                    _c("div", [_vm._v(_vm._s(value.title))]),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", [_vm._v(_vm._s(value.addtime))]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(value.rnum) + "阅读")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", [_c("img", { attrs: { src: value.thumbnail } })])
                ]
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("footer-vue")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/templates/faxian/faxian.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/templates/faxian/faxian.vue?vue&type=template&id=4cc19030&scoped=true&");
/* harmony import */ var _faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/templates/faxian/faxian.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cc19030",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("vue"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4cc19030', component.options)
    } else {
      api.reload('4cc19030', component.options)
    }
    module.hot.accept("./src/templates/faxian/faxian.vue?vue&type=template&id=4cc19030&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/templates/faxian/faxian.vue?vue&type=template&id=4cc19030&scoped=true&");
(function () {
      api.rerender('4cc19030', {
        render: _faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/templates/faxian/faxian.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/templates/faxian/faxian.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=style&index=0&id=4cc19030&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_style_index_0_id_4cc19030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/faxian/faxian.vue?vue&type=template&id=4cc19030&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/faxian/faxian.vue?vue&type=template&id=4cc19030&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faxian_vue_vue_type_template_id_4cc19030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);