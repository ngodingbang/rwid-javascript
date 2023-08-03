class UserController {
  age = 27;

  getAge() {
    return this.age;
  }

  static getClassName() {
    return `UserController`;
  }
}

const user = new UserController();
const user2 = new UserController();

console.info(UserController.getClassName());
console.info(user.getAge());
