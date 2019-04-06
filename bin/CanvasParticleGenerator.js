import { CanvasParticle } from "./CanvasParticle";
import { ParticleGenerator } from "particle-waypoint";
export class CanvasParticleGenerator extends ParticleGenerator {
    constructor(parent, path, map, option) {
        super(path, option);
        this.parent = parent;
        this.map = map;
    }
    generateParticle(path) {
        const particle = new CanvasParticle(this.path);
        particle.init(this.parent, this.map);
        return particle;
    }
}
