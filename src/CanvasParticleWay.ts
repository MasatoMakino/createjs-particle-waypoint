import { ParticleWay } from "particle-waypoint";
import Container = createjs.Container;
import Shape = createjs.Shape;

export class CanvasParticleWay extends ParticleWay {
  private passage: Shape;
  private passageColor: string = "rgba(255, 0, 0, 0.25)";

  constructor(
    points: number[][],
    option?: {
      parent?: Container;
      passageColor?: string;
    }
  ) {
    super(points);

    if (!option) return;
    if (option.passageColor) {
      this.passageColor = option.passageColor;
    }
    if (option.parent) {
      this.initPassage(option.parent);
    }
  }

  private initPassage(parent: Container): void {
    if (this.passage) return;

    this.passage = new Shape();
    this.passage.visible = false;
    parent.addChild(this.passage);
    this.drawPassage();
  }

  private drawPassage(): void {
    if (!this.passage) return;
    if (!super.points) return;
    if (super.points.length <= 1) return;

    const isBezier = super.points[1].length === 6;

    const g = this.passage.graphics;
    g.clear();
    g.ss(1).beginStroke(this.passageColor);
    super.points.forEach((p, index) => {
      if (index === 0) {
        g.mt(p[0], p[1]);
        return;
      }

      if (!isBezier) {
        g.lt(p[0], p[1]);
        return;
      }
      g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
    });
    g.ef();
  }

  set points(points: number[][]) {
    super.points = points;
    this.drawPassage();
  }

  public showPassage(): void {
    if (!this.passage) return;
    this.passage.visible = true;
  }
  public hidePassage(): void {
    if (!this.passage) return;
    this.passage.visible = false;
  }
}
