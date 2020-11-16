import { ajax } from "../modules/ajax-module.js"
const quoteSection = document.querySelector(".quote-section")
export let newQuote = ajax("https://quote-garden.herokuapp.com/api/v2/quotes/random",(r)=>{
    let randomQuote = JSON.parse(r)
    


   
        let currentQuote = randomQuote.quote.quoteText
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.setAttribute("id","quote-paragraph")
        p.append(currentQuote)
        div.append(p)
        quoteSection.append(div)

        let currentQuoteAuthor = randomQuote.quote.quoteAuthor

        let author = document.createElement("h6")
        author.setAttribute("id","author-name")
        if (currentQuoteAuthor !=false){
        author.append(currentQuoteAuthor)
        div.append(author)
        } else{
            author.append("-unknown")
            div.append(author)
        }
        const refreshButton = document.querySelector(".refresh-quote")


refreshButton.addEventListener("click",newQuote)
// // newQuote
// console.log("test")
// };



})
