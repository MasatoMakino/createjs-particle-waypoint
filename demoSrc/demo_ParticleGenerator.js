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
  const n = 12;
  const getShape = (i) => {
    const angle = (i * 360) / n;
    const shape = new createjs.Shape();
    shape.shadow = new createjs.Shadow(`hsl(${angle}, 100%, 75%)`, 0, 0, 4);
    shape.compositeOperation = "lighter";
    shape.graphics
      .beginFill(`hsl(${angle}, 100%, 75%)`)
      .drawCircle(0, 0, 4)
      .endFill();
    return shape;
  };
  const shapes = [];
  for (let i = 0; i < n; i++) {
    shapes.push(getShape(i));
  }

  const generator = new CanvasParticleGenerator(stage, way, shapes, {
    ease: createjs.Ease.cubicInOut,
  });
  generator.animator.setSpeed(166, n * 6);
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
