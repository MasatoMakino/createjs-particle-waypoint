import { ParticleWay } from "particle-waypoint";
import { CanvasParticleGenerator } from "../bin/index";

const onDomContentsLoaded = () => {
  //ステージ更新処理
  const updateStage = () => {
    stage.update();
  };

  const canvas = document.getElementById("appCanvas");
  const stage = new createjs.Stage(canvas);
  stage.enableMouseOver();

  const shape = new createjs.Shape();
  shape.graphics
    .beginFill("#00F")
    .drawCircle(0, 0, 1)
    .endFill();

  const points = [[100, 100], [100, 200], [200, 200], [200, 300]];
  const wayPoint = new ParticleWay(points);

  const way = new createjs.Shape();
  const g = way.graphics;
  g.beginStroke("#F0F");
  g.moveTo(points[0][0], points[0][1]);
  points.forEach((p, index) => {
    if (index === 0) {
      g.moveTo(p[0], p[1]);
      return;
    }
    g.lineTo(p[0], p[1]);
  });
  stage.addChild(way);

  const generator = new CanvasParticleGenerator(stage, wayPoint, shape, {
    ease: createjs.Ease.cubicOut,
    isLoop: true
  });
  generator.particleInterval = 600;
  generator.speedPerSec = 0.01;

  // generator.generateAll();
  generator.play();
  // generator.removeAllParticles();

  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", updateStage);
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
