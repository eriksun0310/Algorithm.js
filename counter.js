let arr1 = [1, 2, 3, 5, 8, 9, 10, 34];
let arr2 = [5, 16, 1, 3, 4, 6];

//O(n*n)
function fun1(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && result.indexOf(arr2[j] === -1)) {
        result.push(arr2[j]);
      }
    }
  }
  return result;
}


//  O(n)
function counter(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let counter = {};
  let result = [];
  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let key in counter) {
    if (counter[key] >= 2) {
      result.push(key);
    }
  }

  return result;
}
