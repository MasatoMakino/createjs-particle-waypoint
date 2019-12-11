/// <reference types="easeljs" />
import { ParticleWay } from "particle-waypoint";
import Container = createjs.Container;
export declare class CanvasParticleWay extends ParticleWay {
    private passage;
    private passageColor;
    constructor(points: number[][], option?: {
        parent?: Container;
        passageColor?: string;
    });
    private initPassage;
    private drawPassage;
    set points(points: number[][]);
    showPassage(): void;
    hidePassage(): void;
}
//# sourceMappingURL=CanvasParticleWay.d.ts.map