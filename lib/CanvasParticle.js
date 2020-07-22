"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasParticle = void 0;
var particle_waypoint_1 = require("particle-waypoint");
var CanvasParticle = /** @class */ (function (_super) {
    __extends(CanvasParticle, _super);
    function CanvasParticle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.r = 0.0;
        //媒介変数tに応じた回転量
        _this.rotationSpeedSin = 0.0;
        _this.rotationSpeedCos = 0.0;
        //初期回転量
        _this.rotationSin = 0.0;
        _this.rotationCos = 0.0;
        return _this;
    }
    CanvasParticle.prototype.init = function (parent, bitmap, rangeR, rangeRotationSpeed) {
        this.parent = parent;
        this.bitmap = bitmap.clone();
        this.parent.addChild(this.bitmap);
        this.r = rangeR * Math.random();
        this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSin = Math.random() * 2 * Math.PI;
        this.rotationCos = Math.random() * 2 * Math.PI;
        this.bitmap.mouseEnabled = false;
    };
    CanvasParticle.prototype.update = function (t) {
        var n = _super.prototype.update.call(this, t);
        var pos = this.path.getPoint(n);
        this.bitmap.x = pos[0];
        this.bitmap.y = pos[1];
        if (this.r > 0.0) {
            var sin = this.rotationSpeedSin * t + this.rotationSin;
            var cos = this.rotationSpeedCos * t + this.rotationCos;
            this.bitmap.x += Math.cos(cos) * this.r;
            this.bitmap.y += Math.sin(sin) * this.r;
        }
        return n;
    };
    CanvasParticle.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.parent && this.bitmap.parent) {
            this.bitmap.parent.removeChild(this.bitmap);
        }
        this.parent = null;
        this.bitmap = null;
    };
    return CanvasParticle;
}(particle_waypoint_1.Particle));
exports.CanvasParticle = CanvasParticle;
