"use strict";



// let arr = ['Islomjon', 'Abdullayev', 'Ibrohim'];
// let enterName = prompt('ismni kiriting');
// let enterPass = enterName - 1;
// let isNotfounfName = 0

// for (let i = 0; i < arr.length; i++) {
//     switch (enterName) {
//         case 'Islomjon':
//             console.log(enterName);
//             break;
//         case 'Abdullayev':
//             console.log(enterName);
//             break;
//         case 'Ibrohim':
//             console.log(enterName);
//             break;
//         default:
//             isNotfounfName += 1
//     }
// }   


// Array methods
// 1.push() - oxiridan qoshib beradi
// 2.pop() - oxiridan chopadi
// 3.unshift() - boshidan qoshib beradi
// 4.shift() - boshidan chopadi




// ===================> 1 - masala <=====================

// let number = prompt("3 xonali sonni kiriting:");

// let a = parseInt(number.charAt(0)); 
// let b = parseInt(number.charAt(1)); 
// let c = parseInt(number.charAt(2)); 

// let sum = a + b;

// let difference = sum - b;

// console.log("Kiritilgan son:", number);
// console.log("1-chi xona:", a);
// console.log("2-chi xona:", b);
// console.log("3-chi xona:", c);
// console.log("1-chi va 2-chi xonalar yig'indisi:", sum);
// console.log("Yig'indi 2-chi xonadagi sondan qanchaga katta:", difference);


// ===================> 2 - masala <=====================

// let number = prompt("Son kiriting:");

// let sumOfDivisors = 0;

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         sumOfDivisors += i;
//     }
// }

// console.log("Kiritilgan son:", number);
// console.log("Bo'luvchilar yig'indisi:", sumOfDivisors);

// ===================> 3 - masala <=====================
// dars payt yechilgan

// ===================> 4 - masala <=====================

// let arr = [2, 3, 4, 52, 2, 3, 4, 53, 2, 23, 42, 2];
// let maxNumber = Math.max(...arr);
// console.log("Eng katta son:", maxNumber);

// ===================> 5 - masala <=====================

// let arr = [54, 32, 76, 12, 22];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

// }
// console.log(sum);


// ===================> 6 - masala <=====================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = 0;
//     }
// }
// console.log(arr);

// ===================> 7 - masala <=====================

// let num1 = +prompt('sonni kirititng');
// let action = prompt('example: +,-,/,*');
// let num2 = +prompt('2-sonni kirititng');

// switch (action) {
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '/':
//         console.log(num1 / num2);
//         break;
//     case '*':
//         console.log(num1 * num2);
//         break;
//     default:
//         console.log('bunday amal yoq');
// }

// ===================> 8 - masala <=====================

// let arr = ['Nuriddin', 'Shahboz', 'Adham', 'Suhrob'];

// let enterName = prompt('ismni kiriting');

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(enterName)) {
//         console.log('Bu ism bor');
//     }
//     else{
//         console.log('Bu ism yoq');
//     }
// }

// ===================> 9 - masala <=====================
// dars payti yechilgan

// ===================> 10 - masala <=====================
// dars payti yechilgan

// ===================> 11 - masala <=====================

// let people = [
//     {
//         id: 1,
//         age: 20,
//         name: 'Nuriddin',
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name: 'Komiljon',
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name: 'Izzatbek',
//         gmail: "Izzatbek@gmail.com"
//     }
// ];


// let totalAge = 0;
// for (let i = 0; i < people.length; i++) {
//     totalAge += people[i].age;
// }

// let averageAge = totalAge / people.length;

// console.log("Yoshlarning o'rtacha arifmetik qiymati:", averageAge);


// ===================> 12 - masala <=====================

// let arr = [23, 54, 21, 76, 23, 87];

// let first = arr[0];
// console.log(`birinchi son --> ${first}`);
// let end = arr[arr.length - 1];
// console.log(`oxirgi son --> ${end}`);
// let sum = first + end;
// console.log(`yig'indisi --> ${sum}`);

// if (sum % 2 === 1) {
//     arr.push(sum); 
// } else {
//     arr.unshift(sum); 
// }
// console.log(arr);

// ===================> 13 - masala <=====================

// let arr = [1,2,3,4,5,6,7,8,9];
// let couple = [];
// let odd = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         couple.push(arr[i]);
//     }else{
//         odd.push(arr[i]);
//     }
// }
// console.log(couple);
// console.log(odd);

// ===================> 14 - masala <=====================
// let arr = [8, 7, 6, 5, 4];
// let reverse = [];


// for (let element of arr) {
//     reverse.unshift(element); 
// }
// console.log(reverse); 
