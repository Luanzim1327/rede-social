import NewsApi from "../src/api/api"

export default function NewsContainer () {
    return (
        <div>
            {NewsApi.map((news) => (
                <div>
                    <h2>{news.title}</h2>
                    <p>{news.description}</p>
                    <img src={news.urlToImage} alt={news.title}/>
                </div>
            ))}
        </div>
    )
}