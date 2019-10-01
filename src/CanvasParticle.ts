import { Particle } from "particle-waypoint";
import Container = createjs.Container;
import DisplayObject = createjs.DisplayObject;

export class CanvasParticle extends Particle {
  protected parent: Container;
  protected bitmap: DisplayObject;

  init(parent: Container, bitmap: DisplayObject): void {
    this.parent = parent;
    this.bitmap = bitmap.clone();
    this.parent.addChild(this.bitmap);

    this.bitmap.mouseEnabled = false;
  }

  update(t: number): number {
    const n = super.update(t);
    const pos = this.path.getPoint(n);
    this.bitmap.x = pos[0];
    this.bitmap.y = pos[1];
    return n;
  }

  dispose(): void {
    super.dispose();
    if (this.parent && this.bitmap.parent) {
      this.bitmap.parent.removeChild(this.bitmap);
    }
    this.parent = null;
    this.bitmap = null;
  }
}
