import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Alert, AlertTitle } from '@mui/material';


const Users = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [superAdmin, setSuperAdmin] = useState([])
    const [success, setSuccess] = useState('')

    useEffect(() => {
        axios.get("https://salon-appointment.onrender.com/api/v1/users")
        .then((response) =>{
            setServices(response.data)
            setIsLoading(false)
        } )
    }, [] )

    if (isLoading){
        return <h2>Loading....</h2>
    }

    const MakesuperAdmin = (e) =>{
        axios.put("https://salon-appointment.onrender.com/api/v1/" + e.target.value)
        .then((res) =>{
            setSuperAdmin(res.data)
            setSuccess('Successfully Updated')
            setTimeout(() => {
                setSuccess('')
              }, 5000);
        })
    }

  return (
    <div className=" p-5 p-lg-0 pt-lg-5 text-center text-sm-start " style={{
        overflow: "auto",
        whiteSpace: "nowrap",
        fontSize:'0.8rem'
    }} >
        {success && <Alert severity="success">
  <AlertTitle>success</AlertTitle>
   { success } — <strong>Thank you</strong>
 </Alert>}
        
        <h2 className='text-primary mt-3'>Registered Users</h2>
        <br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Promote User</th>

                </tr>
            </thead>
            <tbody>
            {
                services.map(item => {
                    
                    return <tr>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.location}</td>
                            <td>{item.user_role}</td>
                            <td>
                            <Form.Select style={{fontSize:'0.8rem'}} className='form-control col-md-3' onChange={MakesuperAdmin}>
                                <option value="0">--select user role--</option>
                                <option key={item.id} value={item.id} >super_admin</option>
                                 <option key={item.id} value={item.id} >admin</option>
                            </Form.Select>
                            </td>
                        </tr>
                   
                })
            }
            </tbody>
        </Table>
    </div>
  )
}

export default Users
