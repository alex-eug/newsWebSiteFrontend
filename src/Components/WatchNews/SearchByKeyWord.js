import React from 'react'

export default function SearchByKeyWord({ onClickQ, onChangeQ }) {

    return (
        <div className='search-container'>
            <form action="">
                <input className='search-input' type="text" name="q" id="" onChange={(e) => { onChangeQ(e) }} placeholder="rugby" />
                <button className='button-allArticles' onClick={(e) => { onClickQ(e) }}>Rechercher</button>
            </form>
        </div>
    )
}
