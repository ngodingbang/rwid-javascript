/**
 * @param {string} name
 * @param {number} age
 */
function Person(name, age) {
  /** @type {string} */
  this.name = name;

  /** @type {number} */
  this.age = age;

  /** @type {function} */
  this.showPersonAtConsole = function () {
    console.info(this);
    console.info(`Name: ${this.name}`);
    console.info(`Age: ${this.age}`);
  };
}

/**
 * @param {string} name
 * @param {number} age
 * @param {Person} parent
 */
function Child(name, age, parent) {
  Person.call(this, name, age);

  /** @type {Person} */
  this.parent = parent;
}

const ian = new Person("Ian", 27);
const boy = new Child("Boy", 5, ian);

Child.prototype.sayHelloToParent = function () {
  console.info(`Hello, ${this.parent.name}`);
};

Person.prototype.sayHelloToMyself = function () {
  console.info(`Hello, ${this.name}`);
};

console.info(boy.sayHelloToMyself());
