import { SEARCH_EVENT } from '../actions'
import { IEvent } from '../types'
import { IAction } from '../types'

const initialState: IEvent[] = []

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SEARCH_EVENT:
      return [...state, action.payload]
    default:
      return [...state]
  }
}

export default reducer
