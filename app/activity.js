import document from "document";
import { goals, today } from "user-activity";
import * as util from "../common/utils";

// Get a handle on the <text>, <image> and <rect> elements.
const leftActivityIcon = document.getElementById("leftActivityIcon");
const leftActivityLabel = document.getElementById("leftActivityLabel");
const rightActivityIcon = document.getElementById("rightActivityIcon");
const rightActivityLabel = document.getElementById("rightActivityLabel");
const goalBar = document.getElementById("goalBar");

var leftActivity = 'steps';
var rightActivity = 'floors';

leftActivityLabel.onclick = function(e) {
  let temp = rightActivity;
  rightActivity = leftActivity;
  leftActivity = temp;
}

rightActivityLabel.onclick = leftActivityLabel.onclick;

export function update() {
  // Update the <text> and <image> element with the left activity.
  updateActivity('left', leftActivity);

  // Update the <text> and <image> element with the right activity.
  updateActivity('right', rightActivity);

  // Update the <rect> element with the goal progress.
  const goalPercent = Math.min(100, Math.round(today.adjusted.steps / goals.steps * 100));
  goalBar.width = Math.round(util.getDevice().screen.width * goalPercent / 100);
}

function updateActivity(position, activity) {
  if (position === 'left') {
    let icon = leftActivityIcon;
    let label = leftActivityLabel;
  } else if (position === 'right') {
    let icon = rightActivityIcon;
    let label = rightActivityLabel;
  }

  icon.href = `icons/stat_${activity}_solid_24px.png`;
  switch (activity) {
    case 'steps':
      label.text = util.monoDigits(today.adjusted.steps);
      break;
    case 'floors':
      label.text = util.monoDigits(today.adjusted.elevationGain);
      break;
  }
}
