import React from 'react'

export default function CardNews({ article }) {
    return (
        <div class='article-container'>
            <p className="article-source-name">{article.source.name}</p>
            <time class="article-date">{article.publishedAt.slice(0, 10)}</time>
            <h3 class="article-title">{article.title}</h3>


            <p className="article-content">{article.content.slice(0, 100) + "..."}</p>
            <div class="img-container"><img class="article-img" src={article.urlToImage} style={{ width: 150, height: 100 }} alt="" srcset="" /></div>
            <div className="article-url"><a href={article.url}> lien vers l'article</a></div>
        </div>
    )
}
