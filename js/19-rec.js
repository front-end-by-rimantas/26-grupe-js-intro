/*
REKURSIJA
surasti didziausia skaiciu
*/

const bigNum = [2, [7, 9], [-7, 55], -12, 0, 6];

function max(list) {
    let big = -Infinity;

    for (const number of list) {
        if (typeof number === 'number') {
            if (number > big) {
                big = number;
            }
        } else {
            const innerArrayMax = max(number);
            if (innerArrayMax > big) {
                big = innerArrayMax;
            }
        }
    }

    return big;
}

console.log('---------------');
console.log(max(bigNum));