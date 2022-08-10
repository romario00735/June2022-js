// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function pr3(a, b) {
//     let res = a * b;
//     return res;
// }
// console.log(pr3(10, 20));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round(r) {
//     return Math.PI * (r * r);
// }
// console.log(round(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cilindr(h, r) {
//     return Math.PI * r * h;
// }
// console.log(cilindr(4, 4));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// function f(...aaa) {
//     console.log(aaa)
// }
// f(45, 85, 56, 444, 'hello');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function pp(text) {
//     document.write(`<p>${text}</p>`)
// }
// pp('hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function words(text) {
//     document.write(`<div><ul><li>${text}</li></ul></div>`)
//
// }
// words('Lorem ipsum dolor sit amet. ')
// words('Lorem ipsum dolor sit amet. ')
// words('Lorem ipsum dolor sit amet. ')
//
//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*
// function words2(text,num) {
//     document.write(`<ul>`);
//         for (let i = 1; i <= num; i++) {
//
//             document.write(`<li>${text}</li>`)
//         }
//         document.write(`</ul>`);
// }
//
// words2('Lorem ipsum dolor sit amet',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [152, 600, true, 'hello world'];
//
// function list(array) {
//     document.write(`<ul>`);
//     for (let item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// list(arr);

 // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let listObj = [
//     {id: 1, name: ' vasya ', age: 40},
//     {id: 2, name: ` misha `, age: 55},
//     {id: 3, name: ` petya `, age: 20},
// ]
//
// function mmm(arr) {
//     for (let item of arr) {
//         document.write(`<div><p>${item.id}</p><p>${item.name}</p><p>${item.age}</p> ${'_________'} </div>`)
//     }
// }
// mmm(listObj);

// - створити функцію яка повертає найменьше число з масиву
// let aaray = [45, 25, 85, -1];
//
// function minimal(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// console.log(minimal(aaray));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr2 = [20, 34, 120, 55, 53];
//
// function calc(array) {
//     let x = 0;
//     for (let p of array) {
//         x += p;
//     }
//     return x;
// }
//
// console.log(calc(arr2));
