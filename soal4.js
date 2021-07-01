const linkAjaFun = (arr) =>
  arr.map((item) => {
    if (item % 3 === 0 && item % 7 === 0) {
      return "Link Aja";
    } else if (item % 3 === 0) {
      return "Link";
    } else if (item % 7 === 0) {
      return "Aja";
    } else return item;
  });

let arrayInput = [23, 2, 45, 98, 27, 4, 28, 8, 30, 70, 16, 15, 21, 14, 42];
let results = linkAjaFun(arrayInput);
console.log(results);
