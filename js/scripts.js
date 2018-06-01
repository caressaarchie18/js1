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

myFavMovies = ["The Matrix", "The Legend of Tarzan"]
console.log(myFavMovies[0], "is my favorite and",  myFavMovies [1], "is my least favorite");

myFavMovies = [[0], [1], [2], [3], [4]];
alert(myFavMovies.length);
