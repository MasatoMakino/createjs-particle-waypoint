/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/SamplePath.js":
/*!*******************************!*\
  !*** ./demoSrc/SamplePath.js ***!
  \*******************************/
/*! default exports */
/*! export getCircle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getHeartPath [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTriangle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("exports.getHeartPath = () => {\n  return [[199.999692558296, 139.037809861326], [199.999692558296, 139.037809861326, 216.517501342052, 91.0703552349714, 260.408864739813, 101.478048251449], [304.306569058069, 111.887435228376, 302.040473463538, 149.898168782486, 297.969050788655, 167.089794944798], [293.891253219557, 184.314831799952, 266.291989537884, 213.247676318414, 241.405592420215, 229.538070494226], [216.517501342052, 245.828464670041, 201.360366325658, 263.475297677716, 199.999692558296, 269.360116287618], [198.644947652665, 263.475297677716, 183.481883774538, 245.828464670041, 158.595486656873, 229.538070494226], [133.70739557871, 213.247676318414, 106.111932139903, 184.314831799952, 102.030334327938, 167.089794944798], [97.9589002789453, 149.898168782486, 95.6966160382817, 111.887435228376, 139.592214337275, 101.478048251449], [183.481883774538, 91.0703552349714, 199.999692558296, 139.037809861326, 199.999692558296, 139.037809861326]];\n};\n\nexports.getCircle = () => {\n  const X = 200;\n  const Y = 200;\n  const K = 4 * (Math.sqrt(2) - 1) / 3;\n  const R = 100;\n  const RK = R * K;\n  return [[R + X, 0 + Y], [R + X, RK + Y, RK + X, R + Y, 0 + X, R + Y], [-RK + X, R + Y, -R + X, RK + Y, -R + X, 0 + Y], [-R + X, -RK + Y, -RK + X, -R + Y, 0 + X, -R + Y], [RK + X, -R + Y, R + X, -RK + Y, R + X, 0 + Y]];\n};\n\nexports.getTriangle = () => {\n  return [[200, 100], [300, 273.205080756887], [100, 273.205080756887], [200, 100]];\n};\n\n//# sourceURL=webpack://createjs-particle-waypoint/./demoSrc/SamplePath.js?");

/***/ }),

/***/ "./demoSrc/common.js":
/*!***************************!*\
  !*** ./demoSrc/common.js ***!
  \***************************/
/*! namespace exports */
/*! export initBodyStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initStage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initWay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initBodyStyle\": () => /* binding */ initBodyStyle,\n/* harmony export */   \"initStage\": () => /* binding */ initStage,\n/* harmony export */   \"initWay\": () => /* binding */ initWay\n/* harmony export */ });\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SamplePath */ \"./demoSrc/SamplePath.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./esm/index.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\n\nfunction initBodyStyle() {\n  const body = document.getElementsByTagName(\"body\");\n  body[0].style.backgroundColor = \"#000\";\n}\n/**\n * createjsのステージを初期化する。\n * @return {createjs.Stage}\n */\n\nfunction initStage() {\n  const updateStage = () => {\n    stage.update();\n  };\n\n  const canvas = document.getElementById(\"appCanvas\");\n  canvas.style.backgroundColor = \"#000\";\n  const stage = new createjs.Stage(canvas);\n  stage.enableMouseOver();\n  createjs.Ticker.timingMode = createjs.Ticker.RAF;\n  createjs.Ticker.on(\"tick\", updateStage);\n  return stage;\n}\n/**\n * ParticleWayを初期化する。\n * @return {ParticleWay}\n */\n\nfunction initWay(stage) {\n  const points = (0,_SamplePath__WEBPACK_IMPORTED_MODULE_0__.getHeartPath)();\n  const wayPoint = new ___WEBPACK_IMPORTED_MODULE_1__.CanvasParticleWay(particle_waypoint__WEBPACK_IMPORTED_MODULE_2__.BezierUtil.subdivide(points), {\n    parent: stage\n  });\n  wayPoint.showPassage();\n  return wayPoint;\n}\n\n//# sourceURL=webpack://createjs-particle-waypoint/./demoSrc/common.js?");

/***/ }),

