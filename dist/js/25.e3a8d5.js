webpackJsonp([25],{

/***/ 1650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saveExpressDelivery_vue_vue_type_template_id_57140820___ = __webpack_require__(1883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saveExpressDelivery_vue_vue_type_script_lang_js___ = __webpack_require__(1743);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__saveExpressDelivery_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__saveExpressDelivery_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__saveExpressDelivery_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__saveExpressDelivery_vue_vue_type_template_id_57140820___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__saveExpressDelivery_vue_vue_type_template_id_57140820___["b" /* staticRenderFns */],
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
      api.createRecord('57140820', component.options)
    } else {
      api.reload('57140820', component.options)
    }
    module.hot.accept("./saveExpressDelivery.vue?vue&type=template&id=57140820&", function () {
      api.rerender('57140820', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/saveExpressDelivery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_script_lang_js___ = __webpack_require__(1744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1744:
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
                                name: '地址<font color="#e8864c">*</font>'
                        }, {
                                type: 'input',
                                model: '',
                                name: '描述'
                        }, {
                                type: 'input',
                                input: 'number',
                                model: '',
                                name: '联系电话<font color="#e8864c">*</font>'
                        }, {
                                type: 'input',
                                model: '',
                                name: '寄件人姓名<font color="#e8864c">*</font>'
                        }, {
                                type: 'select',
                                model: '',
                                name: '寄件类型<font color="#e8864c">*</font>',
                                code: [0],
                                select: ['文件', '数码产品', '日用品', '服饰', '食品', '其他']
                        }]
                };
        },

        methods: {
                submit: function submit() {
                        this.$http.post('/saveExpressDelivery', {
                                posDesc: this.list[0].model,
                                description: this.list[1].model,
                                phoneNumber: this.list[2].model,
                                name: this.list[3].model,
                                type: this.list[4].code[0]
                        });
                }
        }
};

/***/ }),

/***/ 1883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_template_id_57140820___ = __webpack_require__(1884);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_template_id_57140820___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_saveExpressDelivery_vue_vue_type_template_id_57140820___["b"]; });


/***/ }),

/***/ 1884:
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
    { staticClass: "saveExpressDelivery" },
    [
      _c("tk-header", [_vm._v("快递邮寄下单")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
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
//# sourceMappingURL=25.e3a8d5.js.map