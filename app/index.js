import clock from "clock";
import { display } from "display";
import * as activity from "./activity.js";
import * as battery from "./battery.js";
import * as date from "./date.js";
import * as heartRate from "./heartrate.js";
import * as time from "./time.js";
import * as util from "../common/utils.js";

// Update the clock every second.
clock.granularity = "seconds";

// Each second.
clock.ontick = (evt) => {
  if (display.on) {
    heartRate.update();
    battery.update();

    const todayDate = evt.date;
    date.update(todayDate);
    time.update(todayDate);

    activity.update();
  }
}
