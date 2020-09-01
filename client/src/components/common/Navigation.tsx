import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  BUILDINGS_URL,
  ROOMS_URL,
  USERS_URL,
  SETTINGS_URL,
  SEARCH_URL,
  HOME_URL
} from '../routes'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Navigation = (props: any) => {
  const { isAuthenticated, isAdmin } = props

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
                <NavLink href={HOME_URL}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={SEARCH_URL}>Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={SETTINGS_URL}>Settings</NavLink>
              </NavItem>
              {isAdmin ? (
                <>
                  <NavItem>
                    <NavLink href={BUILDINGS_URL}>Manage Buildings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={ROOMS_URL}>Manage Rooms</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={USERS_URL}>Manage Users</NavLink>
                  </NavItem>
                </>
              ) : null}
            </Nav>
            <Nav className='ml-auto'>
              <NavItem>
                <NavLink>Sign Out</NavLink>
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
                <NavLink href={HOME_URL}>Home</NavLink>
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
