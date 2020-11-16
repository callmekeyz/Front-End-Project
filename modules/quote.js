import { ajax } from "../modules/ajax-module.js";

const quoteSection = document.querySelector(".quote-section");

export let newQuote = () => {
	ajax("https://quote-garden.herokuapp.com/api/v2/quotes/random", (r) => {
		let randomQuote = JSON.parse(r);
		let currentQuote = randomQuote.quote.quoteText;
		let currentQuoteAuthor = randomQuote.quote.quoteAuthor;
		appendQuoteToDOM(currentQuote, currentQuoteAuthor);
	});
};
const appendQuoteToDOM = (quote, author) => {
	const paragraph = document.querySelector("#quote-paragraph");
	const authorNameId = document.querySelector("#author-name");

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
	quoteSection.append(div);

	let authorEL = document.createElement("h6");
	authorEL.id = "author-name";

	if (author != false) {
		authorEL.append(author);
		div.append(authorEL);
	} else {
		authorEL.append("-unknown");
		div.append(authorEL);
	}
};
