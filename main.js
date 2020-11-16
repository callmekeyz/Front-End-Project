import { runClock } from "./modules/clock-module.js";
import { generateAnImage } from "./modules/gradient-module.js";
import { backgroundImage } from "./modules/background-image-module.js";
import { newQuote } from "./modules/quote.js";

const toggleWhichClock = document.querySelector(".toggle-switch");
const analogClock = document.querySelector(".analog-clock");
const digitalClock = document.querySelector(".digital-clock");
const refreshButton = document.querySelector(".refresh-quote");

setInterval(runClock, 1000);
generateAnImage();
newQuote();

toggleWhichClock.addEventListener("change", () => {
	analogClock.classList.toggle("hidden");
	digitalClock.classList.toggle("hidden");
});

refreshButton.addEventListener("click", newQuote);
