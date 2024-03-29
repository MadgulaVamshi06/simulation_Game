function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}


Vehicle.prototype.accelerate = function () {
    this.speed = this.speed+10;
    console.log(`Accelerating the ${this.brand} ${this.model} and the speed is ${this.speed} `);

};

Vehicle.prototype.brake = function () {
    this.speed = this.speed - 10;
    console.log(`Brakes are applied to the ${this.brand} ${this.model} and speed is reduced to ${this.speed}.`);

};

Vehicle.prototype.refuel = function () {
    console.log(`Refueling the ${this.brand} ${this.model}.`);

};


function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}


Car.prototype = Object.create(Vehicle.prototype);



Car.prototype.honk = function () {
    console.log(`Honk! The ${this.brand} ${this.model} is honking.`);
};


function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}


Airplane.prototype = Object.create(Vehicle.prototype);


Airplane.prototype.takeOff = function () {
    console.log(`The ${this.brand} ${this.model} is taking off.`);

};
Airplane.prototype.num_engines = function () {
    console.log(`The ${this.brand} ${this.model} has ${this.numberOfEngines} engines .`);

};


const myCar = new Car('Toyota', 'Camry', 60, 'Petrol', 4);
const myAirplane = new Airplane('Boeing', '747', 60, 'Jet Fuel', 4, true);

console.log(myCar);
console.log(myAirplane);
myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();
console.log(`Number of wheels in the ${myCar.brand} ${myCar.model}: ${myCar.numberOfWheels}.`);

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
myAirplane.num_engines();