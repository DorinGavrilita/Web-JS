// while loop
let i = 0;
/*
while (i <3){
	alert(i);
	i++;
}

i = 3;
while (i){
	alert(i);
	i--;
}

// The “do…while” loop
do {
	alert(i);
	i++;
} while (i < 3);

// For loop
for (let i = 0; i < 3; i++) {
	alert(i);
}

// Прерывание цикла: «break»
let sum = 0;
while (true) {
	let value = +prompt("Enter a number", '');
	if (!value) break;
	sum += value;
}
alert(`Sum: ` + sum);
// Переход к следующей итерации: continue
for (let i = 0; i < 10; i++) {
	if (i % 2 == 0) continue;   // если true, пропустить оставшуюся часть тела цикла
	alert(i);
}

// Tasks list
// #1 Последнее значение цикла
i = 3;
while (i) {
	alert(i--); // 3, 2, 1 
}

// #2 Какие значения выведет цикл while?
i = 0;
while (++i < 5) alert(i);  // 1, 2, 3, 4

i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5

// #3 Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4
// #4 Выведите чётные числа
for (let i = 2; i < 10; i++) {
	if (i % 2 !== 0) continue;
	alert(i); // 2, 4, 6, 8
} 

// #5 Замените for на while
for (let i = 0; i < 3; i++) {
	alert(`number ${i}`);
}

while (i < 3) {
	alert(`number ${i}`);
	i++;
}


// #6 Повторять цикл, пока ввод неверен
let num;
while (true) {
	num = +prompt("Please enter a number greater than 100:");
	if (num > 100) break;
} 
do {
	num = +prompt("Please enter a number greater than 100:");
} while (num <= 100 && num);
*/

// #7 Вывести простые числа
let startNum;
let endNum;
do {
	startNum = +prompt(`Введите число чтобы задать НАЧАЛО интервала для поиска простых чисел:`);
	if (startNum < 2 || isNaN(startNum)) {
		startNum = 2;
	}
	endNum = +prompt(`Введите число чтобы задать КОНЕЦ интервала для поиска простых чисел:`);
	if (isNaN(endNum)) {
		endNum = 20;
	}
} while (startNum >= endNum);
let currentNum;
if (startNum > endNum) { }
nextPrime:
for (currentNum = startNum; currentNum <= endNum; currentNum++) {
	for (let i = 2; i < currentNum; i++) {
		if (currentNum % i == 0) continue nextPrime;
	}
	document.getElementById("prime-numbers").innerHTML += ` ${currentNum}  | `;
}