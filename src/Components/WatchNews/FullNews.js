import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardNews from './CardNews';

const FullNews = () => {
    const [articles, setArticles] = useState([])



    const getArticles = () => {
        return fetch("https://newsapi.org/v2/everything?q=EU&language=fr&from=2022-09-12&to=2022-09-12&sortBy=relevancy&apiKey=ade5773e72964d6a9b4889ad02a92802", {
            type: "GET",
        }).then((res) => res.json())
            .then(data => setArticles(data.articles))

    };
    useEffect(() => {
        getArticles()

    }, [])
    console.log(articles);
    return (

        <div class="new-container">
            {
                articles.map((article) =>
                    <div key={uuidv4()}>

                        <CardNews
                            article={article}

                        />

                    </div>
                )
            }
        </div>

    );
};
export default FullNews;
