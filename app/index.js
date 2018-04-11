import clock from "clock";
import document from "document";
import { today } from 'user-activity';
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
const dateLabel = document.getElementById("dateLabel");
const timeLabel = document.getElementById("timeLabel");
const stepLabel = document.getElementById("stepLabel");
const floorLabel = document.getElementById("floorLabel");

// String consts
const dayLabels = [ 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di' ];
const monthLabels = [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ];

// Each second
clock.ontick = (evt) => {
  let todayDate = evt.date;
  let hours = todayDate.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = util.monoDigits(hours % 12 || 12);
  } else {
    // 24h format
    hours = util.monoDigits(util.zeroPad(hours));
  }
  let mins = util.monoDigits(util.zeroPad(todayDate.getMinutes()));
  let seconds = util.monoDigits(util.zeroPad(todayDate.getSeconds()));

  // Update the <text> element every tick with the date
  dateLabel.text = dayLabels[todayDate.getDay()] + ' ' + todayDate.getDate() + ' ' + monthLabels[todayDate.getMonth()] + ' ' + todayDate.getFullYear();

  // Update the <text> element every tick with the current time
  timeLabel.text = `${hours}:${mins}:${seconds}`;

  // Update the <text> element with the number of steps
  stepLabel.text = today.adjusted.steps;

  // Update the <text> element with the number of floors
  floorLabel.text = today.adjusted.elevationGain;
}
