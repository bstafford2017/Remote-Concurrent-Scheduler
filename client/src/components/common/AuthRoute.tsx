import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LOGIN_URL } from '../routes'
import { loadUser } from '../../actions/userActions'
import { hasToken } from '../../utils'

const AuthRoute = ({
  loadUser,
  isLoading,
  component: Component,
  ...rest
}: any) => {
  useEffect(() => {
    loadUser()
  }, [loadUser])

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? null : hasToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={LOGIN_URL} />
        )
      }
    />
  )
}

AuthRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
  isLoading: state.user.isLoading
})

const mapDispatchToProps = {
  loadUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute)
