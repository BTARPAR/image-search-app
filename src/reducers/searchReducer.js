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
      return {...state, loading: false, searched: action.payload.jobs}
    case ERROR:
      return {
        ...state,
        loading: false,
        searched: [],
        error: action.payload.error
      }
    // case UPDATE_HAS_NEXT_PAGE:
    //   return {...state, hasNextPage: action.payload.hasNextPage}
    default:
      return state
  }
}

export default searchReducer
