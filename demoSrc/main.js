import { BezierUtil, ParticleWay } from "particle-waypoint";
import { CanvasParticleGenerator } from "../bin/index";
import * as dat from "dat.gui";

const onDomContentsLoaded = () => {
  const stage = initStage();
  const generator = initWay(stage);
  initGUI(generator);
};

const getPath = () => {
  return [
    [199.999692558296, 139.037809861326],
    [
      199.999692558296,
      139.037809861326,
      216.517501342052,
      91.0703552349714,
      260.408864739813,
      101.478048251449
    ],
    [
      304.306569058069,
      111.887435228376,
      302.040473463538,
      149.898168782486,
      297.969050788655,
      167.089794944798
    ],
    [
      293.891253219557,
      184.314831799952,
      266.291989537884,
      213.247676318414,
      241.405592420215,
      229.538070494226
    ],
    [
      216.517501342052,
      245.828464670041,
      201.360366325658,
      263.475297677716,
      199.999692558296,
      269.360116287618
    ],
    [
      198.644947652665,
      263.475297677716,
      183.481883774538,
      245.828464670041,
      158.595486656873,
      229.538070494226
    ],
    [
      133.70739557871,
      213.247676318414,
      106.111932139903,
      184.314831799952,
      102.030334327938,
      167.089794944798
    ],
    [
      97.9589002789453,
      149.898168782486,
      95.6966160382817,
      111.887435228376,
      139.592214337275,
      101.478048251449
    ],
    [
      183.481883774538,
      91.0703552349714,
      199.999692558296,
      139.037809861326,
      199.999692558296,
      139.037809861326
    ]
  ];
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

  const points = getPath();
  const passage = new createjs.Shape();
  passage.graphics.ss(1).beginStroke("rgba(255,0,0,0.25)");
  const g = passage.graphics;
  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      g.mt(...points[i]);
      continue;
    }
    g.bt(...points[i]);
  }
  g.ef();
  stage.addChild(passage);

  const wayPoint = new ParticleWay(BezierUtil.differentiate(points));

  const generator = new CanvasParticleGenerator(stage, wayPoint, shapes, {
    ease: createjs.Ease.cubicOut
  });
  generator.setSpeed(166, n * 8);
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
