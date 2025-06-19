// //DataTypes in Javascript

// var num =10;
// console.log(num);
// console.log(typeof num); //number

// var num1 = 20.34;
// console.log(num1);
// console.log(typeof num1); //number

// let domain = 'Java';
// console.log(domain);
// console.log(typeof domain); //string

// let character = 'S';
// console.log(character);
// console.log(typeof character); //string

// const response = true;
// console.log(response);
// console.log(typeof response); //boolean

// const value = undefined;
// console.log(value);
// console.log(typeof value); //undefined

// const item = null; //empty object
// console.log(item);
// console.log(typeof item); //object

//   domain1 = {
//     student: 'XYZ', 
//     tech: 'MERN'
// }

// console.log(domain1.student); //XYZ
// console.log(typeof domain1.student); //string
// console.log(domain1.tech); //MERN
// console.log( typeof domain1.student); //String
// console.log(typeof domain1); //Object


/*************** Operators in JS **************/

// let x = 50;
// let y = 20;

// let sum = x + y;
// console.log(sum);

// let sub = x - y;
// console.log(sub);

// let mul = x * y;
// console.log(mul);

// let div = x/y;
// console.log(div);

// let rem = x % y;
// console.log(rem);

// let x = 10;
// x = x - 1; //9
// x -=1;  //8
// console.log(x);

// let x = 10;
// // x = x * 10;
// x *=10;
// console.log(x);


/********* Comparison Operators ***********/

// = is known as assignment operator
// == is known as comparison where value should be same and datatype can be different
// === is known as comparison operator where value and datatype both should be same

// let num = '10';
// let num1 = '10';

// if(num === num1){
//     console.log('Value is same');
// }else{
//     console.log('values are same but datatype is different')
// }


//Ternary operator

/*** 
 * 
 * if(condition){
 *      //If condition is true then this block will be executed
 * }else{
 *      //If condition is false then this block will be executed
 * }
 * 
 * ternary = (condition) ? (statement1) : (statement2)
 * 
 * 
 * if(condition1){
 *      if(condition2){
 *      //statement1
 * }else{
 *      //statement2
 * }
 * }else{
 *      //statement3
 * }
 * 
 * ternary = (condition1) ? (condition2) ? (statement1) : (statement2) : (statement3) 
 */


/***** Negation **********/

// let a = true;

// console.log(a);
// console.log(!a);



/*************** ECMASCRIPT ES6 ******************/

// ECMASCRIPT = European Computer's Management Association SCRIPT

//ES5 = 1997-2015
//ES6 = 2015 and above => ES5 + lot of new features

//features of ES6

/***
 * 
 * let and const
 * modules
 * arrow functions
 * template strings
 * classes using this keyword
 * callbacks,promises,async and await
 * rest and spread operator
 * default params
 * 
 ***/


// default params

// function sum(a,b){
//     let sum = a + b;
//     console.log(sum);
// }

// sum(20,10); //30
// sum(20); //NaN = Not a Number

// function sum1(a=0,b=10){
//     let sum = a + b;
//     console.log(sum);
// }

// sum1(10,20);
// sum1(20);

