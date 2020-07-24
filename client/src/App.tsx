import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './css/bootstrap/dist/css/bootstrap.min.css'
import './css/card.css'
import './css/footer.css'
import './css/header.css'
import './css/login.css'
import './css/navbar.css'
import './css/search.css'
import './css/settings.css'

import Login from './components/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Settings from './components/Settings'
import Search from './components/Search'

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
        <Route exact path='/search' component={Search} />
        <Route exact path='/settings' component={Settings} />
      </Router>
      <Footer />
    </Provider>
  )
}

export default App
