const main = document.querySelector("main");

export const generateAnImage = () => {
	const direction = Math.round(Math.random() * 360); //this is to choose the direction of the gradient
	//This generates our two random RGBA colors - opacity is kept constant
	const red1 = Math.round(Math.random() * 255);
	const green1 = Math.round(Math.random() * 255);
	const blue1 = Math.round(Math.random() * 255);
	const red2 = Math.round(Math.random() * 255);
	const green2 = Math.round(Math.random() * 255);
	const blue2 = Math.round(Math.random() * 255);
	//Places the style on page load
	main.style.background = `linear-gradient(${direction}deg, rgba(${red1},${green1},${blue1}, .5), rgba(${red2},${green2},${blue2},.5))`;
};

// generateAnImage();
