class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    /** @type {string} */
    this.name = name;

    /** @type {number} */
    this.age = age;
  }
}

class Child {
  /**
   * @param {string} name
   * @param {number} age
   * @param {Person} parent
   */
  constructor(name, age, parent) {
    /** @type {Person} */
    this.parent = parent;
  }
}

const ian = new Person("Ian", 27);
const boy = new Child("Boy", 5, ian);

console.info(ian instanceof Person);
console.info(ian instanceof Child);
console.info("===");
console.info(boy instanceof Person);
console.info(boy instanceof Child);
