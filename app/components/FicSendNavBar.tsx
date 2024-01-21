import { Navbar, NavbarBrand } from 'reactstrap'

const FicSendNavBar = () => {
  return (
    <>
      <Navbar
        className='my-2'
        color='secondary'
        dark
      >
        <NavbarBrand>
          Send a Fic to your Kindle!
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default FicSendNavBar
