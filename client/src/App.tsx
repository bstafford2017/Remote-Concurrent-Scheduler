import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router'
import { Container } from 'reactstrap'

import Login from './components/Login'
import Nav from './components/Nav'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    //loadUser()
  })

  return (
    <Provider store={store}>
      <Nav />
      <Router>
        <Route exact path='/' component={Login} />
      </Router>
    </Provider>
  )
}

export default App
