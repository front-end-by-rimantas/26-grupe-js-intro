/*
Galimi variantai, kaip inicijuoti teksta:
- viengubos kabutes
- dvygubos kabutes
- backtick

Rekomendacija:
- viengubas ir dvygubas naudoti, tik jei inicijuojate tekstini kintamaji, kai jame informacija yra viena eilute;
- backtick'ai - visi kiti atvejai, t.y.: darbas su tekstais, multi-line;

Jei reikia "eskeipinti" (escape) kabutes, pries jas padedame back-slash (\).

Specialieji simoboliai:
\n - sukuria "enter";

*/


const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

// Cia yra vienguba (') kabute.
const kabute1 = "Cia yra vienguba (') kabute.";
console.log(kabute1);

// Cia yra dvyguba (") kabute.
const kabute2 = 'Cia yra dvyguba (") kabute.';
console.log(kabute2);

// Cia yra vienguba (') ir dvyguba (") kabutes.
const kabute12 = 'Cia yra vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabute12);

// Cia yra dvyguba (") ir vienguba (') kabutes.
const kabute21 = "Cia yra dvyguba (\") ir vienguba (\') kabutes.";
console.log(kabute21);

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

const marke = 'Tesla';
const model = 'S';
const battery = 100;
const batteryUnits = 'kW';

// I wish a had Tesla model S with a 100kW battery.
const car = 'I wish a had ' + marke + ' model ' + model + ' with a ' + battery + batteryUnits + '.';
console.log(car);

const bac = `I wish a had ${marke} model ${model} with a ${battery}${batteryUnits} battery.`;
console.log(bac);

const ba2 = `I wish a had ${marke} model ${model} with a ${battery + batteryUnits} battery.`;
console.log(ba2);

// Cia yra vienguba (') kabute.
const backKabute1 = `Cia yra vienguba (') kabute.`;
console.log(backKabute1);

// Cia yra dvyguba (") kabute.
const backKabute2 = `Cia yra dvyguba (") kabute.`;
console.log(backKabute2);

// Cia yra vienguba (') ir dvyguba (") kabutes.
const backKabute12 = `Cia yra vienguba (') ir dvyguba (") kabutes.`;
console.log(backKabute12);

// Cia yra dvyguba (") ir vienguba (') kabutes.
const backKabute21 = `Cia yra dvyguba (") ir vienguba (') kabutes.`;
console.log(backKabute21);

// Cia yra dvyguba (") ir vienguba (') ir backtick (`) kabutes.
const backKabute210 = `Cia yra dvyguba (") ir vienguba (') ir backtick (\`) kabutes.`;
console.log(backKabute210);

const head = '<head>\n\
    <meta charset="UTF-8">\n\
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
    <title>JS intro</title>\n\
    <link rel="stylesheet" href="./css/reset.css">\n\
</head>';
console.log(head);

const headBack = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS intro</title>
    <link rel="stylesheet" href="./css/reset.css">
</head>`;
console.log(headBack);