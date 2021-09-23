const readDate = str => {
  let newDate = str.toString().slice(4, 15);
  return newDate.slice(0, 6) + ',' + newDate.slice(6, 15);
};

const readTime = str => {
  let time = str.toString().slice(16, 24);
  let twelve = Number(time.slice(0, 2));
  if (twelve > 12) {
    return twelve - 12 + ':' + time.slice(3, 5) + 'PM';
  } else {
    return twelve + ':' + time.slice(3, 5) + 'AM';
  }
};

export {readDate, readTime};
