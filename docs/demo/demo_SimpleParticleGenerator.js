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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demoSrc/demo_SimpleParticleGenerator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/CanvasParticle.js":
/*!*******************************!*\
  !*** ./bin/CanvasParticle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CanvasParticle = void 0;\n\nvar _particleWaypoint = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\nclass CanvasParticle extends _particleWaypoint.Particle {\n  constructor() {\n    super(...arguments);\n    this.r = 0.0; //媒介変数tに応じた回転量\n\n    this.rotationSpeedSin = 0.0;\n    this.rotationSpeedCos = 0.0; //初期回転量\n\n    this.rotationSin = 0.0;\n    this.rotationCos = 0.0;\n  }\n\n  init(parent, bitmap, rangeR, rangeRotationSpeed) {\n    this.parent = parent;\n    this.bitmap = bitmap.clone();\n    this.parent.addChild(this.bitmap);\n    this.r = rangeR * Math.random();\n    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSin = Math.random() * 2 * Math.PI;\n    this.rotationCos = Math.random() * 2 * Math.PI;\n    this.bitmap.mouseEnabled = false;\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n\n    if (this.r > 0.0) {\n      const sin = this.rotationSpeedSin * t + this.rotationSin;\n      const cos = this.rotationSpeedCos * t + this.rotationCos;\n      this.bitmap.x += Math.cos(cos) * this.r;\n      this.bitmap.y += Math.sin(sin) * this.r;\n    }\n\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n\n    this.parent = null;\n    this.bitmap = null;\n  }\n\n}\n\nexports.CanvasParticle = CanvasParticle;\n\n//# sourceURL=webpack:///./bin/CanvasParticle.js?");

/***/ }),

/***/ "./bin/CanvasParticleGenerator.js":
/*!****************************************!*\
  !*** ./bin/CanvasParticleGenerator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CanvasParticleGenerator = void 0;\n\nvar _CanvasParticle = __webpack_require__(/*! ./CanvasParticle */ \"./bin/CanvasParticle.js\");\n\nvar _particleWaypoint = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\nclass CanvasParticleGenerator extends _particleWaypoint.ParticleGenerator {\n  constructor(parent, path, map, option) {\n    super(path, option);\n    this.mapCounter = 0;\n    this._rangeR = 0.0;\n    this._rangeRotationSpeed = 0.0;\n    this.parent = parent;\n\n    if (option) {\n      if (option.rangeR) this._rangeR = option.rangeR;\n      if (option.rangeRotationSpeed) this._rangeRotationSpeed = option.rangeRotationSpeed;\n    }\n\n    if (Array.isArray(map)) {\n      if (map.length === 0) {\n        console.warn(\"CanvasParticleGenerator : オプションとして渡されたDisplayObject配列が空です。このクラスは動作しますが、一切の表示を行いません。\");\n        console.trace();\n      }\n\n      this.map = map;\n    } else {\n      this.map = [map];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _CanvasParticle.CanvasParticle(path);\n    particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);\n    this.mapCounter = (this.mapCounter += 1) % this.map.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.mapCounter = 0;\n    super.generateAll();\n  }\n\n  get rangeRotationSpeed() {\n    return this._rangeRotationSpeed;\n  }\n\n  set rangeRotationSpeed(value) {\n    this._rangeRotationSpeed = value;\n  }\n\n  get rangeR() {\n    return this._rangeR;\n  }\n\n  set rangeR(value) {\n    this._rangeR = value;\n  }\n\n}\n\nexports.CanvasParticleGenerator = CanvasParticleGenerator;\n\n//# sourceURL=webpack:///./bin/CanvasParticleGenerator.js?");

/***/ }),

