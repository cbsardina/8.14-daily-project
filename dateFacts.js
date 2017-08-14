const moment = require('moment');
const chalk = require('chalk');

const now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const dayOfYear = moment().dayOfYear();
const hours = moment().hours();
const minutes = moment().minutes();
const seconds = moment().seconds();
const dst = moment().isDST();
const leap = moment().isLeapYear();

function secondsInDay () {
  return chalk.cyanBright.bold((hours * 60 * 60) + (minutes * 60) + seconds);
}
function isDst () {
  if (dst) {
    return chalk.greenBright.bold('is');
  } else { return chalk.red.bold('is not'); }
}
function isLeap () {
  if (leap) {
    return chalk.greenBright.bold('is');
  } else { return chalk.red.bold('is not'); }
}

console.log('It is ' + chalk.blueBright.bold(now) + '.');
console.log('It is the ' + chalk.magenta.bold(dayOfYear + 'th') + ' day of the year.');
console.log('It is ' + secondsInDay() + ' seconds into the day.');
console.log('It ' + isDst() + ' during Daylight Saving Time.');
console.log('It ' + isLeap() + ' a leap year.');
