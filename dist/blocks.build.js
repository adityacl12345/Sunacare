/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/**\n * BLOCK: newcontent\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n// PART 1: Import dependencies\n\n\n\n\n// PART 2: Setup references to external functions\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n// PART 3: Register the block!\n\nregisterBlockType('cgb/block-newcontent', {\n\n  // Part 3.1: Block settings\n  title: __('Custom - CGB Block'),\n  icon: 'email-alt',\n  category: 'common',\n  keywords: [__('Custom &mdash; CGB Block'), __('CGB Example'), __('create-guten-block')],\n  attributes: {\n    title: {\n      type: \"array\",\n      source: \"children\",\n      selector: \".callout-title\"\n    },\n    button: {\n      type: \"array\",\n      source: \"children\",\n      selector: \".callout-button\"\n    }\n  },\n\n  // PART 3.2: Markup in editor\n  edit: function edit(props) {\n    var _props$attributes = props.attributes,\n        title = _props$attributes.title,\n        button = _props$attributes.button,\n        setAttributes = props.setAttributes;\n\n\n    var onChangeTitle = function onChangeTitle(value) {\n      setAttributes({ title: value });\n    };\n    var onChangeButton = function onChangeButton(value) {\n      setAttributes({ button: value });\n    };\n\n    return wp.element.createElement(\n      'div',\n      { className: props.className },\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"RichText\"], {\n        tagName: 'p',\n        className: 'callout-title',\n        placeholder: __(\"Sign up text\"),\n        value: title,\n        onChange: onChangeTitle\n      }),\n      wp.element.createElement(\n        'a',\n        { className: 'CTABtn' },\n        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"RichText\"], {\n          tagName: 'span',\n          className: 'callout-button',\n          placeholder: __(\"Button text\"),\n          value: button,\n          onChange: onChangeButton\n        })\n      )\n    );\n  },\n\n  // PART 3.3: Markup saved to database\n  save: function save(props) {\n    var _props$attributes2 = props.attributes,\n        title = _props$attributes2.title,\n        button = _props$attributes2.button;\n\n    return wp.element.createElement(\n      'div',\n      { className: props.className },\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"RichText\"].Content, {\n        tagName: 'p',\n        className: 'callout-title',\n        value: title\n      }),\n      wp.element.createElement(\n        'a',\n        { className: 'CTABtn' },\n        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"RichText\"].Content, {\n          tagName: 'span',\n          className: 'callout-button',\n          value: button\n        })\n      )\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IG5ld2NvbnRlbnRcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gUEFSVCAxOiBJbXBvcnQgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwiQHdvcmRwcmVzcy9ibG9jay1lZGl0b3JcIjtcblxuLy8gUEFSVCAyOiBTZXR1cCByZWZlcmVuY2VzIHRvIGV4dGVybmFsIGZ1bmN0aW9uc1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuLy8gUEFSVCAzOiBSZWdpc3RlciB0aGUgYmxvY2shXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stbmV3Y29udGVudCcsIHtcblxuICAvLyBQYXJ0IDMuMTogQmxvY2sgc2V0dGluZ3NcbiAgdGl0bGU6IF9fKCdDdXN0b20gLSBDR0IgQmxvY2snKSxcbiAgaWNvbjogJ2VtYWlsLWFsdCcsXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAga2V5d29yZHM6IFtfXygnQ3VzdG9tICZtZGFzaDsgQ0dCIEJsb2NrJyksIF9fKCdDR0IgRXhhbXBsZScpLCBfXygnY3JlYXRlLWd1dGVuLWJsb2NrJyldLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgIHNvdXJjZTogXCJjaGlsZHJlblwiLFxuICAgICAgc2VsZWN0b3I6IFwiLmNhbGxvdXQtdGl0bGVcIlxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICBzb3VyY2U6IFwiY2hpbGRyZW5cIixcbiAgICAgIHNlbGVjdG9yOiBcIi5jYWxsb3V0LWJ1dHRvblwiXG4gICAgfVxuICB9LFxuXG4gIC8vIFBBUlQgMy4yOiBNYXJrdXAgaW4gZWRpdG9yXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICB0aXRsZSA9IF9wcm9wcyRhdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgICBidXR0b24gPSBfcHJvcHMkYXR0cmlidXRlcy5idXR0b24sXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICB2YXIgb25DaGFuZ2VUaXRsZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVGl0bGUodmFsdWUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogdmFsdWUgfSk7XG4gICAgfTtcbiAgICB2YXIgb25DaGFuZ2VCdXR0b24gPSBmdW5jdGlvbiBvbkNoYW5nZUJ1dHRvbih2YWx1ZSkge1xuICAgICAgc2V0QXR0cmlidXRlcyh7IGJ1dHRvbjogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhbGxvdXQtdGl0bGUnLFxuICAgICAgICBwbGFjZWhvbGRlcjogX18oXCJTaWduIHVwIHRleHRcIiksXG4gICAgICAgIHZhbHVlOiB0aXRsZSxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlVGl0bGVcbiAgICAgIH0pLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnQ1RBQnRuJyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICB0YWdOYW1lOiAnc3BhbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnY2FsbG91dC1idXR0b24nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBfXyhcIkJ1dHRvbiB0ZXh0XCIpLFxuICAgICAgICAgIHZhbHVlOiBidXR0b24sXG4gICAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlQnV0dG9uXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICAvLyBQQVJUIDMuMzogTWFya3VwIHNhdmVkIHRvIGRhdGFiYXNlXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgdGl0bGUgPSBfcHJvcHMkYXR0cmlidXRlczIudGl0bGUsXG4gICAgICAgIGJ1dHRvbiA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5idXR0b247XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ2NhbGxvdXQtdGl0bGUnLFxuICAgICAgICB2YWx1ZTogdGl0bGVcbiAgICAgIH0pLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnQ1RBQnRuJyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuICAgICAgICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdjYWxsb3V0LWJ1dHRvbicsXG4gICAgICAgICAgdmFsdWU6IGJ1dHRvblxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: RichText */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ })
/******/ ]);