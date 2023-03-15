/*
let a = 2 + 2;
switch (a) {
	case 3:
		alert("Маловато!");
		break;
	case 4:
		alert("В точку!");
		break;  // Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
	case 5:
		alert("Перебор!");
		break;
	default:
		alert("Нет таких значений!");
		break;
}

a = 3;
switch (a) {
	case 4:
		alert('Правильно!')
		break;
	case 3:
	case 5:
		alert('Неправильно!');
		alert("Может вам посетить урок математики?"); break;

	default:
		alert('Результат выглядит странновато. Честно.');
		break;
}

// Тип имеет значение
let arg = prompt("Enter a number");
switch (arg) {
	case '0':
	case '1':
		alert('One or zero');
		break;
	case '2':
		alert('Two');
		break;
	case '3':
		alert('Never execute!');
		break;
	default:
		alert('Unknown value');
}

// Tasks
// #1 Напишите "if", аналогичный "switch"
let browser = 'Chrome';
switch (browser) {
	case 'Edge':
		alert("You've got the Edge!");
		break;

	case 'Chrome':
	case 'Firefox':
	case 'Safari':
	case 'Opera':
		alert('Okay we support these browsers too');
		break;

	default:
		alert('We hope that this page looks ok!');
}

if (browser === 'Edge') {
	alert("You've got the Edge!");
} else if (browser === 'Chrome'
	|| browser === 'Firefox'
	|| browser === 'Safari'
	|| browser === 'Opera') {
	alert('Okay we support these browsers too');
} else {
	alert('We hope that this page looks ok!');
}
*/
// #2 Переписать условия "if" на "switch"
const number = +prompt('Enter a number between 0 and 3', '');
if (number === 0){
	alert('You entered the number 0')
}
if (number === 1){
	alert('You entered the number 1')
}
if (number === 2 || number === 3){
	alert('You entered the number 2, maybe 3')
}

switch (number) {
	case 0:
		alert('You entered the number 0')
		break;
	case 1:
		alert('You entered the number 1')
		break;
	case 2,3:
		alert('You entered the number 2, maybe 3')
		break;
	default:
		break;
}