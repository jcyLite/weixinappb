webpackJsonp([40],{

/***/ 1663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__leave_vue_vue_type_template_id_8ab86f60___ = __webpack_require__(1922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leave_vue_vue_type_script_lang_js___ = __webpack_require__(1775);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__leave_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__leave_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__leave_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__leave_vue_vue_type_template_id_8ab86f60___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__leave_vue_vue_type_template_id_8ab86f60___["b" /* staticRenderFns */],
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
      api.createRecord('8ab86f60', component.options)
    } else {
      api.reload('8ab86f60', component.options)
    }
    module.hot.accept("./leave.vue?vue&type=template&id=8ab86f60&", function () {
      api.rerender('8ab86f60', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/leave.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_script_lang_js___ = __webpack_require__(1776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1776:
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
                        ids: [],
                        list: [{
                                type: 'selectTime',
                                model: '',
                                name: '请假开始日期<font color="#e8864c">*</font>'
                        }, {
                                type: 'selectTime',
                                model: '',
                                name: '请假结束日期<font color="#e8864c">*</font>'
                        }, {
                                type: 'select',
                                model: '',
                                code: [],
                                name: '请假类型<font color="#e8864c">*</font>',
                                select: ['公假', '私假', '病假', '外出']
                        }, {
                                type: 'input',
                                model: '',
                                name: '替岗人员'
                        }, {
                                type: 'input',
                                model: '',
                                name: '请假原因<font color="#e8864c">*</font>'
                        }, {
                                type: 'select',
                                model: '',
                                select: [],
                                code: [],
                                name: '审批人<font color="#e8864c">*</font>'
                        }]
                };
        },

        methods: {
                submit: function submit() {
                        var _this = this;

                        if (!this.list[0].model || !this.list[1].model || !this.list[2].code.length || !this.ids[this.list[5].code[0]]) {
                                return this.$createPotDialog({
                                        type: 'alert',
                                        title: '提示',
                                        content: '你提交的数据有空',
                                        icon: 'potic-alert'
                                }).show();
                        }
                        if (this.list[0].model > this.list[1].model) {
                                return this.$createPotDialog({
                                        type: 'alert',
                                        title: '提示',
                                        content: '结束时间不能早于开始时间',
                                        icon: 'potic-alert'
                                }).show();
                        }
                        this.$http.post('leave', {
                                startDate: this.list[0].model,
                                endDate: this.list[1].model,
                                type: this.list[2].code[0],
                                replacer: this.list[3].model,
                                reason: this.list[4].model,
                                approveId: this.ids[this.list[5].code[0]]
                        }).then(function (d) {
                                _this.$router.go(-1);
                        });
                }
        },
        created: function created() {
                var _this2 = this;

                var id = localStorage.getItem('uid');
                this.$http.get('getApprove').then(function (d) {
                        d.list.forEach(function (item) {
                                if (item.id != id) {
                                        _this2.list[5].select.push(item.name);
                                        _this2.ids.push(item.id);
                                }
                        });
                });
        }
};

/***/ }),

/***/ 1922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_template_id_8ab86f60___ = __webpack_require__(1923);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_template_id_8ab86f60___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_leave_vue_vue_type_template_id_8ab86f60___["b"]; });


/***/ }),

/***/ 1923:
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
    { staticClass: "leave" },
    [
      _c("tk-header", [_vm._v("请假")]),
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
//# sourceMappingURL=40.e3a8d5.js.map