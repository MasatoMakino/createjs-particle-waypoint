/// <reference types="easeljs" />
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;
import { ParticleGenerator, Particle, ParticleWay, ParticleGeneratorOption } from "particle-waypoint";
export declare class CanvasParticleGenerator extends ParticleGenerator {
    protected parent: Container;
    protected map: DisplayObject[];
    private mapCounter;
    constructor(parent: Container, path: ParticleWay, map: DisplayObject | DisplayObject[], option?: ParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
    generateAll(): void;
}
//# sourceMappingURL=CanvasParticleGenerator.d.ts.map