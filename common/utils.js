// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Convert a number to a special monospace number
export function monoDigits(digits) {
  var ret = "";
  var str = digits.toString();
  for (var index = 0; index < str.length; index++) {
    var num = str.charAt(index);
    ret = ret.concat(hex2a("0x1" + num));
  }
  return ret;
}

// Hex to string
export function hex2a(hex) {
  var str = '';
  for (var index = 0; index < hex.length; index += 2) {
    var val = parseInt(hex.substr(index, 2), 16);
    if (val) str += String.fromCharCode(val);
  }
  return str.toString();
}

export function goalToColor(value, total, low = 'fb-red', medium = 'fb-peach', high = 'fb-mint', complete = 'fb-cyan', ) {
  if (!value || !total){
    color = low;
    return color;
  }

  let percent = value / total * 100;
  let color = 'white'; // #FFFFFF
  if (percent < 10){
    color = low; // #F83C40
  } else if (percent < 25){
    color = medium; // #FFCC33
  } else if (percent < 90){
    color = high;  // #14D3F5
  } else {
    color = complete; // #5BE37D
  }
  return color
}
