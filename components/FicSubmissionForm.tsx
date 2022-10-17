import 'bootstrap/dist/css/bootstrap.min.css';
import { ChangeEventHandler, useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import axios from 'axios';

const FicSubmissionForm = () => {

    const [url, setUrl] = useState('');

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUrl(e.currentTarget.value);
    }

    const onSubmit = async () => {
       const response = await axios.post(
            '/api/url', 
            {
                url
            }
        );
       console.log(response.data);
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
            </Form>
    )

}

export default FicSubmissionForm;