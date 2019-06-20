webpackJsonp([39],{

/***/ 1664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myApply_vue_vue_type_template_id_035ae0fb___ = __webpack_require__(1924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myApply_vue_vue_type_script_lang_js___ = __webpack_require__(1777);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__myApply_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__myApply_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__myApply_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__myApply_vue_vue_type_template_id_035ae0fb___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__myApply_vue_vue_type_template_id_035ae0fb___["b" /* staticRenderFns */],
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
      api.createRecord('035ae0fb', component.options)
    } else {
      api.reload('035ae0fb', component.options)
    }
    module.hot.accept("./myApply.vue?vue&type=template&id=035ae0fb&", function () {
      api.rerender('035ae0fb', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/myApply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_script_lang_js___ = __webpack_require__(1778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1778:
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

exports.default = {
        data: function data() {
                return {
                        tablist: [{
                                label: '请假申请',
                                list: []
                        }, {
                                label: '补卡申请',
                                list: []
                        }],
                        selectedLabel: 0,
                        rows: [],
                        rowsb: [],
                        list: [{
                                type: 'input',
                                model: '',
                                name: '申请人姓名'
                        }, {
                                type: 'input',
                                model: '',
                                name: '申请人编号'
                        }, {
                                type: 'selectData',
                                model: '',
                                name: '开始日期'
                        }, {
                                type: 'selectData',
                                model: '',
                                name: '结束日期'
                        }]
                };
        },

        methods: {
                makeData: function makeData(item) {
                        return ['早上', '中午', '晚上'].filter(function (itema, index) {
                                return item.repTime.split(',').indexOf(index.toString()) != -1;
                        });
                },
                submit: function submit() {
                        if (this.list[2].model > this.list[3].model) {
                                return this.$createPotDialog({
                                        type: 'alert',
                                        title: '提示',
                                        content: '结束时间不能早于开始时间',
                                        icon: 'potic-alert'
                                }).show();
                        }
                        this.$http.post('leaveApprove', {
                                pin: this.list[1].model,
                                name: this.list[0].model,
                                startDate: this.list[2].model,
                                endDate: this.list[3].model
                        }).then();
                }
        },
        created: function created() {
                var _this = this;

                this.$http.post('myApply').then(function (d) {
                        d.list.forEach(function (item) {
                                if (item.type == '0') {
                                        _this.rows.push(item);
                                } else {
                                        _this.rowsb.push(item);
                                }
                        });
                });
        }
};

/***/ }),

/***/ 1924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_template_id_035ae0fb___ = __webpack_require__(1925);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_template_id_035ae0fb___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_myApply_vue_vue_type_template_id_035ae0fb___["b"]; });


/***/ }),

/***/ 1925:
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
    { staticClass: "leaveApprove" },
    [
      _c("tk-header", [_vm._v("请假结果查询")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "tk-tab-container",
            {
              attrs: { active: _vm.selectedLabel },
              model: {
                value: _vm.tablist,
                callback: function($$v) {
                  _vm.tablist = $$v
                },
                expression: "tablist"
              }
            },
            [
              _c(
                "div",
                { attrs: { slot: "0" }, slot: "0" },
                [
                  _c(
                    "tk-scroll",
                    _vm._l(_vm.rows, function(item) {
                      return _c("tk-cell", {
                        attrs: {
                          title: [
                            "姓名",
                            "员工编号",
                            "原因",
                            "部门名称",
                            "开始时间",
                            "结束时间",
                            "请假类型",
                            "审批人",
                            "审批状态"
                          ],
                          data: [
                            item.name,
                            item.pin,
                            item.reason,
                            item.dept,
                            item.startTime || "无",
                            item.endTime || "无",
                            item.leaveType,
                            item.approveName,
                            [
                              "<font color='#e8864c'>待审核</font>",
                              "<font color='green'>审核通过</font>",
                              "<font color='red'>驳回</font>"
                            ][item.status]
                          ]
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "1" }, slot: "1" },
                [
                  _c(
                    "tk-scroll",
                    _vm._l(_vm.rowsb, function(item) {
                      return _c("tk-cell", {
                        attrs: {
                          title: [
                            "姓名",
                            "员工编号",
                            "原因",
                            "部门名称",
                            "补卡日期",
                            "审批人",
                            "补卡时段",
                            "审批状态"
                          ],
                          data: [
                            item.name,
                            item.pin,
                            item.reason,
                            item.dept,
                            item.repDate || "无",
                            item.approveName,
                            _vm.makeData(item),
                            [
                              "<font color='#e8864c'>待审核</font>",
                              "<font color='green'>审核通过</font>",
                              "<font color='red'>驳回</font>"
                            ][item.status]
                          ]
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            ]
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
//# sourceMappingURL=39.e3a8d5.js.map