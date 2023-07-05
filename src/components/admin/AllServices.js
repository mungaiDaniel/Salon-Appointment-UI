import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'



const AllServices = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("https://salon-appointment.onrender.com/api/v1/stylings")
        .then((response) =>{
            setServices(response.data)
            setIsLoading(false)
        } )
    }, [] )
    if (isLoading){
        return <h2>Loading....</h2>
    }

  return (
    <div className="container m-5 align-items-center justify-content-between">
        <h2 className='text-primary'>Services offered</h2>
        <br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Style</td>
                    <td>Description</td>
                    <td>Duration</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
            {
                services.map((item, key) => {
                    
                    return <tr>
                            <td>{item.id}</td>
                            <td>{item.style}</td>
                            <td>{item.description}</td>
                            <td>{item.duration}</td>
                            <td>{item.cost}</td>
                        </tr>
                   
                })
            }
            </tbody>
        </Table>
    </div>
  )
}

export default AllServices