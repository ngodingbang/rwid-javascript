class Person {
  name;
  age;
  address = "Yogyakarta";

  sayAtConsole() {
    console.info(this.name);
    console.info(this.age);
    console.info(this.address);
  }
}

const ian = new Person();

ian.sayAtConsole();
