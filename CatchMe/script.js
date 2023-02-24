const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
}

const linkToBtnCatch = document.getElementById("btn-catch");
var setStyle = {
	zIndex: 10000,
	position: "absolute",
	top: getRandomInt(500) + "px",
	left: getRandomInt(1000) + "px"
}
for (let prop of Object.keys(setStyle)) {
	linkToBtnCatch.style[prop.toString()] = setStyle[prop.toString()];
}
linkToBtnCatch.addEventListener("click", () => { console.log("Ha, I got you!") })

linkToBtnCatch.addEventListener("mouseover", () => {
	setTimeout(() => {
		const linkToBtnCatch = document.getElementById("btn-catch");
		var setStyle = {
			zIndex: 10000,
			position: "absolute",
			top: getRandomInt(500) + "px",
			left: getRandomInt(1000) + "px"
		}
		for (let prop of Object.keys(setStyle)) {
			linkToBtnCatch.style[prop.toString()] = setStyle[prop.toString()];
		}
	}, 150)
})