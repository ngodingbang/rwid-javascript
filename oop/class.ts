interface HasTire {}

interface HasFuel {
  fuelBrand(): string;
}

abstract class Vehicle implements HasTire {}

class Bicycle extends Vehicle {
  private bicycleBrandName(): string {
    return "polygon";
  }

  public showBicycleBrandNameAtConsole() {
    return console.info(this.bicycleBrandName());
  }
}

class Motorcycle extends Vehicle implements HasFuel, HasEngine {
  fuelBrand(): string {
    return "pertalite";
  }
}

class Car extends Vehicle implements HasFuel, HasEngine {
  fuelBrand(): string {
    return "pertamax";
  }
}

const hondaBeat = new Motorcycle();
const hondaBrio = new Car();

console.info(hondaBeat.fuelBrandPertalite());
console.info(hondaBrio.fuelBrandPertamax());
