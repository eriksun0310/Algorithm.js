function isSubsequence(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let p1 = 0;
  let p2 = 0;
  while (p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      p1++;
    } else if (p1 === arr1.length) {
      console.log(true);
      return true;
    }
    p2++;
  }
  console.log(false);
  return false;
}
isSubsequence("hello", "hello dear");
isSubsequence("book", "brooklyn");
isSubsequence("cba", "abc");




// gpt
function isSubsequence2(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let p1 = 0;
  let p2 = 0;
  
  while (p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      p1++;
    }
    p2++;
  }

  // 如果 p1 能遍歷完 arr1 的所有元素，則返回 true，否則返回 false
  return p1 === arr1.length;
}

const result = isSubsequence2("abc", "cba");
console.log("result", result);