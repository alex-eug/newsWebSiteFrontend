import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const FullNews = () => {
    const [articles, setArticles] = useState([])



    const getArticles = () => {
        return fetch("https://newsapi.org/v2/everything?q=apple&from=2022-09-12&to=2022-09-12&sortBy=popularity&apiKey=", {
            type: "GET",
        }).then((res) => res.json())
            .then(data => setArticles(data.articles))


    };
    useEffect(() => {
        getArticles()

    }, [])
    console.log(articles);
    return (

        <ul>
            {
                articles.map((article) =>
                    <div key={uuidv4()}>

                        <li>{article.publishedAt} </li>
                        <li>{article.description} </li>
                        <li>{article.content} </li>
                        <li>{article.source.name} </li>
                        <li>{article.author} </li>
                        <li>{article.title} </li>
                        <li><a href={article.url}> {article.url}</a> </li>
                        <li><img src={article.urlToImage} style={{ width: 400 }} alt="" srcset="" />{article.title} </li>

                    </div>
                )
            }

        </ul >
    );
};
export default FullNews;
