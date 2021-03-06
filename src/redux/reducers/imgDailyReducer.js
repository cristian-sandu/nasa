import { EMPTY_STRING } from 'common/constants'

import { FETCH_IMAGES_SUCCESS, IS_LOADING } from '../types'

const initialState = {
  image: EMPTY_STRING,
  isLoading: false,
}

const imageDailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        image: action.payload.imageURL,
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }

    default:
      return state
  }
}

export default imageDailyReducer
