/// <reference types="easeljs" />
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;
import {Particle, ParticleGenerator, ParticleGeneratorOption, ParticleWay} from "particle-waypoint";

export declare class CanvasParticleGenerator extends ParticleGenerator {
    protected parent: Container;
    protected map: DisplayObject[];
    private mapCounter;
    private _rangeR;
    private _rangeRotationSpeed;
    constructor(parent: Container, path: ParticleWay | ParticleWay[], map: DisplayObject | DisplayObject[], option?: CanvasParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
    generateAll(): void;
    get rangeRotationSpeed(): number;
    set rangeRotationSpeed(value: number);
    get rangeR(): number;
    set rangeR(value: number);
}
export interface CanvasParticleGeneratorOption extends ParticleGeneratorOption {
    rangeR?: number;
    rangeRotationSpeed?: number;
}
//# sourceMappingURL=CanvasParticleGenerator.d.ts.map