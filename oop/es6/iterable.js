class Counter {
  /**
   * @param {number} start
   * @param {number} max
   */
  constructor(start, max) {
    if (typeof start !== "number" || typeof max !== "number") {
      throw new Error(
        `Parameter start or number must be a number. Start: ${start}, max: ${max}`
      );
    }

    /** @type {number} */
    this.count = start;

    /** @type {number} */
    this.max = max;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.count > this.max) {
          return { value: this.count, done: true };
        }

        const result = { value: this.count, done: false };

        this.count++;

        return result;
      },
    };
  }
}

const counter = new Counter(1, 10);

for (const count of counter) {
  console.info(count);
}
