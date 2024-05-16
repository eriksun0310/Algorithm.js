//O(n^2)
// 找出陣列中 符合平均值 的一對的數字
// function averagePair(arr, avg) {
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) / 2 === avg) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   console.log("result", result);
//   return result;
// }

// averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

// 使用 Pointer 的idea
//O(n)
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg === avg) {
      result.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }

  console.log("result", result);
  return result;
}
averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
