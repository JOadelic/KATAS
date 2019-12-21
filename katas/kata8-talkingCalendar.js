// We will be given a date as a string (not a Date object). The date will
// always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

const talkingCalendar = function(date) {
  let year = [date[0], date[1], date[2],date[3]].join('');
  let month = [date[5], date[6]].join('');
  let day = [date[8], date[9]].join('');

  if (month == 01) {
    month = 'January';
  }
  if (month == 02) {
    month = 'February';
  }
  if (month == 03) {
    month = 'March';
  }
  if (month == 04) {
    month = 'April';
  }
  if (month == 05) {
    month = 'May';
  }
  if (month == 06) {
    month = 'June';
  }
  if (month == 07) {
    month = 'July';
  }
  if (month == 08) {
    month = 'August';
  }
  if (month == 09) {
    month = 'September';
  }
  if (month == 10) {
    month = 'October';
  }
  if (month == 11) {
    month = 'November';
  }
  if (month == 12) {
    month = 'December';
  }

  if (day[1] === 1 && day !== 11) {
    day += 'st';
  } else if (day[1] == 2) {
    day += 'nd';
  } else if (day[1] == 3) {
    day += 'rd';
  } else {
    day += 'th';
  }
  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// EXPECTED OUTPUT ===========
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987