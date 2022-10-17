import 'bootstrap/dist/css/bootstrap.min.css';
import { ChangeEventHandler, useState } from 'react';
import { Button, Container, Form, Input } from 'reactstrap';

const FicSubmissionForm = () => {

    const [url, setUrl] = useState('');

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUrl(e.currentTarget.value);
    }

    const onSubmit = async () => {
        
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