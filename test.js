// var a = 10;
//  //console.log(b);
// // console.log(c);
// function x(){
// 	var b;
//     console.log(a);
//     // console.log(c);
//   function y(){
//   	var c;
//     console.log(a);
//     console.log(b);
//   }
//   y();
// }
// x();

// console.log('----ANS 4----');

// var x = 9;
// function f(){
//     return x * x;
// }

// console.log(f());
// x = 5;
// console.log(f());

// console.log('----ANS 5----');

// var foo = 1;
// function bar(){
//     console.log(foo);
//     if(!foo){
//         var foo = 40;
//     }
//     console.log(foo);
// }
// bar();

//---------MODULE - REVEALING MODULE------------//

var addObj = (function(){
    //private property
    let counter = 0;
    //private method
    const printCounter = () => console.log(counter);
    const add = () => {
        counter += 1;
        printCounter();
    };
    const reset = () => {
        counter = 0;
        printCounter();
    };
    
    return {
        add: add,
        reset: reset
    };
})();

const make_adder = (inc) => {
    let counter = 0;
    return () => {
        counter += inc;
        return counter;
    }
};

// addObj.add();
// addObj.add();
// addObj.add();
// addObj.reset();
// addObj.add();

// var add5 = make_adder(5);
// add5();
// add5();
// console.log(add5());

const employee = (() => {
    let name='';
    let age=30;
    let salary=0;
    const getName = function()  {
        return name;
    };
    const getAge = function()  {
        return age;
    };
    const getSalary = function()  {
        return salary;
    };

    const setName = function(newName)  {
        name = newName;
    };
    const setAge = function(newAge)  {
        age = newAge;
    };
    const setSalary = function(newSalary)  {
        salary = newSalary;
    };
    const increaseSalary = function(percentage)  {
        let currentSalary = getSalary();
        // console.log(currentSalary);
        currentSalary += currentSalary * (percentage/100);
        setSalary(currentSalary);
        // console.log(getSalary());
    };
    const incrementAge = function()  {
        setAge(getAge() + 1);
    };

    const printEmployee = function()  {
        return `name: ${getName()} age: ${getAge()} salary: ${getSalary()}`;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
        print: printEmployee
    };

})();

const employeeExtension = (function(employee){
    let address;
    employee.getAddress = function(){
        return address;
    }
    employee.setAddress = function(newAddress){
        address = newAddress;
    }
    
})(employee);

// employee.setSalary(1000);
// employee.increaseSalary(10);
// employee.incrementAge();
// console.log(employee.print());
// employee.setAddress('Fairfield');
// console.log(employee.getAddress());

// const me = {
//     first: 'Tina',
//     last: 'Xing',
//     getFullName: function(number, age) {
//         return this.first + " " + this.last;
//     }
// };

// var you = {
//     first: 'Rujan',
//     last: 'Sing'
// }

// console.log(me.getFullName());

// console.log(me.getFullName.call(you));

var x = 5;
var y = test();
var b = { x: 4 };
var z = y.bind(b);
z();

y.bind(b);
y();

function test() {
    console.log(this);
    console.log(x);
    var z = function() {
        var x = 3;
        console.log(this);
        console.log(this.x);
    }
    var x = 8;
    z();
    return z;
}

const validator = (() => {
    const validateFirstName = function(firstName){
        return firstName === ''? false: true;
    };
    const validateLastName = function(lastName){
        return lastName === ''? false: true;
    };

    const validate = function(first, last){
        return validateFirstName(first) && validateLastName(last);
    }

    return {
        validate: validate
    }

})();

console.log(validator.validate('abc', ''));

employee.address = '';
employee.setAddress = function(newAddress){
    this.address = newAddress;
}
employee.getAddress = function(){
    return this.address;
}

employee.setAddress('chicago');
console.log(employee.getAddress());


 