/***/ "./demoSrc/demo_Particle.js":
/*!**********************************!*\
  !*** ./demoSrc/demo_Particle.js ***!
  \**********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./esm/index.js\");\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SamplePath */ \"./demoSrc/SamplePath.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./demoSrc/common.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  (0,_common__WEBPACK_IMPORTED_MODULE_3__.initBodyStyle)();\n  const stage = (0,_common__WEBPACK_IMPORTED_MODULE_3__.initStage)();\n  const way = (0,_common__WEBPACK_IMPORTED_MODULE_3__.initWay)(stage);\n  const particle = initParticle(way, stage);\n  initGUI(particle);\n};\n\nconst initParticle = (way, stage) => {\n  const getShape = () => {\n    const shape = new createjs.Shape();\n    const color = `hsl(0, 100%, 75%)`;\n    shape.shadow = new createjs.Shadow(color, 0, 0, 4);\n    shape.compositeOperation = \"lighter\";\n    shape.graphics.beginFill(color).drawCircle(0, 0, 4).endFill();\n    return shape;\n  };\n\n  const particle = new ___WEBPACK_IMPORTED_MODULE_1__.CanvasParticle(way);\n  particle.init(stage, getShape());\n  particle.update(0.0);\n  return particle;\n};\n/**\n * デモのパラメーターを操作するGUIを初期化する。\n * @param particle\n */\n\n\nconst initGUI = particle => {\n  const prop = {\n    t: 0.0,\n    path: \"heart\",\n    ease: \"liner\",\n    visiblePassage: true\n  };\n  const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_4__.GUI();\n  gui.add(prop, \"t\", 0.0, 1.0, 0.001).onChange(() => {\n    particle.update(prop.t);\n  });\n  gui.add(prop, \"path\", [\"heart\", \"circle\", \"triangle\"]).onChange(() => {\n    let path;\n\n    switch (prop.path) {\n      case \"heart\":\n        path = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.BezierUtil.subdivide((0,_SamplePath__WEBPACK_IMPORTED_MODULE_2__.getHeartPath)());\n        break;\n\n      case \"circle\":\n        path = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.BezierUtil.subdivide((0,_SamplePath__WEBPACK_IMPORTED_MODULE_2__.getCircle)());\n        break;\n\n      case \"triangle\":\n        path = (0,_SamplePath__WEBPACK_IMPORTED_MODULE_2__.getTriangle)();\n        break;\n    }\n\n    particle.path.points = path;\n    particle.update(particle.ratio);\n  });\n  gui.add(prop, \"ease\", [\"liner\", \"cubicOut\", \"cubicInOut\"]).onChange(() => {\n    let ease = null;\n\n    switch (prop.ease) {\n      case \"cubicOut\":\n        ease = createjs.Ease.cubicOut;\n        break;\n\n      case \"cubicInOut\":\n        ease = createjs.Ease.cubicInOut;\n        break;\n    }\n\n    particle.ease = ease;\n    particle.update(particle.ratio);\n  });\n  gui.add(prop, \"visiblePassage\").onChange(() => {\n    if (prop.visiblePassage) {\n      particle.path.showPassage();\n    } else {\n      particle.path.hidePassage();\n    }\n  });\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack://createjs-particle-waypoint/./demoSrc/demo_Particle.js?");

/***/ }),

/***/ "./esm/CanvasParticle.js":
/*!*******************************!*\
  !*** ./esm/CanvasParticle.js ***!
  \*******************************/
/*! namespace exports */
/*! export CanvasParticle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasParticle\": () => /* binding */ CanvasParticle\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\nclass CanvasParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.Particle {\n  constructor() {\n    super(...arguments);\n    this.r = 0.0; //媒介変数tに応じた回転量\n\n    this.rotationSpeedSin = 0.0;\n    this.rotationSpeedCos = 0.0; //初期回転量\n\n    this.rotationSin = 0.0;\n    this.rotationCos = 0.0;\n  }\n\n  init(parent, bitmap, rangeR, rangeRotationSpeed) {\n    this.parent = parent;\n    this.bitmap = bitmap.clone();\n    this.parent.addChild(this.bitmap);\n    this.r = rangeR * Math.random();\n    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSin = Math.random() * 2 * Math.PI;\n    this.rotationCos = Math.random() * 2 * Math.PI;\n    this.bitmap.mouseEnabled = false;\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n\n    if (this.r > 0.0) {\n      const sin = this.rotationSpeedSin * t + this.rotationSin;\n      const cos = this.rotationSpeedCos * t + this.rotationCos;\n      this.bitmap.x += Math.cos(cos) * this.r;\n      this.bitmap.y += Math.sin(sin) * this.r;\n    }\n\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n\n    this.parent = null;\n    this.bitmap = null;\n  }\n\n}\n\n//# sourceURL=webpack://createjs-particle-waypoint/./esm/CanvasParticle.js?");

/***/ }),

/***/ "./esm/CanvasParticleGenerator.js":
/*!****************************************!*\
  !*** ./esm/CanvasParticleGenerator.js ***!
  \****************************************/
