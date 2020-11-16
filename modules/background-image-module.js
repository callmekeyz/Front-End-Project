import { ajax } from "../modules/ajax-module.js";

let randomGeneratedImageID = Math.floor(Math.random() * 101);

export const backgroundImage = ajax(
	`https://picsum.photos/id/${randomGeneratedImageID}/info`,
	(r) => {
		let resultsArray = JSON.parse(r);
		console.log(resultsArray);
		const imageSection = document.querySelector(".image-section");
		const newImage = document.createElement("img");
		newImage.src = resultsArray.download_url;
		imageSection.appendChild(newImage);
	}
);
