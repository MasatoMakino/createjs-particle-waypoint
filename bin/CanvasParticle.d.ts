/// <reference types="easeljs" />
import { Particle } from "particle-waypoint";
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;
export declare class CanvasParticle extends Particle {
    protected parent: Container;
    protected bitmap: DisplayObject;
    init(parent: Container, bitmap: DisplayObject): void;
    update(t: number): number;
    dispose(): void;
}
//# sourceMappingURL=CanvasParticle.d.ts.map