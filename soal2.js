const isFibo = (num) => {
  var number1 = 0;
  let number2 = 1;
  let results = false;

  for (let i = 1; i <= num; i++) {
    let count = number1 + number2;
    number2 = number1;
    number1 = count;

    if (count === num) {
      results = true;
      break;
    }
    if (count > num) break;
  }
  return results;
};
console.log(isFibo(8));
console.log(isFibo(9));
