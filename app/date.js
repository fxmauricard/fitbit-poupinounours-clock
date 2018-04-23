import document from "document";
import { locale } from "user-settings";
import * as util from "../common/utils";

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
  const fullYear = todayDate.getFullYear();
  const year = (util.isIonic()) ? fullYear : fullYear.toString().substr(-2);

  // Update the <text> element with the date.
  dateLabel.text = (dayLabels[locale.language][todayDate.getDay()] + ' ' + todayDate.getDate() + ' ' + monthLabels[locale.language][todayDate.getMonth()] + ' ' + year).toUpperCase();
}
