var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift(name)}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (katzDeliLine) {
  var stringLine = [];
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      stringLine += (i+1) + ". " + katzDeliLine[i] + ", ";
    }
    stringLine = stringLine.slice(0, stringLine.length - 2);
    return "The line is currently: " + stringLine;
  } else {
    return "The line is currently empty.";
  }
}
