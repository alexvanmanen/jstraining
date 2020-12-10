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

// const z = (a, b, c=1) => a + b * c;
// const y = z(z(2,5, 5),z(3,4));
// console.log(y);


const autos = [
    {merk: 'Tesla', model: "Model 3"},
    {merk: 'BMW', model: "515"},
    {merk: 'Audi', model: "A8"},
    {merk: 'Mazda', model: "MX-5"},
    {merk: 'Toyota', model: "Celica"}
];
function print(value) {
    console.log(value);
}

var lijstMetModelNamen = autos.map(value => value.model);

function isEenGaveBak(value, index, array) {
    if(value === "MX-5" || value === "Celica") {
        return value + " is een gave bak" + index + array;
    }
    return value + " is wel aardig" + index + array;
}


console.log(lijstMetModelNamen.map(isEenGaveBak));
console.log(lijstMetModelNamen.map((value,index) => isEenGaveBak(value, index)));

lijstMetModelNamen.forEach(modelNaam => console.log(modelNaam.length));
// console.log(autos.map(value => value.model));


