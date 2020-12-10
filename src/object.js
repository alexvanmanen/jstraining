class Auto {
    merk;
    model;
    kenteken;
    constructor(merk, model, kenteken) {
        this.kenteken = kenteken;
        this.merk = merk;
        this.model = model;
    }

    toString() {
        return this.merk + " " + this.model + this.kenteken;
    }
}

console.log();

let set = new Set();
set.add(new Auto("Toyota", "Prius", "12-22-XN"));
set.add(new Auto("Audi", "RS8", "12-23-XN"));
set.add(new Auto("Tesla", "Model 3", "12-24-XN"));

set.forEach(value => console.log(value));


let map = new Map();
map.set("Auto", "Car");
map.set("Fiets", "Bike");
map.set("Fiets", "Bicycle");

map.forEach((value, key) => console.log("value: "+ value + " key:" + key));

