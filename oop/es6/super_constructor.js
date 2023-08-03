class Person {
  constructor() {
    //
  }
}

class Child extends Person {
  constructor() {
    // super();
    console.info("Hello Child");
  }
}

const boy = new Child();
