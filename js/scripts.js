// let inside = true;
//
// /*if(inside){
//   console.log("I am inside")
// } else {
//   console.log("I am not inside");
// }*/
//
// //condition ? expression1 : expression2
// let example2 = inside ? "I am inside" : "I am not inside";
// console.log(example2);
//
// let number = 15
//
// console.log(number > 10 ? "number is greater" : "number is less than")
//
//
//
// let name = false;
// let email = false;
//
// /*if(name) {
//   console.log("I have name")
// } else if (email){
//   console.log("I have email")
// } else {
//   console.log("I have none")
// }*/
//
// console.log(name ? "i have name" : email ? "i have email" : "i have none");
//
//
// let iAmHungry = true;
// let money = 5;
//
// let hungry = iAmHungry ? ((money > 10)? "i am hungry and I have more than 10" : "i am hungry and I have less than 10") : ((money > 10)? "i am not hungry and i have more than 10" : "i am hungry and i have less than 10");
// console.log(hungry);
//
// if(iAmHungry) {
//   if(money > 10) {
//     console.log("I am hungry and I have more than 10")
//   }
//   else {
//     console.log("I am hungry and I have less than 10");
//   }
//   else {
//     if(money > 10) {
//       console.log("I am not hungry and I have more than 10");
//     }
//   else {
//       console.log("I am hungry and I have less than 10");
//     }
//   }
// }
//
//
// let iAmWearingYellow = false;
// console.log(iAmWearingYellow ? "yes i am wearing yellow" : "no i am not");
//
//
// let number = 23;
// console.log((number = 23 && iAmWearingYellow) ? "number = 23 and yellow" : "number not 23 and/or not yellow");
// console.log((number = 23 || iAmWearingYellow) ? "number = 23 and/or yellow" : "number not 23 and/or not yellow");
// //End of Ternaries Practice


// var arr = ["javascript", 100, {}, [], true];
// console.log(arr[6]); //method: console.log(arr.length);

//TRY IT OUT #1
let arr = ["Guardians of the Galaxy Vol. 2", 18, true, 2012];
// console.log(arr, arr.length);
// console.log(Array.isArray(arr)); //need this b/c: not always dealing with data I created, checking what others made
//
// arr.push("pasta"); //push: adding element at the end
// console.log(arr);
//
// arr.unshift("blue"); //unshift: adding element at the beginning
// console.log(arr);
//
//
//
// arr.pop(); //pop: removes last member of array
// console.log(arr);
// arr.shift(); //shift: removes first member of array
// console.log(arr);
//
// let first = arr.shift(); //remove the first item in the array AND retirn that removed item to you as your variable "first"
// console.log(arr, first);
//
// console.log(arr [arr.length - 1 ]); //access the last member of the array
//
// console.log(arr [arr.length - 2 ]); //access the second-to-last member of the array

// arr.splice(2); //splice: remove elements at that index and after
// console.log(arr, "this is the result of splice");

// arr.splice(2, 1); // Delete count: with 2 arguments, starts removing the index item and then only removing the number of items that you passed in as the second argument
// console.log(arr, "this is splice for 1 member");

// console.log(arr);
// arr.splice(2, 1, false) //start at index item, remove it, and replace it with third argument
// console.log(arr);

console.log(arr, "before splice");
let removedItems = arr.splice(2, 1, false, "Faith", "Hugh Jackman") //start at index item, remove it, replace it with third argument, remaining arguments are added sequentially before the next member that was already established
console.log(arr);
console.log(removedItems, "the thing that we removed");


console.log(arr.indexOf("Guardians of the Galaxy Vol. 2")); //indexOf : get the index of an member in an array
console.log(arr.lastIndexOf("Faith")); // lastIndexOf : get the index of the last member in an array

arr.reverse();
console.log(arr);

arr.sort(); // alpha numerical sorting
console.log(arr);

const products = [["blanket", [12.99, 10.99], "The best blanket around."], ["rattle", 4.99, "It rattles man..."], ["diapers", 12.99, "They catch the doo doo."]];
alert(products [0][1][1]);

//TRY IT OUT #2
let favMovie = ["The Legend of Tarzan", "Tarzan"];
let secondFav = ["The Matrix", "Neo"];
let thirdFav = ["Underworld", "Selene"];
let fourthFav = ["The Count of Monte Cristo", "Edmond"];
let fifthFav = ["The Fifth Element", "Korben Dallas"]

let myFavMovies = [];

myFavMovies.push(favMovie, secondFav, thirdFav, fourthFav, fifthFav);

let titles = [];
titles.push(myFavMovies[0][0] , myFavMovies [1][0] , myFavMovies [2][0] , myFavMovies [3][0] , myFavMovies [4][0]);
alert(titles);