/*! namespace exports */
/*! export CanvasParticleGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasParticleGenerator\": () => /* binding */ CanvasParticleGenerator\n/* harmony export */ });\n/* harmony import */ var _CanvasParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasParticle */ \"./esm/CanvasParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\n\nclass CanvasParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__.ParticleGenerator {\n  constructor(parent, path, map, option) {\n    super(path, option);\n    this.mapCounter = 0;\n    this._rangeR = 0.0;\n    this._rangeRotationSpeed = 0.0;\n    this.parent = parent;\n\n    if (option) {\n      if (option.rangeR) this._rangeR = option.rangeR;\n      if (option.rangeRotationSpeed) this._rangeRotationSpeed = option.rangeRotationSpeed;\n    }\n\n    if (Array.isArray(map)) {\n      if (map.length === 0) {\n        console.warn(\"CanvasParticleGenerator : オプションとして渡されたDisplayObject配列が空です。このクラスは動作しますが、一切の表示を行いません。\");\n        console.trace();\n      }\n\n      this.map = map;\n    } else {\n      this.map = [map];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _CanvasParticle__WEBPACK_IMPORTED_MODULE_0__.CanvasParticle(path);\n    particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);\n    this.mapCounter = (this.mapCounter += 1) % this.map.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.mapCounter = 0;\n    super.generateAll();\n  }\n\n  get rangeRotationSpeed() {\n    return this._rangeRotationSpeed;\n  }\n\n  set rangeRotationSpeed(value) {\n    this._rangeRotationSpeed = value;\n  }\n\n  get rangeR() {\n    return this._rangeR;\n  }\n\n  set rangeR(value) {\n    this._rangeR = value;\n  }\n\n}\n\n//# sourceURL=webpack://createjs-particle-waypoint/./esm/CanvasParticleGenerator.js?");

/***/ }),

/***/ "./esm/CanvasParticleWay.js":
/*!**********************************!*\
  !*** ./esm/CanvasParticleWay.js ***!
  \**********************************/
/*! namespace exports */
/*! export CanvasParticleWay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasParticleWay\": () => /* binding */ CanvasParticleWay\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n\nvar Shape = createjs.Shape;\nclass CanvasParticleWay extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.ParticleWay {\n  constructor(points, option) {\n    super(points);\n    this.passageColor = \"rgba(255, 0, 0, 0.25)\";\n    if (!option) return;\n\n    if (option.passageColor) {\n      this.passageColor = option.passageColor;\n    }\n\n    if (option.parent) {\n      this.initPassage(option.parent);\n    }\n  }\n\n  initPassage(parent) {\n    if (this.passage) return;\n    this.passage = new Shape();\n    this.passage.visible = false;\n    parent.addChild(this.passage);\n    this.drawPassage();\n  }\n\n  onSetPoints() {\n    super.onSetPoints();\n    this.drawPassage();\n  }\n\n  drawPassage() {\n    if (!this.passage) return;\n    if (!this.points) return;\n    if (this.points.length <= 1) return;\n    const isBezier = this.points[1].length === 6;\n    const g = this.passage.graphics;\n    g.clear();\n    g.ss(1).beginStroke(this.passageColor);\n    this.points.forEach((p, index) => {\n      if (index === 0) {\n        g.mt(p[0], p[1]);\n        return;\n      }\n\n      if (!isBezier) {\n        g.lt(p[0], p[1]);\n        return;\n      }\n\n      g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);\n    });\n    g.ef();\n  }\n\n  showPassage() {\n    if (!this.passage) return;\n    this.passage.visible = true;\n  }\n\n  hidePassage() {\n    if (!this.passage) return;\n    this.passage.visible = false;\n  }\n\n}\n\n//# sourceURL=webpack://createjs-particle-waypoint/./esm/CanvasParticleWay.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! namespace exports */
/*! export CanvasParticle [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/CanvasParticle.js .CanvasParticle */
/*! export CanvasParticleGenerator [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/CanvasParticleGenerator.js .CanvasParticleGenerator */
/*! export CanvasParticleWay [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/CanvasParticleWay.js .CanvasParticleWay */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasParticleGenerator\": () => /* reexport safe */ _CanvasParticleGenerator__WEBPACK_IMPORTED_MODULE_0__.CanvasParticleGenerator,\n/* harmony export */   \"CanvasParticle\": () => /* reexport safe */ _CanvasParticle__WEBPACK_IMPORTED_MODULE_1__.CanvasParticle,\n/* harmony export */   \"CanvasParticleWay\": () => /* reexport safe */ _CanvasParticleWay__WEBPACK_IMPORTED_MODULE_2__.CanvasParticleWay\n/* harmony export */ });\n/* harmony import */ var _CanvasParticleGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasParticleGenerator */ \"./esm/CanvasParticleGenerator.js\");\n/* harmony import */ var _CanvasParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasParticle */ \"./esm/CanvasParticle.js\");\n/* harmony import */ var _CanvasParticleWay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CanvasParticleWay */ \"./esm/CanvasParticleWay.js\");\n\n\n\n\n//# sourceURL=webpack://createjs-particle-waypoint/./esm/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo_Particle": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo_Particle.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcreatejs_particle_waypoint"] = self["webpackChunkcreatejs_particle_waypoint"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;