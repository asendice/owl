
const readDate = str => {
  let newDate = str.toString().slice(4, 15);
  return newDate.slice(0, 6) + ',' + newDate.slice(6, 15);
};

const readTime = str => {
  let time = str.toString().slice(16, 24);
  let twelve = Number(time.slice(0, 2));
  if (twelve > 12) {
    return twelve - 12 + ':' + time.slice(3, 5) + ' PM';
  } else if (twelve == 12) {
    return '12' + ':' + time.slice(3, 5) + ' PM';
  } else if (twelve == 0) {
    return '12' + ':' + time.slice(3, 5) + ' AM';
  } else {
    return twelve + ':' + time.slice(3, 5) + ' AM';
  }
};

// rounds number up to single digit excluding decimals
const rounder = num => {
  if (num && num.toString().length > 2) {
    return Math.round(num * 1) / 1;
  } else return num;
};

// converts a number from miliseconds to seconds, minutes, hours, days by
// returning a templated string, with a number rounded up to the nearst digit excluding decimals and the corresponding letter
const convertMili = num => {
  switch (num > 0) {
    case num > 1000 && num < 60000:
      const seconds = num / 1000;
      return `${rounder(seconds)} seconds`;
    case num >= 60000 && num < 3600000:
      const minutes = num / 60000;
      return `${rounder(minutes)} minutes`;
    case num >= 3600000 && num < 86400000:
      const hours = num / 3600000;
      return `${rounder(hours)} hours`;
    case num >= 86400000:
      const days = num / 86400000;
      return `${rounder(days)} days`;
    default:
      return `Now`;
  }
};

export {readDate, readTime, convertMili};
