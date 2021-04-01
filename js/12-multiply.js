function daugyba(a, b) {
    // input validation

    if (typeof a !== 'number') {
        return 'ERROR: pirma reiksme turi buti skaiciaus tipo';
    }
    if (!isFinite(a)) {
        return `ERROR: pirmasis skaicius negali buti ${a}`;
    }

    if (typeof b !== 'number') {
        return 'ERROR: antra reiksme turi buti skaiciaus tipo';
    }
    if (!isFinite(b)) {
        return `ERROR: antrasis skaicius negali buti ${b}`;
    }

    // logic
    const rezultatas = a * b;

    // return result
    return rezultatas;
}

console.log(daugyba(Infinity, 4));
console.log(daugyba(1.5, Infinity));
console.log(daugyba(Infinity, -Infinity));
console.log(daugyba(-Infinity, Infinity));
console.log(daugyba(-Infinity, -Infinity));
console.log(daugyba(NaN, 4));
console.log(daugyba(1.5, NaN));
console.log(daugyba(NaN, NaN));
console.log(daugyba(2, 'labas'));
console.log(daugyba(2, ''));
console.log(daugyba('rytas', 'labas'));
console.log(daugyba(true, false));
console.log(daugyba(false, false));
console.log(daugyba(true, true));
console.log(daugyba(7, true));
console.log(daugyba(-7, true));
console.log(daugyba(7, false));
console.log(daugyba(-7, false));
console.log(daugyba(-7, [2]));
console.log(daugyba(-7, [-2]));
console.log(daugyba(-7, [2, 22]));
console.log(daugyba(-7, [-2, -22]));

console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(-4, 5), '->', -20);
console.log(daugyba(-2.5, -4), '->', 10);
console.log(daugyba(2.5, 0), '->', 0);
console.log(daugyba(-2.5, 0), '->', -0);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(1.5, 2.6), '->', 3.9);
console.log(daugyba(66, 1 / 33), '->', 2);
