const marks = [10, 2, 8, 4];

// for
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}

// for-in
for (const i in marks) {
    const mark = marks[i];
    console.log(mark);
}

// for-of
for (const mark of marks) {
    console.log(mark);
}

// while
let i = 0;
while (i < marks.length) {
    const mark = marks[i];
    console.log(mark);
    i++;
}

// do-while
const i = 0;
do {
    const mark = marks[i];
    console.log(mark);
    i++;
} while (i < marks.length);


// for-in su objektu
const person = { name: 'vardenis', age: 99, car: 'Tesla' };
for (const key in person) {
    console.log(person[key])
}