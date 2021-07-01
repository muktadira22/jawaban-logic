const functionArray = (arr = []) => {
  return arr.map((item) => {
    return item % 2 === 0 ? item * 2 : item * 3;
  });
};

let results = functionArray([1, 2, 3, 4, 5]);
console.log(results);
