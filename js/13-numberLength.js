function numberLength(num) {
    console.log(num);

    // validation
    if (typeof num !== 'number') {
        return 'ERROR: turi buti skaiciaus tipas';
    }

    if (!isFinite(num)) {
        return `ERROR: turi buti normalus skaicius, o ne ${num}`;
    }

    // logic
    let digitsCount = ('' + num).length;

    // jei skaiciuje yra kablelis, tai -1
    if (num % 1 !== 0) {
        digitsCount--;
    }

    // jei skaiciuje yra neigiamas, tai -1
    if (num < 0) {
        digitsCount--;
    }

    // result return
    return digitsCount;
}

console.log(numberLength('asd'));
console.log(numberLength('asd148562'));
console.log(numberLength('845asd148562'));
console.log(numberLength(true));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
console.log(numberLength([]));
console.log(numberLength([845]));
console.log(numberLength([845, 55]));
console.log(numberLength(['dsa']));
console.log(numberLength(['ds', 'er']));
console.log(numberLength([true]));
console.log(numberLength([true, false]));
console.log(numberLength(undefined));
console.log(numberLength());
console.log(numberLength(numberLength));

console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(3.14), '->', 3);
console.log(numberLength(12345.6789), '->', 9);
console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);
console.log(numberLength(-3.14), '->', 3);
console.log(numberLength(-12345.6789), '->', 9);
console.log(numberLength(0), '->', 1);
console.log(numberLength(-0), '->', 1);

console.log(numberLength(10000000000000000000000000000000000000000000000000000000000000000000), '->', 68);
console.log(numberLength(0.0000000000000000000000000000000000000000000000000000000000000000001), '->', 68);