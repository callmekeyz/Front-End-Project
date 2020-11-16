const newsSource = 'http://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=4900b580772846a7a5bbe91102c9e666';
const corsFix = 'https://cors-anywhere.herokuapp.com/'
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
const newsUpdate = async() => {
    let newsFunc = await fetch(corsFix+newsSource, requestOptions)
.then(response => response.text())
.then(result => console.log(JSON.parse(result)))
.catch(error => console.log('error', error));
// console.log(newsFunc)
return newsFunc
}
let button = document.querySelector('.news')
button.addEventListener('click', async () => {
    await console.log(await newsUpdate())
})