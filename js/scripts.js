// //#1 & #2
// let answer = powerOfTwo(parseInt(prompt("What do you want to square?", '2')));
//
// function powerOfTwo(number) {
//   if(!isNan(number)) {
//     return number * number;
//   } else {
//     alert("NaN");
//     answer = powerOfTwo(parseInt(prompt("That wasn't a number! What number?", '2')));
//     // alert(answer);
//   }
// };
//
// // alert(answer);
//
// //#3
// function parseString(string) {
//   let parsedLetter = string.charAt(0).toUpperCase();
//   let stringArr = string.split('');
//   stringArr.splice(0, 1, parsedLetter);
//   string = stringArr.join(''); //Replaces first letter with new uppercase
//   if(string.charAt(string.length - 1) !== '.') string = string + '.';
//   return string;
// }
// // let answer = parseString(prompt("Type something in.", "I love stringed cheese"));
// // alert(answer);


//#4
function reverseHalves(string) {
  let halfIndex = string.length / 2;
  let firstHalf = string.substring(0, halfIndex);
  let secondHalf = string.substring(halfIndex, string.length);
  alert(`${secondHalf}${firstHalf}`);
}

reverseHalves(prompt("give me a sentence ", " hello world!"));

// #5
function isPalindrome(string) {
  let reversed = string.split('').reverse().join('') //"split" turns the string into an array with everything split into individual members, "reverse" only works on arrays, "join" only works on arrays retutning to a string
  if(string === reversed) return true;
  return false
}
