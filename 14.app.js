(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=script&lang=js&":
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
//

exports.default = {
	data: function data() {
		return {
			jkpj: null,
			jkje: null,
			fkrq: null,
			hkrq: null,
			lixi: null,
			yq: null,
			shf: null,
			guanli: null
		};
	},
	created: function created() {
		this.Initialize();
	},

	methods: {
		Initialize: function Initialize() {

			var vue = this;

			if (this.$route.query.id == undefined) {
				this.$router.push({ name: 'home' });
			}

			var id = this.$route.query.id;

			this.$ajax.get('http://gongsixiangmu.1kesong.com/api/v1/bills?id=' + id).then(function (res) {

				console.log(res);

				var a = function a(rq) {

					var date = new Date(rq * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
					var Y = date.getFullYear();
					var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
					var D = date.getDate() + ' ';

					return Y + '-' + M + '-' + D;
				};

				var data = res.data;

				vue.jkpj = data.ordernum;
				vue.jkje = data.money;
				vue.fkrq = a(data.addtime);
				vue.hkrq = a(data.actualtime);
				vue.lixi = data.interest;
				vue.yq = data.yq_money;
				vue.shf = data.shenhefei;
				vue.guanli = data.guanlifei;
			}).catch(function (erry) {});
		}
	}
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.head[data-v-5161f46b]{\n\t\twidth: 100%;\n\t    height: 50px;\n\t    line-height: 50px;\n\t    text-align: center;\n\t    position: relative;\n\t    background: linear-gradient(rgb(0,162,255),rgb(0,121,254));\n\t    color: white;\n}\n.head a[data-v-5161f46b]{\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tcolor:white;\n\t\twidth:40px;\n}\n.nav[data-v-5161f46b]{\n\t\tbackground-color: white;\n\t\tmargin-bottom: 15px;\n}\n.nav > .tit[data-v-5161f46b]{\n\t\twidth: 100%;\n\t    height: 50px;\n\t    line-height: 50px;\n\t    background-color: rgb(255,247,240);\n\t    padding: 0 10px;\n}\n.nav > .list > div[data-v-5161f46b]{\n\t\twidth: 100%;\n\t    height: 40px;\n\t    line-height: 40px;\n\t    padding: 0 10px;\n}\n.nav > .list > div > span[data-v-5161f46b]:last-child{\n\t\tfloat: right;\n\t\tcolor: rgb(0,121,254);\n}\n.nav > .list > div > span:last-child i[data-v-5161f46b]{\n\t\tcolor: black;\n}\n.xiey[data-v-5161f46b]{\n\t\tfont-size: 14px;\n   \t\tpadding-left: 10px;\n}\n.xiey i[data-v-5161f46b]{\n\t\tfont-size: 18px;\n   \t\tvertical-align: bottom;\n}\n.aaa[data-v-5161f46b]{\n\t\tcolor: rgb(0,121,254);\n}\n.xiey span[data-v-5161f46b]{\n\t\tcolor: rgb(0,121,254);\n}\n.tj[data-v-5161f46b]{\n\t\twidth: 90%;\n\t    height: 50px;\n\t    background: linear-gradient(rgb(0,162,255),rgb(0,121,254));\n\t    border-radius: 5px;\n\t    margin: 20px auto;\n\t    text-align: center;\n\t    line-height: 50px;\n\t    color: white;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&", function() {
		var newContent = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=template&id=5161f46b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "nav" }, [
      _c("div", { staticClass: "tit" }, [_vm._v("还款详情")]),
      _vm._v(" "),
      _c("div", { staticClass: "list" }, [
        _c("div", [
          _c("span", [_vm._v("借款编号")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.jkpj))])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("借款金额")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.jkje) + ".00元")])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("放款日期")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.fkrq))])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("还款日期")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.hkrq))])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("逾期费用")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.yq) + "元")])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("利息费用")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.lixi) + "元")])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("审核费用")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.shf) + "元")])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("管理费用")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.guanli) + "元")])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", [_vm._v("还款金额")]),
          _vm._v(" "),
          _c("span", [
            _vm._v(
              _vm._s(_vm.jkje + _vm.lixi + _vm.yq + _vm.shf + _vm.guanli) +
                ".00元("
            ),
            _c("i", [_vm._v("含以上所有")]),
            _vm._v(")")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "head" }, [
      _c(
        "a",
        {
          staticClass: "iconfont",
          attrs: { href: "javascript:history.back(-1);" }
        },
        [_vm._v("")]
      ),
      _vm._v("\n\t\t还款详情\n\t")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/templates/public/hkqr.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/templates/public/hkqr.vue?vue&type=template&id=5161f46b&scoped=true&");
/* harmony import */ var _hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/templates/public/hkqr.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5161f46b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("vue"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('5161f46b', component.options)
    } else {
      api.reload('5161f46b', component.options)
    }
    module.hot.accept("./src/templates/public/hkqr.vue?vue&type=template&id=5161f46b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/templates/public/hkqr.vue?vue&type=template&id=5161f46b&scoped=true&");
(function () {
      api.rerender('5161f46b', {
        render: _hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/templates/public/hkqr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/templates/public/hkqr.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=style&index=0&id=5161f46b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_style_index_0_id_5161f46b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/templates/public/hkqr.vue?vue&type=template&id=5161f46b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/public/hkqr.vue?vue&type=template&id=5161f46b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hkqr_vue_vue_type_template_id_5161f46b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);