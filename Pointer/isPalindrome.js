//
// 判斷一個字串, 是否 由前讀過去 會等於 由後讀過來
function isPalindrome(str) {
  let arr = str.split("");
  //['t', 'a', 'c','o', 'c', 'a','t']
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    if (arr[left] === arr[right]) {
      right--;
      left++;
    } else {
      return false;
    }
  }

  return true;
}

const result = isPalindrome("amanaplanacanalpanama");
console.log("result", result);
