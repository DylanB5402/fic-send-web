import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import FicSubmissionForm from '../components/FicSubmissionForm'
import { Container, Navbar, NavbarBrand } from 'reactstrap'

const Home: NextPage = () => {
  return (
    <>

      <Container>
        <h1> Input any URL from a site accepted by <a href='https://fichub.net/'>fichub</a></h1>
        <FicSubmissionForm />
      </Container>
    </>
  )
}

export default Home
