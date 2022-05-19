//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle


class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 2;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log (this.model + ' ' + this.make + ' does not have enough space.');

            }
        } else {
            console.log (this.model + ' ' + this.make + ' is full.');
        }
    }
    
    start() {
        if(this.fuel > 0) {
            console.log('start engine.');
            return this.started == true;
        } else {
            console.log('out of fuel.')
            return this.started = false;
        }
    }

    service() {
        if(this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
    
}

let myCar = new Car ('Honda', 'Ridgeline', '2020', 'Black', 20000)

myCar.start()
myCar.loadPassenger(4)
myCar.stop()
myCar.service()

console.log(myCar)
