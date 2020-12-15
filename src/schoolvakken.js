const cijferReeks = [
    8.4,7.2,5.1,3.2,5.5
]

const VAK = Object.freeze( { NK: "Natuurkunde", NL: "Nederlands", FR: "Frans"});

const studenten = [
    {
        naam: 'Alex',
        leeftijd: '36',
        cijfers: [
            { vak: VAK.NK, cijfer: 5.5},
            { vak: VAK.FR, cijfer: 6.5},
            { vak: VAK.NL, cijfer: 4.5}
        ]
    },
    {
        naam: 'Remy',
        leeftijd: '34',
        cijfers: [
            { vak: VAK.NK, cijfer: 3.5},
            { vak: VAK.FR, cijfer: 10},
            { vak: VAK.NL, cijfer: 9}
        ]
    },
    {
        naam: 'Paul',
        leeftijd: '28',
        cijfers: [
            { vak: VAK.NK, cijfer: 1.5},
            { vak: VAK.FR, cijfer: 2.5},
            { vak: VAK.NL, cijfer: 4.5}
        ]
    }
]


function filteren(student){
    var gemiddelde = student.cijfers.map(value => value.cijfer).reduce((a,b)=>a+b,0)/student.cijfers.length;
    return gemiddelde>=5.5;
}


console.log(studenten.filter(filteren));

