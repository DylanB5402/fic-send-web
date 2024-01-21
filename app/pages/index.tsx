import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import FicSubmissionForm from '../components/FicSubmissionForm'
import { Container } from 'reactstrap'
import FicSendNavBar from '../components/FicSendNavBar'

const Home: NextPage = () => {
  return (
    <>
      <FicSendNavBar />
      <Container>
        <h1> Input any URL from a site accepted by <a href='https://fichub.net/'>fichub</a></h1>
        <FicSubmissionForm />
      </Container>
    </>
  )
}

export default Home
