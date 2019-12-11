import { CanvasParticleGenerator, CanvasParticleWay } from "../bin/index";
import { initBodyStyle } from "./common";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  initBodyStyle();
  const points = [
    [100, 100],
    [100, 200],
    [200, 200],
    [200, 300]
  ];
  const wayPoint = new CanvasParticleWay(points);

  const updateStage = () => {
    stage.update();
  };

  const canvas = document.getElementById("appCanvas");
  const stage = new createjs.Stage(canvas);

  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", updateStage);

  const shape = new createjs.Shape();
  shape.graphics
    .beginFill("#F00")
    .drawCircle(0, 0, 4)
    .endFill();

  const generator = new CanvasParticleGenerator(stage, wayPoint, shape);
  generator.play();
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
