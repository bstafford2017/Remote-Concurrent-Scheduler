import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

import './styles/bootstrap/dist/css/bootstrap.min.css'
import './styles/calendar/items.css'
import './styles/calendar/modal.css'
import './styles/calendar/table.css'
import './styles/card.css'
import './styles/footer.css'
import './styles/header.css'
import './styles/login.css'
import './styles/navbar.css'
import './styles/search.css'
import './styles/settings.css'
import './styles/common.css'

import Login from './components/common/Login'
import Header from './components/calendar/Header'
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'
import Settings from './components/common/Settings'
import Search from './components/search/Search'
import Home from './components/calendar/Home'
import ManageBuildings from './components/buildings/ManageBuildings'
import ManageRooms from './components/rooms/ManageRooms'
import ManageUsers from './components/users/ManageUsers'
import NotFound from './components/common/NotFound'
import Spinner from './components/common/Spinner'

import {
  LOGIN_URL,
  HOME_URL,
  SEARCH_URL,
  SETTINGS_URL,
  BUILDINGS_URL,
  ROOMS_URL,
  USERS_URL
} from './components/routes'

import { loadUser } from './actions/userActions'

const App = (props: any) => {
  // useEffect(() => {
  // store.dispatch(loadUser())
  // })
  const isHome = false
  const isAuthenticated = true
  const isLoading = false
  // const {
  //   isAuthenticated = false,
  //   isLoading = false
  // }: { isAuthenticated: boolean; isLoading: boolean } = store.getState().user
  // const {
  //   admin: isAdmin = false
  // }: { admin: boolean } = store.getState().user.user

  const next = (e: React.MouseEvent) => {}

  const previous = (e: React.MouseEvent) => {}

  return (
    <Provider store={store}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Router>
            {isHome ? (
              <Header next={next} previous={previous} />
            ) : (
              <Navigation isAuthenticated={isAuthenticated} isAdmin={true} />
            )}
            <Container className='content'>
              <Switch>
                <Route exact path={LOGIN_URL} component={Login} />
                <Route path={HOME_URL} component={Home} />
                <Route path={SEARCH_URL} component={Search} />
                <Route path={SETTINGS_URL} component={Settings} />
                <Route path={BUILDINGS_URL} component={ManageBuildings} />
                <Route path={ROOMS_URL} component={ManageRooms} />
                <Route path={USERS_URL} component={ManageUsers} />
                <Route path='*' component={NotFound} />
              </Switch>
            </Container>
          </Router>
          <Footer />
        </>
      )}
    </Provider>
  )
}

export default App
