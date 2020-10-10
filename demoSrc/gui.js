import * as dat from "dat.gui";
import { BezierUtil, GenerationMode } from "particle-waypoint";
import { getCircle, getHeartPath, getTriangle } from "./SamplePath";

/**
 * デモのパラメーターを操作するGUIを初期化する。
 * @param generator
 */
export function initGUI(generator) {
  const prop = {
    isPlay: true,
    path: "heart",
    ease: "cubicInOut",
    valve: true,
    visiblePassage: true,
    mode: "SEQUENTIAL",
    clear: () => {
      generator.particleContainer.removeAll();
    },
  };
  const gui = new dat.GUI();
  const animator = generator.animator;
  gui.add(animator, "generationInterval", 33, 1000);
  gui.add(animator, "speedPerSec", 0.01, 0.5).step(0.01);

  gui.add(generator, "rangeR", 0.0, 32.0, 0.1);
  gui.add(generator, "rangeRotationSpeed", 0.0, 3.14 * 4, 0.01);

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
    generator.animator.updateEase(ease, generator.modeManager.mode);
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
    generator.multipleWays.ways[0].points = path;
  });
  gui.add(prop, "isPlay").onChange(() => {
    if (prop.isPlay) {
      generator.play();
    } else {
      generator.stop();
    }
  });
  gui.add(prop, "mode", ["SEQUENTIAL", "LOOP"]).onChange(() => {
    switch (prop.mode) {
      case "SEQUENTIAL":
        generator.modeManager.mode = GenerationMode.SEQUENTIAL;
        break;
      case "LOOP":
        generator.modeManager.mode = GenerationMode.LOOP;
        break;
    }
  });
  gui.add(prop, "valve").onChange(() => {
    if (prop.valve) {
      generator.valve.open();
    } else {
      generator.valve.close();
    }
  });
  gui.add(prop, "visiblePassage").onChange(() => {
    const way = generator.multipleWays.ways[0];
    if (prop.visiblePassage) {
      way.showPassage();
    } else {
      way.hidePassage();
    }
  });
  gui.add(prop, "clear");
}
