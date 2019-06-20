webpackJsonp([42],{

/***/ 1634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hotQlsx_vue_vue_type_template_id_84a4e3f4___ = __webpack_require__(1819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotQlsx_vue_vue_type_script_lang_js___ = __webpack_require__(1695);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__hotQlsx_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__hotQlsx_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__hotQlsx_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__hotQlsx_vue_vue_type_template_id_84a4e3f4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__hotQlsx_vue_vue_type_template_id_84a4e3f4___["b" /* staticRenderFns */],
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
      api.createRecord('84a4e3f4', component.options)
    } else {
      api.reload('84a4e3f4', component.options)
    }
    module.hot.accept("./hotQlsx.vue?vue&type=template&id=84a4e3f4&", function () {
      api.rerender('84a4e3f4', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/hotQlsx.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_script_lang_js___ = __webpack_require__(1696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1696:
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

exports.default = {
        data: function data() {
                return {
                        rows: []
                };
        },
        created: function created() {
                var _this = this;

                this.$http.post('hotQlsx').then(function (d) {
                        _this.rows = d.rows;
                });
        },

        methods: {
                openURL: function openURL(url) {
                        location.href = url;
                }
        }
};

/***/ }),

/***/ 1819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_template_id_84a4e3f4___ = __webpack_require__(1820);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_template_id_84a4e3f4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_hotQlsx_vue_vue_type_template_id_84a4e3f4___["b"]; });


/***/ }),

/***/ 1820:
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
    { staticClass: "hotQlsx" },
    [
      _c("tk-header", [_vm._v("热点服务")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "tk-scroll",
            _vm._l(_vm.rows, function(item, index) {
              return _c(
                "tk-cell-one",
                {
                  key: index,
                  on: {
                    click: function($event) {
                      return _vm.openURL(item.url)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                                " +
                      _vm._s(item.name) +
                      "\n                        "
                  )
                ]
              )
            }),
            1
          )
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
//# sourceMappingURL=42.e3a8d5.js.map