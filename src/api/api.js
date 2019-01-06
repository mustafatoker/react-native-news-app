const newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=8d136705f5e7400ea153787f414a01c2";

export async function getNews() {
    let result = await fetch(newsApiUrl).then(response => response.json());
    return result.articles;
}
