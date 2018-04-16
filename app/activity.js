import document from "document";
import { today } from 'user-activity';
import * as util from "../common/utils";

// Get a handle on the <text> element.
const leftActivityIcon = document.getElementById("leftActivityIcon");
const leftActivityLabel = document.getElementById("leftActivityLabel");
const rightActivityIcon = document.getElementById("rightActivityIcon");
const rightActivityLabel = document.getElementById("rightActivityLabel");

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
