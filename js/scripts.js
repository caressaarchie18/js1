//CONTINUING FROM DAY4 CLASSWORK
/*let products = [["blanket", [12.99], "The best blanket around."], ["rattle", 4.99, "It rattles man..."], ["diapers", 12.99, "They catch the doo doo."]];

let i = 0; // control statement ; practice on while loops

while (i < products.length) { //parameters
  //console.log(products [i]);
  i++; //Incrementor
}
//console.log(i); //end of while loops practice

for (let i = 0; i < products.length; i++) { //practice
  console.log(products [i]);
}


 //while loop
let i = 0
let newProduct = ["squeaky toy", 19.99, "Really good toy."];
do {
  //Add newProduct to second member of products array
  if (i === 1) products[i].push(newProduct);
  i++;
} while (i < products.length);
console.log(products);

//for each loops: function attached to every array (built-in looping mechanism for arrays) ; favorite form of loop code
products.forEach((products) => {  //method: . before it and () after it
  console.log(products);
})

//TRY IT OUT #1 : start array from the end
for (let i = products.length - 1; i >= 0; i--) {
  console.log(products [i]);
}  END OF DAY4 CLASSWORK*/



///FUNCTIONS : set it aside and call on it as many times as I want without violating previous code

function capitialCase(string) {  // FUNCTION DEFINITION: there is no value in the argument (string) until you call the function
  // return string.toUpperCase();
  let words = string.split(" ");
  words.forEach(word => {
    let letters = word.split("");
    let capped = letters[0].toUpperCase()
    letters.splice(0, 1, capped);
  });
  return words.join(" ");
};

let newString = capitialCase("peter piper") //function CALL

console.log(newString);

// myCoolFunciton("cheese")

let myCoolFunciton = (stuff) => { // SIMPLEST fat arrow function
  console.log(stuff);
}
// let myCoolFunciton = stuff => { // 1 argument fat arrow function
  // console.log(stuff);
// }

function divide(arg1, arg2) {
  return arg2/arg1;
}

//TRY IT OUT #2
function ageDog(years) {
  return years * 7;
};

alert(ageDog(parseInt(prompt("How old is your dog in years?", "3"))));

//TRY IT OUT #2.1
function lifetimeCalculator(age, dailyUse) {
  if(!isNaN(age) && !isNaN(dailyUse)) {
    const death = 80;
    return (death - age) * (dailyUse * 365);
  } else {
    userAge = prompt('how old are you?', '30');
    userUse = prompt("How much do you use every day?"); 
  }
};

let userAge = prompt('how old are you?', '30');
let userUse = prompt("How much do you use every day?", '1');

let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse));

alert(`You will need ${usage} to last until you're 80.`);
