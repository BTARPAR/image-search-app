import {
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_HAS_NEXT_PAGE
} from '../actions'
import {IMAGES} from "../utils";

function searchReducer(state, action) {
  switch (action.type) {
    case MAKE_REQUEST:
      return {...state, loading: true}
    case GET_DATA:
      console.log(action.payload)
      if (action.payload.hasOwnProperty('searched')) {
        const searched = IMAGES(action.payload.searched)
        return {
          ...state,
          loading: false,
          searched,
          page: action.payload.page,
          querySearchEnabled: action.payload.querySearchEnabled,
          query: action.payload.query,
          disable: 'prev'
        }
      } else {
        console.log({...state})
        return {...state, loading: false, disable: 'next', query: action.payload.query}
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        searched: [],
        error: action.payload.error,
        page: 0
      }
    case UPDATE_HAS_NEXT_PAGE:
      return {...state, page: action.payload.page}
    default:
      return state
  }
}

export default searchReducer
