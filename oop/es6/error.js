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

  sayHello() {
    if (this.name === undefined || this.age === undefined) {
      throw new TypeError("Property name or age are undefined.");
    }

    console.log(
      `Hello! My name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const ian = new Person();

ian.sayHello();
