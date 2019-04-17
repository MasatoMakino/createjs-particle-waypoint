import { CanvasParticle } from "./CanvasParticle";
import { ParticleGenerator } from "particle-waypoint";
export class CanvasParticleGenerator extends ParticleGenerator {
    constructor(parent, path, map, option) {
        super(path, option);
        this.mapCounter = 0;
        this.parent = parent;
        if (Array.isArray(map)) {
            this.map = map;
        }
        else {
            this.map = [map];
        }
    }
    generateParticle(path) {
        const particle = new CanvasParticle(this.path);
        particle.init(this.parent, this.map[this.mapCounter]);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    }
    generateAll() {
        this.mapCounter = 0;
        super.generateAll();
    }
}
