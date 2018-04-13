import document from "document";
import { today } from 'user-activity';
import * as util from "../common/utils";

// Get a handle on the <text> element.
const leftActivityIcon = document.getElementById("leftActivityIcon");
const leftActivityLabel = document.getElementById("leftActivityLabel");
const rightActivityIcon = document.getElementById("rightActivityIcon");
const rightActivityLabel = document.getElementById("rightActivityLabel");

var leftActivity = 'steps';
var rightActivity = 'elevationGain';

leftActivityLabel.onclick = function(e) {
  console.log("left");
  var temp = rightActivity;
  rightActivity = leftActivity;
  leftActivity = temp;
}

rightActivityLabel.onclick = function(e) {
  console.log("right");
  var temp = rightActivity;
  rightActivity = leftActivity;
  leftActivity = temp;
}

export function update() {
  // Update the <text> and <image> element with the left activity.
  updateActivity('left', leftActivity);

  // Update the <text> and <image> element with the right activity.
  updateActivity('right', rightActivity);
}

function updateActivity(position, activity) {
  if (position === 'left') {
    var icon = leftActivityIcon;    
    var label = leftActivityLabel;
  } else if (position === 'right') {
    var icon = rightActivityIcon;
    var label = rightActivityLabel;    
  }

  switch (activity) {
    case 'steps':
      icon.href = 'icons/stat_steps_solid_24px.png';
      label.text = util.monoDigits(today.adjusted.steps);
      break;
    case 'elevationGain':
      icon.href = 'icons/stat_floors_solid_24px.png';
      label.text = util.monoDigits(today.adjusted.elevationGain);
      break;
  }
}
