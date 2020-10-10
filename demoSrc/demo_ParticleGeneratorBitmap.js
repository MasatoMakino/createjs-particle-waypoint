import { CanvasParticleGenerator } from "../";
import { initBodyStyle, initStage, initWay } from "./common";
import { initGUI } from "./gui";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  initBodyStyle();
  const stage = initStage();
  stage.snapToPixelEnabled = true;
  const way = initWay(stage);
  const generator = initGenerator(way, stage);
  initGUI(generator);
};

/**
 * パーティクル生成機を初期化する。
 * @param way
 * @param stage
 * @return {CanvasParticleGenerator}
 */
const initGenerator = (way, stage) => {
  const bitmap = new createjs.Bitmap("./circle.png");
  const generator = new CanvasParticleGenerator(stage, way, bitmap, {
    ease: createjs.Ease.cubicInOut,
  });
  generator.animator.setSpeed(166, 1 * 6);
  generator.play();
  return generator;
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
