
$('.news-info').on('submit', (event) => {
    event.preventDefault();
    let searchTerm = $('#searchTerm').val();
    let numOfNews = $('#numOfNews').val();
    const API_KEY = "INCLUDE YOUR API KEY HERE";
    
    $.ajax({
        url: 'https://newsapi.org/v2/everything',
        method: 'GET',
        data: {
            pageSize: numOfNews,
            q: searchTerm
        },
        headers: {
            'X-Api-Key': API_KEY
        }
    }).done((data) => {
        $('.results').empty();
        for(let i = 0; i < data.articles.length; i ++){
            $('.results').append(`
                <h2> ${data.articles[i].title} </h2>
                <div class="articleImage">
                    <img src="${data.articles[i].urlToImage}" alt="${data.articles[i].title}">
                </div>
                <p> ${data.articles[i].author} </p>
                <p> ${data.articles[i].description} </p>
                <a href="${data.articles[i].url}" target="_blank"> View the full article </a>
            `);
        }
    })
    .catch((errMsg) => {
        console.log(errMsg)
    });
});
/*
let URL = `https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=${numOfNews}`;
let settings = {
    headers: {
        'X-Api-Key': API_KEY
    },
    method: 'GET'
}

fetch(URL, settings)
*/