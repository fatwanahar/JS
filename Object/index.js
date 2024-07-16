// Object using object literal

const person_literal = {
    name: "Fatwa",
    age: 24,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person_literal.greet();


// Object using constructor function

function Person_constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const fatwa_constructor = new Person_constructor("Fatwa", 24);
fatwa_constructor.greet();

// Object using class

class Person_class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const fatwa_class = new Person_class("Fatwa", 24);
fatwa_class.greet();

// Object using Object.create()

const person_create = Object.create({
    name: "Fatwa",
    age: 24,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
});

person_create.greet();

// prototype

function Person_prototype(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const friz = new Person_prototype("Friz", 24);
friz.greet();
