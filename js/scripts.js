//OLDER METHODS:
let body = document.getElementsByTagName('body'); //returns array
// console.log(body);

let classes = document.getElementsByClassName("my-header");
// console.log(classes);

let id = document.getElementById("my-paragraph");
// console.log(id);

//NEWER METHODS:
let tag = document.querySelector('body');
console.log(tag);

let myClass = document.querySelector('.my-header');
console.log(myClass);

let myId = document.querySelector('#my-paragraph');
console.log(myId);

let tags = document.querySelectorAll('body');
console.log(tags);

// TRY IT OUT:
function queryDom(methodName, element) {
    switch (methodName.toLowerCase()) {
      case 'getElementsByTagName':
        document.getElementsByTagName(element);
        break;
      case 'getElementsByClassName':
        document.getElementsByClassName(element);
        break;
      case 'getElementsById':
        document.getElementsById(element);
        break;
      case 'querySelector':
        document.querySelector(`.${element}`);
        break;
      default:
        break;
    }
}
//TRY OUT #1 Over

myClass.addEventListener(
  "click", //first arguement
  e => { //second arguement
    alert("you clicked on me!!");
}
)
