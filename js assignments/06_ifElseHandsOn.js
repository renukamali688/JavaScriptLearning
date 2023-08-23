console.log("......................Assignment 1............................");
console.log("=========================Step 1==================================");

function evenOdd(num) {
  if (num % 2 == 0) {
    console.log(`The Given Number ${num} is - Even`);
  } else {
    console.log(`The Given Number ${num} is - ODD`);
  }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log("=============================step 2================================");
function checkCharLen(str) {
  var charLen = str.length;
  if (charLen >= 10) {
    console.log(`Given String "${str}" is More than 10 Charachters`);
  } else {
    console.log(`Given String "${str}" is Less than 10 Charachters`);
  }
}
checkCharLen("JavaScript - ES6");
checkCharLen("Java");

console.log("===============================step 3================================");
function stringStart(str1) {

if (((str1.startsWith('Java')) || (str1.startsWith('java')))==true){
    console.log(`"${str1}" Starts with "Java".`);
  } else {
    console.log(`"${str1}" Not Starts with "Java".`);
  }
}
stringStart("javaScript Language");