/***/ "./bin/CanvasParticleWay.js":
/*!**********************************!*\
  !*** ./bin/CanvasParticleWay.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CanvasParticleWay = void 0;\n\nvar _particleWaypoint = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/bin/index.js\");\n\nvar Shape = createjs.Shape;\n\nclass CanvasParticleWay extends _particleWaypoint.ParticleWay {\n  constructor(points, option) {\n    super(points);\n    this.passageColor = \"rgba(255, 0, 0, 0.25)\";\n    if (!option) return;\n\n    if (option.passageColor) {\n      this.passageColor = option.passageColor;\n    }\n\n    if (option.parent) {\n      this.initPassage(option.parent);\n    }\n  }\n\n  initPassage(parent) {\n    if (this.passage) return;\n    this.passage = new Shape();\n    this.passage.visible = false;\n    parent.addChild(this.passage);\n    this.drawPassage();\n  }\n\n  drawPassage() {\n    if (!this.passage) return;\n    if (!super.points) return;\n    if (super.points.length <= 1) return;\n    const isBezier = super.points[1].length === 6;\n    const g = this.passage.graphics;\n    g.clear();\n    g.ss(1).beginStroke(this.passageColor);\n    super.points.forEach((p, index) => {\n      if (index === 0) {\n        g.mt(p[0], p[1]);\n        return;\n      }\n\n      if (!isBezier) {\n        g.lt(p[0], p[1]);\n        return;\n      }\n\n      g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);\n    });\n    g.ef();\n  }\n\n  set points(points) {\n    super.points = points;\n    this.drawPassage();\n  }\n\n  showPassage() {\n    if (!this.passage) return;\n    this.passage.visible = true;\n  }\n\n  hidePassage() {\n    if (!this.passage) return;\n    this.passage.visible = false;\n  }\n\n}\n\nexports.CanvasParticleWay = CanvasParticleWay;\n\n//# sourceURL=webpack:///./bin/CanvasParticleWay.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _CanvasParticleGenerator = __webpack_require__(/*! ./CanvasParticleGenerator */ \"./bin/CanvasParticleGenerator.js\");\n\nObject.keys(_CanvasParticleGenerator).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CanvasParticleGenerator[key];\n    }\n  });\n});\n\nvar _CanvasParticle = __webpack_require__(/*! ./CanvasParticle */ \"./bin/CanvasParticle.js\");\n\nObject.keys(_CanvasParticle).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CanvasParticle[key];\n    }\n  });\n});\n\nvar _CanvasParticleWay = __webpack_require__(/*! ./CanvasParticleWay */ \"./bin/CanvasParticleWay.js\");\n\nObject.keys(_CanvasParticleWay).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _CanvasParticleWay[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./bin/index.js?");

/***/ }),

/***/ "./demoSrc/demo_SimpleParticleGenerator.js":
/*!*************************************************!*\
  !*** ./demoSrc/demo_SimpleParticleGenerator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(/*! ../bin/index */ \"./bin/index.js\");\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\nconst onDomContentsLoaded = () => {\n  const points = [[100, 100], [100, 200], [200, 200], [200, 300]];\n  const wayPoint = new _index.CanvasParticleWay(points);\n\n  const updateStage = () => {\n    stage.update();\n  };\n\n  const canvas = document.getElementById(\"canvas\");\n  const stage = new createjs.Stage(canvas);\n  createjs.Ticker.timingMode = createjs.Ticker.RAF;\n  createjs.Ticker.on(\"tick\", updateStage);\n  const shape = new createjs.Shape();\n  shape.graphics.beginFill(\"#F00\").drawCircle(0, 0, 4).endFill();\n  const generator = new _index.CanvasParticleGenerator(stage, wayPoint, shape);\n  generator.play();\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack:///./demoSrc/demo_SimpleParticleGenerator.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/BezierUtil.js":
/*!**********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/BezierUtil.js ***!
  \**********************************************************/
