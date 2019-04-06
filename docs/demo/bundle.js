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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasParticle\", function() { return CanvasParticle; });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\nclass CanvasParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"] {\n  init(parent, bitmap) {\n    this.parent = parent;\n    this.bitmap = bitmap.clone();\n    this.parent.addChild(this.bitmap);\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n\n    this.parent = null;\n    this.bitmap = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/CanvasParticle.js?");

/***/ }),

/***/ "./bin/CanvasParticleGenerator.js":
/*!****************************************!*\
  !*** ./bin/CanvasParticleGenerator.js ***!
  \****************************************/
/*! exports provided: CanvasParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasParticleGenerator\", function() { return CanvasParticleGenerator; });\n/* harmony import */ var _CanvasParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanvasParticle */ \"./bin/CanvasParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\n\nclass CanvasParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"ParticleGenerator\"] {\n  constructor(parent, path, map, option) {\n    super(path, option);\n    this.parent = parent;\n    this.map = map;\n  }\n\n  generateParticle(path) {\n    const particle = new _CanvasParticle__WEBPACK_IMPORTED_MODULE_0__[\"CanvasParticle\"](this.path);\n    particle.init(this.parent, this.map);\n    return particle;\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/CanvasParticleGenerator.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n/* harmony import */ var _bin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bin/index */ \"./bin/index.js\");\n\n\n\nconst onDomContentsLoaded = () => {\n  //ステージ更新処理\n  const updateStage = () => {\n    stage.update();\n  };\n\n  const canvas = document.getElementById(\"appCanvas\");\n  const stage = new createjs.Stage(canvas);\n  stage.enableMouseOver();\n  const shape = new createjs.Shape();\n  shape.graphics.beginFill(\"#00F\").drawCircle(0, 0, 1).endFill();\n  const points = [[100, 100], [100, 200], [200, 200], [200, 300]];\n  const wayPoint = new particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"ParticleWay\"](points);\n  const way = new createjs.Shape();\n  const g = way.graphics;\n  g.beginStroke(\"#F0F\");\n  g.moveTo(points[0][0], points[0][1]);\n  points.forEach((p, index) => {\n    if (index === 0) {\n      g.moveTo(p[0], p[1]);\n      return;\n    }\n\n    g.lineTo(p[0], p[1]);\n  });\n  stage.addChild(way);\n  const generator = new _bin_index__WEBPACK_IMPORTED_MODULE_1__[\"CanvasParticleGenerator\"](stage, wayPoint, shape, {\n    ease: createjs.Ease.cubicOut,\n    isLoop: true\n  });\n  generator.setSpeed(600, 20); // generator.setInterval( 0.1, 80);\n\n  generator.play();\n  createjs.Ticker.timingMode = createjs.Ticker.RAF;\n  createjs.Ticker.on(\"tick\", updateStage);\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack:///./demoSrc/main.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/Particle.js ***!
  \********************************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Particle\", function() { return Particle; });\n/**\n * パーティクルを表すクラス。\n * このクラス自体には描画のための機能はない。\n * 各種の描画ライブラリと組み合わせて利用する。\n */\nclass Particle {\n  /**\n   * 指定されたパスに沿って移動するパーティクルを生成する。\n   * @param path\n   */\n  constructor(path) {\n    this._ratio = 0.0;\n    this._visible = true;\n    this.path = path;\n  }\n  /**\n   * パーティクルの位置を更新する。\n   * @param t パーティクルのパス上の位置。入力に制限はないが、ParticleWay側で0.0~1.0の間に丸め込まれる。\n   * @return n ease関数で補正済みのt。\n   */\n\n\n  update(t) {\n    this._ratio = t;\n\n    if (this.ease == null) {\n      return this._ratio;\n    }\n\n    return this.ease(this._ratio);\n  }\n  /**\n   * パーティクル位置を指定された量移動する。\n   * @param t 移動量\n   */\n\n\n  add(t) {\n    return this.update(this._ratio + t);\n  }\n  /**\n   * 現在位置を取得する\n   * @return number\n   */\n\n\n  get ratio() {\n    return this._ratio;\n  }\n\n  get visible() {\n    return this._visible;\n  }\n\n  set visible(value) {\n    this._visible = value;\n  }\n\n  dispose() {}\n\n}\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/Particle.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleGenerator.js ***!
  \*****************************************************************/
