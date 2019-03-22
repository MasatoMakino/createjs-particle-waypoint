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
    .drawCircle(0, 0, 4)
    .endFill();

  const wayPoint = new ParticleWay([
    [100, 100],
    [100, 200],
    [200, 200],
    [200, 300]
  ]);

  const generator = new CanvasParticleGenerator(stage, wayPoint, shape);
  generator.particleInterval = 600;
  generator.speedPerSec = 0.1;

  generator.generateAll();
  generator.play();

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
