import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  return (
    <div>
            <br/>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}} className="p-lg-0 pt-lg-5">
            <Form.Group>
                    <Form.Label style={{marginLeft:"0%"}}>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="youremail@example.com" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Button className='bg-primary pt-2 m-2' type="submit">Submit</Button>
            </Form>
    </div>
  )
}

export default Register
