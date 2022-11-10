import React from 'react'

export default function CardNews({ article }) {


    return (

        <a className='article-container' href={article.url}>

            <p className="article-source-name">{article.source.name}
                <span> <time className="article-date">le {article.publishedAt.slice(0, 10)}</time></span>
            </p>

            <div className="img-container"><img className="article-img" src={article.urlToImage ? article.urlToImage : 'https://img.freepik.com/photos-gratuite/homme-affaires-tenant-tablette-application-virtuelle_1112-775.jpg?size=626&ext=jpg&ga=GA1.2.2028433825.1664806220'} style={{ width: 160, height: 110 }} alt=" representant l'article" /></div>
            <h3 className="article-title">{article.title.slice(0, 50) + '...'}</h3>


        </a>
    )
}
