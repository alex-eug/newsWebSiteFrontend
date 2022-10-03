import React from 'react'

export default function CardNews({ article }) {


    return (

        <a className='article-container' href={article.url}>

            <p className="article-source-name">{article.source.name}
                <span> <time className="article-date">le {article.publishedAt.slice(0, 10)}</time></span>
            </p>

            <div className="img-container"><img className="article-img" src={article.urlToImage} style={{ width: 150, height: 100 }} alt=" representant l'article" /></div>
            <h3 className="article-title">{article.title.slice(0, 100) + '...'}</h3>


        </a>
    )
}
