const groupWord = (arr = []) => {
  let results = [];
  let inserted = [];
  for (let i = 0; i < arr.length; i++) {
    if (!inserted.includes(arr[i])) {
      let arrRes = [arr[i]];
      inserted.push(arr[i]);
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
          let word1 = arr[i].split("");
          let word2 = arr[j].split("");

          if (
            word1.length === word2.length &&
            word2.sort().toString() == word1.sort().toString()
          ) {
            arrRes.push(arr[j]);
            inserted.push(arr[j]);
          }
        }
      }
      results.push(arrRes);
    }
  }
  return results;
};

var numbers = ["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"];
let results = groupWord(numbers);
console.log(results);
