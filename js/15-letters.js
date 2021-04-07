function letters(text, step) {
    // input validation
    if (typeof text !== 'string') {
        return 'ERROR: pirmasis kintamasis yra netinkamo tipo';
    }

    if (typeof step !== 'number') {
        return 'ERROR: antrasis kintamasis yra netinkamo tipo';
    }
    if (!isFinite(step)) {
        return 'ERROR: antrasis kintamasis yra ne normalus skaicius';
    }
    if (text.length < step) {
        return 'ERROR: zingsnis negali buti didesnis uz teksto ilgi';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti lygus nuliui';
    }
    if (step % 1 !== 0) {
        return 'ERROR: zingsnis negali buti desimtainis skaicius';
    }


    // logic
    let result = '';

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            result += text[i];
        }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            result += text[i];
        }
    }

    // alternativi versija (nuo 0 iki galo)
    // for (let i = 0; i < text.length; i++) {
    //     if (i % step === step - 1) {
    //         result += text[i];
    //     }
    // }

    // post logic validation
    if (result === '') {
        console.error('ERROR: sveikinu, tu sugebejimai sugalvoti testa, kuris teoriskai, algoritmo rasymo metu, buvo neimanomas 😅');
        return false;
    }

    // result return
    return result;
}

console.log(letters(1561, 2));
console.log(letters(1561, 'asdf'));
console.log(letters('abcdefghijkl', Infinity));
console.log(letters('abcdefghijkl', -Infinity));
console.log(letters('abcdefghijkl', NaN));
console.log(letters('abc', 4));
console.log(letters('abc', 0));
console.log(letters('abc', 1.5));

console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');

console.log(letters('abcdefg', -2), '->', 'fdb');
console.log(letters('abcdefghijkl', -3), '->', 'jgda');


/*
  _  _  _  _
abcdefghijkl    3   -> cfil

 _ _ _ _ _ _
abcdefghijkl    2   -> bdfhjl

____________
abcdefghijkl    1   -> abcdefghijkl

abcdefghijkl    0   -> net neegzistuoja nuline raide....



  _  _  _
abcdefghij
0123456789      3   -> cfi

2   2 % 3 = 2
5   5 % 3 = 2
8   8 % 3 = 2


   _   _
abcdefghij
0123456789      4   -> dh

3   3 % 4 = 3
7   7 % 4 = 3

*/