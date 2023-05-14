interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("starting engine");
  }
  stopEngine(): void {
    console.log("stoping engine");
  }
  move(): void {
    console.log("move the vehicle");
  }
}
const vehicle1 = new Vehicle("car", "kawasaki", 999);

// abstract class
