function bigNum(list) {
    // input validation
    if (!Array.isArray(list)) {
        return 'ERROR: turi buti array tipo reiksme';
    }

    if (list.length === 0) {
        return 'ERROR: array negali buti tuscias';
    }

    // logic
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        // jei ne normalus skaicius, tai praleidziam ir einam ties kitu
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }

        if (number > biggest) {
            biggest = number;
        }
    }

    // post logic validation
    if (biggest === -Infinity) {
        return 'ERROR: array neturi nei vienos normalios reiksmes (skaiciaus)';
    }

    // result return
    return biggest;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(145));
console.log(bigNum(Infinity));
console.log(bigNum(NaN));
console.log(bigNum(undefined));
console.log(bigNum());
console.log(bigNum(bigNum));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum([]));
console.log(bigNum([Infinity, true, false, '', 'asdas', [], [454], {}, undefined]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-1, 22, 3]), '->', 22);
console.log(bigNum([-1, -22, -3, ['adsdf']]), '->', -1);
console.log(bigNum([-1, -22, -3, [true]]), '->', -1);
console.log(bigNum([-1, -22, -3, [false]]), '->', -1);
console.log(bigNum([-1, -22, -3, [false, true]]), '->', -1);
console.log(bigNum([-1, -22, -3, [745, 8745]]), '->', -1);
console.log(bigNum([-1, -22, -3, true]), '->', -1);
console.log(bigNum([-1, -22, -3, false]), '->', -1);
console.log(bigNum([-1, -22, -3, []]), '->', -1);
console.log(bigNum([-1, -22, -3, [745]]), '->', -1);
console.log(bigNum([-1, -22, -3, ['']]), '->', -1);
console.log(bigNum([-1, -22, -3, '']), '->', -1);
console.log(bigNum([-1, -22, -3, 'ads']), '->', -1);
console.log(bigNum([-1, -22, -3, NaN]), '->', -1);
console.log(bigNum([-1, -22, -3, -Infinity]), '->', -1);
console.log(bigNum([-1, -22, -3, Infinity]), '->', -1);
console.log(bigNum([-1, -22, 'ads', -3]), '->', -1);
console.log(bigNum([-1, 'ads', -22, -3]), '->', -1);
console.log(bigNum([['adsdf'], -1, -22, -3]), '->', -1);
console.log(bigNum([[true], -1, -22, -3]), '->', -1);
console.log(bigNum([[false], -1, -22, -3]), '->', -1);
console.log(bigNum([[false, true], -1, -22, -3]), '->', -1);
console.log(bigNum([[745, 8745], -1, -22, -3]), '->', -1);
console.log(bigNum([true, -1, -22, -3]), '->', -1);
console.log(bigNum([false, -1, -22, -3]), '->', -1);
console.log(bigNum([[], -1, -22, -3]), '->', -1);
console.log(bigNum([[745], -1, -22, -3]), '->', -1);
console.log(bigNum([[''], -1, -22, -3]), '->', -1);
console.log(bigNum(['', -1, -22, -3]), '->', -1);
console.log(bigNum(['ads', -1, -22, -3]), '->', -1);
console.log(bigNum([NaN, -1, -22, -3]), '->', -1);
console.log(bigNum([-Infinity, -1, -22, -3]), '->', -1);
console.log(bigNum([Infinity, -1, -22, -3]), '->', -1);

// koks turetu buti algoritmas, jog rastu didziausia skaiciu bet kokio gylio array objekte?
// hint: recursion
console.log(bigNum([-1, -22, [7, -14], -3]), '->', 7);
console.log(bigNum([-1, -22, [7, -14], [-3, -5]]), '->', 7);
console.log(bigNum([-1, -22, [[[[7, -14]], 88]], [-3, -5]]), '->', 88);