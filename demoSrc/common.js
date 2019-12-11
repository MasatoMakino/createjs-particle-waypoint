import { getHeartPath } from "./SamplePath";
import { CanvasParticleWay } from "../bin/index";
import { BezierUtil } from "particle-waypoint";

export function initBodyStyle() {
  const body = document.getElementsByTagName("body");
  body[0].style.backgroundColor = "#000";
}

/**
 * createjsのステージを初期化する。
 * @return {createjs.Stage}
 */
export function initStage() {
  const updateStage = () => {
    stage.update();
  };

  const canvas = document.getElementById("appCanvas");
  canvas.style.backgroundColor = "#000";
  const stage = new createjs.Stage(canvas);
  stage.enableMouseOver();

  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.on("tick", updateStage);
  return stage;
}

/**
 * ParticleWayを初期化する。
 * @return {ParticleWay}
 */
export function initWay(stage) {
  const points = getHeartPath();
  const wayPoint = new CanvasParticleWay(BezierUtil.subdivide(points), {
    parent: stage
  });
  wayPoint.showPassage();
  return wayPoint;
}
