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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demoSrc/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/CanvasParticle.js":
/*!*******************************!*\
  !*** ./bin/CanvasParticle.js ***!
  \*******************************/
/*! exports provided: CanvasParticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasParticle\", function() { return CanvasParticle; });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\nclass CanvasParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"] {\n  init(parent, bitmap) {\n    this.parent = parent;\n    this.bitmap = bitmap.clone();\n    this.parent.addChild(this.bitmap);\n  }\n\n  update(t) {\n    super.update(t);\n    const pos = this.path.getPoint(t);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n\n    this.parent = null;\n    this.bitmap = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/CanvasParticle.js?");

/***/ }),

/***/ "./bin/CanvasParticleGenerator.js":
/*!****************************************!*\
  !*** ./bin/CanvasParticleGenerator.js ***!
  \****************************************/
/*! exports provided: CanvasParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasParticleGenerator\", function() { return CanvasParticleGenerator; });\n/* harmony import */ var _CanvasParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasParticle */ \"./bin/CanvasParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\n\nclass CanvasParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"ParticleGenerator\"] {\n  constructor(parent, path, map) {\n    super(path);\n    this.parent = parent;\n    this.map = map;\n  }\n\n  generateParticle(path) {\n    const particle = new _CanvasParticle__WEBPACK_IMPORTED_MODULE_0__[\"CanvasParticle\"](this.path);\n    particle.init(this.parent, this.map);\n    return particle;\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/CanvasParticleGenerator.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! exports provided: CanvasParticleGenerator, CanvasParticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CanvasParticleGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasParticleGenerator */ \"./bin/CanvasParticleGenerator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CanvasParticleGenerator\", function() { return _CanvasParticleGenerator__WEBPACK_IMPORTED_MODULE_0__[\"CanvasParticleGenerator\"]; });\n\n/* harmony import */ var _CanvasParticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasParticle */ \"./bin/CanvasParticle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CanvasParticle\", function() { return _CanvasParticle__WEBPACK_IMPORTED_MODULE_1__[\"CanvasParticle\"]; });\n\n\n\n\n//# sourceURL=webpack:///./bin/index.js?");

/***/ }),

/***/ "./demoSrc/main.js":
/*!*************************!*\
  !*** ./demoSrc/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n/* harmony import */ var _bin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bin/index */ \"./bin/index.js\");\n\n\n\nconst onDomContentsLoaded = () => {\n  //ステージ更新処理\n  const updateStage = () => {\n    stage.update();\n  };\n\n  const canvas = document.getElementById(\"appCanvas\");\n  const stage = new createjs.Stage(canvas);\n  stage.enableMouseOver();\n  const shape = new createjs.Shape();\n  shape.graphics.beginFill(\"#00F\").drawCircle(0, 0, 4).endFill();\n  const wayPoint = new particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"ParticleWay\"]([[100, 100], [100, 200], [200, 200], [200, 300]]);\n  const generator = new _bin_index__WEBPACK_IMPORTED_MODULE_1__[\"CanvasParticleGenerator\"](stage, wayPoint, shape);\n  generator.particleInterval = 600;\n  generator.speedPerSec = 0.1;\n  generator.generateAll();\n  generator.play();\n  createjs.Ticker.on(\"tick\", updateStage);\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack:///./demoSrc/main.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/Particle.js ***!
  \********************************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Particle\", function() { return Particle; });\nclass Particle {\n  constructor(path) {\n    this.path = path;\n    this._pathPosition = 0.0;\n  }\n\n  update(t) {\n    this._pathPosition = t;\n  }\n\n  add(t) {\n    this._pathPosition += t;\n    this.update(this._pathPosition);\n  }\n\n  get pathPosition() {\n    return this._pathPosition;\n  }\n\n  set visible(value) {\n    this._visible = value;\n  }\n\n  dispose() {}\n\n}\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/Particle.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleGenerator.js ***!
  \*****************************************************************/
