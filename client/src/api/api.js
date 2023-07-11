async function getNews () {
    let arrayNews = [];

    try{
        await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=1aec620ca66540d19f2db60aee8b3221")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            arrayNews.push(data);
            return arrayNews;
        })
    } catch(err) {
        console.log(err)
    }
}

export default getNews;