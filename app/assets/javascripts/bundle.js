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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry.jsx":
/*!*******************!*\
  !*** ./entry.jsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/nate/Desktop/jumble/entry.jsx: Unexpected token (8:20)\\n\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39mdocument\\u001b[33m.\\u001b[39maddEventListener(\\u001b[32m\\\"DOMContentLoaded\\\"\\u001b[39m\\u001b[33m,\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m    \\u001b[36mconst\\u001b[39m root \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"root\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 8 | \\u001b[39m    \\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mRoot\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m root)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m})\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:6344:17)\\n    at Parser.unexpected (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:7659:16)\\n    at Parser.parseExprAtom (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8828:20)\\n    at Parser.parseExprSubscripts (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Parser.parseMaybeUnary (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Parser.parseExprOps (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Parser.parseMaybeConditional (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Parser.parseMaybeAssign (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Parser.parseExprListItem (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:9475:18)\\n    at Parser.parseCallExpressionArguments (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8620:22)\\n    at Parser.parseSubscript (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8515:29)\\n    at Parser.parseSubscripts (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8434:19)\\n    at Parser.parseExprSubscripts (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8423:17)\\n    at Parser.parseMaybeUnary (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Parser.parseExprOps (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8280:23)\\n    at Parser.parseMaybeConditional (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8253:23)\\n    at Parser.parseMaybeAssign (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8200:21)\\n    at Parser.parseExpression (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8148:23)\\n    at Parser.parseStatementContent (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:9917:23)\\n    at Parser.parseStatement (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:9788:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:10364:25)\\n    at Parser.parseBlockBody (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:10351:10)\\n    at Parser.parseBlock (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:10335:10)\\n    at Parser.parseFunctionBody (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:9408:24)\\n    at Parser.parseArrowExpression (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:9349:10)\\n    at Parser.parseParenAndDistinguishExpression (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8986:12)\\n    at Parser.parseExprAtom (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8760:21)\\n    at Parser.parseExprSubscripts (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8413:23)\\n    at Parser.parseMaybeUnary (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8393:21)\\n    at Parser.parseExprOps (/Users/nate/Desktop/jumble/node_modules/@babel/parser/lib/index.js:8280:23)\");\n\n//# sourceURL=webpack:///./entry.jsx?");

/***/ })

/******/ });