/*! exports provided: BezierUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BezierUtil\", function() { return BezierUtil; });\n/* harmony import */ var _ParticleWay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParticleWay */ \"./node_modules/particle-waypoint/bin/ParticleWay.js\");\n\nclass BezierUtil {\n    /**\n     * ベジェ曲線の中間座標を取得する。\n     *\n     * @param t 媒介変数 0.0 ~ 1.0\n     * @param from 始点\n     * @param c1 コントロールポイント1\n     * @param c2 コントロールポイント2\n     * @param to 終点\n     */\n    static getPoint(t, from, c1, c2, to) {\n        const addPoint = (p1, p2, coefficient) => {\n            p1[0] += coefficient * p2[0];\n            p1[1] += coefficient * p2[1];\n        };\n        const result = [0, 0];\n        const difT = 1 - t;\n        let v = Math.pow(difT, 3);\n        addPoint(result, from, v);\n        v = 3 * Math.pow(difT, 2) * t;\n        addPoint(result, c1, v);\n        v = 3 * Math.pow(t, 2) * difT;\n        addPoint(result, c2, v);\n        v = Math.pow(t, 3);\n        addPoint(result, to, v);\n        return result;\n    }\n    /**\n     * ベジェ曲線描画コマンドから、ベジェ曲線の中間座標を取得する。\n     * @param t\n     * @param command1 始点側の描画コマンド 要素数2もしくは6の配列\n     * @param command2 終点側の描画コマンド 要素数6の配列\n     */\n    static getPointFromCommand(t, command1, command2) {\n        return this.getPoint(t, command1.slice(-2), command2.slice(0, 2), command2.slice(2, 4), command2.slice(-2));\n    }\n    /**\n     * ベジェ曲線の長さを取得する。\n     * divの数だけベジェ曲線を分割し、直線の集合として距離を測る。\n     *\n     * @param from 始点\n     * @param c1 コントロールポイント1\n     * @param c2 コントロールポイント2\n     * @param to 終点\n     * @param div 分割数 多いほど精度が向上し、計算負荷は上昇する。 既定値16\n     */\n    static getLength(from, c1, c2, to, div = 16) {\n        let result = 0;\n        let prevPoint;\n        for (let i = 0; i < div + 1; i++) {\n            const p = this.getPoint(i / div, from, c1, c2, to);\n            if (prevPoint) {\n                result += _ParticleWay__WEBPACK_IMPORTED_MODULE_0__[\"ParticleWay\"].getDistance(prevPoint, p);\n            }\n            prevPoint = p;\n        }\n        return result;\n    }\n    /**\n     * ベジェ曲線描画コマンドから、ベジェ曲線の長さを取得する。\n     *\n     * @param command1 始点側の描画コマンド 要素数2もしくは6の配列\n     * @param command2 終点側の描画コマンド 要素数6の配列\n     * @param div 分割数 多いほど精度が向上し、計算負荷は上昇する。 既定値16\n     */\n    static getLengthFromCommand(command1, command2, div = 16) {\n        return this.getLength(command1.slice(-2), command2.slice(0, 2), command2.slice(2, 4), command2.slice(-2), div);\n    }\n    /**\n     * 3次ベジェ曲線を2次元座標の配列に分解する。\n     * @param commands\n     * @param div 分割数 デフォルトは16\n     */\n    static subdivide(commands, div = 16) {\n        const points = [];\n        for (let i = 1; i < commands.length; i++) {\n            let sub = this.subdivideSubPath(commands[i - 1], commands[i], div);\n            if (i !== 1) {\n                sub = sub.slice(1);\n            }\n            points.push(...sub);\n        }\n        return points;\n    }\n    static subdivideSubPath(command1, command2, div = 16) {\n        const points = [];\n        for (let i = 0; i < div + 1; i++) {\n            points.push(this.getPointFromCommand(i / div, command1, command2));\n        }\n        return points;\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/BezierUtil.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/Particle.js":
/*!********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/Particle.js ***!
  \********************************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Particle\", function() { return Particle; });\n/**\n * パーティクルを表すクラス。\n * このクラス自体には描画のための機能はない。\n * 各種の描画ライブラリと組み合わせて利用する。\n */\nclass Particle {\n    /**\n     * 指定されたパスに沿って移動するパーティクルを生成する。\n     * @param path\n     */\n    constructor(path) {\n        this._ratio = 0.0;\n        this._visible = true;\n        this.path = path;\n    }\n    /**\n     * パーティクルの位置を更新する。\n     * @param t パーティクルのパス上の位置。入力に制限はないが、ParticleWay側で0.0~1.0の間に丸め込まれる。\n     * @return n ease関数で補正済みのt。\n     */\n    update(t) {\n        this._ratio = t;\n        if (this.ease == null) {\n            return this._ratio;\n        }\n        return this.ease(this._ratio);\n    }\n    /**\n     * パーティクル位置を指定された量移動する。\n     * @param t 移動量\n     */\n    add(t) {\n        return this.update(this._ratio + t);\n    }\n    /**\n     * 現在位置を取得する\n     * @return number\n     */\n    get ratio() {\n        return this._ratio;\n    }\n    get visible() {\n        return this._visible;\n    }\n    set visible(value) {\n        this._visible = value;\n    }\n    dispose() { }\n}\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/Particle.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleGenerator.js ***!
  \*****************************************************************/
