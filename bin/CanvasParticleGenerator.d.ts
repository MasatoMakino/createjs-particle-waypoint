/// <reference types="easeljs" />
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;
import { ParticleGenerator, Particle, ParticleWay } from "particle-waypoint";
export declare class CanvasParticleGenerator extends ParticleGenerator {
    protected parent: Container;
    protected map: DisplayObject;
    constructor(parent: Container, path: ParticleWay, map: DisplayObject);
    protected generateParticle(path: ParticleWay): Particle;
}
//# sourceMappingURL=CanvasParticleGenerator.d.ts.map