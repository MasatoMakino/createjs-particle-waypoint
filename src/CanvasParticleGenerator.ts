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

  private _rangeR: number = 0.0;
  private _rangeRotationSpeed: number = 0.0;

  constructor(
    parent: Container,
    path: ParticleWay | ParticleWay[],
    map: DisplayObject | DisplayObject[],
    option?: CanvasParticleGeneratorOption
  ) {
    super(path, option);
    this.parent = parent;

    if (option) {
      if (option.rangeR) this._rangeR = option.rangeR;
      if (option.rangeRotationSpeed)
        this._rangeRotationSpeed = option.rangeRotationSpeed;
    }

    if (Array.isArray(map)) {
      if (map.length === 0) {
        console.warn(
          "CanvasParticleGenerator : オプションとして渡されたDisplayObject配列が空です。このクラスは動作しますが、一切の表示を行いません。"
        );
        console.trace();
      }

      this.map = map;
    } else {
      this.map = [map];
    }
  }

  protected generateParticle(path: ParticleWay): Particle {
    const particle = new CanvasParticle(path);
    particle.init(
      this.parent,
      this.map[this.mapCounter],
      this._rangeR,
      this._rangeRotationSpeed
    );
    this.mapCounter = (this.mapCounter += 1) % this.map.length;
    return particle;
  }

  public generateAll(): void {
    this.mapCounter = 0;
    super.generateAll();
  }

  get rangeRotationSpeed(): number {
    return this._rangeRotationSpeed;
  }

  set rangeRotationSpeed(value: number) {
    this._rangeRotationSpeed = value;
  }
  get rangeR(): number {
    return this._rangeR;
  }

  set rangeR(value: number) {
    this._rangeR = value;
  }
}

export interface CanvasParticleGeneratorOption extends ParticleGeneratorOption {
  rangeR?: number;
  rangeRotationSpeed?: number;
}
