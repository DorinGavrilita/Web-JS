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
a = prompt("Первое число?", 1);
b = prompt("Второе число?", 2);

alert(a + b); // '12'
alert(+a + +b); // 3