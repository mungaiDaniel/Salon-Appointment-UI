import React, { useState } from "react";
import { withStyles, TextField, Grid } from "@material-ui/core";
const style = theme => {
  return {
    root: {
      padding: theme.spacing(3),
      height: "100%",
      maxWidth: 450,
      margin: "0 auto"
    },
    icon: {
      fill: theme.palette.grey[500]
    }
  };
};

const Contacts = ({ classes }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleNameChange = e => setName(e.target.value);
  const handlePhoneChange = e => setPhone(e.target.value);

  return (
    <Grid
      container
      style={{justifyContent:"center"}}
      alignItems="center"
      className={classes.root}
    >
      <Grid container direction="row" alignItems="center" alignContent="center">
        <Grid item xs={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={classes.icon}
            width="30px"
            height="30px"
          >
          </svg>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="name"
            value={name}
            fullWidth
            margin="normal"
            label="Enter your name"
            variant="filled"
            onChange={handleNameChange}
          />
        </Grid>
      </Grid>{" "}
      <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 463.009 463.009"
            className={classes.icon}
            width="24px"
            height="24px"
          >
          </svg>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="phone"
            value={phone}
            fullWidth
            margin="normal"
            label="Enter your phone number "
            variant="filled"
            onChange={handlePhoneChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(Contacts);
