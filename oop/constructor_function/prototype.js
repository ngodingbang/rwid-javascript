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

const ian = new Person("Ian", 27);

console.info(ian);
console.info(ian.__proto__);
console.info(ian.hasOwnProperty("name"));
