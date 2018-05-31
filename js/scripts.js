let name = prompt("Please enter your name.", "John Doe");
let favColor = prompt("What is your favorite color: red, orange, yellow, green, blue, pink, purple, black, white, or grey?", "blue");

switch (favColor.LowerCase()) {
  case "blue":
  alert("Hello " + name + "! That's my favorite color too!");
  break;
  case "red":
  alert("Hello " + name + "! Strawberry jello is red!");
  break;
  case "orange":
  alert("Hello " + name + "! Orange reminds me of a basketball!");
  break;
  case "yellow":
  alert("Hello " + name + "! Yellow is one of the colors for the Golden State Warriors!");
  break;
  case "green":
  alert("Hello " + name + "! Green is the color of fresh grass!");
  break;
  case "pink":
  alert("Hello " + name + "! The pink Starburst is my favorite!");
  break;
  case "purple":
  alert("Hello " + name + "! Plums are purple!");
  break;
  case "black":
  alert("Hello " + name + "! Black is the absence of color!");
  break;
  case "white":
  alert("Hello " + name + "! White fully reflects and scatters all the visible wavelengths of light!");
  case "grey":
  alert("Hello " + name + "! Grey looks good with any color!");
  break;
  default:
  alert("That's not one of the colors I mentioned...");
  break;
}
let userAnswerFN = prompt("What is your first name?");
let userAnswerLN = prompt("What is your last name?");

console.log(userAnswerFN);

alert(userAnswerLN);

let userBirthday = new Date('4.7.94');
confirm(userBirthday);
alert(userBirthday);
