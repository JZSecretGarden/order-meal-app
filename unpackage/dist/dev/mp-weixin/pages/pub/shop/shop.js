(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/pub/shop/shop"],{

/***/ 153:
/*!**************************************************************************************************!*\
  !*** C:/Users/isXyoo/Desktop/order-meal-app-master/main.js?{"page":"pages%2Fpub%2Fshop%2Fshop"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _shop = _interopRequireDefault(__webpack_require__(/*! ./pages/pub/shop/shop.vue */ 154));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_shop.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 154:
/*!*****************************************************************************!*\
  !*** C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.vue?vue&type=template&id=00b0bfb4&scoped=true& */ 155);
/* harmony import */ var _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.vue?vue&type=script&lang=js& */ 157);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.vue?vue&type=style&index=0&id=00b0bfb4&scoped=true&lang=css& */ 160);
/* harmony import */ var _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00b0bfb4",
  null,
  false,
  _shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/pub/shop/shop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/*!************************************************************************************************************************!*\
  !*** C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue?vue&type=template&id=00b0bfb4&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop.vue?vue&type=template&id=00b0bfb4&scoped=true& */ 156);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_template_id_00b0bfb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 156:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue?vue&type=template&id=00b0bfb4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.list, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var l0 = _vm.__map(item.foods, function(commodity, __i0__) {
      var $orig = _vm.__get_orig(commodity)

      var m0 =
        commodity.specfoods.length == 1 ? _vm.commodityNum(commodity) : null
      var m1 =
        commodity.specfoods.length > 1 ? _vm.commodityNum(commodity) : null
      var m2 = _vm.commodityNum(commodity)
      var m3 = _vm.commodityNum(commodity)
      return {
        $orig: $orig,
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3
      }
    })

    return {
      $orig: $orig,
      l0: l0
    }
  })

  var l2 = _vm.starNum(_vm.serverScore)
  var l3 = _vm.starNum(_vm.foodScore)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
        l2: l2,
        l3: l3
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 157:
/*!******************************************************************************************************!*\
  !*** C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop.vue?vue&type=script&lang=js& */ 158);
/* harmony import */ var _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 158:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































































































































































































