import document from "document";
import { goals, today } from "user-activity";
import { me as device } from "device";
import * as util from "../common/utils";

// Get a handle on the <text>, <image> and <rect> elements.
const activityIcons = {
  left: document.getElementById("leftActivityIcon"),
  right: document.getElementById("rightActivityIcon"),
};
const activityLabels = {
  left: document.getElementById("leftActivityLabel"),
  right: document.getElementById("rightActivityLabel"),
}
const goalProgressBar = document.getElementById("goalProgressBar");

var leftActivity = 'steps';
var rightActivity = 'elevationGain';

activityLabels.left.onclick = activityLabels.right.onclick = function(e) {
  let temp = rightActivity;
  rightActivity = leftActivity;
  leftActivity = temp;
}

export function update() {
  // Update the <text> and <image> element with the left activity.
  updateActivity('left', leftActivity);

  // Update the <text> and <image> element with the right activity.
  updateActivity('right', rightActivity);

  // Update the <rect> element with the goal progress.
  const goalPercent = Math.min(100, Math.round(today.adjusted[leftActivity] / goals[leftActivity] * 100));
  goalProgressBar.width = Math.round(device.screen.width * goalPercent / 100);
}

function updateActivity(position, activity) {
  activityIcons[position].href = `icons/stat_${activity}_solid_24px.png`;
  activityLabels[position].text = util.monoDigits(today.adjusted[activity]);
}
