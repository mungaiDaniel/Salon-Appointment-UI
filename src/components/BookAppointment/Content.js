import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import BookHeader from "./BookHeader";
import RadioMaster from "./RadioMaster";
import SelectServices from "./SelectServices";
import SelectDateDaypart from "./SelectDateDaypart";
import Contacts from "./Contacts";
import httpClient from "../../httpClient";

export const bookAppointmentRequest = async (bookingData, token) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return await httpClient.post("/booking", bookingData, { headers });
};

const Content = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nandleNext = () => setActiveStep((prev) => prev + 1);
  const nandlePrev = () => setActiveStep((prev) => prev - 1);
  const tabs = ["Master", "Service", "Date", "Contact"];
  const [employee_id, setEmployee_id] = useState("");
  const [employee, setEmployee] = useState("");
  const [service_id, setService_id] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState({ success: "", error: "" });

  const BookAppointment = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    try {
      const token = localStorage.getItem("access_token");
      const resp = await bookAppointmentRequest(
        {
          employee_id,
          service_id,
          date,
        },
        token
      );
      setStatus({ success: "Appointment booked successfully!", error: "" });
      return resp;
    } catch (err) {
      setStatus({ success: "", error: "Failed to book appointment. Please try again." });
      console.error(err);
    }
  };

  const handleChange = (index) => () => {
    setActiveStep(index);
  };

  return (
    <Paper elevation={1} className="lead p-5 w-100 w-sm-50 w-md-50 vw-lg-100">
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        style={{ padding: "0 8px" }}
      >
        Your Appointment Information
      </Typography>
      <Typography gutterBottom>
        This information will let us know about your bookings.
      </Typography>

      {status.success && (
        <Alert severity="success" sx={{ my: 2 }}>
          <AlertTitle>Success</AlertTitle>
          {status.success}
        </Alert>
      )}
      {status.error && (
        <Alert severity="error" sx={{ my: 2 }}>
          <AlertTitle>Error</AlertTitle>
          {status.error}
        </Alert>
      )}

      <BookHeader
        tabs={tabs}
        activeStep={activeStep}
        handleChange={handleChange}
      />

      <form onSubmit={BookAppointment}>
        <SwipeableViews index={activeStep} onChangeIndex={(index) => setActiveStep(index)}>
          <RadioMaster setEmployee_id={setEmployee_id} setEmployee={setEmployee} />
          <SelectServices setService_id={setService_id} setService={setService} />
          <SelectDateDaypart date={date} setDate={setDate} />
          <Contacts
            employee_id={employee_id}
            service_id={service_id}
            date={date}
            employee={employee}
            service={service}
          />
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
                onClick={BookAppointment}
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

export default Content;