maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

// O(n^2)
function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }
  let max_value = -Infinity;
  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }

    if (attempt > max_value) {
      max_value = attempt;
    }
  }

  console.log("max_value", max_value);
  return max_value;
}

// O(n^2)
function minSum(arr, size) {
  if (size > arr.length) {
    return null;
  }
  let minValue = Infinity;

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }

    if (attempt < minValue) {
      minValue = attempt;
    }
  }
  console.log("minValue", minValue);
  return minValue;
}
