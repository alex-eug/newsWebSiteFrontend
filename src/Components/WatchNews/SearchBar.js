import React from 'react'
import toggleArticle from '../../functional/toggle'

export default function searchBar({ setAllArticles, allArticles }) {

    return (
        <button onClick={() => toggleArticle(setAllArticles, allArticles)}>tout les articles</button>
    )
}
