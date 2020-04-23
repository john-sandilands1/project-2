// jshint esversion: 6
//containsDuplicates
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//reverseWords1
let revWords1 = sent => {
  let arr = sent.split("");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result = arr[i] + result;
  }
  return result;
  console.log(revWords1("Hello There"));
};

//revWords2
let revWords2 = str => {
  let arr = str.split("");
  let result = "";
  arr.forEach(char => {
    result = char + result;
  });
  return result;
  console.log(revWords2("Thursday is not fun"));
};
//reverseWords3
revWords3 = str => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
reverse("Hello World");
