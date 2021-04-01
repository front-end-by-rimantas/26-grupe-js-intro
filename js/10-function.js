/*

function (funkcija) - logikos blokas, kuri galime "paleisti" N kartu, pagal poreiki, ir su skirtingais parametrais;

Komentarai:
- ne visos funkcijos privalo priimti/gauti parametrus (info);
- jeigu priima parametrus, tai ju gali neribotas kiekis;
- visos funkcijos grazina rezultata;
- taciau ne visada privalome nurodyti koki rezultata grazinti, tokiu atveju, butu grazinama reiksme "undefined";

pvz.:
- apskaiciuoti vidurki - galime gauti ivarius sarasus su skaiciais, o vidurkio algoritmas nuo to nesikeicia;
- triju skaiciu suma - skaiciai kas kart gali buti skirtingi, o algoritmas tas pat;

*/

const name1 = 'John';
const name2 = 'Steve';
const name3 = 'Maria';

function sayHi(vardas) {
    return `Hi, ${vardas}!`;
}

const hi1 = sayHi(name1);
console.log(hi1);

const hi2 = sayHi(name2);
console.log(hi2);

const hi3 = sayHi(name3);
console.log(hi3);

console.log('----------------');

const marks1 = [10, 2, 8, 4, 6];
const marks2 = [9, 1, 7, 3];
const marks3 = [10, 9, 8, 2];

function average(pazymiai) {
    let suma = 0;
    const kiekis = pazymiai.length;

    // logic
    for (let i = 0; i < kiekis; i++) {
        const pazymys = pazymiai[i];
        suma += pazymys;
    }

    return suma / kiekis;
}

const ave1 = average(marks1);
console.log(ave1);

const ave2 = average(marks2);
console.log(ave2);

const ave3 = average(marks3);
console.log(ave3);
