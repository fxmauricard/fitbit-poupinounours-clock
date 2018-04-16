import document from "document";
import { locale } from "user-settings";
import { me as device } from "device";

// workaround for Fitbit Ionic running Fitbit OS 1.0.
if (!device.screen) device.screen = { width: 348, height: 250 };

// Get a handle on the <text> element.
const dateLabel = document.getElementById("dateLabel");

// String consts.
const dayLabels = {
  'en-us': [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
  'fr-fr': [ 'Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa' ],  
};
const monthLabels =  {
  'en-us': [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  'fr-fr': [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
};

export function update(todayDate) {
  // Update the <text> element with the date.
  const year = (device.screen.width === 348) ? todayDate.getFullYear() : todayDate.getFullYear().toString().substr(-2);

  dateLabel.text = (dayLabels[locale.language][todayDate.getDay()] + ' ' + todayDate.getDate() + ' ' + monthLabels[locale.language][todayDate.getMonth()] + ' ' + year).toUpperCase();
}
