/// <reference types="easeljs" />
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;
import { ParticleGenerator, Particle, ParticleWay, ParticleGeneratorOption } from "particle-waypoint";
export declare class CanvasParticleGenerator extends ParticleGenerator {
    protected parent: Container;
    protected map: DisplayObject;
    constructor(parent: Container, path: ParticleWay, map: DisplayObject, option?: ParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
}
//# sourceMappingURL=CanvasParticleGenerator.d.ts.map