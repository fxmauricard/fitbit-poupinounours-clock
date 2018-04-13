import document from "document";
import { today } from 'user-activity';
import * as util from "../common/utils";

// Get a handle on the <text> element.
const stepLabel = document.getElementById("stepLabel");
const floorLabel = document.getElementById("floorLabel");

export function update() {
  // Update the <text> element with the number of steps.
  stepLabel.text = util.monoDigits(today.adjusted.steps);

  // Update the <text> element with the number of floors.
  floorLabel.text = util.monoDigits(today.adjusted.elevationGain);
}
