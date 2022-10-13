String.prototype.filter = function(str){
    return this.replace(str, '');
}

const s = new String("hello NOT world");
 console.log(s.filter(''));

Array.prototype.bubbleSort = function() {
    let a = this;
    for(let i = 0; i < a.length - 1; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] > a[j]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
};

const arr = [2,4,1,-9,8,0];
console.log(arr.bubbleSort());
const arr2 = [-1,0,1,1,1,6];
console.log(arr2.bubbleSort());

const Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}

const Teacher = function(){};

Teacher.prototype = new Person();

Teacher.prototype.initialize = function(name, age) {
    Person.call(this);
    this.name = name;
    this.age = age;
}

Teacher.prototype.teach = function(subject){
    return(`${this.name} is now teaching ${subject}`);
}

const t = new Teacher();
t.initialize('Peter', 55);
console.log(t.teach('math'));