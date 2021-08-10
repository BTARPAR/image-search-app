import {
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_HAS_NEXT_PAGE
} from '../actions'

function searchReducer(state, action) {
  switch (action.type) {
    case MAKE_REQUEST:
      return {loading: true, searched: []}
    case GET_DATA:
      return {...state, loading: false, searched: action.payload.searched, page: action.payload.page}
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
