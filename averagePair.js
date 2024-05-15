function averagePair(arr, avg) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log("result", result);
  return result;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
