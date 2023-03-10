import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  withStyles,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

const dayparts = ["morning", "noon", "evening", "nomatter"];

const styles = theme => {
  return {
    root: {
      padding: theme.spacing(3),
      height: "100%",
      maxWidth: 450,
      margin: " 0 auto"
    },
    icon: {
      height: 28,
      width: 28,
      fill: theme.palette.grey[500]
    }
  };
};
function SelectDateDaypart({ classes }) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDaypart, setDaypart] = useState("nomatter");
  const handleDaypartChange = e => setDaypart(e.target.value);

  return (
    <Grid
      container
      style={{justifyContent:"center"}}
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes.icon}
        >
        </svg>
      </Grid>
      <Grid item xs={10}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.picker} style={{marginBottom: '20px'}}>
            <DatePicker
              inputProps={{ id: "date" }}
              value={selectedDate}
              disablePast
              autoOk
              onChange={handleDateChange}
              name="date"
              fullWidth
              variant="filled"
            />
          </div>
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className={classes.icon}
        >
        </svg>
      </Grid>
      <Grid item xs={10}>
        <RadioGroup
          name="daypart"
          value={selectedDaypart}
          onChange={handleDaypartChange}
          row
        >
          {dayparts.map(part => (
            <FormControlLabel
              key={part}
              value={part}
              control={<Radio color="primary" className="p-4 m-0"/>}
              label={part}
              labelPlacement="bottom"
              checked={selectedDaypart === part}
            />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SelectDateDaypart);
