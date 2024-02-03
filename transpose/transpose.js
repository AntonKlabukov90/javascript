const transpose = (array) => {
  let maxLength = 0;
  const res = [];
  const arr2 = [];

  array.forEach((element) => {
    if (element.length > maxLength) {
      maxLength = element.length;
    }
  });

  for (let j = 0; j < maxLength; j += 1) {
    const arrayToString = [];
    let count = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (count < array.length) {
        if (array[i][j] === undefined) {
          arrayToString.push(' ');
          count += 1;
        } else {
          arrayToString.push(array[i][j]);
          count += 1;
        }
      }
    }
    res.push(arrayToString.join('').trimEnd());
  }

  for (let i = res.length - 1; i > 0; i -= 1) {
    if (res[i].length <= res[i - 1].length) {
      arr2.push(res[i - 1]);
    } else {
      const tmpArr = res[i - 1].split('');
      for (let j = tmpArr.length; j < res[i].length; j += 1) {
        tmpArr.push(' ');
      }
      arr2.push(tmpArr.join(''));
    }
  }
  arr2.unshift(res[res.length - 1]);
  return arr2.reverse();
};
export default transpose;
