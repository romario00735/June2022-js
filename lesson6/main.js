// - Знайти та вивести довижину настипних стрінгових значень
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length,str2.length,str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str1 = ' dirty string   '
// console.log(str1.replaceAll(' ', ''));



 // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);
//
//

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let str = arr.map(num => num.toString());
// console.log(str);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums(number,direction){
//     if (direction === 'ascending') {
//         number.sort((num1, num2) => num1 - num2)
//     }
//     else if (direction === 'descending') {
//         number.sort((num1, num2) => num2 - num1);
//
//     } return number;
// }
// sortNums(nums, 'ascending');
// console.log(nums);
// sortNums(nums, 'descending');
// console.log(nums);


// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((s1,s2)=>{
//     return s2.monthDuration - s1.monthDuration;
// })
// console.log(sort);
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);
//




// описати колоду карт

let arrCards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];
// - знайти піковий туз
// let find1 = arrCards.find(value => value.value === 'Ace' && value.cardSuit === 'spades');
// console.log(find1);
// // - всі шістки
// let find = arrCards.filter(value => value.value === 6)
// console.log(find);
// // - всі червоні карти
// let filter = arrCards.filter(value => value.color === 'red');
// console.log(filter);
//
// // - всі буби
// let filter1 = arrCards.filter(value => value.cardSuit === 'diamonds');
// console.log(filter1);
//
// // - всі трефи від 9 та більше
// let filter2 = arrCards.filter(value => value.value >= 9 && value.cardSuit === 'spades' || typeof value.value === 'string' &&
//     value.cardSuit === 'spades' || value.value === 'Joker' && value.color === 'black');
// console.log(filter2);
// //
// //
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let pakovka = arrCards.reduce((accum, card) => {
    if (card.cardSuit === 'spades') {
        accum.spades.push(card);
    } else if (card.cardSuit === 'diamonds') {
        accum.diamonds.push(card);
    } else if (card.cardSuit === 'hearts') {
        accum.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accum.clubs.push(card);
    } else {
        (accum.joker.push(card));
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
    joker: []
});
console.log(pakovka);