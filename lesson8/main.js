// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//  let u = new User(1, 'ivan', 'sidorov','asd@asd.net',+38009308898);
// console.log(u);
//
// let arrU = [];
//
//  arrU.push(new User(18, 'ivan', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(25, 'oleg', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(43, 'roman', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(66, 'oksana', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(16, 'jeka', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(22, 'igor', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(77, 'masha', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(88, 'viktor', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(91, 'artem', 'sidorov', 'asd@asd.net', +38009308898)),
//     arrU.push(new User(73, 'vlad', 'sidorov', 'asd@asd.net', +38009308898));
// console.log(arrU);
//
// //
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(arrU.filter(value => value.id % 2 === 0));
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = arrU.sort((a, b) => {
//     return a.id - b.id
// });
// console.log(sort);
// //



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
// let box = []
// box.push(new Client(100, 'banan', 'kokos', 'asasd.asdad', +9484984949, ['milk', 'apple'])),
//     box.push(new Client(2, 'oleg', 'kokos', 'asasd.asdad', +9484984949, ['water', 'apple'])),
//     box.push(new Client(4, 'jeka', 'kokos', 'asasd.asdad', +9484984949, ['juce', 'apple', 'water'])),
//     box.push(new Client(7, 'sofiya', 'kokos', 'asasd.asdad', +9484984949, ['coffee', 'apple', 'tea'])),
//     box.push(new Client(5, 'ivan', 'kokos', 'asasd.asdad', +9484984949, ['icetea', 'apple', 'beaf'])),
//     box.push(new Client(14, 'vanya', 'kokos', 'asasd.asdad', +9484984949, ['strawberry', 'apple'])),
//     box.push(new Client(55, 'roman', 'kokos', 'asasd.asdad', +9484984949, ['watermelon', 'apple'])),
//     box.push(new Client(12, 'viktor', 'kokos', 'asasd.asdad', +9484984949, ['rice', 'apple'])),
//     box.push(new Client(33, 'mariya', 'kokos', 'asasd.asdad', +9484984949, ['milk', 'apple'])),
//     box.push(new Client(88, 'vitya', 'kokos', 'asasd.asdad', +9484984949, ['milk', 'apple']));
//
//
// console.log(box);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort2 = box.sort((a, b) => a.order.length - b.order.length);
// console.log(sort2);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (let item in this) {
//             if (typeof this[item] !== "function") {
//                 console.log(`${item} -- ${this[item]}`);
//
//             }
//
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let car = new Car('mazda','japan',2008,220,2.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// console.log(car);
// car.addDriver({name:'petro',age:22})
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (let item in this) {
            if (typeof this[item] !== "function") {
                console.log(`${item} -- ${this[item]}`);
            }
        }

    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}
let car = new Car('mazda','japan',2008,220,2.5);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
console.log(car);
car.addDriver({name:'petro',age:22})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку