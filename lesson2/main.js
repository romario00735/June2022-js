// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let cars = ['camry40', 'mazda', 'jeep', 'ferrari', 'outlander', 'l200', 350, 911, 'bull', 'WTF?'];
console.log(cars[0]);
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])
console.log(cars[5])
console.log(cars[6])
console.log(cars[7])
console.log(cars[8])
console.log(cars[9])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj1 = {
    title: 'Hello world!',
    pageCount: 600,
    genre: 'Fantastic'
}
let obj2 = {
    title: 'Vlastelin Kolec!',
    pageCount: 1120,
    genre: 'Fantastic'
}
let obj3 = {
    title: 'Frodo!',
    pageCount: 885,
    genre: 'Fantastic'
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let object01 = {
    title: 'Hello !',
    pageCount: 600,
    genre: 'Fantastic',
    authors: [{name: 'Roman', age: 27}]}
// console.log(object01);
let object02 = {
    title: 'goblin !',
    pageCount: 455,
    genre: 'Fantastic',
    authors: [{name: 'MC petya', age: 32}]}

let object03 = {
    title: 'putin huylo !',
    pageCount: 1,
    genre: 'Real story',
    authors: [{name: 'people of Ukraine', age: 30}]}
    //
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:'Roman', username: 'opasniy', password: "wsd8466" },
    {name:'Oleg', username: 'dikiy', password: "000" },
    {name:'Oksana', username: 'shkura', password: "1111" },
    {name:'Igor', username: 'lawyer', password: "3221" },
    {name:'Natali', username: '093...', password: "45894" },
    {name:'Masha', username: 'klubni4ka', password: "007" },
    {name:'Leha', username: 'kosoy', password: "88888888" },
    {name:'Vitya', username: 'rovniy', password: "0964521478" },
    {name:'Zheka', username: 'chelust', password: "vhvu444" },
    {name:'Dima', username: 'pokemon', password: "WT7898" },
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)