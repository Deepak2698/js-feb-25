/*************** functional scope vs block scope ***************/

// Scope: refers to the visibility of a variable

var a = 10; //Outer or global scope

function name1() {
    let b = 20;
    var c = 30;

    {
        let d = 40;
        var e = 50;
        console.log(b); //20 //block scope
        console.log(d); //40 //block scope
    }

    console.log(a);  //10 //lexical scope or inner scope
    console.log(b);  //20 //block scope
    console.log(c);  //30 //functional scope
    console.log(d);  //Error => block scope
    console.log(e);  //50 //Functional scope
}

name1();

console.log(a); //10 //global scope
console.log(b); //Error => block scope
console.log(c);  //Error => functional scope
console.log(d);  //Error => block scope
console.log(e);  //error => functional scope