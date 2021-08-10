import React, {useContext, useEffect, useState} from 'react'
import Gallery from 'react-grid-gallery'

import SearchBar from "../components/Searchbar";
import {SearchContext} from "../reducers";
import './searchApp.css'

const SearchAppInitialApp = () => {
  const {searched = [], search, loading, nextPage, page} = useContext(SearchContext)
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll)
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
    }
  })

  const IMAGES = searched.reduce((acc, curr) => {
    curr.images?.map((image) => {
      if (!image.link?.endsWith('.mp4')) {
        acc.push({
          src: image.link,
          title: curr.title,
          thumbnail: image.link,
          thumbnailWidth: 500,
          thumbnailHeight: 500,
        })
      }
    })
    return acc
  }, [])

  const infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!loading) {
        console.log('api')
        nextPage(page + 1)
        search(page + 1)
      }
    }
  }

  return (
    <div className={'search-app'}>
      <SearchBar/>
      <Gallery images={IMAGES} enableImageSelection={false} margin={20}/>
    </div>
  )
}

export default SearchAppInitialApp