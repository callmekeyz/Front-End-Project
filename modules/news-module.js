import { URLs } from "../config.js";
// ^^ put own error handling server here ^^


let newsContainer = document.querySelector(".container");

// ^^ put own error handling server here ^^

let newsContainer = document.querySelector('.container')


let body = document.querySelector("body");

var requestOptions = {
	method: "GET",
	redirect: "follow",
};

export const newsUpdate = (callback) => {

	fetch(URLs.news, requestOptions)
		.then((response) => response.json())
		.then((result) => callback(result))
		.catch((error) => console.log("error", error));
};

newsUpdate((res) => {
	res.articles.forEach((article) => {
		let newsList = document.createElement("ol");
		let newsItems = document.createElement("li");
		let newsTitle = document.createElement("div");
		newsTitle.classList = "article-title";
		newsTitle.append(article.title);

		let newsImg = document.createElement("img");
		let imgDiv = document.createElement("div");
		imgDiv.classList = "center-img";
		newsImg.src = article.urlToImage;
		newsImg.classList = "news-img";

		let newsDescription = document.createElement("p");
		newsDescription.classList = "description";
		newsDescription.append(article.description);

		let newsAnchor = document.createElement("a");
		newsAnchor.classList = "anchor";
		newsAnchor.href = article.url;
		newsAnchor.innerText = "Read More";
		newsAnchor.target = "_blank";

		newsItems.append(newsTitle);
		newsItems.append(imgDiv);
		imgDiv.append(newsImg);
		// newsItems.append(newsImg)
		newsItems.append(newsDescription);
		newsItems.append(newsAnchor);
		newsList.append(newsItems);
		newsContainer.append(newsList);
	});
});

    fetch(URLs.news, requestOptions)
.then(response => response.json())
.then(result => callback(result))
.catch(error => console.log('error', error));
// console.log(newsFunc)
}

newsUpdate(res => {
    res.articles.forEach (article => {
        console.log(article)
        let newsList = document.createElement('ol')
        let newsItems = document.createElement('li')
        let newsTitle = document.createElement('div')
        newsTitle.classList = "article-title"
        newsTitle.append(article.title)

        let newsImg = document.createElement('img')
        let imgDiv = document.createElement('div')
        imgDiv.classList = 'center-img'
        newsImg.src = article.urlToImage
        newsImg.classList = 'news-img'
        

        let newsDescription = document.createElement('p')
        newsDescription.classList = "description"
        newsDescription.append(article.description)
        
        let newsAnchor = document.createElement('a')
        newsAnchor.classList = "anchor"
        newsAnchor.href = article.url
        newsAnchor.innerText = "Read More"
        newsAnchor.target = "_blank"
        
        newsItems.append(newsTitle)
        newsItems.append(imgDiv)
        imgDiv.append(newsImg)
        newsItems.append(newsDescription)
        newsItems.append(newsAnchor)
        newsList.append(newsItems)
        newsContainer.append(newsList) 
    })

})


let button = document.querySelector(".news");