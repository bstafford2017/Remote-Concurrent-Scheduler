import { SEARCH_EVENT } from '../actions'
import { IEvent } from '../types'
import { IAction } from '../types'

const initialState: IEvent[] = []

export default function (state = initialState, action: IAction) {
  switch (action.type) {
    case SEARCH_EVENT:
      return [...state, action.payload]
    default:
      return [...state]
  }
}
