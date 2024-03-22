// 1) Измените программу, которая будет выводить только ключи объекта на консоль.
// 2) Напишите программу, которая перебирает свойства объекта и удаляет свойства, значение которых равно null (используем метод delete). const obj = {
// a: 10,
// b: null,
// c: "string",
// d: null,
// e: "another string"
// };
// 3) Напишите программу, которая проверяет, содержит ли объект определенное свойство.
// 4) Напишите программу, которая находит среднее значение числовых элементов массива. Чтобы найти среднее значение, вы должны сперва суммировать эти значения и поделить сумму на количество значений
// 5) Вывести все ключи и значения массива, содержащего списки студентов по классам.
// const studentsByClass = [
// ["1A", ["Alice", "Bob", "Charlie"]],
// ["2B", ["David", "Emily", "Frank"]],
// ["3C", ["Grace", "Henry", "Ivy"]]
// ];
// Вывод: Class: 1A - Alice, Bob, Charkie и т.д


// const obj = {
//     firstName: 'Bektur',
//     secondName: 'Mavlianov',
//     age: 25,
// }

// for (let key in obj) {
//     console.log(key);
// }


// const obj = {
//     a: 10,
//     b: null,
//     c: "string",
//     d: null,
//     e: "another string"
//     };

// for (let value in obj){
//     if (obj[value] === null) {
//         delete obj[value]
//     }
// }
// console.log(obj);

// const obj = {
//     a: 10,
//     b: null,
//     c: "string",
//     d: null,
//     e: "another string"
//     };


// function propName(object, prop) {
//     for(let value in object){
//         if( value === prop ){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(propName(obj, 'a'));

// const a = [1, 2, 3, 4, 51, 1];

// let sum = 0;
// let count = 0;

// for (let value = 0; value < a.length; value++) {
//     if (typeof value === 'number') {
//         sum += a[value];
//         count ++;
//     }
// }

// let averege = count > 0 ? sum / count : 0;

// console.log(averege);


// const studentsByClass = [
// ["1A", ["Alice", "Bob", "Charlie"]],
// ["2B", ["David", "Emily", "Frank"]],
// ["3C", ["Grace", "Henry", "Ivy"]]
// ];


// for (let i = 0; i<studentsByClass.length; i++){
//     const className = studentsByClass[i][0];
//     const students = studentsByClass[i][1];
//     let studentsNames = '';

//     for(let j = 0; j<students.length; j++){
//         studentsNames += students[j];
//         if(j < students.length - 1){
//             studentsNames += ', ';

//         }
//     }
//     console.log('class', className, studentsNames);
// }


