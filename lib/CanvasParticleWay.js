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
exports.CanvasParticleWay = void 0;
var particle_waypoint_1 = require("particle-waypoint");
var Shape = createjs.Shape;
var CanvasParticleWay = /** @class */ (function (_super) {
    __extends(CanvasParticleWay, _super);
    function CanvasParticleWay(points, option) {
        var _this = _super.call(this, points) || this;
        _this.passageColor = "rgba(255, 0, 0, 0.25)";
        if (!option)
            return _this;
        if (option.passageColor) {
            _this.passageColor = option.passageColor;
        }
        if (option.parent) {
            _this.initPassage(option.parent);
        }
        return _this;
    }
    CanvasParticleWay.prototype.initPassage = function (parent) {
        if (this.passage)
            return;
        this.passage = new Shape();
        this.passage.visible = false;
        parent.addChild(this.passage);
        this.drawPassage();
    };
    CanvasParticleWay.prototype.onSetPoints = function () {
        _super.prototype.onSetPoints.call(this);
        this.drawPassage();
    };
    CanvasParticleWay.prototype.drawPassage = function () {
        if (!this.passage)
            return;
        if (!this.points)
            return;
        if (this.points.length <= 1)
            return;
        var isBezier = this.points[1].length === 6;
        var g = this.passage.graphics;
        g.clear();
        g.ss(1).beginStroke(this.passageColor);
        this.points.forEach(function (p, index) {
            if (index === 0) {
                g.mt(p[0], p[1]);
                return;
            }
            if (!isBezier) {
                g.lt(p[0], p[1]);
                return;
            }
            g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
        });
        g.ef();
    };
    CanvasParticleWay.prototype.showPassage = function () {
        if (!this.passage)
            return;
        this.passage.visible = true;
    };
    CanvasParticleWay.prototype.hidePassage = function () {
        if (!this.passage)
            return;
        this.passage.visible = false;
    };
    return CanvasParticleWay;
}(particle_waypoint_1.ParticleWay));
exports.CanvasParticleWay = CanvasParticleWay;
