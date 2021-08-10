import React, {useContext, useState} from 'react'
import Input from '../Input'
import {SearchContext} from "../../reducers";
import './searchbar.css'
import Button from "../Button";

function SearchBar() {
  const {search: searchAPI, query} = useContext(SearchContext)

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    if (e === '') {
      setSearch(e)
    } else {
      setSearch(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) {
      searchAPI(search, 0, false)
    } else {
      searchAPI(search, 0, true)
    }
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
            <Button clickHandler={handleSubmit} disabled={query === search}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
