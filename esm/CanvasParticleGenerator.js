import { CanvasParticle } from "./CanvasParticle";
import { ParticleGenerator } from "particle-waypoint";
export class CanvasParticleGenerator extends ParticleGenerator {
    constructor(parent, path, map, option) {
        super(path, option);
        this.mapCounter = 0;
        this._rangeR = 0.0;
        this._rangeRotationSpeed = 0.0;
        this.parent = parent;
        if (option) {
            if (option.rangeR)
                this._rangeR = option.rangeR;
            if (option.rangeRotationSpeed)
                this._rangeRotationSpeed = option.rangeRotationSpeed;
        }
        if (Array.isArray(map)) {
            if (map.length === 0) {
                console.warn("CanvasParticleGenerator : オプションとして渡されたDisplayObject配列が空です。このクラスは動作しますが、一切の表示を行いません。");
                console.trace();
            }
            this.map = map;
        }
        else {
            this.map = [map];
        }
    }
    generateParticle(path) {
        const particle = new CanvasParticle(path);
        particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    }
    generateAll() {
        this.mapCounter = 0;
        super.generateAll();
    }
    get rangeRotationSpeed() {
        return this._rangeRotationSpeed;
    }
    set rangeRotationSpeed(value) {
        this._rangeRotationSpeed = value;
    }
    get rangeR() {
        return this._rangeR;
    }
    set rangeR(value) {
        this._rangeR = value;
    }
}
