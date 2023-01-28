function say() {
    console.log('Hello World');
}

// say();

function even(number) {
    return number % 2 === 0;
}

var isEven = even(11);

function sum(num1, num2) {
    return num1 + num2;
}

// const total = sum(12, 13)

// if(total > 20) {
//     console.log('Is bigger than 20');
// } else {
//     console.log('Is smaller than 20');
// } 

function roundUp(number) {
    return Math.round(number)
}

// console.log(roundUp(7.9));

const sumArrow = (num1, num2) => num1 + num2;
console.log(sumArrow(2, 3));

const arrIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const arrStrings = ['Gabriel', 'Softgraf']; 

// const newArr = arrIntegers.map((item) => {
//     return item + 2;
// });

// arrIntegers.forEach((item) => {
//     console.log(item + 2);
// });

// for (let i = 8; i < arrIntegers.length; i++) {
    
// }

const person1 = {name: 'Rafael', age: 17, height: 1.76};
const person2 = {name: 'Roblox', age: 69, height: 2.00};
const person3 = {name: 'Minecraft', age: 420, height: 4.00};

const people = [person1, person2, person3];

const is0lder = people.filter((person) => person.age > 18);
// console.log(is0lder);

const itemRemoved = people.pop(1)
console.log(itemRemoved);