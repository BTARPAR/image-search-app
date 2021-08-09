import React, {useContext, useMemo, useState} from 'react'
import Input from '../Input'
import {SearchContext} from "../../reducers";
import './searchbar.css'

function SearchBar() {
  const isLightTheme = true
  const {search: searchAPI} = useContext(SearchContext)

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    searchAPI(search)
  }

  return (
    <div className='container searchbar-container'>
      <div className='searchbar'>
        <form className={isLightTheme ? 'search' : 'search bg-dark'}>
          <div className={isLightTheme ? 's-left' : 's-left content-bg-dark'}>
            <Input placeholder={'Search image'}
                   onChangeHandler={handleChange} value={search}
                   inputName={'description'} iconClass={'fa-search'}/>
          </div>
          <div className={isLightTheme ? 's-right' : 's-right content-bg-dark'}>
            <button className='btn' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
