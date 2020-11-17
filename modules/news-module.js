import {URLs} from "../Front-End-Project/config.js"
// ^^ put own error handling server here ^^

let body = document.querySelector('body')
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

const newsUpdate = (callback) => {
    fetch(URLs.news, requestOptions)
.then(response => response.json())
.then(result => callback(result))
.catch(error => console.log('error', error));
// console.log(newsFunc)
}

newsUpdate(res => {
    res.articles.forEach (article => {
        console.log(article)
        body.append(article.title)
    })
    console.log('Look at me!')
})

let button = document.querySelector('.news')
// button.addEventListener('click', () => {
//     newsUpdate(res => {
//         res.articles.forEach (article => {
            
//         })
//         console.log('Look at me!')
//     })
    
    // console.log(await newsUpdate())
// })

