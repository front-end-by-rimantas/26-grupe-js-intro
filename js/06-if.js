/*
IF - salygos sakinys, kuris atsako i klausima: true arba false.

Galimi sablonai:
if () {}
if () {} else {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}

Palyginimo operatoriai:
- galimi: <, >, <=, >=, ==, ===, !=, !==
- naudotini: <, >, <=, >=, ===, !==
- nenaudotini: ==, !=   nes netikrina, ar suderinami tipai

Grazinamos reiksmes:
true (boolean)
false (boolean)

*/

const a = 8;
const b = 8;

if (a < b) {
    console.log('a yra maziau uz b');
}

if (a > b) {
    console.log('a yra daugiau uz b');
}

if (a == b) {
    console.log('a yra lygu b');
}

const c = 2;
const d = 9;

if (c >= d) {
    console.log('c daugiau arba lygu uz d');
} else {
    console.log('c maziau uz d');
}

const e = '88';
const f = 88;

if (e == f) {
    console.log('e lygu f');
} else {
    console.log('e NE lygu f');
}

console.log('----------------------');

const akys = 'raudonos';

if (akys === 'melynos') {
    console.log('Oj koks/kokia fainulka');
} else if (akys === 'zalios') {
    console.log('Oj koks/kokia protingi?...');
} else if (akys === 'rudos') {
    console.log('Fu fu fu... melagis...');
} else if (akys === 'raudonos') {
    console.log('programeris 🥳🥳🥳');
} else {
    console.log('Sorry, negaliu pagirti, nes nezinau tokios spalvos...');
}

console.log('----------------------');

// logikos nestinimas - logikos strukturos rasymas viduje (neribotai)

const city = 'arstrdt';

if (city === 'Vilnius') {
    console.log('Sveiki atvyke i Vilniu ;)');
} else {

    if (city === 'Kaunas') {
        console.log('Sveiki atvyke i Kauna ;)');
    } else {

        if (city === 'Siauliai') {
            console.log('Sveiki atvyke i Siaulius ;)');
        } else {

            if (city === 'Beduonė') {
                console.log('Sveiki atvyke i Siaulius ;)');
            } else {
                console.log('Sveiki atvyke i kazkoki nezinoma miesta!');
            }
        }
    }
}



console.log('----------------------');

/* 

jei duosim:
- teigiama arba neigiama skaiciu - true;
- Infinity arba -Infinity - true;
- nuli - false;
- NaN - false;
- tuscias tekstas - false;
- ne tuscias tekstas - true;
- bet koks array - true;
- undefined - false;

*/

const arMokausi = true;

if (arMokausi) {
    console.log('Taip ir toliau!');
} else {
    console.log('Pailseti irgi reikia.... 🎃');
}