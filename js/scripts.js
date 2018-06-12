let todos =[]; //step 1

let todo1 = [prompt("What is the first thing you want to do this weekend?", "Eat")];
let todo2 = [prompt("What is the second thing you want to do this weekend?", "Go to the park.")];
let todo3 = [prompt("What is the third thing you want to do this weekend?", "Have dinner with family.")];


todos.push(todo1, todo2, todo3);

for (let i = 0; i < todos.length; i++) { //step 2
  let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");

  timeline = !isNaN(parseInt(timeline)) ? //EDGE CASING
  parseInt(timeline) : 2;

  todos[i].unshift(timeline);
}
console.log(todos, "after adding time it will take");

todos.sort();
console.log(todos, "after sort");

let longest = todos [0]; //step 3
let j = 0;
while(j < todos.length) {
  if(todos[j][0] > longest[0]) longest = todos[j];
  //valid inline if statement
  // longest = todos[j][0] > longest[0] ? longest = todos [j] : longest = longest; //TERNARY VERSION
  // console.log(todos[j][1]);
  j++
}
console.log(longest);
