// let name = "Caressa"; //truthy or true
// let age = 24; //falsy or false
//
// if(!name && age) {
//   alert("one exists");
// }

// const numAge = 32; //Number
// const stringAge = "32"; //String
//
// if(numAge != stringAge) {
//   alert("they're the same!")
// };
//
// let objectOne = {
//   name: "Caressa"
// };
// let objectTwo = {
//   name: "Caressa"
// };
//
// // alert(objectOne == objectTwo); //ALWAYS FALSE
//
// if(numAge > stringAge.length) {
//   alert("whaaaaaat?")
// }

//TRY IT OUT:
var myString = "applesauce"
var objString = new String("applesauce")

if(myString == objString) {
  alert("hmmm interesting")
} //they are both "loosely equal" and "strictly not equal"
//TRY IT OUT DONE

let limit = 12;
// console.log(limit);
limit += 7; //add specific value
//limit++; //short way
//limit = limit + 1; //long way

// let myNumber = "Ted";
// isNaN(myNumber)
// //console.log(isNaN(myNumber)); how to check if number when not a Number
// //console.log(!isNaN(myNumber)); how to check that it is not a number when it is a number
// //myNumber = parseInt()
// console.log(myNumber++);

//TRY IT OUT 2:
let numOne = parseInt(prompt ("Please add a number value.", "10"));
let numTwo = prompt ("Please add a second value.", "10");
numTwo = parseInt(numTwo);
alert(numOne + numTwo);
//TRY IT OUT DONE

if(numOne > numTwo) {
  alert("Your first number is bigger than your second number!");
} else if(numOne === numTwo) {
  alert("They're the same!");
} else if(numOne < numTwo) {
  alert("Number one is smaller than number two!");
} else {
  alert("Something went wrong");
}

/*if(numOne < numTwo) {
  alert("yay");
}else {
  alert("boooo");
}*/

let firstName = prompt("What is your first name?", "Tom");

switch (firstName.toLowerCase()) {
  case "tom":
    alert("Hello Tom!");
    break;
  case "john":
  case "michael":
  case "jordan":
    alert("Your name is very common.");
    break;
  default:
    alert("I have never heard of that name before...");
    break;

}
