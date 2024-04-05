// function sumArr(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += Math.sqrt(arr[i]);
//     }
//     return sum.toFixed(2);
// }

// const a = [1,2,3,4,5];
// const result = sumArr(a);
// console.log(result);


// function duplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] === arr[j]) {
//                 return true
//             }

//         }
//     }
//     return false;
// }

// const arr1 = [1,2,3,3,4,5];
// const arr2 = [1,2,3];
// const arr3 = ['hello', 'my', 'my', 'friend'];

// console.log(duplicate(arr1));
// console.log(duplicate(arr2));
// console.log(duplicate(arr3));


// function volwes(value) {
//     let sum = 0;
//     const letters = 'ауоиэыяюеёАУОИЭЫЯЮЕЁ';
//     for (let i = 0; i < value.length; i++) {
//         if (letters.includes(value[i])) {
//             sum++
//         }
//     }
//     return sum
// };

// const text = 'привет';
// console.log(volwes(text));


// function bizdinFilter(arr, collback){
//     const newArr = [];
//     for(const elem of arr){
//         if(collback(elem)){
//             newArr.push(elem)
//         }
//     }
//     return newArr
// }

// const arr = [1,2,3,4,5];
// const result = bizdinFilter(arr, el => el % 2 ===0);
// console.log(result);

