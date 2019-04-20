import { BezierUtil, ParticleWay } from "particle-waypoint";
import { CanvasParticleGenerator } from "../bin/index";
import { getHeartPath, getCircle, getTriangle } from "./SamplePath";
import * as dat from "dat.gui";

const onDomContentsLoaded = () => {
  const stage = initStage();
  const way = initWay();
  const passage = initPassage(way, stage);
  const generator = initGenerator(way, stage);
  initGUI(generator, passage);
};

const initStage = () => {
  //ステージ更新処理
  const updateStage = () => {
    stage.update();
  };

  const canvas = document.getElementById("appCanvas");
  const stage = new createjs.Stage(canvas);
  stage.enableMouseOver();

  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", updateStage);
  return stage;
};

const initWay = () => {
  const points = getHeartPath();
  const wayPoint = new ParticleWay(BezierUtil.differentiate(points));
  return wayPoint;
};

const initPassage = (way, stage) => {
  const passage = new createjs.Shape();
  writePassage(passage, way);
  stage.addChild(passage);
  return passage;
};

const writePassage = (passage, way) => {
  passage.graphics.clear();
  passage.graphics.ss(1).beginStroke("rgba(255,0,0,0.25)");
  const g = passage.graphics;
  for (let i = 0; i < way.points.length; i++) {
    if (i === 0) {
      g.mt(...way.points[i]);
      continue;
    }
    g.lineTo(...way.points[i]);
  }
  g.ef();
};

const initGenerator = (way, stage) => {
  const getShape = r => {
    const shape = new createjs.Shape();
    shape.graphics
      .beginFill("#00F")
      .drawCircle(0, 0, r)
      .endFill();
    return shape;
  };

  const shapes = [];
  const n = 12;
  for (let i = 0; i < n; i++) {
    shapes.push(getShape(i * 0.125 + 1));
  }

  const generator = new CanvasParticleGenerator(stage, way, shapes, {
    ease: createjs.Ease.cubicOut
  });
  generator.setSpeed(166, n * 8);
  generator.play();
  return generator;
};

const initGUI = (generator, passage) => {
  const prop = {
    isPlay: true,
    path: "heart",
    ease: "cubicOut",
    valve: true,
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
    writePassage(passage, generator.path);
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
