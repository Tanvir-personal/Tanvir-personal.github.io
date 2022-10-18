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

// var addObj = (function(){
//     //private property
//     let counter = 0;
//     //private method
//     const printCounter = () => console.log(counter);
//     const add = () => {
//         counter += 1;
//         printCounter();
//     };
//     const reset = () => {
//         counter = 0;
//         printCounter();
//     };
    
//     return {
//         add: add,
//         reset: reset
//     };
// })();

// const make_adder = (inc) => {
//     let counter = 0;
//     return () => {
//         counter += inc;
//         return counter;
//     }
// };

// addObj.add();
// addObj.add();
// addObj.add();
// addObj.reset();
// addObj.add();

// var add5 = make_adder(5);
// add5();
// add5();
// console.log(add5());

// const employee = (() => {
//     let name='';
//     let age=30;
//     let salary=0;
//     const getName = function()  {
//         return name;
//     };
//     const getAge = function()  {
//         return age;
//     };
//     const getSalary = function()  {
//         return salary;
//     };

//     const setName = function(newName)  {
//         name = newName;
//     };
//     const setAge = function(newAge)  {
//         age = newAge;
//     };
//     const setSalary = function(newSalary)  {
//         salary = newSalary;
//     };
//     const increaseSalary = function(percentage)  {
//         let currentSalary = getSalary();
//         // console.log(currentSalary);
//         currentSalary += currentSalary * (percentage/100);
//         setSalary(currentSalary);
//         // console.log(getSalary());
//     };
//     const incrementAge = function()  {
//         setAge(getAge() + 1);
//     };

//     const printEmployee = function()  {
//         return `name: ${getName()} age: ${getAge()} salary: ${getSalary()}`;
//     }

//     return {
//         setName: setName,
//         setAge: setAge,
//         setSalary: setSalary,
//         increaseSalary: increaseSalary,
//         incrementAge: incrementAge,
//         print: printEmployee
//     };

// })();

// const employeeExtension = (function(employee){
//     let address;
//     employee.getAddress = function(){
//         return address;
//     }
//     employee.setAddress = function(newAddress){
//         address = newAddress;
//     }
    
// })(employee);

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

// var x = 5;
// var y = test();
// var b = { x: 4 };
// var z = y.bind(b);
// z();

// y.bind(b);
// y();

// function test() {
//     console.log(this);
//     console.log(x);
//     var z = function() {
//         var x = 3;
//         console.log(this);
//         console.log(this.x);
//     }
//     var x = 8;
//     z();
//     return z;
// }

// const validator = (() => {
//     const validateFirstName = function(firstName){
//         return firstName === ''? false: true;
//     };
//     const validateLastName = function(lastName){
//         return lastName === ''? false: true;
//     };

//     const validate = function(first, last){
//         return validateFirstName(first) && validateLastName(last);
//     }

//     return {
//         validate: validate
//     }

// })();

// console.log(validator.validate('abc', ''));

// employee.address = '';
// employee.setAddress = function(newAddress){
//     this.address = newAddress;
// }
// employee.getAddress = function(){
//     return this.address;
// }

// employee.setAddress('chicago');
// console.log(employee.getAddress());

//-----------------------------------------------------------------------

// var b = 5;
// var c = hello(b);
// var a = 1000;
// var d = {a: 50, b: 90};
// console.log(c.apply(d));
// function hello(a) {
//     console.log(this);
//     a = a * 2;
//     console.log(bye())
//     function bye() {
//         console.log(this);
//         console.log(b);
//         console.log(this.b);
//         return a;
//     }
//     var b = 100;
//     return bye;
// }

//-----------------------------------------------------------------------

// const CAR = (() => {
//     let _speed = 0;
//     let _direction = 0;
    
//     const gasPaddle = function(){
//         if(_speed <= 120)
//             _speed += 5;
//     };

//     const brake = function(){
//         if(_speed >= 0)
//             _speed -= 10;
//     };

//     const turnLeft = function(deg){
//         _direction -= deg;
//     };

//     const turnRight = function(deg){
//         _direction += deg
//     };

//     const status = function(){
//         console.log(`The car is driving direction ` + _direction + " at " + _speed + " mph");
//     };

//     return {
//         gasPaddle, brake, turnLeft, turnRight, status
//     }

// })();

// CAR.gasPaddle();
// CAR.gasPaddle();

// CAR.status();

//--------------------------------------------------------------------------
// const Computer = function() {};
// Computer.prototype.ram = 'RAM01';
// Computer.prototype.cpu = 'CPU01';
// Computer.prototype.storage = 'STORAGE01';

// Computer.prototype.runProgram = function(program){
//     console.log(`running: ${program}`);
// }

// const Laptop = function(){};

// Laptop.prototype = new Computer();
// Laptop.prototype.battery = 'battery01';

// Laptop.prototype.carryAround = function() {
//     Computer.call(this);
//     console.log( "carrying laptop:  cpu: " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
// }


// const laptop = new Laptop();
// laptop.carryAround();

//------------------------

// var a = 12;
// var b = 8;
// var z = x(b);
// z(a,b);
// function x(a){
//     console.log(111111);
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     var b = function(b){
//         if(a <= 10){
//             a = a*2;
//         }
//         console.log(222222);
//         console.log(this);
//         console.log(a);
//         console.log(b);
//     };
//     console.log(333333);
//     console.log(this);
//     console.log(a);
//     console.log(b);

//     return b.bind({a:5, b:20});

// }

//-----------------------------------
class Computer {
    constructor(ram, cpu, storage){
        this.ram = ram;
        this.cpu = cpu;
        this.storage = storage;
    }
    runProgram(program){
        console.log(`running: ${program}`);

    }
}

class Laptop extends Computer{
    constructor(ram, cpu, storage, battery){
        super(ram, cpu, storage);
        this.battery = battery;
    }
    carryAround(){
        console.log( "carrying laptop:  cpu: " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }

}

const laptop = new Laptop(32, 2.4, 500, 10000);
laptop.carryAround();


