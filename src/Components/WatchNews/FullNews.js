import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardNews from './CardNews';


import { SearchBar } from '..';

const FullNews = () => {
    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState(true)

    useEffect(() => {
        console.log("allArticles", allArticles);
        if (allArticles) {
            fetch("https://newsapi.org/v2/everything?q=all&apiKey=ade5773e72964d6a9b4889ad02a92802", {
                type: "GET",
            }).then((res) => res.json())
                .then(data => setArticles(data.articles))

        } else {
            fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=ade5773e72964d6a9b4889ad02a92802", {
                type: "GET",
            }).then((res) => res.json())
                .then(data => setArticles(data.articles))

        }
    }, [allArticles])

    return (
        <div>
            <SearchBar
                setAllArticles={setAllArticles}
                allArticles={allArticles}
            />
            <div className="new-container">


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

        </div>

    );
};
export default FullNews;
