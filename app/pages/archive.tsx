import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import FicSubmissionForm from '../components/FicSubmissionForm'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import FicSendNavBar from '../components/FicSendNavBar'

const Home: NextPage = () => {
  return (
    <>
      <FicSendNavBar />
      <Container>
        <h1> Fic Archive </h1>

      </Container>
    </>
  )
}

export default Home
