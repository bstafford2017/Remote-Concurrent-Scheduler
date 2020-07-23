import { GET_ERRORS, CLEAR_ERRORS } from '../actions'

export const returnErrors = (msg: string) => {
  return {
    type: GET_ERRORS,
    payload: msg
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
