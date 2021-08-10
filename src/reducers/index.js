import React, {createContext, useEffect, useReducer} from 'react'
import axios from 'axios'
import searchReducer from "./searchReducer"

import {
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_HAS_NEXT_PAGE
} from '../actions'

axios.defaults.headers.common['Authorization'] = 'Client-ID b067d5cb828ec5a'
export const SearchContext = createContext()

export const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(searchReducer, {searched: [], loading: true, page: 0})
  const BASE_URL = 'https://api.imgur.com/3/gallery'

  const search = (query, page = 0, withQuery) => {
    dispatch({type: MAKE_REQUEST})
    if (!withQuery) {
      axios.get(`${BASE_URL}/hot/viral/${page}`, {})
        .then((res) => {
          console.log(res.data.data)
          dispatch({type: GET_DATA, payload: {searched: res.data.data, page}})
        })
        .catch((e) => {
          dispatch({type: ERROR, payload: {error: e}})
          dispatch({type: MAKE_REQUEST})
        })
    } else {
      axios.get(`${BASE_URL}/search/?q=${query}`, {})
        .then((res) => {
          dispatch({type: GET_DATA, payload: {searched: res.data.data}})
        })
        .catch((e) => {
          dispatch({type: ERROR, payload: {error: e}})
        })
    }
  }

  const nextPage = (page) => dispatch({type:UPDATE_HAS_NEXT_PAGE, payload:{page}})

  useEffect(() => {
    search('', 0)
  }, [])

  return (
    <SearchContext.Provider value={{...state, search, nextPage}}>
      {props.children}
    </SearchContext.Provider>
  )
}