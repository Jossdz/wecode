class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
    this.status = "off";
  }
  turnOn() {
    this.status = "on";
  }
}

const miTroca = new Car("gris", "cybertruck");

miTroca.model; // cybertruck
