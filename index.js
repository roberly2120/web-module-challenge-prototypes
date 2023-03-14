// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
 }

Person.prototype.eat = function (someFood) {
if (this.stomach.length < 10) {
  this.stomach.push(someFood);
 }
 else {
  return
 }
 }

 Person.prototype.poop = function () {
  this.stomach = [];
 }

 Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
 }

const person1 = new Person('Ryan', 29);
person1.eat('1');
person1.eat('2');
person1.eat('3');
person1.eat('4');
person1.eat('5');
person1.eat('6');
person1.eat('7');
person1.eat('8');
person1.eat('9');
person1.eat('10');
person1.eat('11');
person1.eat('12');

person1.poop();
// console.log(person1.toString());
// console.log(JSON.stringify(person1));




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.tank = 0;
  this.odometer = 0;
  this.milesPerGallon = milesPerGallon;
  
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(distance) {
// for (let i = 0; i < distance; i++) {

  if (distance < (this.tank * this.milesPerGallon)){
    this.odometer += distance;
    this.tank = (this.tank - (distance / this.milesPerGallon)).toFixed(2);
  }
  else if (distance > (this.tank * this.milesPerGallon)){
   
    this.odometer = this.odometer + this.tank * this.milesPerGallon;
    // need to figure out how to reduce the tank to 0 without messing up the math below. Another variable? a loop?
    return `I ran out of fuel at ${this.tank * this.milesPerGallon} miles!`;
  }

}

// }


const car1 = new Car('Ranger', 50);
car1.fill(10);
// console.log(car1.drive(499));
console.log(car1);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
Person.call(this, name, age);
this.favoriteToy = favoriteToy;

}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}



const baby1 = new Baby('Eric', 1, 'bubbles')
console.log(baby1);
console.log(baby1.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding
  2. Implicit Binding
  3. Explicit Binding
  4. New Binding
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
