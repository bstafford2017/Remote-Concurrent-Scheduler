import { SEARCH_EVENT } from '../actions'
import { IEvent } from '../types'

const initialState: IEvent[] = []

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SEARCH_EVENT:
      return [...state, action.payload]
    default:
      return [...state]
  }
}
