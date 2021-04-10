import { LOADING, LOADED } from '../actions'
import { IAction } from '../types'

const initialState = {
  isLoading: false
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: true
      }
    case LOADED:
      return {
        isLoading: false
      }
    default:
      return { ...state }
  }
}

export default reducer
