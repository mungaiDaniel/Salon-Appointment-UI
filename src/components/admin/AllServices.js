import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import httpClient from '../../httpClient';

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    httpClient
      .get("/stylings")
      .then((response) => {
        setServices(response.data || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="container m-5 align-items-center justify-content-between">
      <h2 className="text-primary">Services offered</h2>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Style</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.style}</td>
                <td>{item.description}</td>
                <td>{item.duration}</td>
                <td>{item.cost}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllServices;