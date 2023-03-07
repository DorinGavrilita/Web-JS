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