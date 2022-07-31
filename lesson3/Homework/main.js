// Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('???')
// x = 10;
// if (x != 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// ???????????????????? не розумію в чому моя помилка


// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('time?')
// if (time >= 0 && time <=15) {
//     console.log('1 part');
// } else if (time >= 16 && time <=30) {
//     console.log('2 part');
// } else if (time >= 31 && time <=45) {
//     console.log('3 part');
// } else if (time >= 46 && time <= 59) {
//     console.log('4 part');
// } else {
//     console.log('dont understand');
// }



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let plansweek = prompt('????');
// switch (plansweek) {
//     case'1':
//         console.log('go for a walk');
//         break;
//     case'2':
//         console.log('do exercise');
//         break;
//     case '3':
//         console.log('cleaning day');
//         break;
//     case '4':
//         console.log(' stay at home');
//         break;
//     case '5':
//         console.log('watch films');
//         break;
//     case '6':
//         console.log('day off');
//         break;
//     case '7':
//         console.log('last day before new week');
//     default:
//         console.log('i dont understand you');
// }


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let n1 = +prompt( 'Number?')
// let n2 = +prompt("Numbrer2?")
// if (n1 === n2) {
//     console.log('numbers are the same');
// } else if (n1>n2){
//     console.log(n1);
// } else   {
//     console.log(n2);
// }
//


//
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = prompt('enter x?') || 'default';
// console.log(x);