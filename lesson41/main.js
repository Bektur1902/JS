// Задание 1 (используйте замыкание)
// Напишите функцию makeCounter, которая создает счетчик, который увеличивается на единицу при каждом вызове.

// Задание 2
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. Да, именно таким образом, используя двойные круглые скобки (не опечатка).sum(1)(2) = 3
// sum(5)(-1) = 4

// Задание 3
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050


// function makeCounter() {
//     let i = 0;
//     return function () {
//         return ++i;
//     };
// }

// const counter = makeCounter();

// console.log(counter());
// console.log(counter());


// function sum (a){
//     return function(b){
//         return a + b;
//     };
// };

// console.log(sum(1)(2));

// function sumTo(n) {
//     return (n * (n + 1) / 2);
// }

// console.log(sumTo(100));