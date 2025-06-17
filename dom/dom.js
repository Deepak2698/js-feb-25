
const num = 100; // Global Scope or outer scope

const printMessage = function(value){
    console.log(value);
}

let externalMessage = () => {
    alert('Welcome from External JS');
    
    var num1 = 10;
    console.log(num1);

    let num2 = 20;
    console.log(num2);

    const num3 = 30;
    console.log(num3);

    {
       var num4 = 40;
       console.log(num4); 

       let num5 = 50;
       console.log(num5);

       const num6 = 60;
       console.log(num6);

       console.log(num1); //functional scope
       console.log(num2); //block scope
       console.log(num3); //block scope
    }

    console.log(num4); //functional scope
    // console.log(num5); //Error //block scope
    // console.log(num6); //Error //block scope
    // console.log(num1); 10 //functional scope
    // console.log(num2); //20 //block scope
    // console.log(num3); //30 //block scope
    // console.log(num); //100 //inner scope or lexical scope

    printMessage('Javascript');

    let number = 45;
    printMessage(number);
}

console.log(num); //global or outer scope

// console.log(num1);
// const.log(num2);
// const.log(num3);


/***************** var **********************/

// console.log(num); //undefined //Hoisting(You can access variable before initialization)
// var num = 10;
// console.log(num); //10
// num = 20;
// console.log(num); //20 //Mutable

//var is functional scope

/********** Let **************************** */

// console.log(num); //Error => Cannot access 'num' before initialization
// let num = 10;
// console.log(num); //10
// num = 20;
// console.log(num); //20 (Mutable)

//let is a block scope

/*********** const ****************/

// console.log(num); //Error => Cannot access 'num' before initialization
// const num = 10;
// console.log(num); //10
// num = 20;
// console.log(num); //Error => TypeError: Assignment to constant variable.

//const is block scope
