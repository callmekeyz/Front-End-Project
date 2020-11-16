import { ajax } from "../modules/ajax-module.js";

ajax("https://api.unsplash.com/photos/random", (r) => {
	let results = JSON.parse(r);
	console.log(results);
});
