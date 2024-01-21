import 'bootstrap/dist/css/bootstrap.min.css'
import { ChangeEventHandler, useState } from 'react'
import { Button, Form, Input } from 'reactstrap'
import axios from 'axios'

const FicSubmissionForm = () => {
  const [url, setUrl] = useState('')
  const [successState, setSuccessState] = useState('')
  const [fic, setFic] = useState('')

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUrl(e.currentTarget.value)
  }

  const onSubmit = async () => {
    const response = await axios.post(
      '/api/url',
      {
        url
      }
    )
    console.log(response.data)
    if (response.data.urlAccepted) {
      setSuccessState('Successful!')
      setFic(response.data.url)
    } else {
      setSuccessState('Failure, please try again')
      setFic('')
    }
  }

  const sendFicStatus = () => {
    if (fic) {
      return (
        <p>
          Sending fic: <a href={fic}>{fic}</a>
        </p>
      )
    }
  }

  return (
    <Form>
      <Input
        placeholder='Fic URL'
        onChange={onInputChange}
      />
      <Button
        onClick={onSubmit}
      >
        Submit
      </Button>
      <p>
        {successState}
      </p>
      {sendFicStatus()}
    </Form>
  )
}

export default FicSubmissionForm
