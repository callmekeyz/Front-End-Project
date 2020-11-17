import { runClock } from "./modules/clock-module.js";
import { generateAnImage } from "./modules/gradient-module.js";
import { backgroundImage } from "./modules/background-image-module.js";
import { newQuote } from "./modules/quote.js";

const toggleWhichClock = document.querySelector(".toggle-switch");
const analogClock = document.querySelector(".analog-clock");
const digitalClock = document.querySelector(".digital-clock");
const refreshButton = document.querySelector(".refresh-quote");
const windowsScreenSize = window.matchMedia("(min-width:766px)");

setInterval(runClock, 1000);
newQuote();

toggleWhichClock.addEventListener("change", () => {
	analogClock.classList.toggle("hidden");
	digitalClock.classList.toggle("hidden");
});

const handleScreenSize = (e) => {
	if (e.matches) {
		backgroundImage();
	} else {
		generateAnImage();
	}
};

refreshButton.addEventListener("click", newQuote);
windowsScreenSize.addListener(handleScreenSize); //Want to only run the background image AJAX when the screen is at or above 766px. Below that and we only run the gradient background color function