var _jzPort = __webpack_require__(/*! apis/jz-port.js */ 159);
var _vue = __webpack_require__(/*! vue */ 4); //
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
var _default = { data: function data() {return { shopId: 1, //商铺id
      tabData: ['商品', '评价'], tabActiveIndex: 1, //选中tab下标
      list: [], leftMenuIndex: 0, //选中左菜单的下标
      cardTop: [], //商品卡片距离顶部的距离
      menuTop: [], //菜单距离顶部的距离
      leftMenuScroll: 0, rightCommodityScroll: 0, morePopShow: false, moreCommodityData: [], //多个商品的数据存放进容器中
      moreActiveIndex: 0, //选中多规格的下标
      carData: [], carPopShow: false, //控制购物车弹窗显示
      evaluateClass: [], //购物车分类容器
      evaluateActive: 0, //选中评价的下标
      evaluateContent: [], //评价容器
      evaluateContentNum: 10, //每次评价内容请求10条
      evaluateScrollToLowerNum: 0, //评价内容滚动底部次数
      evaluateScore: 0, //评价总分
      foodScore: 0, //食物评分
      serverScore: 0, //服务评分
      deliverTime: 0 //运送时间
    };}, computed: { //计算每个商品的选择数量
    commodityNum: function commodityNum() {return function (com) {var num = 0;com.specfoods.forEach(function (el) {return num = num + el.num;});return num;};}, // 购物车计件总数
    carCount: function carCount() {var num = 0;this.carData.forEach(function (el) {return num = num + el.num;});return num;}, // 购物车总价
    totalCarPrice: function totalCarPrice() {var totalPrice = 0;this.carData.forEach(function (el) {return totalPrice += el.price;});return totalPrice;}, //评价星星数量
    starNum: function starNum() {return function (num) {return Math.floor(num);};} }, methods: { selectTab: function selectTab(index) {//选中tab栏下标
      this.tabActiveIndex = index;}, changeCurrent: function changeCurrent(e) {//滑动页面改变选中
      this.tabActiveIndex = e.detail.current;}, clickLeftMenu: function clickLeftMenu(index) {//点击左侧菜单元素
      this.leftMenuIndex = index;this.leftMenuScroll = this.menuTop[index];this.rightCommodityScroll = this.cardTop[index];}, getCommodityPosition: function getCommodityPosition() {var _this = this; //获取商品卡片位置信息与菜单位置信息
      uni.createSelectorQuery().in(this).selectAll('.commodity-card').boundingClientRect(function (data) {data.forEach(function (el) {_this.cardTop.push(el.top - 143);});}).selectAll('.left-menu-text').boundingClientRect(function (data) {data.forEach(function (el) {_this.menuTop.push(el.top - 143);});}).exec();}, scrollRight: function scrollRight(el) {//滚动右侧商品列表
      for (var i = 0; i < this.cardTop.length; i++) {if (el.detail.scrollTop >= this.cardTop[i] && el.detail.scrollTop < this.cardTop[i + 1]) {this.leftMenuScroll = this.menuTop[i];this.leftMenuIndex = i;}}}, addOne: function addOne(data) {//增加单个商品数量
      var selectCom = data.specfoods[0];selectCom.num++;if (!this.carData.includes(selectCom)) this.carData.push(selectCom);}, minusOne: function minusOne(data) {//减少单个商品数量
      var selectCom = data.specfoods[0];selectCom.num--;if (selectCom.num == 0) this.carData.splice(this.carData.indexOf(selectCom), 1);}, addMore: function addMore(data) {//将多个商品的数据存放进容器中
      this.moreCommodityData = data.specfoods;this.morePopShow = true;console.log(this.moreCommodityData);}, minusMore: function minusMore() {//减少多规格商品
      uni.showToast({ title: '请在购物车界面删除多规格商品' });}, addMoreToCar: function addMoreToCar() {//将选中的多规格商品加入购物车
      var selectCom = this.moreCommodityData[this.moreActiveIndex];selectCom.num++;if (!this.carData.includes(selectCom)) this.carData.push(selectCom);this.closeMorePop(); //关闭多规格弹窗
    }, closeMorePop: function closeMorePop() {//关闭多规格弹窗
      this.morePopShow = false;this.moreCommodityData = [];}, selectMore: function selectMore(index) {//选中多规格商品
      this.moreActiveIndex = index;}, openCarPop: function openCarPop() {//打开购物车弹窗
      this.carPopShow = true;console.log(this.carData);}, closeCarPop: function closeCarPop() {//关闭购物车弹窗
      this.carPopShow = false;}, minusCarData: function minusCarData(data, index) {//购物车内减少商品
      console.log(data, index);data.num--;if (data.num <= 0) this.carData.splice(index, 1);}, addCarData: function addCarData(data, index) {//购物车内增加商品
      data.num++;}, goToBuy: function goToBuy() {//去结算
      this.carData.length == 0 ? uni.showToast({ title: '请选择商品' }) : console.log(this.carData, '去结算');}, clearCarData: function clearCarData() {//清空购物车
      this.carData.forEach(function (el) {return el.num = 0;});this.carData = [];}, reqEvaluateContent: function reqEvaluateContent() {var _this2 = this; //请求评价信息
      var data = { restaurant_id: this.shopId, tag_name: this.evaluateClass[this.evaluateActive].name, offset: this.evaluateScrollToLowerNum * this.evaluateContentNum, limit: this.evaluateContentNum };(0, _jzPort.$comment_content)(this.shopId, data).then(function (el) {_this2.evaluateContent = _this2.evaluateContent.concat(el.data);console.log(_this2.evaluateContent);});}, selectEvaluate: function selectEvaluate(index) {//选择评价分类
      this.evaluateActive = index;this.evaluateContent = []; //初始化容器
      this.evaluateScrollToLowerNum = 0; //初始化滚动次数
      this.reqEvaluateContent(); //请求评价信息
    }, evaluateScrollToLower: function evaluateScrollToLower() {//评价滚动到底部
      this.evaluateScrollToLowerNum++;this.reqEvaluateContent();}, jumpShopDetail: function jumpShopDetail() {//跳转到详情页面
      uni.navigateTo({ url: '/pages/pub/shop-detail/shop-detail?id=' + this.shopId });} }, onLoad: function onLoad() {var _this3 = this; //请求商品数据
    (0, _jzPort.$commodity_list)({ restaurant_id: this.shopId }).then(function (el) {el.data.forEach(function (item) {item.foods.forEach(function (food) {return food.specfoods.forEach(function (specfood) {return specfood.num = 0;});});});_this3.list = el.data;_this3.$nextTick(function () {this.getCommodityPosition(); //获取页面节点信息
      });}); //请求评论分类
    (0, _jzPort.$comment_class)(this.shopId).then(function (el) {_this3.evaluateClass = el.data;console.log(_this3.evaluateClass, _this3.evaluateClass[_this3.evaluateActive].name);_this3.reqEvaluateContent(); //请求评价信息
    }); //请求评价分数
    (0, _jzPort.$comment_scores)(this.shopId).then(function (el) {console.log(el);_this3.evaluateScore = el.data.overall_score.toFixed(1) - 0;_this3.deliverTime = el.data.deliver_time;_this3.serverScore = el.data.service_score.toFixed(1) - 0;_this3.foodScore = el.data.food_score.toFixed(1) - 0;});}, onReady: function onReady() {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 160:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue?vue&type=style&index=0&id=00b0bfb4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shop.vue?vue&type=style&index=0&id=00b0bfb4&scoped=true&lang=css& */ 161);
/* harmony import */ var _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_APP_source_HBuilder_X_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shop_vue_vue_type_style_index_0_id_00b0bfb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 161:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/isXyoo/Desktop/order-meal-app-master/pages/pub/shop/shop.vue?vue&type=style&index=0&id=00b0bfb4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[153,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/pub/shop/shop.js.map