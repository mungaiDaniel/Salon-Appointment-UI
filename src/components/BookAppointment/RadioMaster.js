import React, { useState, useEffect } from "react";
import {
  Grid,
  ButtonBase,
  Box
} from "@mui/material";
import Face from "@mui/icons-material/Face";
import httpClient from "../../httpClient";

const RadioMasters = ({ setEmployee_id, setEmployee }) => {
  const [users, setUsers] = useState([]);
  const [checkedId, setCheckedId] = useState(null);

  const handleChecked = (user) => () => {
    setCheckedId(user.id);
    if (setEmployee_id) {
      setEmployee_id(user.id);
    }
    if (setEmployee) {
      setEmployee(user);
    }
  };

  useEffect(() => {
    httpClient.get("/employees")
      .then((response) => {
        setUsers(response.data || []);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
      });
  }, []);

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        height: "100%",
        width: "100%",
        gap: "1rem",
        fontSize: "0.8rem",
        py: 2
      }}
      alignItems="center"
    >
      {users.map((user) => {
        const isChecked = checkedId === user.id;
        return (
          <Grid
            item
            xs={6}
            sm={3}
            key={user.id}
            container
            sx={{ justifyContent: "center" }}
            alignItems="center"
            direction="column"
          >
            <ButtonBase
              onClick={handleChecked(user)}
              sx={{
                height: 106,
                width: 106,
                borderRadius: "50%",
                boxShadow: 5,
                margin: 1,
                color: isChecked ? "primary.main" : "grey.600",
                border: isChecked ? "3px solid" : "3px solid #fff",
                borderColor: isChecked ? "primary.main" : "common.white",
                filter: isChecked ? "grayscale(0)" : "grayscale(1)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  filter: "grayscale(0)",
                  borderColor: "secondary.main"
                }
              }}
            >
              <Face sx={{ fontSize: 40 }} />
            </ButtonBase>
            <Box
              component="label"
              sx={{
                color: isChecked ? "primary.main" : "grey.700",
                textTransform: "uppercase",
                letterSpacing: 1,
                mt: 1,
                fontWeight: isChecked ? "bold" : "normal",
                cursor: "pointer"
              }}
              onClick={handleChecked(user)}
            >
              {user.firstName}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RadioMasters;
