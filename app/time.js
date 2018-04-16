import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Get a handle on the <text> element.
const timeLabel = document.getElementById("timeLabel");
const secondsLabel = document.getElementById("secondsLabel");

export function update(todayDate) {
  let hours = todayDate.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format.
    hours = hours % 12 || 12;
  } else {
    // 24h format.
    hours = util.zeroPad(hours);
  }
  hours = util.monoDigits(hours);
  const mins = util.monoDigits(util.zeroPad(todayDate.getMinutes()));
  const seconds = util.monoDigits(util.zeroPad(todayDate.getSeconds()));

  // Update the <text> element with the current time.
  timeLabel.text = `${hours}:${mins}`;
  secondsLabel.text = `:${seconds}`;
}
