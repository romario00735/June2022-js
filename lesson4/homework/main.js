// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i=0; i<10; i++) {
//     document.write(`<div>privet</div>`);
// }
//
//


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello world ${i} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let x = 1;
// while (x !== 21) {
//     document.write(`<div><h1>Hello!</h1></div>`);
//     x++;
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//  let x = 1;
// while (x<21) {
//     document.write(`<div><h1> Hello world! ${x} </h1></div>`);
//     x++;
// }


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (let list of listOfItems) {
//     document.write(`<li>${list}</li>`);
// }
// document.write(`</ul>`);


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// <div className="product-card">
//     <h3 className="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" className="product-image">
// </div>

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(`<div className="product_card">
//         <h3 className="product_title">${product.title}. Price - ${product.price}</h3>
//         <img className="product_image" src="${product.image}" alt="products">
//      </div>`);
// }



// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // for (const user of users) {
    // if (user.status) {
    //     console.log(user)
    // }
    // if (!user.status) {
    //     console.log(user);
    // }
//     if (user.age > 30) {
//         console.log(user);
//     }
// }
