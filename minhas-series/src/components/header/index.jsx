import React, {useState} from 'react'
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap'
import {Link} from 'react-router-dom'

export const Header = () => {
    const [open, setOpen] = useState(false)
    return(
      <Navbar color='light' light expand='md'>
        <div className='container'>
          <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
            <NavbarToggler onClick={() => {setOpen(!open)}} />
            <Collapse isOpen={open} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink tag={Link} to='/generos'>Gêneros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/series'>Séries</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
          
      </Navbar>
    )
}