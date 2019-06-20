webpackJsonp([28],{

/***/ 1661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repCard_vue_vue_type_template_id_88ae98b4___ = __webpack_require__(1918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repCard_vue_vue_type_script_lang_js___ = __webpack_require__(1771);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__repCard_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__repCard_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__repCard_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__repCard_vue_vue_type_template_id_88ae98b4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__repCard_vue_vue_type_template_id_88ae98b4___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("H:\\景德镇政务服务大厅综合管理系统\\05.编码\\weixinapp\\node_modules\\_vue-hot-reload-api@2.3.3@vue-hot-reload-api\\dist\\index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('88ae98b4', component.options)
    } else {
      api.reload('88ae98b4', component.options)
    }
    module.hot.accept("./repCard.vue?vue&type=template&id=88ae98b4&", function () {
      api.rerender('88ae98b4', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/repCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_script_lang_js___ = __webpack_require__(1772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1772:
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

exports.default = {
        data: function data() {
                return {
                        list: [{
                                type: 'input',
                                model: '',
                                name: '申请人姓名'
                        }, {
                                type: 'input',
                                model: '',
                                name: '申请人编号'
                        }, {
                                type: 'input',
                                model: '',
                                name: '审批人编号'
                        }, {
                                type: 'input',
                                model: '',
                                name: '审批人姓名'
                        }, {
                                type: 'selectData',
                                model: '',
                                name: '补卡日期'
                        }, {
                                type: 'select',
                                model: '',
                                code: [0],
                                select: ['早上', '中午', '晚上'],
                                name: '结束时间'
                        }, {
                                type: 'input',
                                model: '',
                                name: '补卡说明'
                        }]
                };
        },

        methods: {
                submit: function submit() {
                        console.log(this.list[5].code);
                        this.$http.post('repCard', {
                                pin: this.list[1].model,
                                name: this.list[0].model,
                                approvePin: this.list[2].model,
                                approveName: this.list[3].model,
                                repDate: this.list[4].model,
                                repTime: this.list[5].code[0],
                                reason: this.list[6].model
                        }).then(function (d) {});
                }
        }
};

/***/ }),

/***/ 1918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_template_id_88ae98b4___ = __webpack_require__(1919);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_template_id_88ae98b4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_repCard_vue_vue_type_template_id_88ae98b4___["b"]; });


/***/ }),

/***/ 1919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "repCard" },
    [
      _c("tk-header", [_vm._v("补卡申请")]),
      _vm._v(" "),
      _c(
        "tk-scroll",
        [
          _c("tk-form", { attrs: { list: _vm.list } }),
          _vm._v(" "),
          _c("tk-button", { on: { click: _vm.submit } }, [_vm._v("提交")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

});
//# sourceMappingURL=28.e3a8d5.js.map