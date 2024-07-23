//object 
var person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
};
//accessing object properties
document.write(person.age);

//object with methods
var animal1 = {
    name: "Walter",
    age: 5,
    type: "dog",
    breed: "labrador",
    color: "black",
    description : function() {
        return this.name + " is a " + this.color + " " + this.type + " and is " + this.age + " years old.";
    }
};
//accessing object methods
console.log(animal1.description());

//object constructor with methods
function Animal(name, age, type, breed, color) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.description = function() {
        return this.name + " is a " + this.color + " " + this.type + " and is " + this.age + " years old.";
    }
}
//creating new objects
var animal2 = new Animal("Bella", 3, "dog", "labrador", "black");
var animal3 = new Animal("Molly", 2, "dog", "labrador", "black");

//accessing object methods
console.log(animal2.description());
console.log(animal3.description());