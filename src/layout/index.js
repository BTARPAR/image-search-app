import React, {useContext, useEffect, useState} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import Gallery from 'react-grid-gallery'

import SearchBar from "../components/Searchbar";
import {SearchContext} from "../reducers";
import Button from "../components/Button";
import './searchApp.css'

const SearchAppInitialApp = () => {
  const {searched = [], search, loading, query, nextPage, page, querySearchEnabled, disable} = useContext(SearchContext)
  const [pageTop, setPageTop] = useState(false)
  // FOR INFITNITE SCROLL
  // useEffect(() => {
  //   window.addEventListener('scroll', infiniteScroll)
  //   return () => {
  //     window.removeEventListener('scroll', infiniteScroll)
  //   }
  // })

  const pageHandler = (number) => {
    nextPage(page + number)
    search(query, page + number, querySearchEnabled)
  }
  // TODO: instead of next & prev
  // const infiniteScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
  //     if (!loading && disable !== 'next') {
  //       pageHandler(1)
  //     }
  //   }
  // }

  const Box = ({children}) => (
    <a
      style={{
        display: "inline-block",
        margin: 20,
      }}
    >
      {children}
    </a>
  );
  return (
    <div className={'search-app'}>
      <SearchBar/>
      {loading && <div style={{
        textAlign: 'center'
      }}>
        <SkeletonTheme color="#D6D6D6">
          <Skeleton wrapper={Box} count={30} width={180} height={180}/>
        </SkeletonTheme>
      </div>
      }
      {!loading && <div>
        <div className={'pagination-button'}>
          <Button clickHandler={() => pageHandler(-1)} disabled={page <= 0}>Prev</Button>
          <Button clickHandler={() => pageHandler(1)} disabled={disable === 'next'}>Next</Button>
        </div>
        <Gallery images={searched} enableImageSelection={false} margin={20}/>
      </div>
      }

    </div>
  )
}

export default SearchAppInitialApp