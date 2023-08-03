class SomeClass {
  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this._data = numbers;
  }

  [Symbol.iterator]() {
    let index = -1;
    let data = this._data;

    return {
      next: () => ({
        value: data[++index],
        done: !(index in data),
      }),
    };
  }
}

const object = new SomeClass([1, 2, 3, 4]);

for (const iterator of object) {
  console.info(iterator);
}

const object2 = { a: 1, b: 2, 0: "acs" };

object2.a;
object["a"];
object[0];
