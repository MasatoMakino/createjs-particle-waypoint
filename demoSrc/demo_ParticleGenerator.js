import { BezierUtil, ParticleWay } from "particle-waypoint";
import { CanvasParticleGenerator } from "../bin/index";
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
  const getShape = i => {
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
    ease: createjs.Ease.cubicInOut
  });
  generator.setSpeed(166, n * 6);
  generator.play();
  return generator;
};

/**
 * デモのパラメーターを操作するGUIを初期化する。
 * @param generator
 */
const initGUI = generator => {
  const prop = {
    isPlay: true,
    path: "heart",
    ease: "cubicInOut",
    valve: true,
    visiblePassage: true,
    clear: () => {
      generator.removeAllParticles();
    }
  };
  const gui = new dat.GUI();
  gui.add(generator, "particleInterval", 33, 1000);
  gui.add(generator, "speedPerSec", 0.0001, 0.5);
  gui.add(prop, "ease", ["cubicOut", "cubicInOut", "liner"]).onChange(() => {
    let ease = null;
    switch (prop.ease) {
      case "cubicOut":
        ease = createjs.Ease.cubicOut;
        break;
      case "cubicInOut":
        ease = createjs.Ease.cubicInOut;
        break;
    }
    generator.updateEase(ease, generator.isLoop);
  });
  gui.add(prop, "path", ["heart", "circle", "triangle"]).onChange(() => {
    let path;
    switch (prop.path) {
      case "heart":
        path = BezierUtil.differentiate(getHeartPath());
        break;
      case "circle":
        path = BezierUtil.differentiate(getCircle());
        break;
      case "triangle":
        path = getTriangle();
        break;
    }
    generator.path.points = path;
  });
  gui.add(prop, "isPlay").onChange(() => {
    if (prop.isPlay) {
      generator.play();
    } else {
      generator.stop();
    }
  });
  gui.add(generator, "isLoop");
  gui.add(prop, "valve").onChange(() => {
    if (prop.valve) {
      generator.openValve();
    } else {
      generator.closeValve();
    }
  });
  gui.add(prop, "visiblePassage").onChange(() => {
    if (prop.visiblePassage) {
      generator.path.showPassage();
    } else {
      generator.path.hidePassage();
    }
  });
  gui.add(prop, "clear");
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
