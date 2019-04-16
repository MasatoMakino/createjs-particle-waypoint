import { ParticleWay } from "particle-waypoint";
import { CanvasParticleGenerator } from "../bin/index";
import * as dat from "dat.gui";

const onDomContentsLoaded = () => {
  const stage = initStage();
  const generator = initWay(stage);
  initGUI(generator);
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

const initWay = stage => {
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
    ease: createjs.Ease.cubicOut
  });
  generator.setSpeed(600, 20);
  generator.play();
  return generator;
};

const initGUI = generator => {
  const prop = {
    isPlay: true,
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
