import { ajax } from "../modules/ajax-module.js";
import { URLs } from "./../config.js";

const quoteSection = document.querySelector(".quote-section");
//Using a function to make the AJAX call. Need this to hook up the refresh button
export let newQuote = () => {
	ajax(URLs.quote, (r) => {
		let randomQuote = JSON.parse(r);
		let currentQuote = randomQuote.quote.quoteText;
		let currentQuoteAuthor = randomQuote.quote.quoteAuthor;
		appendQuoteToDOM(currentQuote, currentQuoteAuthor); //pass the above variables thru the next function to update the DOM
	});
};

//This function handles all the DOM heaving lifting
const appendQuoteToDOM = (quote, author) => {
	const paragraph = document.querySelector("#quote-paragraph");
	const authorNameId = document.querySelector("#author-name");

	//This logic runs the display text of the quote that is generated. It returns out to stop running the code below since that only needs to be run the first time the AJAX is run
	if (paragraph) {
		paragraph.innerText = quote;
		authorNameId.innerText = author || "-unknown";
		return;
	}
	let div = document.createElement("div");
	let p = document.createElement("p");
	p.id = "quote-paragraph";
	p.append(quote);
	div.append(p);
	quoteSection.prepend(div);

	let authorEL = document.createElement("h6");
	authorEL.id = "author-name";

	//Need to make sure to account for any missing author value from the JSON
	if (author != false) {
		authorEL.append(author);
		div.append(authorEL);
	} else {
		authorEL.append("-unknown");
		div.append(authorEL);
	}
};
