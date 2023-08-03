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
      throw new PersonError(this);
    }

    console.log(
      `Hello! My name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

class PersonError extends Error {
  /**
   * @param {Person} person
   * @param {string | undefined} message
   */
  constructor(person, message = undefined) {
    super(
      message ||
        (person.name === undefined && person.age === undefined
          ? "Property name and age are undefined."
          : person.name === undefined
          ? "Property name are undefined."
          : person.age === undefined
          ? "Property age are undefined."
          : undefined)
    );
  }
}

const ian = new Person();

try {
  ian.sayHello();
} catch (error) {
  if (error instanceof PersonError) {
    ian.name = "Ian";
    ian.age = 27;

    ian.sayHello();
  } else {
    console.error(error);
  }
}
