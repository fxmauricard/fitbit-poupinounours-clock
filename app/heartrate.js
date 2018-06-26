import document from "document";
import { HeartRateSensor } from "heart-rate";
import * as util from "../common/utils";

// Get a handle on the <text> element.
const heartRateLabel = document.getElementById("heartRateLabel");

// Create a new instance of the HeartRateSensor object.
const hrm = new HeartRateSensor();

hrm.onreading = function() {
  // Update the <text> element with the current heart rate sensor value.
  heartRateLabel.text = util.monoDigits(hrm.heartRate || 0, false);

  // Stop monitoring the sensor.
  hrm.stop();
}

export function update() {
  // Begin monitoring the sensor.
  hrm.start();
}
