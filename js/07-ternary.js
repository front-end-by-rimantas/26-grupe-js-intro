const a = 8;
const b = 5;

// ternary variantas
console.log(a > b ? 'taip' : 'ne');

// if-else analogas
if (a > b) {
    console.log('taip');
} else {
    console.log('ne');
}

const age = 50;
const ageLimit = 18;

const status = age >= ageLimit ? 'galiu 🥳🥳' : 'dar per jaunas... 😥';
console.log(status);

const kelias = 330;
const bake = 400;

const arPasieksiuPalanga = kelias > bake ? 'sorry...' : 'yupikae!!';
console.log(arPasieksiuPalanga);

const koksSkaicius = true ? true : false;
console.log(koksSkaicius);