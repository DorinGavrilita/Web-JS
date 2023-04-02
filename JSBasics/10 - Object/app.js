// Task 1
let user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);
console.clear();

// Task 2
let schedule = {};

const isEmpty = (obj) => {
	for (let key in obj) {
		return false;
	}
	return true;
}

console.log((isEmpty(schedule))); // true

schedule["8:30"] = "get up";

console.log((isEmpty(schedule))); // false

// Task 3
const activUser = {
	name: 'John'
};
activUser.name = 'Pete';
console.log(activUser);

// Task 4
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};
let sum = 0;
for (const key in salaries) {
	sum += salaries[key];
}
console.log('Salaries = ' + sum);
console.clear();

// Task 5
let menu ={
	width: 200,
	height: 300,
	title: "My menu"
};
const multiplyNumeric = (obj) => {
	for(let key in obj){
		if (typeof(obj[key]) === 'number'){
			obj[key] *= 2;
		}
	}
}
multiplyNumeric(menu);
console.log(menu);