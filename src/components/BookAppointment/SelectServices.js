import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, FormControlLabel, Grid, Switch } from "@material-ui/core";
import axios from "axios";

// const services = [
//   {
//     name: "hair care and washing"
//   },
//   { name: "haircut" },
//   { name: "coloring"},
//   { name: "waving"},
//   {
//     name: "straightening",

//   }
// ];
// const getInitialState = () => {
//   return services.reduce((obj, item) => {
//     obj[item.name] = false;
//     return obj;
//   }, {});
// };
const style = theme => ({
  root: {
    padding: 8,
    height: "100%",
    alignItems: "center",
    maxWidth: 400,
    margin: " 0 auto"
  },
  row: { borderBottom: `1px solid ${theme.palette.grey[100]}` },
  icon: {
    fill: theme.palette.grey[700],
    width: 28,
    height: 28
  }
});
const SelectService = ({ classes, setService_id }) => {

  const [services, setServices] = useState([])
  const getInitialState = () => {
      return services.reduce((obj, item) => {
      obj[item.id] = false;
      return obj;
    }, {});
};
  const [serviceSelected, setServiceSelected] = useState(getInitialState());
  const handleChange = id => e => {
    setServiceSelected({ ...serviceSelected, [id]: e.target.checked });
    setService_id(e.target.value)
  }
   

  const textSelected = Object.keys(serviceSelected)
    .filter(key => serviceSelected[key])
    .join(", ");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/stylings")
    .then((response) => {
      setServices(response.data)
    })
  })

  return (
    <Grid
      container
      className={classes.root}
      style={{justifyContent:"center"}}
      alignItems="center"
      spacing={0}
    >
      {services.map((service, i) => (
        <Grid
          item
          key={service.id}
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.row}
        >
          <svg
            className={classes.icon}
            xmlns="http://www.w3.org/2000/svg"
          >
            {service.iconPath}
          </svg>
          <FormControlLabel
            control={
              <Switch
                onChange={handleChange(service.id)}
                value={service.id}
                color="primary"
              />
            }
            label={service.style}
            checked={serviceSelected[service.id]}
            labelPlacement="start"
          />
        </Grid>
      ))}
      <input
        type="text"
        value={textSelected}
        name="selected services"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};

SelectService.propTypes = {
  classes: PropTypes.object
};
export default withStyles(style)(SelectService);