/*! exports provided: ParticleGenerator, PathSelectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleGenerator\", function() { return ParticleGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PathSelectType\", function() { return PathSelectType; });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./node_modules/particle-waypoint/bin/Particle.js\");\n/* harmony import */ var raf_ticker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raf-ticker */ \"./node_modules/raf-ticker/bin/index.js\");\n/* harmony import */ var _ParticleGeneratorUtility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleGeneratorUtility */ \"./node_modules/particle-waypoint/bin/ParticleGeneratorUtility.js\");\n\n\n\n/**\n * 一定間隔でパーティクルを生成し、アニメーションさせるクラス。\n * パーティクルインスタンスの生成と管理を行う。\n */\nclass ParticleGenerator {\n    /**\n     * コンストラクタ\n     * @param path\n     * @param option\n     */\n    constructor(path, option) {\n        this.path = [];\n        this.pathSelectType = PathSelectType.Sequential;\n        this.pathSelectionCount = 0;\n        this._visible = true;\n        this.particles = [];\n        this.isPlaying = false;\n        //animation setting\n        this._particleInterval = 300;\n        this.speedPerSec = 0.07;\n        this._isLoop = false;\n        this._probability = 1.0;\n        this._isOpenValve = true;\n        this.elapsedFromGenerate = 0; //前回パーティクル生成時からの経過時間　単位ms\n        this.isDisposed = false;\n        /**\n         * パーティクルをアニメーションさせる。\n         * @param e\n         */\n        this.animate = (e) => {\n            if (this.isDisposed)\n                return;\n            this.move(e.delta);\n            this.removeCompletedParticles();\n            this.addParticle(e.delta);\n        };\n        /**\n         * パーティクルをループアニメーションさせる。\n         * @param e\n         */\n        this.loop = (e) => {\n            if (this.isDisposed)\n                return;\n            if (this.particles.length === 0) {\n                this.generateAll();\n            }\n            this.move(e.delta);\n            this.rollupParticles();\n        };\n        if (Array.isArray(path)) {\n            this.path = path;\n        }\n        else {\n            this.path = [path];\n        }\n        if (option == null)\n            return;\n        if (option.isLoop)\n            this._isLoop = option.isLoop;\n        if (option.ease)\n            this._ease = option.ease;\n        if (option.probability)\n            this._probability = option.probability;\n    }\n    /**\n     * パーティクルアニメーションを開始する。\n     */\n    play() {\n        if (this.isPlaying)\n            return;\n        this.isPlaying = true;\n        if (this._isLoop) {\n            raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTicker\"].addEventListener(raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"].tick, this.loop);\n        }\n        else {\n            raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTicker\"].addEventListener(raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"].tick, this.animate);\n        }\n    }\n    /**\n     * パーティクルアニメーションを停止する。\n     */\n    stop() {\n        if (!this.isPlaying)\n            return;\n        this.isPlaying = false;\n        raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTicker\"].removeEventListener(raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"].tick, this.loop);\n        raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTicker\"].removeEventListener(raf_ticker__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"].tick, this.animate);\n    }\n    /**\n     * パーティクル生成を開始する。\n     */\n    openValve() {\n        if (this._isOpenValve)\n            return;\n        this._isOpenValve = true;\n        this.warnValve();\n    }\n    /**\n     * パーティクル生成を停止する。\n     * アニメーションは続行される。\n     */\n    closeValve() {\n        if (!this._isOpenValve)\n            return;\n        this._isOpenValve = false;\n        this.warnValve();\n    }\n    warnValve() {\n        if (!this._isLoop)\n            return;\n        console.warn(\"ParticleGenerator : ループ指定中にバルブ開閉操作を行いました。この操作はループ指定中には反映されません。\");\n        console.trace();\n    }\n    /**\n     * アニメーションに伴い、新規パーティクルを追加する。\n     * @param delta\n     */\n    addParticle(delta) {\n        if (!this._isOpenValve)\n            return;\n        this.elapsedFromGenerate += delta;\n        while (this.elapsedFromGenerate > this._particleInterval) {\n            this.elapsedFromGenerate -= this._particleInterval;\n            //すでに寿命切れのパーティクルは生成をスキップ。\n            if (this.elapsedFromGenerate > (1.0 / this.speedPerSec) * 1000) {\n                continue;\n            }\n            const particle = this.generate();\n            const move = (this.elapsedFromGenerate * this.speedPerSec) / 1000;\n            if (particle)\n                particle.add(move);\n        }\n    }\n    /**\n     * パーティクルの位置を経過時間分移動する。\n     * @param delta 前回アニメーションが実行されてからの経過時間\n     */\n    move(delta) {\n        const movement = (delta / 1000) * this.speedPerSec;\n        this.particles.forEach(p => {\n            p.add(movement);\n        });\n    }\n    /**\n     * パーティクルを1つ追加する。\n     */\n    generate() {\n        this.pathSelectionCount = (this.pathSelectionCount + 1) % this.path.length;\n        //発生確率に応じて生成の可否を判定する。\n        if (this._probability !== 1.0) {\n            if (Math.random() > this._probability)\n                return null;\n        }\n        const path = this.getPath(this.pathSelectionCount);\n        const particle = this.generateParticle(path);\n        this.particles.push(particle);\n        particle.visible = this._visible;\n        if (this._ease != null) {\n            particle.ease = this._ease;\n        }\n        return particle;\n    }\n    getPath(count) {\n        let index;\n        switch (this.pathSelectType) {\n            case PathSelectType.Sequential:\n                index = count;\n                break;\n            case PathSelectType.Random:\n                index = Math.floor(Math.random() * this.path.length);\n                break;\n        }\n        return this.path[index];\n    }\n    /**\n     * パーティクルを生成する。\n     * generate関数の内部処理。\n     * @param path\n     */\n    generateParticle(path) {\n        const particle = new _Particle__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"](path);\n        //TODO ここでコンテナに挿入。\n        return particle;\n    }\n    /**\n     * 経路上にパーティクルを敷き詰める。\n     */\n    generateAll() {\n        //パーティクルの最大生存期間 単位ミリ秒\n        let lifeTime = 1000.0 / this.speedPerSec;\n        while (lifeTime > 0.0) {\n            const particle = this.generate();\n            if (particle)\n                particle.update((lifeTime / 1000) * this.speedPerSec);\n            lifeTime -= this._particleInterval;\n        }\n        this.elapsedFromGenerate = 0;\n    }\n    /**\n     * 寿命切れのパーティクルを一括で削除する。\n     */\n    removeCompletedParticles() {\n        const removed = this.particles\n            .filter(p => {\n            return p.ratio >= 1.0;\n        })\n            .forEach(p => {\n            p.dispose();\n        });\n        this.particles = this.particles.filter(p => {\n            return p.ratio < 1.0;\n        });\n    }\n    /**\n     * 終端にたどり着いたパーティクルを始点に巻き戻す。\n     */\n    rollupParticles() {\n        this.particles.forEach(p => {\n            p.update(p.ratio % 1);\n        });\n    }\n    /**\n     * 指定されたパーティクルを削除する。\n     * @param particle\n     */\n    removeParticle(particle) {\n        const i = this.particles.indexOf(particle);\n        const popped = this.particles.splice(i, 1);\n        popped.forEach(val => {\n            val.dispose();\n        });\n    }\n    /**\n     * 全てのパーティクルを削除する。\n     */\n    removeAllParticles() {\n        this.particles.forEach(p => {\n            p.dispose();\n        });\n        this.particles = [];\n    }\n    /**\n     * 生成インターバルと経路上のパーティクル数から移動スピードを算出し設定する。\n     * loop時に破綻しない値が得られる。\n     * @param interval\n     * @param particleNum\n     */\n    setSpeed(interval, particleNum) {\n        this._particleInterval = interval;\n        this.speedPerSec = _ParticleGeneratorUtility__WEBPACK_IMPORTED_MODULE_2__[\"ParticleGeneratorUtility\"].getSpeed(interval, particleNum);\n    }\n    /**\n     * 移動スピードと経路上のパーティクル数から生成インターバルを算出し設定する。\n     * loop時に破綻しない値が得られる。\n     * @param speed\n     * @param particleNum\n     */\n    setInterval(speed, particleNum) {\n        this.speedPerSec = speed;\n        this._particleInterval = _ParticleGeneratorUtility__WEBPACK_IMPORTED_MODULE_2__[\"ParticleGeneratorUtility\"].getInterval(speed, particleNum);\n    }\n    /**\n     * パーティクル生成の停止とパーティクルの破棄を行う。\n     */\n    dispose() {\n        this.stop();\n        this.isDisposed = true;\n        this.removeAllParticles();\n        this.particles = null;\n        this.path = null;\n    }\n    get particleInterval() {\n        return this._particleInterval;\n    }\n    set particleInterval(value) {\n        if (this._particleInterval === value)\n            return;\n        this._particleInterval = value;\n        if (this._isLoop) {\n            console.warn(\"ParticleGenerator : ループ指定中にパーティクル生成間隔を再設定しても反映されません。設定を反映するためにパーティクルを削除して再生成してください。\");\n            console.trace();\n        }\n    }\n    get visible() {\n        return this._visible;\n    }\n    set visible(value) {\n        this._visible = value;\n        for (let i in this.particles) {\n            this.particles[i].visible = this._visible;\n        }\n    }\n    get isLoop() {\n        return this._isLoop;\n    }\n    set isLoop(value) {\n        if (value === this._isLoop)\n            return;\n        this._isLoop = value;\n        if (this._isLoop) {\n            this.removeAllParticles();\n        }\n        //再生中なら一旦停止して再度再生\n        if (this.isPlaying) {\n            this.stop();\n            this.play();\n        }\n    }\n    get ease() {\n        return this._ease;\n    }\n    get probability() {\n        return this._probability;\n    }\n    set probability(value) {\n        this._probability = value;\n    }\n    /**\n     * 各パーティクルのEase関数を更新する。\n     * @param ease イージング関数。\n     * @param override 現存するパーティクルのEase関数を上書きするか否か。規定値はtrue。\n     */\n    updateEase(ease, override = true) {\n        this._ease = ease;\n        if (!override && this._isLoop) {\n            console.warn(\"ParticleGenerator : ループ指定中にEase関数を再設定すると、既存のパーティクルのEase関数は常に上書きされます。\");\n            console.trace();\n        }\n        if (override || this._isLoop) {\n            this.particles.forEach(p => {\n                p.ease = ease;\n            });\n        }\n    }\n}\nvar PathSelectType;\n(function (PathSelectType) {\n    PathSelectType[PathSelectType[\"Random\"] = 0] = \"Random\";\n    PathSelectType[PathSelectType[\"Sequential\"] = 1] = \"Sequential\";\n})(PathSelectType || (PathSelectType = {}));\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleGenerator.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleGeneratorUtility.js":
/*!************************************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleGeneratorUtility.js ***!
  \************************************************************************/
/*! exports provided: ParticleGeneratorUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleGeneratorUtility\", function() { return ParticleGeneratorUtility; });\n/**\n * ParticleGeneratorで利用する各種の値を算出するヘルパークラス\n */\nclass ParticleGeneratorUtility {\n    /**\n     * パーティクルの生成インターバルと経路上の数から、移動速度を算出する\n     * @param interval\n     * @param particleNum\n     */\n    static getSpeed(interval, particleNum) {\n        return (1.0 / (interval * particleNum)) * 1000;\n    }\n    /**\n     * パーティクルの移動速度と経路上の数から、生成インターバルを算出する\n     * @param speed\n     * @param particleNum\n     */\n    static getInterval(speed, particleNum) {\n        return (1.0 / speed / particleNum) * 1000;\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleGeneratorUtility.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/ParticleWay.js":
/*!***********************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/ParticleWay.js ***!
  \***********************************************************/
/*! exports provided: ParticleWay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ParticleWay\", function() { return ParticleWay; });\n/* harmony import */ var _BezierUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BezierUtil */ \"./node_modules/particle-waypoint/bin/BezierUtil.js\");\n/**\n * 中間点の座標の算出が可能な経路を表すクラス\n */\n\nclass ParticleWay {\n    /**\n     * コンストラクタ\n     * @param points 経路を表す座標の配列。要素数によってどのようなパスかが判定される。\n     *   要素数2 : 2次元パス\n     *   要素数3 : 3次元パス\n     *   要素数6 : 平面3次元ベジェ曲線\n     */\n    constructor(points) {\n        this.name = \"\";\n        this.points = points;\n    }\n    /**\n     * 経路の座標配列を更新する。\n     * @param points\n     */\n    set points(points) {\n        this._points = points;\n        if (this._points.length === 0) {\n            console.warn(\"ParticleWay : 長さゼロの配列が指定されました。座標が算出できないため、getPoint関数は常にnullを返します。\");\n        }\n        if (this._points.length === 1) {\n            console.warn(\"ParticleWay : 長さ1の配列が指定されました。座標が算出できないため、getPoint関数は常に固定の座標を返します。\");\n        }\n        const sumTable = new Array(this._points.length).fill(0);\n        this._points.forEach((val, index, array) => {\n            if (index === 0)\n                return;\n            sumTable[index] =\n                ParticleWay.getDistance(array[index - 1], val) + sumTable[index - 1];\n        });\n        const total = sumTable[sumTable.length - 1];\n        this._ratioTable = sumTable.map(val => {\n            return val / total;\n        });\n    }\n    get points() {\n        return this._points;\n    }\n    /**\n     * 2点間の距離を取得する。\n     * @param pos1\n     * @param pos2\n     */\n    static getDistance(pos1, pos2) {\n        const dx = pos2[0] - pos1[0];\n        const dy = pos2[1] - pos1[1];\n        switch (pos2.length) {\n            case 6:\n                return _BezierUtil__WEBPACK_IMPORTED_MODULE_0__[\"BezierUtil\"].getLengthFromCommand(pos1, pos2);\n            case 3:\n                const dz = pos2[2] - pos1[2];\n                return Math.sqrt(dx * dx + dy * dy + dz * dz);\n            case 2:\n                return Math.sqrt(dx * dx + dy * dy);\n        }\n    }\n    /**\n     * 経路上の中間点座標を取得する。\n     * @param t 算出する座標の位置。0.0(始点) ~ 1.0(終点)の間。\n     */\n    getPoint(t) {\n        if (!this._points || this._points.length === 0) {\n            return null;\n        }\n        if (this._points.length === 1) {\n            return [...this._points[0]];\n        }\n        const n = this._points.length;\n        t = Math.min(t, 1.0);\n        if (t === 1.0) {\n            let result = this._points[n - 1];\n            if (result.length === 6) {\n                result = result.slice(-2);\n            }\n            return [...result];\n        }\n        t = Math.max(t, 0.0);\n        if (t === 0.0)\n            return [...this._points[0]];\n        let i = 1;\n        for (i; i < n; i++) {\n            if (this._ratioTable[i] >= t)\n                break;\n        }\n        i--;\n        const floorPoint = this._points[i];\n        const ceilPoint = this._points[i + 1];\n        const ratioBase = this._ratioTable[i];\n        return this.getCenterPoint(floorPoint, ceilPoint, (t - ratioBase) / (this._ratioTable[i + 1] - ratioBase));\n    }\n    /**\n     * 線分上の中間点座標を取得する\n     * @param pos1 線分の始点\n     * @param pos2 線分の終点\n     * @param t 算出する座標の位置。0.0(始点) ~ 1.0(終点)の間。\n     */\n    getCenterPoint(pos1, pos2, t) {\n        const rt = 1.0 - t;\n        let pos = [pos1[0] * rt + pos2[0] * t, pos1[1] * rt + pos2[1] * t];\n        switch (pos2.length) {\n            case 6:\n                return _BezierUtil__WEBPACK_IMPORTED_MODULE_0__[\"BezierUtil\"].getPointFromCommand(t, pos1, pos2);\n            case 3:\n                pos.push(pos1[2] * rt + pos2[2] * t);\n                return pos;\n            case 2:\n                return pos;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/ParticleWay.js?");

/***/ }),

