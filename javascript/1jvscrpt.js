// console.log('hello');
// // alert('yoo');

// //variables
// var b = 'anant';
// console.log(b);

// var a = 45;
// console.log(a);
//changing code in html file through js
// var age = prompt("what is your age?");
// document.getElementById('sometext').innerHTML =age;

//*************Numbers in Javascript
// var num1 =5;
// console.log(10*5);
// num1 += 10;
// num1++;
// num1--;
// console.log(num1%3);

//*************Functions in Javascript
/*
Step1. Create a function
Step2. Call the function
*/

function fun() {
    console.log('this is a function');
}
fun();

// function greeting(name){
//     ans = 'hello' + name;
//     console.log('Hello '+ name);
//     console.log(ans);
// }
// var name = prompt("What is your name?");
// greeting(name);

// function sumNum(num1,num2){
//     ans = num1 + num2;
//     console.log(ans);
// }
// num1 = 10;
// num2 = 10;
// sumNum(num1,num2);

//******************while loop
// var num = 0;
// while(num< 100){
//     num += 1;
//     console.log(num);
// }

//****************************for loop 
for (let num = 1; num <= 100; num++) {
    console.log(num);
}

//Data types
let yourAge = 18; //number
let yourName = 'joe'; //string
let name = { first: 'takla', last: 'last' }; //object
let truth = false; //boolean
let groceries = ['apple', 'orange', 'banana']; //array
let random; //undefined
let nothing = null; //value null

//Strings in Javascript

let fruit = 'bananaApple,blackberry,orange';
let morefruit = 'banana\nApple';

console.log(fruit);
console.log(morefruit);

console.log(morefruit.length);
console.log(morefruit.indexOf('Ap'));

console.log(fruit.slice(2, 11));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(','));//split by comma
console.log(fruit.split('')); //split by character

//Array

let fruits = ['banana', 'apple', 'orange', 'raspberry'];
// let fruits = new Array('banana','apple','orange','raspberry'); -->another way of declaring

console.log(fruits[2]);
fruits[0] = 'peach';

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Array common methods

console.log('to string', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(), fruits);//removes last element
console.log(fruits.push('sitafal'), fruits);//appends

console.log(fruits.shift(), fruits);//removes first element
console.log(fruits.unshift('nayafal'), fruits);//adds to first element

let vegies = ['potato', 'tomato', 'ladyfinder'];

let allGroceries = fruits.concat(vegies); //combines array
console.log(allGroceries);
console.log(allGroceries.slice(2, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); //alphabetically sorted array

let someNumbers = [1, 34, 32, 325, 3564, 81];
console.log(someNumbers.sort(function (a, b) { return a - b })); //sorted in ascending
console.log(someNumbers.sort(function (a, b) { return b - a })); //sorted in descending

let emptyArray = new Array();

for (let i = 0; i <= 10; i++) {
    emptyArray.push(i);
}
console.log(emptyArray);

//Objects in Javascript
//Dictionaries in Python

let student = {
    first: 'Anant',
    last: 'Chaudhary',
    age: 19,
    height: 175,

    studentinfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student.first);
console.log(student.last);
student.first = 'NotAnant';
console.log(student.first);

student.age++;
console.log(student.age);
console.log(student.studentinfo());

//if-else and switch are same as cpp