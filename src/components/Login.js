import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {
  return (

<div className='container'>
            <br/>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}} className="p-lg-0 pt-lg-5">
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
            <br/>
            <Button onClick={() => props.onFormSwitch('register')} className='bg-secondary text-light border-0'>Don't have an account? Register here</Button>
</div>
  
  )
}

export default Login
