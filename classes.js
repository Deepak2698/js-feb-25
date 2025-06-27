/************ Classes in JS using this keyword **************/


// class <class-name>{

// //data members
// //method functions

// }

// let obj = new class-name();

//using object you can access data-members and method-function
//obj.<data-members>
//obj.<method-function>



//What is a Constructor ?

// --->  Constructor has same name as that of class name and is invoked during instance(object) creation
// Has no return type



//non-parameterized constructor

// class myClass{

//     //data members
//     name = 'Rohit'; //string
//     Age = 22;  //number
//     subjects = ['Java','JS','React','Node','Mongo']; //array



//     //Method-Functions

//     printStudent(){
//         console.log(`${this.name} is a student in FSG having age of ${this.Age}`);
//     }

//     addSubject(subject){
//         this.subjects.push(subject);
//         this.printStudent();
//     }

//     displaySubjects(){
//         console.log(this.subjects);
//     }
// }

// let obj = new myClass();
// // obj.printStudent();
// obj.addSubject('Angular');
// obj.displaySubjects();



//parameterized constructor


class myClass{

    //data members
    name;  //string
    Age;   //number
    subjects = ['Java','JS','React','Node','Mongo']; //array



    //Method-Functions


    constructor(_name,_age){
        this.name = _name;
        this.Age = _age;
    }

    printStudent(){
        console.log(`${this.name} is a student in FSG having age of ${this.Age}`);
    }

    addSubject(subject){
        this.subjects.push(subject);
        this.printStudent();
    }

    displaySubjects(){
        console.log(this.subjects);
    }
}

let obj = new myClass('Sanket',21);
obj.printStudent();
// obj.addSubject('Angular');
// obj.displaySubjects();