import React, { useEffect } from 'react'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    //loadUser()
  })

  return (
    <Provider store={store}>
      <div className='App'>
        <Container></Container>
      </div>
    </Provider>
  )
}

export default App
