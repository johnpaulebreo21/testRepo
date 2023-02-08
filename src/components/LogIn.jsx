import { React, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import LogInService from '../services/LogInService';
const LogIn = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUser = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        try {
            debugger
            LogInService.login(userName, password)
            window.location.reload();
        } catch (error) {
            console.log("nagerror boy")
            console.log(error);
        }
    }
    return (<div class="h-100 d-flex align-items-center justify-content-center">

        <Card style={{ width: '18rem' }}>
            <h1>LOG IN</h1>
            <Card.Body>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" onChange={(handleChangeUser)} value={userName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(handleChangePassword)} value={password} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>



    </div>)
}

export default LogIn;