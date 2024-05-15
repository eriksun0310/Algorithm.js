//O(n)
function sameFrequency(str1, str2) {
  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1;
    } else {
      counter1[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!counter2[str2[i]]) {
      counter2[str2[i]] = 1;
    } else {
      counter2[str2[i]]++;
    }
  }

  for (let key in counter1) {
    if (!counter2[key]) {
      return false;
    }
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}
const res = sameFrequency("abbc", "acbb");
console.log("res", res);



// gpt
function sameFrequency2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter = {};

  for (let char of str1) {
    console.log("char", char);
    counter[char] = (counter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!counter[char]) {
        console.log("counter false", counter);
      return false;
    }
    counter[char]--;
  }

  console.log("counter", counter);
  return true;
}

const res2 = sameFrequency2("acba", "aaac");
console.log(res2); // true

