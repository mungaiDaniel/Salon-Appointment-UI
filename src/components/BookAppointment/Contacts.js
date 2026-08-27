import React from "react";
import { Grid } from "@mui/material";

const Contacts = ({ employee, service, date }) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        padding: 3,
        height: "100%",
        maxWidth: 450,
        margin: "0 auto",
      }}
      alignItems="center"
    >
      <ul className="list-group w-100">
        <li className="list-group-item list-group-item-primary d-flex align-items-center">
          <h5 className="me-3 mb-0">Assistance:</h5>
          <span>{employee && employee.firstName ? employee.firstName : "Not selected"}</span>
        </li>
        <li className="list-group-item list-group-item-primary d-flex align-items-center">
          <h5 className="me-3 mb-0">Service:</h5>
          <span>{service && service.style ? service.style : "Not selected"}</span>
        </li>
        <li className="list-group-item list-group-item-primary d-flex align-items-center">
          <h5 className="me-3 mb-0">Date:</h5>
          <span>{date || "Not selected"}</span>
        </li>
      </ul>
    </Grid>
  );
};

export default Contacts;
