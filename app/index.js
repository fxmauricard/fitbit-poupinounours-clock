import clock from "clock";
import document from "document";
import { battery } from "power";
import { today } from 'user-activity';
import { locale } from "user-settings";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
const batteryLabel = document.getElementById("batteryLabel");
const dateLabel = document.getElementById("dateLabel");
const timeLabel = document.getElementById("timeLabel");
const stepLabel = document.getElementById("stepLabel");
const floorLabel = document.getElementById("floorLabel");

// String consts
const dayLabels = {
  'en-us': [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
  'fr-fr': [ 'Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa' ],  
};
const monthLabels =  {
  'en-us': [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  'fr-fr': [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
};

// Each second
clock.ontick = (evt) => {
  // Update the <text> element every tick with de battery level
  batteryLabel.style.fill = util.goalToColor(battery.chargeLevel, 90);
  batteryLabel.text = `${battery.chargeLevel}%`;

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
  dateLabel.text = dayLabels[locale.language][todayDate.getDay()] + ' ' + todayDate.getDate() + ' ' + monthLabels[locale.language][todayDate.getMonth()] + ' ' + todayDate.getFullYear();

  // Update the <text> element every tick with the current time
  timeLabel.text = `${hours}:${mins}:${seconds}`;

  // Update the <text> element with the number of steps
  stepLabel.text = today.adjusted.steps;

  // Update the <text> element with the number of floors
  floorLabel.text = today.adjusted.elevationGain;
}
