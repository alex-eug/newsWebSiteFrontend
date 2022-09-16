import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardNews from './CardNews';


import { SearchBar } from '..';

const FullNews = () => {
    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState(true)
    const options = [
        { value: 'fr', label: 'Français' },
        { value: 'de', label: 'Allemand' },
        { value: 'ar', label: 'Arabe' },
        { value: 'zh', label: 'Chinois' },
        { value: 'es', label: 'Espagnol' },
        { value: 'it', label: 'Italien' },
        { value: 'pt', label: 'Portugais' },
        { value: 'ru', label: 'Russe' },
        { value: 'sv', label: 'Suèdois' },
    ]
    const [language, setLanguage] = useState('fr')
    const handleChange = (e) => {
        setLanguage(e.value)
    }

    useEffect(() => {
        console.log("allArticles", allArticles);
        if (allArticles) {
            fetch(`https://newsapi.org/v2/everything?q=all&language=${language}&apiKey=ade5773e72964d6a9b4889ad02a92802`, {
                type: "GET",
            }).then((res) => res.json())
                .then(data => setArticles(data.articles))

        } else {
            fetch(`https://newsapi.org/v2/top-headlines?language=${language}&apiKey=ade5773e72964d6a9b4889ad02a92802`, {
                type: "GET",
            }).then((res) => res.json())
                .then(data => setArticles(data.articles))

        }
    }, [allArticles, language])

    return (
        <div>
            <SearchBar
                setAllArticles={setAllArticles}
                allArticles={allArticles}
                options={options}
                language={language}
                setLanguage={setLanguage}
                handleChange={handleChange}
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
