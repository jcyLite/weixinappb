webpackJsonp([26],{

/***/ 1631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reserveInfo_vue_vue_type_template_id_4ce34a3a___ = __webpack_require__(1811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reserveInfo_vue_vue_type_script_lang_js___ = __webpack_require__(1688);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__reserveInfo_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__reserveInfo_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(1);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__reserveInfo_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__reserveInfo_vue_vue_type_template_id_4ce34a3a___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__reserveInfo_vue_vue_type_template_id_4ce34a3a___["b" /* staticRenderFns */],
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
      api.createRecord('4ce34a3a', component.options)
    } else {
      api.reload('4ce34a3a', component.options)
    }
    module.hot.accept("./reserveInfo.vue?vue&type=template&id=4ce34a3a&", function () {
      api.rerender('4ce34a3a', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/page/reserveInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_script_lang_js___ = __webpack_require__(1689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1689:
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
                var that = this;
                return {
                        code: [],
                        timeCode: [],
                        queueIDs: [],
                        timeCodeAct: 0,
                        codeAct: 0,
                        queueIDsAct: 0,
                        listb: [{
                                key: '部门：',
                                value: this.$route.query.data.department
                        }, {
                                key: '可预约日期',
                                value: this.$route.query.data.orderDate.substring(0, 10)
                        }, {
                                key: '可预约时间段',
                                value: this.$route.query.data.period
                        }, {
                                key: '可预约区域：',
                                value: this.$route.query.data.posDesc
                        }, {
                                key: '剩余预约数量：',
                                value: this.$route.query.data.unorderedNum
                        }, {
                                key: '已预约数量：',
                                value: this.$route.query.data.orderedNum
                        }, {
                                key: '业务名称：',
                                value: this.$route.query.data.queueName
                        }],
                        list: [{
                                name: '姓名',
                                type: 'input',
                                format: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
                                model: ''
                        }, {
                                name: '手机号',
                                type: 'input',
                                format: /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/,
                                model: ''
                        }, {
                                name: '身份证号',
                                type: 'input',
                                format: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                                model: ''
                        }]
                };
        },

        methods: {
                submit: function submit() {
                        for (var i = 0; i < 3; i++) {
                                if (!this.list[i].format.test(this.list[i].model)) {
                                        this.$createPotToast({
                                                txt: '数据格式出错',
                                                type: 'txt'
                                        }).show();
                                        return;
                                }
                        }
                        this.$http.post('saveReserve', {
                                name: this.list[0].model,
                                phone: this.list[1].model,
                                personID: this.list[2].model,
                                id: this.$route.query.data.id
                        }).then(function (d) {});
                }
        },
        created: function created() {}
};

/***/ }),

/***/ 1811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_template_id_4ce34a3a___ = __webpack_require__(1812);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_template_id_4ce34a3a___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_reserveInfo_vue_vue_type_template_id_4ce34a3a___["b"]; });


/***/ }),

/***/ 1812:
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
    { staticClass: "reserveInfo" },
    [
      _c("tk-header", [_vm._v("预约选项信息")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("tk-detail", { attrs: { list: _vm.listb } }),
          _vm._v(" "),
          _c("tk-form", { attrs: { list: _vm.list } }),
          _vm._v(" "),
          _c(
            "tk-button",
            {
              staticStyle: { "margin-top": "100px" },
              on: { click: _vm.submit }
            },
            [_vm._v("提交")]
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
//# sourceMappingURL=26.e3a8d5.js.map