/*
let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya
*/

console.log('Number');
let n = 1223;
n = 12.23;

// Infinity
console.log(1 / 0);
console.log(Infinity);

// NaN
console.log("not a number" / 2);
console.log(NaN + 1);
console.log(5 * NaN);
console.log(NaN ** 0);

console.log('BigInt');
const bigInt = 1234567890987654321234567876543212345678987654n;
console.log(bigInt);

console.log('String');
let str = "Привет ";
let myName = 'Dorin';
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные: ${str + myName}`;
console.log(phrase);


console.log('Object');

const person = {
	firstName: 'Dorin',
	lastName: 'Gavrilita',
	age: 21,
	displayName: () => {
		console.log('Hello');
	}
}
console.log(person);
console.log(person.firstName);
person.displayName();

console.log('Type conversion');
let value = true;
console.log(typeof (value));

value = String(value);
console.log(`value is: ${value} and have type ` + typeof (value));

console.log('15' / '3');

str = '2002';
console.log(typeof (str));
let num = Number(str);
console.log(typeof (num));