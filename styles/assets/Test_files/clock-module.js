// Variables to grab classes
const analogClock = document.querySelector(".analog-clock");
const analogClockFace = document.querySelector(".clock-face");
let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".minute-hand");
let hourHand = document.querySelector(".hour-hand");

const runClock = () => {
	let now = new Date();
	let seconds = now.getSeconds();
	let minutes = now.getMinutes();
	let hours = now.getHours();

	if (!analogClockFace.classList.contains("hidden")) {
		let secondsPercent = seconds / 60;
		let minutesPercent = (secondsPercent + minutes) / 60;
		let hoursPercent = (minutesPercent + hours) / 12;

		rotateHands(secondHand, secondsPercent);
		rotateHands(minuteHand, minutesPercent);
		rotateHands(hourHand, hoursPercent);
	}
};

const rotateHands = (element, rotate) => {
	element.style.setProperty(`--rotation`, rotate * 360);
};

setInterval(runClock, 1000);
