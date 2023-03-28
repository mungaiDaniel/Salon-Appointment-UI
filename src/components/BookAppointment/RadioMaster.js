import React, { useState, useEffect } from "react";
import {
  withStyles,
  Grid,
  ButtonBase,
  FormControlLabel,
  Radio,
  Tooltip
} from "@material-ui/core";
import classNames from "classnames";
import axios from "axios";


const style = theme => {
  return {
    root: {},
    mainClass: {
      height: 106,
      width: 106,
      borderRadius: "50%",
      boxShadow: theme.shadows[5],
      margin: 8,
      color: theme.palette.primary.light,
      border: `3px solid ${theme.palette.common.white}`,
      filter: "grayscale(1)",
      transition: theme.transitions.create(),
      "&:active": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.primary.main}`
      },
      "&:hover": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.secondary.main}`
      }
    },
    mainLblClass: {
      color: theme.palette.grey[700],
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16
    },
    //class for checked item
    checked: {
      filter: "grayscale(0)",
      border: `3px solid ${theme.palette.primary.main}`
    },
    LblChecked: { color: theme.palette.primary.main },
    itemInner: {
      height: 66,
      width: 66,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      boxShadow: theme.shadows[9]
    },
    input: {
      height: 106,
      width: 106,
      position: "absolute",
      top: -6,
      left: -6,
      opacity: 0
    }
  };
};

const RadioMasters = ({ classes , setEmployee_id }) => {

  const [users, setUsers] = useState([])
  const getInitialState = () => {
    return users.reduce((obj, item) => {
    obj[item.id] = false;
    return obj;
  }, {});
};
  const [checked, setChecked] = useState(getInitialState());
  const handleChecked = id => e => {
    setChecked({ ...checked, [id]: e.target.checked});
    setEmployee_id(e.target.value)
  };

  const textSelected = Object.keys(checked)
    .filter(key => checked[key])
    .join(", ");
  const itemOuterClass = i =>
    classNames({
      [classes.mainClass]: true,
      [classes.checked]: checked === i
    });
  const labelClass = i =>
    classNames({
      [classes.mainLblClass]: true,
      [classes.LblChecked]: checked === i
    });

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/employees")
    .then((response)=>{
      setUsers(response.data)
    })
  }, [])

  return (
    <Grid
      container
      style={{justifyContent:"center", height: "100%"}}
      alignItems="center"
    >
      {users.map((user, i) => (
        <Grid
          item
          xs={6}
          sm={3}
          key={user.id}
          container
          style={{justifyContent:"center"}}
          alignItems="center"
          direction="column"
        >
          <ButtonBase className={itemOuterClass(i)}>
            
              <input
                type="radio"
                name="master"
                id={user.id}
                value={user.id}
                checked={checked}
                onChange={handleChecked(user.id)}
                className={classes.input}
              />
          
            <div
              className={classes.itemInner}
              // style={{ backgroundImage: `url(${master.url})` }}
            />
          </ButtonBase>
          <label htmlFor={user.id} className={labelClass(i)}>
            {user.firstName}
          </label>
        </Grid>
      ))}
      <Grid item xs={8}>
        <FormControlLabel
          name="master"
          id="none"
          value={checked === -1 ? "none" : ""}
          checked={checked === -1}
          onChange={handleChecked(-1)}
          control={<Radio color="primary" className="mt-4"  />}
          label="I have no preferences"
          labelPlacement="start"

        />
      </Grid>
      <input
        type="text"
        name="selected master"
        value={textSelected}
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};
export default withStyles(style)(RadioMasters);
