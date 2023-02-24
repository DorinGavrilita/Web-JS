let count = 0;

const linkToCount = document.getElementById("count");
const increment = () => {
	count++;
	linkToCount.value = count;
}

const decrement = () => {
	count--;
	linkToCount.value = count;
}

const plusTen = () => {
	count += 10;
	linkToCount.value = count;
}

const minusTen = () => {
	count -= 10;
	linkToCount.value = count;
}

const setZero = () => {
	count = 0;
	linkToCount.value = count;
}

const setGreenBackground = () => {
	console.log("HI, i was here!");
	if (Number(linkToCount.value) === 42) {
		document.body.style.backgroundColor = "green";
	}
}

const buttonPlus = document.getElementById("button-plus");
buttonPlus.addEventListener("click", () => { increment() });

const buttonMinus = document.getElementById("button-minus");
buttonMinus.addEventListener("click", () => { decrement() });

const buttonPlusTen = document.getElementById("button-plus-ten");
buttonPlusTen.addEventListener("click", () => { plusTen() });

const buttonMinusTen = document.getElementById("button-minus-ten");
buttonMinusTen.addEventListener("click", () => { minusTen() });

const buttonSetZero = document.getElementById("button-set-zero");
buttonSetZero.addEventListener("click", () => { setZero() });

linkToCount.addEventListener("change", (event) => {
	console.log(event);
	setGreenBackground;
});

const linkToInputForList = document.getElementById("inputForList");
const linkToBtnSubmit = document.getElementById("btn-submit");
const linkToList = document.getElementById("list");

const addToList = () => {
	const li = document.createElement("li");
	if (linkToInputForList.value !== "") {

		li.innerHTML = linkToInputForList.value;
		linkToInputForList.value = "";
		linkToList.appendChild(li);
	}
}

linkToBtnSubmit.addEventListener("click", () => { addToList() });
