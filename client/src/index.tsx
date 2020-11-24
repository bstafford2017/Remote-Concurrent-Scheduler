import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

const Application = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'))
