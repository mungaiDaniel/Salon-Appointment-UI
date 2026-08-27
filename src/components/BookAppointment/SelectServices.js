import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Grid, Switch } from "@mui/material";
import httpClient from "../../httpClient";

const SelectService = ({ setService_id, setService }) => {
  const [services, setServices] = useState([]);
  const [serviceSelected, setServiceSelected] = useState({});

  const handleChange = (service) => (e) => {
    setServiceSelected({ [service.id]: e.target.checked });
    if (setService_id) {
      setService_id(service.id);
    }
    if (setService) {
      setService(service);
    }
  };

  useEffect(() => {
    httpClient.get("/stylings")
      .then((response) => {
        setServices(response.data || []);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
      });
  }, []);

  return (
    <Grid
      container
      sx={{
        padding: 1,
        height: "100%",
        alignItems: "center",
        maxWidth: 400,
        margin: "0 auto",
        justifyContent: "center",
        fontSize: "0.8rem",
      }}
      spacing={0}
    >
      {services.map((service) => (
        <Grid
          item
          key={service.id}
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderBottom: "1px solid", borderColor: "grey.200", py: 1 }}
        >
          <svg
            style={{
              fill: "currentColor",
              width: 28,
              height: 28,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {service.iconPath}
          </svg>
          <FormControlLabel
            control={
              <Switch
                onChange={handleChange(service)}
                value={service.id}
                color="primary"
                checked={Boolean(serviceSelected[service.id])}
              />
            }
            label={service.style}
            labelPlacement="start"
          />
        </Grid>
      ))}
    </Grid>
  );
};

SelectService.propTypes = {
  setService_id: PropTypes.func,
  setService: PropTypes.func,
};

export default SelectService;