import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles/bootstrap/dist/css/bootstrap.min.css'
import './styles/card.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/login.css'
import './styles/navbar.css'
import './styles/search.css'
import './styles/settings.css'

import Login from './components/common/Login'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Settings from './components/common/Settings'
import Search from './components/search/Search'
import Home from './components/calendar/Home'
import ManageBuildings from './components/buildings/ManageBuildings'
import ManageRooms from './components/rooms/ManageRooms'
import ManageUsers from './components/users/ManageUsers'
import NotFound from './components/common/NotFound'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  useEffect(() => {
    //loadUser()
  })

  return (
    <Provider store={store}>
      <Router>
        <Nav isAuthenticated={false} isAdmin={false} />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/settings' component={Settings} />
          <Route path='/manageBuildings' component={ManageBuildings} />
          <Route path='/manageRooms' component={ManageRooms} />
          <Route path='/manageUsers' component={ManageUsers} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  )
}

export default App