/***/ "./node_modules/particle-waypoint/bin/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/particle-waypoint/bin/index.js ***!
  \*****************************************************/
/*! exports provided: Particle, ParticleWay, ParticleGenerator, PathSelectType, BezierUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./node_modules/particle-waypoint/bin/Particle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Particle\", function() { return _Particle__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"]; });\n\n/* harmony import */ var _ParticleWay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParticleWay */ \"./node_modules/particle-waypoint/bin/ParticleWay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParticleWay\", function() { return _ParticleWay__WEBPACK_IMPORTED_MODULE_1__[\"ParticleWay\"]; });\n\n/* harmony import */ var _ParticleGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParticleGenerator */ \"./node_modules/particle-waypoint/bin/ParticleGenerator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParticleGenerator\", function() { return _ParticleGenerator__WEBPACK_IMPORTED_MODULE_2__[\"ParticleGenerator\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PathSelectType\", function() { return _ParticleGenerator__WEBPACK_IMPORTED_MODULE_2__[\"PathSelectType\"]; });\n\n/* harmony import */ var _BezierUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUtil */ \"./node_modules/particle-waypoint/bin/BezierUtil.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BezierUtil\", function() { return _BezierUtil__WEBPACK_IMPORTED_MODULE_3__[\"BezierUtil\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/particle-waypoint/bin/index.js?");

