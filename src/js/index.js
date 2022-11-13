import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// const userName = prompt("Jak masz na imie?");
// if (userName == null || userName == "") {
//   message = "Nie wpisano imienia";
// } else {
//   message = "Witaj, " + userName + "!";
// }
// alert(message);

console.log("Witaj! Konsolowy alert.");

function calculate(myNumber) {
    return myNumber*7;
}

const welcome = (age, firstName) => {
    console.log(
        'Witaj Podróżniku, nazywam się ' + firstName + ' i mam ' + age + ' lat.'
    );
}

welcome(20, 'Bartek');

console.log(calculate(2));

const wielkiMag = {
    name: "Elendill",
    age: 34e9 + 7923476,
    height: 182,
    weight: 'unknown',
    strong: 32,
    specjalization: 'fire',
    fraction: 'unaffiliated'
}

const personWrite = (person) => {
    console.log(
        '~-------------------~\n' +
        'Imię: ' + person.name + '\n' +
        'Wiek: ' + person.age + '\n' +
        'Wzrost: ' + person.height + '\n' +
        'Waga: ' + person.weight + '\n' +
        'Siła: ' + person.strong + '\n' +
        'Specjalizacja: ' + person.specjalization + '\n' +
        'Frakcja: ' + person.fraction + '\n' +
        '~-------------------~'
    );
}

personWrite(wielkiMag);

const button = document.querySelector('.action--js');

const myClick = () => {
    const heading = document.querySelector('.main__heading--js');
    heading.innerHTML = 'Witaj! Nazywam się Bartek.-JS to zmienił.';
}

button.addEventListener('click', myClick);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
})

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;