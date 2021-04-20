/*

Reikia sukurti 7 narių sąrašą, iš skirtingų atsitiktinių skaičių intervale tarp 0 ir 9.

Math.random() grazina skaicius intervale [0..1) -> 0 .... 0.9999999999999999

*/

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const random = [];

while (random.length < 7) {
    const num = randomNumber();
    if (!random.includes(num)) {
        random.push(num);
    }
}

console.log(random);