/***/ }),

/***/ "./node_modules/raf-ticker/bin/EventDispatcher.js":
/*!********************************************************!*\
  !*** ./node_modules/raf-ticker/bin/EventDispatcher.js ***!
  \********************************************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventDispatcher\", function() { return EventDispatcher; });\n/**\n * Based on mrdoob/eventdispatcher.js\n * https://github.com/mrdoob/eventdispatcher.js\n * Copyright（c）mrdoob / http://mrdoob.com/\n * Licensed under MIT ( https://github.com/mrdoob/eventdispatcher.js/blob/master/LICENSE )\n */\nclass EventDispatcher {\n    addEventListener(type, listener) {\n        if (this._listeners === undefined)\n            this._listeners = {};\n        const listeners = this._listeners;\n        if (listeners[type] === undefined) {\n            listeners[type] = [];\n        }\n        if (listeners[type].indexOf(listener) === -1) {\n            listeners[type].push(listener);\n        }\n    }\n    hasEventListener(type, listener) {\n        if (this._listeners === undefined)\n            return false;\n        const listeners = this._listeners;\n        return (listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1);\n    }\n    removeEventListener(type, listener) {\n        if (this._listeners === undefined)\n            return;\n        const listeners = this._listeners;\n        const listenerArray = listeners[type];\n        if (listenerArray !== undefined) {\n            const index = listenerArray.indexOf(listener);\n            if (index !== -1) {\n                listenerArray.splice(index, 1);\n            }\n        }\n    }\n    dispatchEvent(event) {\n        if (this._listeners === undefined)\n            return;\n        const listeners = this._listeners;\n        const listenerArray = listeners[event.type];\n        if (listenerArray !== undefined) {\n            event.target = this;\n            const array = listenerArray.slice(0);\n            for (var i = 0, l = array.length; i < l; i++) {\n                array[i].call(this, event);\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/bin/EventDispatcher.js?");

/***/ }),

/***/ "./node_modules/raf-ticker/bin/RAFTicker.js":
/*!**************************************************!*\
  !*** ./node_modules/raf-ticker/bin/RAFTicker.js ***!
  \**************************************************/
/*! exports provided: RAFTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTicker\", function() { return RAFTicker; });\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./node_modules/raf-ticker/bin/RAFTickerEvent.js\");\n/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDispatcher */ \"./node_modules/raf-ticker/bin/EventDispatcher.js\");\n\n\nclass RAFTicker {\n    static initialize() {\n        this._dispatcher = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__[\"EventDispatcher\"]();\n        RAFTicker.onTick(performance.now());\n    }\n    static addEventListener(type, listener) {\n        this._dispatcher.addEventListener(type, listener);\n    }\n    static hasEventListener(type, listener) {\n        return this._dispatcher.hasEventListener(type, listener);\n    }\n    static removeEventListener(type, listener) {\n        this._dispatcher.removeEventListener(type, listener);\n    }\n}\nRAFTicker.onTick = (timestamp) => {\n    if (RAFTicker._lastUpdateTimestamp == null) {\n        RAFTicker._lastUpdateTimestamp = timestamp;\n    }\n    const delta = timestamp - RAFTicker._lastUpdateTimestamp;\n    RAFTicker._dispatcher.dispatchEvent(new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onBeforeTick, timestamp, delta));\n    RAFTicker._dispatcher.dispatchEvent(new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].tick, timestamp, delta));\n    RAFTicker._dispatcher.dispatchEvent(new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onAfterTick, timestamp, delta));\n    RAFTicker._lastUpdateTimestamp = timestamp;\n    RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);\n};\nRAFTicker.initialize();\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/bin/RAFTicker.js?");

/***/ }),

