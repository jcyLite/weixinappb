webpackJsonp([37],{

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myWorkRigestDetail_vue_vue_type_template_id_410864ca___ = __webpack_require__(1932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myWorkRigestDetail_vue_vue_type_script_lang_js___ = __webpack_require__(1784);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__myWorkRigestDetail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__myWorkRigestDetail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__myWorkRigestDetail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__myWorkRigestDetail_vue_vue_type_template_id_410864ca___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__myWorkRigestDetail_vue_vue_type_template_id_410864ca___["b" /* staticRenderFns */],
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
      api.createRecord('410864ca', component.options)
    } else {
      api.reload('410864ca', component.options)
    }
    module.hot.accept("./myWorkRigestDetail.vue?vue&type=template&id=410864ca&", function () {
      api.rerender('410864ca', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/myWorkRigestDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_script_lang_js___ = __webpack_require__(1785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1785:
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

exports.default = {
        created: function created() {
                var _this = this;

                this.$http.get('getApprove').then(function (d) {
                        d.list.forEach(function (item) {
                                _this.listb[2].select.push(item.name);
                                _this.ids.push(item.id);
                        });
                });
        },

        methods: {
                apply: function apply() {
                        var _this2 = this;

                        if (!this.ids[this.listb[2].code[0]] || !this.listb[0].hasSelect.length || !this.listb[1].model) {
                                return this.$createPotDialog({
                                        type: 'alert',
                                        title: '提示',
                                        content: '你提交的数据有空',
                                        icon: 'potic-alert'
                                }).show();
                        }
                        this.$http.post('repCard', {
                                approveId: this.ids[this.listb[2].code[0]],
                                repDate: this.$route.query.data.checktime.substring(0, 10),
                                repTime: this.listb[0].hasSelect.join(','),
                                reason: this.listb[1].model
                        }).then(function (d) {
                                if (d.code == 0) {
                                        _this2.$router.go(-1);
                                }
                        });
                }
        },
        data: function data() {
                return {
                        ids: [],
                        listb: [{
                                type: 'selects',
                                code: [0],
                                name: '补卡时段',
                                model: '',
                                hasSelect: [],
                                selects: this.$route.query.typed == '1' ? ['早上', '中午', '晚上'] : this.$route.query.typed == '2' ? ['首次打卡时间', '结束打卡时间'] : []
                        }, {
                                type: 'input',
                                name: '补卡说明',
                                model: ''
                        }, {
                                type: 'select',
                                code: [0],
                                name: '选择审批人',
                                model: '',
                                select: []
                        }],
                        list: [{
                                key: '姓名',
                                value: this.$route.query.data.ename
                        }, {
                                key: '员工编号',
                                value: this.$route.query.data.pin
                        }, {
                                key: '部门编号',
                                value: this.$route.query.data.deptnumber
                        }, {
                                key: '部门名称',
                                value: this.$route.query.data.deptname
                        }, {
                                key: '打卡时间',
                                value: this.$route.query.data.checktime.substring(0, 10)
                        }, {
                                key: '考勤状态',
                                value: this.$route.query.data.status.split("|")[3]
                        }]
                };
        }
};

/***/ }),

/***/ 1932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_template_id_410864ca___ = __webpack_require__(1933);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_template_id_410864ca___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myWorkRigestDetail_vue_vue_type_template_id_410864ca___["b"]; });


/***/ }),

/***/ 1933:
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
    { staticClass: "myWorkRigestDetail" },
    [
      _c("tk-header", [_vm._v("补卡申请")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("tk-detail", { attrs: { list: _vm.list } }),
          _vm._v(" "),
          _vm.$route.query.type
            ? _c("tk-form", { attrs: { list: _vm.listb } })
            : _vm._e(),
          _vm._v(" "),
          _vm.$route.query.type
            ? _c("tk-button", { on: { click: _vm.apply } }, [
                _vm._v("申请补卡")
              ])
            : _vm._e()
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
//# sourceMappingURL=37.e3a8d5.js.map