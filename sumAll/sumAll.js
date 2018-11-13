const sumAll = function(int_1, int_2) {
  let sum=0;
  if (typeof int_1 !== "number" ||
      typeof int_2 !== "number" ||
      int_1 < 0 || int_2 < 0 ) {
    sum='ERROR';
  } else if (int_1 < int_2) {
    for (let i=int_1; i<=int_2; i++) {
      sum += i;
    }
  } else if (int_2 < int_1) {
    for (let i=int_2; i<=int_1; i++) {
      sum += i;
    }
  }
  return sum
}

module.exports = sumAll
