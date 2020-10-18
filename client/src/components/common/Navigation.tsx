import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  BUILDINGS_URL,
  ROOMS_URL,
  USERS_URL,
  SETTINGS_URL,
  SEARCH_URL,
  HOME_URL,
  LOGIN_URL
} from '../routes'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const Navigation = (props: any) => {
  const {
    isAuthenticated,
    isAdmin
  }: { isAuthenticated: boolean; isAdmin: boolean } = props

  const [collapsed, setCollapsed]: [boolean, Function] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <>
      {isAuthenticated ? (
        <Navbar expand='md' dark>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink to={HOME_URL} tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={SEARCH_URL} tag={RRNavLink}>
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={SETTINGS_URL} tag={RRNavLink}>
                  Settings
                </NavLink>
              </NavItem>
              {isAdmin ? (
                <>
                  <NavItem>
                    <NavLink to={BUILDINGS_URL} tag={RRNavLink}>
                      Manage Buildings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={ROOMS_URL} tag={RRNavLink}>
                      Manage Rooms
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={USERS_URL} tag={RRNavLink}>
                      Manage Users
                    </NavLink>
                  </NavItem>
                </>
              ) : null}
            </Nav>
            <Nav className='ml-auto'>
              <NavItem>
                <NavLink to='#'>Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      ) : (
        <Navbar expand='md' dark>
          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink to={LOGIN_URL} tag={RRNavLink}>
                  Home
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.user.isAuthenticated,
  isAdmin: state.user.user?.admin
})

export default connect(mapStateToProps)(Navigation)
