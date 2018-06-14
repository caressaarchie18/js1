// // DAY 6 WORK:
// //OLDER METHODS:
// let body = document.getElementsByTagName('body'); //returns array
// console.log(body);
//
// let classes = document.getElementsByClassName("my-header");
// console.log(classes);
//
// let id = document.getElementById("my-paragraph");
// console.log(id);
//
// //NEWER METHODS:
// let tag = document.querySelector('body');
// console.log(tag);
//
// let myClass = document.querySelector('.my-header');
// console.log(myClass);
//
// let myId = document.querySelector('#my-paragraph');
// console.log(myId);
//
// let tags = document.querySelectorAll('body');
// console.log(tags);
//
// // TRY IT OUT:
// function queryDom(methodName, element) {
//     switch (methodName.toLowerCase()) {
//       case 'getElementsByTagName':
//         document.getElementsByTagName(element);
//         break;
//       case 'getElementsByClassName':
//         document.getElementsByClassName(element);
//         break;
//       case 'getElementsById':
//         document.getElementsById(element);
//         break;
//       case 'querySelector':
//         document.querySelector(`.${element}`);
//         break;
//       default:
//         break;
//     }
// }
//TRY OUT #1 DONE

// myClass.addEventListener(
//   "click", //first arguement, always a string, pre-defined event
//   e => { //second arguement (CALLBACK function)
//     console.log(e);
//     alert("you clicked on me!!");
// }
// )

//TRY IT OUT #2
// let button = document.querySelector(".btn");
// let div = document.querySelector("div");
// let h1 = document.querySelector("h1");
// const body = document.querySelector("body");
// // let div = document.querySelector("div [1]"); //don't use lightly
//
// button.addEventListener("click", e => {
//   e.target.textContent = "Deuces!"
//   // alert("Hey, you listened and clicked!");
// });
//
// div.addEventListener("mouseenter", e => {
//   e.target.style.backgroundColor = "#ffccff";
//   console.log(e);
// })
//
// h1.addEventListener("mouseleave", e => {
//   e.target.style.color = "#ffffff";
// })
// console.log(button.textContent);
//
// // div.innerHTML = "Lorem ipsum dolor sit amet."; //don't use it lightly
//
// //Creating Elements
// let newH1 = document.createElement("h1");
// newH1.textContent = "Click the button, pretty please!!"
// console.log(newH1);
// // body.appendChild(newH1); //.appendChild example
// // newH1.className = "text-center";
// newH1.classList.add("text-center");
// body.insertBefore(newH1, div);
//
// div.id = "red_text"; // adding id (must have id in css)
//
// div.classList.add("text-center");
//
// div.addEventListener("click", e => {
//   div.classList.toggle("text-center");
//   div.classList.replace("blue-background", "green-background");
// })
//
// //Create the image tag:
// myImg = document.createElement("img");
// //set the src attribute:
// myImg.setAttribute("src", "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/08/2-blue-sapphire-phalaenopsis-orchid-robert-jensen.jpg");
// //Add the img to the page:
// div.appendChild(myImg);
// console.log(myImg);


//FIZZBUZZ Test:
let body = document.querySelector("body");

for (let i = 1; i <= 100; i++) {
  let p = document.createElement("p");
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = "FizzBuzz";
  } else if (i % 5 === 0) {
    p.textContent = "Buzz";
  }else if (i % 3 === 0) {
    p.textContent = "Fizz";
  }else {
    p.textContent = i;
  }
  body.appendChild(p);
}
