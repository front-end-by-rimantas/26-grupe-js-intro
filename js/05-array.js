/*

Skaiciu aibeje yra:
normalus skaiciai;
NaN - not a number - skaiciaus tipo, bet ne normalus skaicius;
Infinity, -Infinity - skaiciaus tipo, taciau ne normalus skaicius, tai tik apibrezimas;

*/

/*
Reiksmes istraukimas is nurodytos saraso pozicijos
*/

const marks = [10, 2, 8, 4, 6, 10];
console.log(marks);

const firstMark = marks[0];
console.log('Pirmasis pazymys:', firstMark);

const secondMark = marks[1];
console.log('Antrasis pazymys:', secondMark);

const lastMarkIndex = marks.length - 1;
const lastMark = marks[lastMarkIndex];
console.log('Paskutinis pazymys:', lastMark);

console.log('----------------');

/*
Apskaiciuoti pazymiu vidurki
*/

const totalSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
const count = marks.length;

const average = totalSum / count;

const ats = `Bendra suma yra ${totalSum}, kiekis yra ${count} ir vidurkis yra ${average}.`;
console.log(ats);

console.log('----------------');

/*
Apskaiciuoti pazymiu vidurki
*/

let totalSum2 = 0;                      // 0
totalSum2 = totalSum2 + marks[0];       // 10
totalSum2 = totalSum2 + marks[1];       // 12
totalSum2 = totalSum2 + marks[2];       // 20
totalSum2 = totalSum2 + marks[3];       // 24
totalSum2 = totalSum2 + marks[4];       // 30
totalSum2 = totalSum2 + marks[5];       // 40

const count2 = marks.length;

const average2 = totalSum2 / count2;
console.log(average2);

console.log('----------------');

/*
Apskaiciuoti pazymiu vidurki
*/

let totalSum3 = 0;           // 0
totalSum3 += marks[0];       // 10
totalSum3 += marks[1];       // 12
totalSum3 += marks[2];       // 20
totalSum3 += marks[3];       // 24
totalSum3 += marks[4];       // 30
totalSum3 += marks[5];       // 40

const count3 = marks.length;

const average3 = totalSum3 / count3;
console.log(average3);

console.log('----------------');

/*
Apskaiciuoti pazymiu vidurki
*/

let index = -1;
let totalSum4 = 0;

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

index += 1;
totalSum4 += marks[index];
console.log(totalSum4);

const average4 = totalSum4 / marks.length;
console.log(average4);