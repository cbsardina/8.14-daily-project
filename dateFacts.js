const moment = require('moment');
const chalk = require('chalk');

let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
let dayOfYear = moment().dayOfYear();
// console.log(moment().format(););

console.log(now);
console.log(dayOfYear);
console.log(chalk.blue('Hello world!'));
