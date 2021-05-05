/*
Reikia rasti kas gymineje vyriausias
*/

const gymine = [
    {
        name: 'Petras',
        age: 50,
        children: [
            {
                name: 'Jonukas',
                age: 60
            },
            {
                name: 'Aldona',
                age: 45
            }
        ]
    },
    {
        name: 'Matukas',
        age: 77
    },
    {
        name: 'Onute',
        age: 49,
        children: [
            {
                name: 'Kaziukas',
                age: 80,
                children: [
                    {
                        name: 'Albinas',
                        age: 30
                    },
                    {
                        name: 'Rexas',
                        age: 105
                    }
                ]
            },
            {
                name: 'Pranyte',
                age: 88
            },
        ]
    },
];

const oldest = (list) => {
    let oldestAge = -Infinity;

    for (const person of list) {
        if (person.age > oldestAge) {
            oldestAge = person.age;
        }

        if (person.children) {
            const oldestChildAge = oldest(person.children);
            if (oldestChildAge > oldestAge) {
                oldestAge = oldestChildAge;
            }
        }
    }

    return oldestAge;
}

console.log(oldest(gymine));