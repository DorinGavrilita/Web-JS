/*
let userName = prompt('What is your username?');
function showMessage() {
	alert(`Hello, ${userName}!`);
}

showMessage();

// Parameters 
function showMess(from, text) {
	alert(from + `: ` + text);
}
showMess('Roma', 'Privet!');
//  Значения по умолчанию
function message(from, text = 'no text added') {
	alert(from + ': ' + text);
}
message(`Anna`, 'How are you?');

//  Возврат значения return
function sum(a, b) {
	return a + b;
}

let result = sum(5, 6);
alert(result);

function checkAge(age) {
	if (age >= 18) {
		return true;
	} else {
		return confirm('А родители разрешили?');
	}
}
let age = prompt('Сколько вам лет?');
if (checkAge(age)) {
	alert('Доступ получен')
} else {
	alert('Доступ закрыт')
}

// Функции == Комментарии
function showPrimes(n) {
	const arr = [];
	let j = 0;
	for (let i = 2; i <= n; i++) {
		if (!isPrime(i)) continue;
		arr[j] = i;
		j++;
	}
	console.log(arr);
}
function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return true;
}

showPrimes(97);

//  Tasks
// #1 Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(18);

function checkAge2(age) {
	return (age > 18) || confirm('Родители разрешили?');
}
checkAge2(18);
// #2 Функция min(a, b)
function min(a, b) {
	return a < b ? a : b;
}
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
console.log(min(2, 5) === 2);
*/

// #3  Функция pow(x,n)
function pow(x, n) {
	return Math.pow(x, n);
}
let x = prompt("x?", '');
let n = prompt("n?", '');

console.log(pow(x, n)); 
console.log(pow(3, 9)); 
console.log(pow(3, 3)); 
console.log(pow(1, 100)); 