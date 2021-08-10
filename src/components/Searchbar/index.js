import React, {useContext, useMemo, useState} from 'react'
import Input from '../Input'
import {SearchContext} from "../../reducers";
import './searchbar.css'

function SearchBar() {
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
        <form className={'search'}>
          <div className={'s-left'}>
            <Input placeholder={'Search image'}
                   onChangeHandler={handleChange} value={search}
                   inputName={'description'} iconClass={'fa-search'}/>
          </div>
          <div className={'s-right'}>
            <button className='btn' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
