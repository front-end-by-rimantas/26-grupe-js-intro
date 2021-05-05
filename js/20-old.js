/*
Reikia rasti kas gimineje vyriausias
*/

const gimine = [
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
    let oldestName = '';

    for (const person of list) {
        if (person.age > oldestAge) {
            oldestAge = person.age;
            oldestName = person.name;
        }

        if (person.children) {
            const oldestChild = oldest(person.children);
            if (oldestChild.age > oldestAge) {
                oldestAge = oldestChild.age;
                oldestName = oldestChild.name;
            }
        }
    }

    return {
        name: oldestName,
        age: oldestAge
    };
}

console.log(oldest(gimine));