import React from 'react'

export default function CardNews({ article }) {
    return (
        <div className='article-container'>
            <p className="article-source-name">{article.source.name}
                <span> <time className="article-date">le {article.publishedAt.slice(0, 10)}</time></span>
            </p>
            <h3 className="article-title">{article.title}</h3>

            <div className="img-container"><img className="article-img" src={article.urlToImage} style={{ width: 150, height: 100 }} alt=" representant l'article" /></div>
            <div className="article-url"><a href={article.url}> lien vers l'article</a></div>
        </div>
    )
}
