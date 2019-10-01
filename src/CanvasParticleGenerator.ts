import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;

import { CanvasParticle } from "./CanvasParticle";
import {
  ParticleGenerator,
  Particle,
  ParticleWay,
  ParticleGeneratorOption
} from "particle-waypoint";

export class CanvasParticleGenerator extends ParticleGenerator {
  protected parent: Container;
  protected map: DisplayObject[]; //パーティクルに使用するテクスチャ配列。ビットマップもしくは描画済みのShapeを利用する。
  private mapCounter: number = 0;

  constructor(
    parent: Container,
    path: ParticleWay,
    map: DisplayObject | DisplayObject[],
    option?: ParticleGeneratorOption
  ) {
    super(path, option);
    this.parent = parent;

    if (Array.isArray(map)) {
      this.map = map;
    } else {
      this.map = [map];
    }
  }

  protected generateParticle(path: ParticleWay): Particle {
    const particle = new CanvasParticle(this.path);
    particle.init(this.parent, this.map[this.mapCounter]);
    this.mapCounter = (this.mapCounter += 1) % this.map.length;
    return particle;
  }

  public generateAll(): void {
    this.mapCounter = 0;
    super.generateAll();
  }
}
