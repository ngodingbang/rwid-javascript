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

  get nameWithAge() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  /**
   * @param {string} value
   */
  set nameWithAge(value) {
    const [name, age] = value.split(" ");

    this.name = name;
    this.age = age;
  }
}

const ian = new Person();

ian.nameWithAge = "Ian 27";

console.info(ian.nameWithAge);
