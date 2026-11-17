import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Paper,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import BookHeader from "../BookAppointment/BookHeader";
import NewBookings from "./NewBookings";
import Pendings from "./Pendings";
import Accepted from "./Accepted";
import Postponed from "./Postponed";
import './paper.scss';

const Bookings = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleChange = (index) => () => setActiveStep(index);
  const nandleNext = () => setActiveStep((prev) => prev + 1);
  const nandlePrev = () => setActiveStep((prev) => prev - 1);
  const tabs = ["New Bookings", "Pendings", "accepted", "postponed"];

  return (
    <Paper elevation={1} className="container horizontal-scrollable" id="paper" sx={{ p: 4, my: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        style={{ padding: "0 8px" }}
      >
        Your Appointment Details
      </Typography>
      <Typography gutterBottom>
        This information will let us know about your preferences.
      </Typography>
      <BookHeader
        tabs={tabs}
        activeStep={activeStep}
        handleChange={handleChange}
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <SwipeableViews index={activeStep} onChangeIndex={(index) => setActiveStep(index)}>
          <NewBookings />
          <Pendings />
          <Accepted />
          <Postponed />
        </SwipeableViews>
        <Grid
          container
          justifyContent="space-between"
          style={{ padding: "16px 16px" }}
        >
          <Grid item>
            <Button
              disabled={activeStep === 0}
              onClick={nandlePrev}
              variant="contained"
              color="inherit"
              sx={{ width: 110, fontSize: 12 }}
            >
              Back
            </Button>
          </Grid>
          {activeStep < tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={nandleNext}
                sx={{ width: 110, fontSize: 12 }}
              >
                Next
              </Button>
            </Grid>
          )}
          {activeStep === tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                sx={{ width: 110, fontSize: 12 }}
              >
                Submit
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};

export default Bookings;
