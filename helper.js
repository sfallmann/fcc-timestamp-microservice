
function isNumber(str) {
  return Number(str).toString() !== 'NaN';
}

function parseStr(str) {
  // filters out commas and spaces
  // and reformat results with a single space
  // this allows for different natural values and
  // is tolerant of minor typos such as extra spaces or commas
  // ex. "November 3, 1972", "November 3 1972", "November 3 , 1972"
  //     "Nov 3 1972", "Nov 3, 1972"
  // this will even allow for additional formatting such as 11 3 1972
  return (str.split(' ').filter((val) => {
    return val !== ' ' && val !== '' && val !== ',';
  })).map((val) => {
    return val.replace(/,/g, '');
  }).join(' ');

}

function timeInMs(str) {

  let date;

  if (!isNumber(str)) {
    date = new Date(parseStr(str));
  } else {
    // convert the str to a number in seconds
    date = new Date((Number(str) * 1000));
  }

  // if the date is invalid date.getTime() will not be a number
  return isNumber(date.getTime()) ? date.getTime() : null;

}

module.exports = {
  timeInMs
};
