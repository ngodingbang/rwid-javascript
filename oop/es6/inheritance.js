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

  showPersonAtConsole() {
    console.info(this);
    console.info(`Name: ${this.name}`);
    console.info(`Age: ${this.age}`);
  }
}

class Child extends Person {
  /**
   * @param {string} name
   * @param {number} age
   * @param {Person} parent
   */
  constructor(name, age, parent) {
    super(name, age);

    /** @type {Person} */
    this.parent = parent;
  }

  showChildAtConsole() {
    super.showPersonAtConsole();
  }
}

const ian = new Person("Ian", 27);
const boy = new Child("Boy", 5, ian);

boy.showChildAtConsole();
