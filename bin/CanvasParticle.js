import { Particle } from "particle-waypoint";
export class CanvasParticle extends Particle {
    init(parent, bitmap) {
        this.parent = parent;
        this.bitmap = bitmap.clone();
        this.parent.addChild(this.bitmap);
    }
    update(t) {
        super.update(t);
        const pos = this.path.getPoint(t);
        this.bitmap.x = pos[0];
        this.bitmap.y = pos[1];
    }
    dispose() {
        super.dispose();
        if (this.parent && this.bitmap.parent) {
            this.bitmap.parent.removeChild(this.bitmap);
        }
        this.parent = null;
        this.bitmap = null;
    }
}
