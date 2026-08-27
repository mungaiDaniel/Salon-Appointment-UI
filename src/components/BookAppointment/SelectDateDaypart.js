import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function SelectDateDaypart({ setDate, date }) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        fontSize: "0.8rem",
        padding: 3,
        height: "100%",
        maxWidth: 450,
        margin: "0 auto",
      }}
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
          Select Date
        </Typography>
        <Box sx={{ mb: 2, fontSize: "0.8rem" }}>
          <div className="form-input">
            <input
              className="form-input__text form-control"
              type="date"
              value={date || ""}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SelectDateDaypart;