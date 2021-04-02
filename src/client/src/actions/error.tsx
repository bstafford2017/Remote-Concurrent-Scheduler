import { GET_ERRORS, CLEAR_ERRORS, LOADED } from '.'

export const setErrors = (msg: string) => (dispatch: Function) => {
  dispatch({
    type: LOADED
  })
  dispatch({
    type: GET_ERRORS,
    payload: msg
  })
}

export const clearErrors = () => (dispatch: Function) => {
  dispatch({
    type: LOADED
  })
  dispatch({
    type: CLEAR_ERRORS
  })
}
