"use strict";

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  //console.log(lastName); if we use this
  //give error because not define outside
  //console.log(firstName);

  function printAge() {
    const output = `${firstName},You are ${age}, born in ${birthyear}`;
    //console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      const firstName = "Steven";
      const str = `oh, and you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); not access due to block element
    //but if define 'var' then this is function and it can be access
    //console.log(add(2,3));;//give error due
    //to block if we remove strict mode give ans 5
  }
  printAge();
  return age;
}

const firstName = "Jonas"; //global variable
calcAge(1991);
//console.log(age);//not access child variable
//printAge(); this is not accesss outside the function

//<--------Hoisting and TDZ practice--------->

//Hoisting with variables
console.log(me); //--->undefined
//console.log(job); --->Uncaught ReferenceError: Cannot access 'job' before initialization
//console.log(year); --->Uncaught ReferenceError: Cannot access 'year' before initialization
var me = "Manish";
let job = "Teacher";
const year = 1991;

//hoisting with function
console.log(addDecl(2, 4));
//console.log(addExpr(2, 4));--->Uncaught ReferenceError: Cannot access 'addExpr' before initialization
//console.log(addArrow(2, 4));--->Uncaught ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  //due to its const variable
  return a + b; //if we use var instead of const the message show undefined
};

const addArrow = (a, b) => a + b; //same const variable

//Example
console.log(numProducts); //undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10; //var show undefined, use const more of time

function deleteShoppingCart() {
  console.log("All products deleted"); //these happen because var is undefined not show 10
}

var x = 1; //this create in window other or not
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//<<----- this keywords ----->>

console.log(this);

const calccAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this); //this show undefine
};
calccAge(1991);

const calccAgeArrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this); //but here show window due to above this ,above this is disc keyword
};
calccAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); //jonas is owner of this method ,this work here due to use of jonas not basis of method inside

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); //this work because call by matilda

const f = jonas.calcAge;
// f(); //regular function not any owner of this function

//--regular funtion vs arrow function--->.

const jonass = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  //never use THIS  in arrow funtion and as method
  greet: () => {
    //here function can access the inside item
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonass.greet();
jonass.calcAge();

// argument keyword
//only exist in regular funtion not in arrow function
const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr1(2, 5);
addExpr1(2, 4, 5, 6);

//<<.....primitive vs objects(reference types)....<<

//primitive like number,string,boolean,undefined,null,symbol,bight...stored in call stack
//object like object literals,arrays,functions,many more...stored in heap
let age = 30;
let oldAge = age; //30
age = 31;
console.log(age); //31
console.log(oldAge);

const mee = {
  name: "jonas",
  age: 30,
};

//const are immutable for primitive value not for refrence value like below the value can change
const friend = mee;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me:", mee);

//practice

//primitive types
let lastNamee = "Williams";
let oldLastNamee = lastNamee;
lastNamee = "Davis";
console.log(oldLastNamee);

//Reference type
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

//copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["alice", "bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("mary");
jessicaCopy.family.push("john");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
