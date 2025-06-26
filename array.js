//Arrays in Javascript

// inside java => int arr = [10,20,30];
// char alpha = ['v','r','d'];

// let array = [10,20.34,'Angular',true,'f',undefined,null];

// console.log(array.length);
// console.log(array[2]);
// console.log(array[array.length-4]);
// array.push('JAVA');
// console.log(array);
// array.pop();
// console.log(array);

// array.unshift('React');
// console.log(array);
// array.shift();
// console.log(array);



//--------------------------------------------------------------------//



// filter

// let num = [1,2,3,4,5,6,7,8,9,10];

// // let evenNumbers = num.filter((value) => {
// //     return value % 2 == 0;
// // });

// let displayNumbers = (mrunal) => {
//     // console.log(typeof mrunal);
//     return mrunal % 2 == 0;
// }

// let evenNumbers = num.filter(displayNumbers);
// console.log(evenNumbers);

// let array1 = [10,30,45.67,'javascript','r',true];

// let result = array1.filter((item) => {
//     console.log(item);
//     return typeof item == 'string' || typeof item == 'boolean'
// });

// console.log(result);


//--------------------------------------------------//

//map

// let num = [1,2,3,4,5,6,7,8,9,10];

// let result = num.map((value) => {
//     return value * 10;
// })

// console.log(result);


//forEach

// let array = [10,30.65,'Hello','r']; // array of values
// let array1 = [{},{},{},{}]; //array of objects


/*-------------------------------------------------------------------------*/


//find()

// let array = ['react','js',10,20.34,'angular'];

// let result = array.find((value) => {
//     // console.log(value);
//     return value == 'angular';
// })

// console.log(result);



//slice

// let array = ['react','js',10,20.34,'angular'];

// let result = array.slice(3,5);

// console.log(result);



//splice


// // Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 2, "Lemon", "Kiwi",'Grapes');

// console.log(fruits);
// // .splice(Index-start,Index to remove characters,Value1,value2,....)





// concat

// let arr1 = ['react,angular','js'];
// let arr2 = [true,false,true];
// let arr3 = [20.45,-23,true,'SD'];


// // let array4 = arr1 + arr2 + arr3;

// let array4 = arr1.concat(arr3,arr2);
// console.log(array4);



/// sort

var array12 = [3,6,1,78,23,43,56,111,431,8,0];
function sortMyArray(a, b) { // ascending sort
    return b - a;
}
var sortResult1 = array12.sort(sortMyArray);
console.log(sortResult1);

// var array13 = ['b', 'z', 'a', 'f', 'e', 'g'];
// console.log(array13.sort());
