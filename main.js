import { runClock } from "./modules/clock-module.js";
import { generateAnImage } from "./modules/gradient-module.js";

const toggleWhichClock = document.querySelector(".toggle-switch");
const analogClock = document.querySelector(".analog-clock");
const digitalClock = document.querySelector(".digital-clock");

setInterval(runClock, 1000);
generateAnImage();

toggleWhichClock.addEventListener("change", () => {
	analogClock.classList.toggle("hidden");
	digitalClock.classList.toggle("hidden");
});
