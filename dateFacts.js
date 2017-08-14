const moment = require('moment');
const chalk = require('chalk');

let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let dayOfYear = moment().dayOfYear();
let hours = moment().hours();
let minutes = moment().minutes();
let seconds = moment().seconds();
let dst = moment().isDST();
let leap = moment().isLeapYear();

function secondsInDay () {
  return chalk.blueBright((hours * 60 * 60) + (minutes * 60) + seconds);
}
function isDst () {
  if (dst) {
    return chalk.green('is');
  } else { return chalk.red(' is not '); }
}
function isLeap () {
  if (leap) {
    return chalk.green(leap);
  } else { return chalk.red(' is not '); }
}

console.log('It is ' + chalk.blue(now) + '.');
console.log('It is the ' + chalk.magenta(dayOfYear + 'th') + ' day of the year.');
console.log('It is ' + secondsInDay() + ' seconds into the day.');
console.log('It ' + isDst() + ' during Daylight Saving Time.');
console.log('It ' + isLeap() + ' not a leap year.');
