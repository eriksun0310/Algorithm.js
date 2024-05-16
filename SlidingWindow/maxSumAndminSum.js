maxSum([2, 7, 23, 0, 16, 1, -5, -12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);


// sliding window

// O(n^2)
function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }
  let maxValue = 0;

  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }
  let temp = maxValue;
  // temp = maxValue
  for (let j = size; j < arr.length; j++) {
    temp = temp + arr[j] - arr[j - size];
    if (temp > maxValue) {
      maxValue = temp;
    }
  }

  console.log("maxValue", maxValue);

  return maxValue;
}

// O(n^2)
function minSum(arr, size) {
  if (size > arr.length) {
    return null;
  }
  let minValue = 0;
  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }

  let temp = minValue;
  for (let j = size; j < arr.length; j++) {
    console.log("arr[j]", arr[j]);
    console.log("arr[j - size]", arr[j - size]);
    temp = temp + arr[j] - arr[j - size];
    if (temp < minValue) {
      minValue = temp;
    }
  }

  console.log("minValue", minValue);
  return minValue;
}
