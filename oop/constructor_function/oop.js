/**
 * @param {string} name
 * @param {number} age
 */
function Person(name, age) {
  /** @type {string} */
  this.name = name;

  /** @type {number} */
  this.age = age;

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

const parent = new Person("Ian", 27);
const child = new Child("Boy", 5, parent);

child.showPersonAtConsole();
console.info(child.parent);
