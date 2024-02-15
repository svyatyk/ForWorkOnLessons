"use strict";
//let num = 3;
//let element;
//element = "body";
//alert(num);
//window.alert(element);
//a = 15;
//console.log(a);
//const a = 3000;
//const b = 5000;
//console.log('розміри авто $ {a} на ')
// let userName= "john";
// let numberUserName = 25;
// numberUserName = 25 - 1; 
// console.log(numberUserName);
// console.log(userName);
let NumberOfFilms = prompt("Скільки фільмів ви вже подивилися","");
const personalm = {
    count : NumberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
let a = prompt("один із останніх переглянутих фільмів ","");
let b = prompt("наскільки оціните його ","");
let c = prompt("один із останніх переглянутих фільмів ","");
let d = prompt("наскільки оціните його ","");
personalm.movies[a]=b;
personalm.movies[c]=d;
// 

console.log(personalm.movies)



