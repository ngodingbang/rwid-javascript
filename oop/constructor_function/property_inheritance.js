/**
 * @param {string} name
 * @param {number} age
 */
function Person(name, age) {
  /** @type {string} */
  this.name = name;

  /** @type {number} */
  this.age = age;
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

Child.prototype = Object.create(Person.prototype);

Child.prototype.sayHello = function () {
  console.info(`Hello, I'm a Child and my parent name is ${this.parent.name}`);
};

Person.prototype.sayHello = function () {
  console.info(`Hello, I'm a Parent and my name is ${this.name}`);
};
