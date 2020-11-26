import axios from 'axios'
import { returnErrors } from './error'
import { SEARCH_EVENT } from '.'

export const searchEvent = (input: string) => async (dispatch: Function) => {
  try {
    const res = await axios.get(`/api/event/${input}`)
    dispatch({
      type: SEARCH_EVENT,
      payload: res.data.events
    })
  } catch (err) {
    dispatch(returnErrors(err))
  }
}
