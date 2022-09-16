import React, { useState } from 'react'
import Select from 'react-select'
import toggleArticle from '../../functional/toggle'

export default function SearchBar({ setAllArticles, allArticles, options, language, setLanguage, handleChange }) {

    console.log(language);
    return (
        <div className='search-container'>
            <button className='button-allArticles' onClick={() => toggleArticle(setAllArticles, allArticles)}>{allArticles ? "les plus cherché" : "tout les articles"}</button>
            <Select className='select-searchBar' options={options} onChange={handleChange} value={language} placeholder='Language' />
        </div>
    )
}