/*! exports provided: ParticleGenerator, ParticleGeneratorUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleGenerator\", function() { return ParticleGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleGeneratorUtility\", function() { return ParticleGeneratorUtility; });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./node_modules/particle-waypoint/bin/Particle.js\");\n\n/**\n * 一定間隔でパーティクルを生成し、アニメーションさせるクラス。\n * パーティクルインスタンスの生成と管理を行う。\n */\n\nclass ParticleGenerator {\n  /**\n   * @param path\n   * @param option\n   */\n  constructor(path, option) {\n    this._visible = true;\n    this.particles = [];\n    this.renderID = null; //animation setting\n\n    this.particleInterval = 300;\n    this.speedPerSec = 0.07;\n    this._isLoop = false;\n    this.lastParticleTime = 0;\n    this.lastAnimateTime = 0;\n    this.isDisposed = false;\n    /**\n     * パーティクルをアニメーションさせる。\n     * @param timestamp\n     */\n\n    this.animate = timestamp => {\n      if (this.isDisposed) return;\n      this.move(timestamp);\n      this.removeCompletedParticles(); //generate particle\n\n      while (timestamp > this.lastParticleTime + this.particleInterval) {\n        const current = this.lastParticleTime;\n        this.lastParticleTime += this.particleInterval; //すでに寿命切れのパーティクルは生成をスキップ。\n\n        if (timestamp > current + 1.0 / this.speedPerSec * 1000) {\n          continue;\n        }\n\n        const particle = this.generate();\n        const move = (timestamp - this.lastParticleTime) * this.speedPerSec / 1000;\n        particle.add(move);\n      }\n\n      this.renderID = requestAnimationFrame(this.animate);\n    };\n    /**\n     * パーティクルをループアニメーションさせる。\n     * @param timestamp\n     */\n\n\n    this.loop = timestamp => {\n      if (this.isDisposed) return;\n\n      if (this.particles.length === 0) {\n        this.generateAll();\n      }\n\n      this.move(timestamp);\n      this.rollupParticles();\n      this.renderID = requestAnimationFrame(this.loop);\n    };\n\n    this.path = path;\n    if (option == null) return;\n    if (option.isLoop) this._isLoop = option.isLoop;\n    if (option.ease) this.ease = option.ease;\n  }\n\n  play() {\n    if (this.renderID != null) return;\n    this.lastParticleTime = this.lastAnimateTime = performance.now();\n\n    if (this._isLoop) {\n      this.renderID = requestAnimationFrame(this.loop);\n    } else {\n      this.renderID = requestAnimationFrame(this.animate);\n    }\n  }\n\n  stop() {\n    if (this.renderID == null) return;\n    cancelAnimationFrame(this.renderID);\n    this.renderID = null;\n  }\n  /**\n   * パーティクルの位置を経過時間分移動する。\n   * @param timestamp\n   */\n\n\n  move(timestamp) {\n    const movement = (timestamp - this.lastAnimateTime) / 1000 * this.speedPerSec;\n    this.particles.forEach(p => {\n      p.add(movement);\n    });\n    this.lastAnimateTime = timestamp;\n  }\n  /**\n   * パーティクルを1つ追加する。\n   */\n\n\n  generate() {\n    const particle = this.generateParticle(this.path);\n    this.particles.push(particle);\n    particle.visible = this._visible;\n\n    if (this.ease != null) {\n      particle.ease = this.ease;\n    }\n\n    return particle;\n  }\n  /**\n   * パーティクルを生成する。\n   * generate関数の内部処理。\n   * @param path\n   */\n\n\n  generateParticle(path) {\n    const particle = new _Particle__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"](path); //TODO ここでコンテナに挿入。\n\n    return particle;\n  }\n  /**\n   * 経路上にパーティクルを敷き詰める。\n   */\n\n\n  generateAll() {\n    const move = this.speedPerSec * this.particleInterval / 1000;\n    let pos = 0.0;\n\n    while (pos < 1.0) {\n      const particle = this.generate();\n      particle.update(pos);\n      pos += move;\n    }\n\n    this.removeCompletedParticles();\n  }\n  /**\n   * 寿命切れのパーティクルを一括で削除する。\n   */\n\n\n  removeCompletedParticles() {\n    const removed = this.particles.filter(p => {\n      return p.ratio >= 1.0;\n    }).forEach(p => {\n      p.dispose();\n    });\n    this.particles = this.particles.filter(p => {\n      return p.ratio < 1.0;\n    });\n  }\n\n  rollupParticles() {\n    this.particles.forEach(p => {\n      p.update(p.ratio % 1);\n    });\n  }\n  /**\n   * 指定されたパーティクルを削除する。\n   * @param particle\n   */\n\n\n  removeParticle(particle) {\n    const i = this.particles.indexOf(particle);\n    const popped = this.particles.splice(i, 1);\n    popped.forEach(val => {\n      val.dispose();\n    });\n  }\n  /**\n   * 全てのパーティクルを削除する。\n   */\n\n\n  removeAllParticles() {\n    this.particles.forEach(p => {\n      p.dispose();\n    });\n    this.particles = [];\n  }\n  /**\n   * 生成インターバルと経路上のパーティクル数から移動スピードを算出し設定する。\n   * loop時に破綻しない値が得られる。\n   * @param interval\n   * @param particleNum\n   */\n\n\n  setSpeed(interval, particleNum) {\n    this.particleInterval = interval;\n    this.speedPerSec = ParticleGeneratorUtility.getSpeed(interval, particleNum);\n  }\n  /**\n   * 移動スピードと経路上のパーティクル数から生成インターバルを算出し設定する。\n   * loop時に破綻しない値が得られる。\n   * @param speed\n   * @param particleNum\n   */\n\n\n  setInterval(speed, particleNum) {\n    this.speedPerSec = speed;\n    this.particleInterval = ParticleGeneratorUtility.getInterval(speed, particleNum);\n  }\n  /**\n   * パーティクル生成の停止とパーティクルの破棄を行う。\n   */\n\n\n  dispose() {\n    this.stop();\n    this.isDisposed = true;\n    this.removeAllParticles();\n    this.particles = null;\n    this.path = null;\n  }\n\n  get visible() {\n    return this._visible;\n  }\n\n  set visible(value) {\n    this._visible = value;\n\n    for (let i in this.particles) {\n      this.particles[i].visible = this._visible;\n    }\n  }\n\n}\nclass ParticleGeneratorUtility {\n  static getSpeed(interval, particleNum) {\n    return 1.0 / (interval * particleNum) * 1000;\n  }\n\n  static getInterval(speed, particleNum) {\n    return 1.0 / speed / particleNum * 1000;\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleGenerator.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleWay.js":
/*!***********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleWay.js ***!
  \***********************************************************/
/*! exports provided: ParticleWay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleWay\", function() { return ParticleWay; });\n/**\n * 中間点の算出が可能な線分を表すクラス\n */\nclass ParticleWay {\n  constructor(points) {\n    this.name = \"\";\n    this.setPoints(points);\n  }\n\n  setPoints(points) {\n    this._points = points;\n\n    if (this._points.length === 0) {\n      console.warn(\"ParticleWay : 長さゼロの配列が指定されました。座標が算出できないため、getPoint関数は常にnullを返します。\");\n    }\n\n    if (this._points.length === 1) {\n      console.warn(\"ParticleWay : 長さ1の配列が指定されました。座標が算出できないため、getPoint関数は常に固定の座標を返します。\");\n    }\n\n    const sumTable = new Array(this._points.length).fill(0);\n\n    this._points.forEach((val, index, array) => {\n      if (index === 0) return;\n      sumTable[index] = this.getDistance(array[index - 1], val) + sumTable[index - 1];\n    });\n\n    const total = sumTable[sumTable.length - 1];\n    this._rateTable = sumTable.map(val => {\n      return val / total;\n    });\n  }\n\n  getDistance(pos1, pos2) {\n    const dx = pos2[0] - pos1[0];\n    const dy = pos2[1] - pos1[1];\n\n    switch (pos1.length) {\n      case 3:\n        const dz = pos2[2] - pos1[2];\n        return Math.sqrt(dx * dx + dy * dy + dz * dz);\n\n      case 2:\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n  }\n\n  getPoint(t) {\n    if (!this._points || this._points.length === 0) {\n      return null;\n    }\n\n    if (this._points.length === 1) {\n      return [...this._points[0]];\n    }\n\n    const n = this._points.length;\n    t = Math.min(t, 1.0);\n    if (t === 1.0) return [...this._points[n - 1]];\n    t = Math.max(t, 0.0);\n    if (t === 0.0) return [...this._points[0]];\n    let i = 1;\n\n    for (i; i < n; i++) {\n      if (this._rateTable[i] >= t) break;\n    }\n\n    i--;\n    const floorPoint = this._points[i];\n    const ceilPoint = this._points[i + 1];\n    const rateBase = this._rateTable[i];\n    return this.getCenterPoint(floorPoint, ceilPoint, (t - rateBase) / (this._rateTable[i + 1] - rateBase));\n  }\n\n  getCenterPoint(pos1, pos2, t) {\n    const rt = 1.0 - t;\n    let pos = [pos1[0] * rt + pos2[0] * t, pos1[1] * rt + pos2[1] * t];\n\n    switch (pos1.length) {\n      case 3:\n        pos.push(pos1[2] * rt + pos2[2] * t);\n        return pos;\n\n      case 2:\n        return pos;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleWay.js?");

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