import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap'

const FicSendNavBar = () => {
  return (
    <>
      <Navbar
        className='my-2'
        color='light'
        light
      >
        <Nav className='container-fluid'>
          <NavbarBrand>
            Fic-Send-Web
          </NavbarBrand>
          <NavLink href='/archive'>Archive</NavLink>
          <NavLink href='/'>Send</NavLink>
        </Nav>

      </Navbar>
    </>
  )
}

export default FicSendNavBar
