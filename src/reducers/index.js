import React, {createContext, useContext, useEffect, useReducer} from 'react'
import axios from 'axios'
import searchReducer from "./searchReducer"

import {
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_HAS_NEXT_PAGE
} from '../actions'

export const SearchContext = createContext()

export const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(searchReducer, {searched: [], loading: true})
  // const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
  const BASE_URL = 'https://jobs.github.com/positions.json'

  const search = (params, page) => {
    dispatch({type: MAKE_REQUEST})
    axios.get(BASE_URL, {
      params: {
        markdown: true,
        page: page,
        ...params
      }
    })
      .then((res) => dispatch({type: GET_DATA, payload: {jobs: res.data}}))
      .catch((e) => {
        dispatch({type: ERROR, payload: {error: e}})
      })

    axios.get(BASE_URL, {
      params: {
        markdown: true,
        page: page + 1,
        ...params
      }
    })
      .then((res) =>
        dispatch({
          type: UPDATE_HAS_NEXT_PAGE,
          payload: {hasNextPage: res.data.length !== 0}
        })
      )
      .catch((e) => {
        dispatch({type: ERROR, payload: {error: e}})
      })
  }

  useEffect(() => {
    // search({}, 1)
  }, [])

  return (
    <SearchContext.Provider value={{...state, search}}>
      {props.children}
    </SearchContext.Provider>
  )
}