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
exports.CanvasParticleGenerator = void 0;
var CanvasParticle_1 = require("./CanvasParticle");
var particle_waypoint_1 = require("particle-waypoint");
var CanvasParticleGenerator = /** @class */ (function (_super) {
    __extends(CanvasParticleGenerator, _super);
    function CanvasParticleGenerator(parent, path, map, option) {
        var _this = _super.call(this, path, option) || this;
        _this.mapCounter = 0;
        _this._rangeR = 0.0;
        _this._rangeRotationSpeed = 0.0;
        _this.parent = parent;
        if (option) {
            if (option.rangeR)
                _this._rangeR = option.rangeR;
            if (option.rangeRotationSpeed)
                _this._rangeRotationSpeed = option.rangeRotationSpeed;
        }
        if (Array.isArray(map)) {
            if (map.length === 0) {
                console.warn("CanvasParticleGenerator : オプションとして渡されたDisplayObject配列が空です。このクラスは動作しますが、一切の表示を行いません。");
                console.trace();
            }
            _this.map = map;
        }
        else {
            _this.map = [map];
        }
        return _this;
    }
    CanvasParticleGenerator.prototype.generateParticle = function (path) {
        var particle = new CanvasParticle_1.CanvasParticle(path);
        particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    };
    CanvasParticleGenerator.prototype.generateAll = function () {
        this.mapCounter = 0;
        _super.prototype.generateAll.call(this);
    };
    Object.defineProperty(CanvasParticleGenerator.prototype, "rangeRotationSpeed", {
        get: function () {
            return this._rangeRotationSpeed;
        },
        set: function (value) {
            this._rangeRotationSpeed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasParticleGenerator.prototype, "rangeR", {
        get: function () {
            return this._rangeR;
        },
        set: function (value) {
            this._rangeR = value;
        },
        enumerable: false,
        configurable: true
    });
    return CanvasParticleGenerator;
}(particle_waypoint_1.ParticleGenerator));
exports.CanvasParticleGenerator = CanvasParticleGenerator;
