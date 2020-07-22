/// <reference types="easeljs" />
import {Particle} from "particle-waypoint";
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;

export declare class CanvasParticle extends Particle {
    protected parent: Container;
    protected bitmap: DisplayObject;
    protected r: number;
    protected rotationSpeedSin: number;
    protected rotationSpeedCos: number;
    protected rotationSin: number;
    protected rotationCos: number;
    init(parent: Container, bitmap: DisplayObject, rangeR: number, rangeRotationSpeed: number): void;
    update(t: number): number;
    dispose(): void;
}
//# sourceMappingURL=CanvasParticle.d.ts.map