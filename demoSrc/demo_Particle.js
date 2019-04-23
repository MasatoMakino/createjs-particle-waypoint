import { BezierUtil, ParticleWay } from "particle-waypoint";
import { CanvasParticle, CanvasParticleGenerator } from "../bin/index";
import { getHeartPath, getCircle, getTriangle } from "./SamplePath";
import { initStage, initWay } from "./common";
import * as dat from "dat.gui";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const stage = initStage();
  const way = initWay(stage);
  const particle = initParticle(way, stage);
  initGUI(particle);
};

const initParticle = (way, stage) => {
  const getShape = () => {
    const shape = new createjs.Shape();
    const color = `hsl(0, 100%, 75%)`;
    shape.shadow = new createjs.Shadow(color, 0, 0, 4);
    shape.compositeOperation = "lighter";
    shape.graphics
      .beginFill(color)
      .drawCircle(0, 0, 4)
      .endFill();
    return shape;
  };

  const particle = new CanvasParticle(way);
  particle.init(stage, getShape());
  particle.update(0.0);

  return particle;
};

/**
 * デモのパラメーターを操作するGUIを初期化する。
 * @param particle
 */
const initGUI = particle => {
  const prop = {
    t: 0.0,
    path: "heart",
    ease: "liner",
    visiblePassage: true
  };

  const gui = new dat.GUI();
  gui.add(prop, "t", 0.0, 1.0, 0.001).onChange(() => {
    particle.update(prop.t);
  });

  gui.add(prop, "path", ["heart", "circle", "triangle"]).onChange(() => {
    let path;
    switch (prop.path) {
      case "heart":
        path = BezierUtil.subdivide(getHeartPath());
        break;
      case "circle":
        path = BezierUtil.subdivide(getCircle());
        break;
      case "triangle":
        path = getTriangle();
        break;
    }
    particle.path.points = path;
    particle.update(particle.ratio);
  });

  gui.add(prop, "ease", ["liner", "cubicOut", "cubicInOut"]).onChange(() => {
    let ease = null;
    switch (prop.ease) {
      case "cubicOut":
        ease = createjs.Ease.cubicOut;
        break;
      case "cubicInOut":
        ease = createjs.Ease.cubicInOut;
        break;
    }
    particle.ease = ease;
    particle.update(particle.ratio);
  });

  gui.add(prop, "visiblePassage").onChange(() => {
    if (prop.visiblePassage) {
      particle.path.showPassage();
    } else {
      particle.path.hidePassage();
    }
  });
};
/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
