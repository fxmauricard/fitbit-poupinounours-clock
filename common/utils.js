import { me as device } from "device";

// Workaround for Fitbit Ionic running Fitbit OS 1.0.
if (!device.screen) device.screen = { width: 348, height: 250 };

const monospacedChar0 = String.fromCharCode(0x10);
const monospacedChar1 = String.fromCharCode(0x11);
const monospacedChar2 = String.fromCharCode(0x12);
const monospacedChar3 = String.fromCharCode(0x13);
const monospacedChar4 = String.fromCharCode(0x14);
const monospacedChar5 = String.fromCharCode(0x15);
const monospacedChar6 = String.fromCharCode(0x16);
const monospacedChar7 = String.fromCharCode(0x17);
const monospacedChar8 = String.fromCharCode(0x18);
const monospacedChar9 = String.fromCharCode(0x19);

// Convert a number to a special monospace number.
export function monoDigits(num, pad = true) {
  let monoNum = '';

  if (typeof num === 'number') {
    num |= 0;
    if (pad && num < 10) {
      monoNum = monospacedChar0 + monoDigit(num);
    } else {
      while (num > 0) {
        monoNum = monoDigit(num % 10) + monoNum;
        num = (num / 10) | 0;
      }
    }
  } else {
    let text = num.toString();
    let textLen = text.length;
    for (let i = 0 ; i < textLen ; ++i) {
      monoNum += monoDigit(text.charAt(i));
    }
  }

  return monoNum;
}

// Convert a digit to a special monospaced char.
function monoDigit(digit) {
  switch (digit) {
    case 0:
    case '0':
      return monospacedChar0;
    case 1:
    case '1':
      return monospacedChar1;
    case 2:
    case '2':
      return monospacedChar2;
    case 3:
    case '3':
      return monospacedChar3;
    case 4:
    case '4':
      return monospacedChar4;
    case 5:
    case '5':
      return monospacedChar5;
    case 6:
    case '6':
      return monospacedChar6;
    case 7:
    case '7':
      return monospacedChar7;
    case 8:
    case '8':
      return monospacedChar8;
    case 9:
    case '9':
      return monospacedChar9;
    default:
      return digit;
  }
}

// Get "device" object with the Fitbit OS 1.0 Workaround applied.
export function getDevice() {
  return device;
}
// Is the app running on Fitbit Ionic?
export function isIonic() {
  return (device.screen.width === 348);
}
