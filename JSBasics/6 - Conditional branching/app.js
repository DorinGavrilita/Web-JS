// Условный оператор „?“
/*let age = prompt('Please enter your age: ');

let accessAllowed = age > 18;
alert(accessAllowed);

age = prompt('Please enter your age again: ');

let message = (age >= 0 && age <= 4) ? 'Hello baby!' :
	(age > 4 && age <= 18) ? 'Hi!' :
		(age > 18 && age < 100) ? 'Hello!' :
			'What an unusual age!';
alert(message);

// Tasks
// #1 
if ('0') {
	alert('Hello');
}

// #2
let nameJS = prompt('What is the "official" name of JavaScript?');

if (nameJS == 'ECMAScript') {
	alert('Right!')
} else {
	alert('Do not know? "ECMAScript!"')
};
// #3
let number = +prompt('Enter a number:');

if (number > 0) {
	alert(1);
} else if (number < 0) {
	alert(-1);
} else if (number === 0) {
	alert(0);
}


// #4
let a = b = 2;
let result;

if (a + b < 4) {
	result = 'Мало';
} else {
	result = 'Много';
}

result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);
*/

// #5
let message;
let login = prompt('Please enter your username:')

if (login == 'Сотрудник') {
	message = 'Привет';
} else if (login == 'Директор') {
	message = 'Здравствуйте';
} else if (login == '') {
	message = 'Нет логина';
} else {
	message = '';
}


message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' : '';
	
alert(message);