/***/ "./node_modules/raf-ticker/bin/RAFTickerEvent.js":
/*!*******************************************************!*\
  !*** ./node_modules/raf-ticker/bin/RAFTickerEvent.js ***!
  \*******************************************************/
/*! exports provided: RAFTickerEventType, RAFTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEventType\", function() { return RAFTickerEventType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEvent\", function() { return RAFTickerEvent; });\nvar RAFTickerEventType;\n(function (RAFTickerEventType) {\n    RAFTickerEventType[\"onBeforeTick\"] = \"onBeforeTick\";\n    RAFTickerEventType[\"tick\"] = \"tick\";\n    RAFTickerEventType[\"onAfterTick\"] = \"onAfterTick\";\n})(RAFTickerEventType || (RAFTickerEventType = {}));\nclass RAFTickerEvent {\n    constructor(type, timestamp, delta) {\n        this.type = type;\n        this.timestamp = timestamp;\n        this.delta = delta;\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/bin/RAFTickerEvent.js?");

/***/ }),

/***/ "./node_modules/raf-ticker/bin/index.js":
/*!**********************************************!*\
  !*** ./node_modules/raf-ticker/bin/index.js ***!
  \**********************************************/
/*! exports provided: RAFTicker, RAFTickerEventType, RAFTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RAFTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTicker */ \"./node_modules/raf-ticker/bin/RAFTicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTicker\", function() { return _RAFTicker__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"]; });\n\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./node_modules/raf-ticker/bin/RAFTickerEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEventType\", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEvent\", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEvent\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/raf-ticker/bin/index.js?");

/***/ })

/******/ });