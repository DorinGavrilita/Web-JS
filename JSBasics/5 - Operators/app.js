let x = 'I ' + 'am ' + 'Dorin!';
console.log(x);

console.log(7 + 63 + '15' + 9);

// Преобразует не числа в числа
console.log(+true); // 1
console.log(+"");   // 0

let apples = '2';
let oranges = '3';

// оба варианта предварительно преобразованы в числа
console.log('result:', +apples + +oranges); // 5

// Сокращённая арифметика с присваиванием
let n = 10;
n += 5;
let k = n;
k *= n + k - 5;
console.log(k / 5);

// Инкремент/декремент
let counter = 0;
++counter;
console.log(--counter);

counter--;
console.log(counter);

console.log('Задачи');
// 1	Постфиксная и префиксная формы
let a = 1, b = 1;

let c = ++a;
let d = b++;
console.log(a, b, c, d);

// 2	Результат присваивания
a = 2;
x = 1 + (a *= 2);
console.log(a, x);


// 3 	Преобразование типов
console.log("" + 1 + 0) // '10'
console.log("" - 1 + 0) // '-1'
console.log(true + false); // 1
console.log(6 / "3") // '2'
console.log("2" * "3") // '6'
console.log(4 + 5 + "px") // '9px'
console.log("$" + 4 + 5) // '$45'
console.log("4" - 2) // '2'
console.log("4px" - 2) // 'nan'
console.log("  -9  " + 5) // '  -9  5'
console.log("  -9  " - 5) // '-14'
console.log(null + 1) // '1'
console.log(undefined + 1) // 'nan'
console.log(" \t \n" - 2) // '-2'

// 4 	Исправьте сложение.		Результат должен быть 3	
// a = prompt("Первое число?", 1);
// b = prompt("Второе число?", 2);

// alert(a + b); // '12'
// alert(+a + +b); // 3

// Операторы сравнения
console.log('Результат сравнения имеет логический тип');
console.log(2 > 0);
console.log(3 > 9);
console.log(7 == 5);

let result = 15 > 7;
console.log(result);

// Сравнение строк
console.log('Сравнение строк\n', 'Стипендия' > 'Зарплата'); // true
console.log('ДЕньги' < 'день'); // true
console.log('EVIL' > 'good'); // false

// Сравнение разных типов
console.log('Сравнение разных типов\n', '2' > 1);
console.log('3' == 3); // true

// Строгое сравнение
console.log('Строгое сравнение\n', 0 === false);

console.log('Задачи');
console.log(5 > 4); // true
console.log("ананас" > "яблоко");// false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

// Логические операторы
console.log('Логические операторы');
console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // 1; 2
console.log(1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // 1; undefined
console.log(null || 2 && 3 || 4); // 3 

console.log('Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.');
let age = Math.floor(Math.random() * 100);
console.log('Age: ' + age);
if (age >= 14 && age <= 90) {
	console.log(age + ' в диапазоне\n');
}

console.log('Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.');
if (!(age >= 14 && age <= 90)) {
	console.log('1)' + age + ' вне диапазона');
}
if (age < 14 || age > 90) {
	console.log('2)' + age + ' вне диапазона\n');
}

console.log('Вопрос об "if"');
if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');

// Проверка логина
alert('Проверка логина');
let visitor = prompt("Кто там?");
if (visitor == 'Админ') {
	let password = prompt('Введите пароль:');
	if (password == 'Я главный') {
		alert('Здравствуйте!')
	} else if (password == null) {
		alert('Отменено');
	} else if (password != 'Я главный') {
		alert('Неверный пароль')
	}
} else if (visitor == null) {
	alert('Отменено');
} else if (visitor != 'Админ') {
	alert('Я вас не знаю.');
}