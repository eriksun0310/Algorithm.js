function minSubLength(arr, sum) {
  let minLength = Infinity
  let left = 0;
  let right = 0;
  let currentSum = 0;
  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum >= sum) {

      // 更新minLength 
      if(minLength > right -left +1){
        minLength = right -left +1
      }

      currentSum -= arr[left];
      left++;
    }
  }

  if(minLength === Infinity){
    return 0
  }else {
    return minLength
  }
}

a([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60);
