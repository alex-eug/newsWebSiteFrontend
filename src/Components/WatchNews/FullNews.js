import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CardNews from './CardNews';
import SearchByKeyWord from './SearchByKeyWord';

import { SearchBar } from '..';

const FullNews = () => {


    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState(true)

    const options = [

        { value: 'fr', label: 'Français' },
        { value: 'de', label: 'Allemand' },
        { value: 'en', label: 'Anglais' },
        { value: 'ar', label: 'Arabe' },
        { value: 'zh', label: 'Chinois' },
        { value: 'es', label: 'Espagnol' },
        { value: 'it', label: 'Italien' },
        { value: 'pt', label: 'Portugais' },
        { value: 'ru', label: 'Russe' },
        { value: 'sv', label: 'Suèdois' },
    ]

    const optionCategory = [
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'entertainment' },
        { value: 'general', label: 'general' },
        { value: 'health', label: 'health' },
        { value: 'science', label: 'science' },
        { value: 'sports', label: 'sports' },
        { value: 'technology', label: 'technology' },
    ]

    const [language, setLanguage] = useState('fr')
    const [languageLabel, setLanguageLabel] = useState('Language')

    const handleChange = (e) => {
        setLanguage(e.value)
        setLanguageLabel(e.label)
    }
    // var q et le champs controllé de l'input var v et sa valeur soumis au click pour la recherche
    const [q, setQ] = useState("foot")
    const [v, setV] = useState('foot')

    useEffect(() => {
        // console.log("allArticles", allArticles);
        if (allArticles) {
            fetch(`https://newsapi.org/v2/everything?q=${v}&language=${language}&sortBy=publishedAt&apiKey=ade5773e72964d6a9b4889ad02a92802`, {
                type: "GET",
            }).then((res) => res.json())
                .then(data => setArticles(data.articles))

        } else {
            fetch(`https://newsapi.org/v2/top-headlines?language=${language}&sortBy=publishedAt&apiKey=ade5773e72964d6a9b4889ad02a92802`, {
                type: "GET",
            }).then((res) => res.json())
                .then(data => setArticles(data.articles))
        }


    }, [allArticles, language, v])

    const onChangeQ = (e) => {
        setQ(e.target.value)
    }

    const onClickQ = (e) => {
        e.preventDefault()
        setV(q)
    }

    return (
        <div>
            <div className='searchArea'>

                <SearchBar
                    setAllArticles={setAllArticles}
                    allArticles={allArticles}
                    options={options}
                    language={language}
                    handleChange={handleChange}
                    optionCategory={optionCategory}
                    languageLabel={languageLabel}
                />
                {
                    allArticles ? <SearchByKeyWord
                        onChangeQ={onChangeQ}
                        onClickQ={onClickQ}
                    /> : ""
                }
            </div>
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
