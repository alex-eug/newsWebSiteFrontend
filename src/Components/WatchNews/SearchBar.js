import Select from 'react-select'
import toggleArticle from '../../functional/toggle'

export default function SearchBar({ setAllArticles, allArticles, options, language, handleChange, category, languageLabel }) {

    return (
        <div className='search-container'>
            <button className='button-allArticles' onClick={() => toggleArticle(setAllArticles, allArticles)}>{allArticles ? "Les plus cherché" : "Tout les articles"}</button>
            <Select className='select-searchBar' options={options} onChange={handleChange} value={language} placeholder={languageLabel} />
        </div>
    )
}
