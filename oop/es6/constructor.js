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

const person1 = new Person("Ian", 27);

person1.showPersonAtConsole();
