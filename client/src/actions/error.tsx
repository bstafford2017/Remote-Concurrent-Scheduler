import { GET_ERRORS, CLEAR_ERRORS, LOADED } from '.'

export const returnErrors = (msg: string) => (dispatch: Function) => {
  dispatch({ type: LOADED })
  dispatch({
    type: GET_ERRORS,
    payload: msg
  })
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