/*! exports provided: ParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleGenerator\", function() { return ParticleGenerator; });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./node_modules/particle-waypoint/bin/Particle.js\");\n\n/**\n * 一定間隔でパーティクルを生成し、アニメーションさせるクラス。\n * パーティクルインスタンスの生成と管理を行う。\n */\n\nclass ParticleGenerator {\n  /**\n   * @param path\n   */\n  constructor(path) {\n    this._visible = true;\n    this.particles = [];\n    this.renderID = null;\n    this.particleInterval = 300;\n    this.lastParticleTime = 0;\n    this.lastAnimateTime = 0;\n    this.isDisposed = false;\n    this.speedPerSec = 0.07;\n\n    this.animate = timestamp => {\n      if (this.isDisposed) return; //move particle\n\n      const movement = (timestamp - this.lastAnimateTime) / 1000 * this.speedPerSec;\n      this.particles.forEach(p => {\n        p.add(movement);\n      }); //remove particle\n\n      this.removeCompletedParticles(); //generate particle\n\n      if (this.renderID != null) {\n        while (timestamp > this.lastParticleTime + this.particleInterval) {\n          const current = this.lastParticleTime;\n          this.lastParticleTime += this.particleInterval; //すでに寿命切れのパーティクルは生成をスキップ。\n\n          if (timestamp > current + 1.0 / this.speedPerSec * 1000) {\n            continue;\n          }\n\n          const particle = this.generate();\n          const move = (timestamp - current) * this.speedPerSec / 1000;\n          particle.add(move);\n        }\n      }\n\n      this.lastAnimateTime = timestamp;\n      this.renderID = requestAnimationFrame(this.animate);\n    };\n\n    this.path = path;\n  }\n\n  play() {\n    if (this.renderID != null) return;\n    this.lastParticleTime = this.lastAnimateTime = performance.now();\n    this.renderID = requestAnimationFrame(this.animate);\n  }\n\n  stop() {\n    if (this.renderID == null) return;\n    cancelAnimationFrame(this.renderID);\n    this.renderID = null;\n  }\n\n  generate() {\n    const pathParticle = this.generateParticle(this.path);\n    this.particles.push(pathParticle);\n    pathParticle.visible = this._visible;\n    return pathParticle;\n  }\n\n  generateParticle(path) {\n    const particle = new _Particle__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"](path); //TODO ここでコンテナに挿入。\n\n    return particle;\n  }\n\n  generateAll() {\n    const move = this.speedPerSec * this.particleInterval / 1000;\n    let pos = 0.0;\n\n    while (pos < 1.0) {\n      this.generate();\n      const n = this.particles.length;\n\n      for (let i = 0; i < n; i++) {\n        const particle = this.particles[i];\n        particle.add(move);\n      }\n\n      pos += move;\n    }\n\n    this.removeCompletedParticles();\n  }\n  /**\n   * 寿命切れのパーティクルを一括で削除する。\n   */\n\n\n  removeCompletedParticles() {\n    const removed = this.particles.filter(p => {\n      return p.pathPosition >= 1.0;\n    }).forEach(p => {\n      p.dispose();\n    });\n    this.particles = this.particles.filter(p => {\n      return p.pathPosition < 1.0;\n    });\n  }\n  /**\n   * 指定されたパーティクルを削除する。\n   * @param particle\n   */\n\n\n  removeParticle(particle) {\n    const i = this.particles.indexOf(particle);\n    const popped = this.particles.splice(i, 1);\n    popped.forEach(val => {\n      val.dispose();\n    });\n  }\n  /**\n   * 全てのパーティクルを削除する。\n   */\n\n\n  removeAllParticles() {\n    const n = this.particles.length;\n\n    for (let i = n - 1; i >= 0; i--) {\n      const particle = this.particles[i];\n      this.removeParticle(particle);\n    }\n  }\n  /**\n   * パーティクル生成の停止とパーティクルの破棄を行う。\n   */\n\n\n  dispose() {\n    this.stop();\n    this.isDisposed = true;\n    this.removeAllParticles();\n    this.particles = null;\n    this.path = null;\n  }\n\n  get visible() {\n    return this._visible;\n  }\n\n  set visible(value) {\n    this._visible = value;\n\n    for (let i in this.particles) {\n      this.particles[i].visible = this._visible;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleGenerator.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleWay.js":
/*!***********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleWay.js ***!
  \***********************************************************/
/*! exports provided: ParticleWay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleWay\", function() { return ParticleWay; });\n/**\n * 中間点の算出が可能な線分を表すクラス\n */\nclass ParticleWay {\n  constructor(points) {\n    this.name = \"\";\n    this.setPoints(points);\n  }\n\n  setPoints(points) {\n    this._points = points;\n    this._total = 0;\n    const n = this._points.length;\n\n    for (let i = 1; i < n; i++) {\n      this._total += this.getDistance(this._points[i - 1], this._points[i]);\n    }\n  }\n\n  getDistance(pos1, pos2) {\n    const dx = pos2[0] - pos1[0];\n    const dy = pos2[1] - pos1[1];\n\n    switch (pos1.length) {\n      case 3:\n        const dz = pos2[2] - pos1[2];\n        return Math.sqrt(dx * dx + dy * dy + dz * dz);\n\n      case 2:\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n  }\n\n  getPoint(t) {\n    t = Math.min(t, 1.0);\n    t = Math.max(t, 0.0);\n    let position = this._total * t;\n    let i = 1;\n    const n = this._points.length;\n\n    for (i; i < n; i++) {\n      position -= this.getDistance(this._points[i - 1], this._points[i]);\n\n      if (position < 0.0) {\n        break;\n      }\n    }\n\n    i--;\n    if (i === n - 1) return this._points[i];\n    const floorPoint = this._points[i];\n    const ceilPoint = this._points[i + 1];\n\n    if (floorPoint === undefined || ceilPoint === undefined) {\n      return this._points[0];\n    }\n\n    let distance = this.getDistance(floorPoint, ceilPoint);\n    return this.getCenterPoint(floorPoint, ceilPoint, (distance + position) / distance);\n  }\n\n  getCenterPoint(pos1, pos2, t) {\n    const rt = 1.0 - t;\n    let pos = [pos1[0] * rt + pos2[0] * t, pos1[1] * rt + pos2[1] * t];\n\n    switch (pos1.length) {\n      case 3:\n        pos.push(pos1[2] * rt + pos2[2] * t);\n        return pos;\n\n      case 2:\n        return pos;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleWay.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/index.js ***!
  \*****************************************************/
/*! exports provided: Particle, ParticleWay, ParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./node_modules/particle-waypoint/bin/Particle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Particle\", function() { return _Particle__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"]; });\n\n/* harmony import */ var _ParticleWay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleWay */ \"./node_modules/particle-waypoint/bin/ParticleWay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParticleWay\", function() { return _ParticleWay__WEBPACK_IMPORTED_MODULE_1__[\"ParticleWay\"]; });\n\n/* harmony import */ var _ParticleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleGenerator */ \"./node_modules/particle-waypoint/bin/ParticleGenerator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParticleGenerator\", function() { return _ParticleGenerator__WEBPACK_IMPORTED_MODULE_2__[\"ParticleGenerator\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/index.js?");

/***/ })

/******/ });