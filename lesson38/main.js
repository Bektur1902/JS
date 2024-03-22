// Есть объект let userData = {
//     name: "John"};
//     1) Добавьте к объекту свойство age, получите его через prompt
//     2) Добавьте свойство underage c булевым значением, получаем значение через confirm
//     3) C помощью prompt получите ключ объекта. С помощью метода delete удалите это свойство с объекта
//     4) Добавьте к объекту свойство address, которая в свою очередь является объектом со свойствами: country, city, street. Постарайтесь использоваться несколько вариантов добавления чтобы закрепить каждый метод
//     5) В консоле выведите все значения включая свойство в address

let userData = {
    name: "John"
};

let age = prompt('Enter age: ');
userData.age = age;

let isUnderage = confirm('Underage');
userData.undeeage = !isUnderage;

let propToDelete = prompt('Enter prop to delete:');
if (propToDelete in userData) {
    delete userData[propToDelete]
}else {
    console.log('Prop not found');
}

userData.adress = {};

userData.adress.country = prompt('Enter country:');
userData.adress.country = prompt('Enter city:');
userData.adress.street = prompt('Enter street: ');


console.log(userData);
