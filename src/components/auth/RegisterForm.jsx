import { useState } from "react";
import httpClient from "../../httpClient";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";


let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const RegisterUser = async  () => {
    console.log(lastName, firstName, email, password, location, phoneNumber);

    const resp = await httpClient.post("http://127.0.0.1:5000/users", {
      firstName,
      lastName,
      email,
      password,
      location,
      phoneNumber,
    }).then((response) => {
      if (response.data){
        window.alert(`${response.data.firstName} is Registered successfully`)
        return  window.location.assign("http://127.0.0.1:3000/login"); 
      } else{
        const err = new Error(`failed to fetch posts: ${response.status}: email ${email} already exist`)
        window.alert(err);
      }
    })
  };

  return (
      <>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              label="First name"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              fullWidth
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Stack>

        
            <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
            >
            

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <Icon
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            </Stack>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >

            <TextField
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e)=> setPhoneNumber(e.target.value)}
            />
            <TextField
              fullWidth
              label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            
          </Stack>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => RegisterUser()}
            >
              Sign up
            </LoadingButton>
          </Box>
        </Stack>
      </>

  );
};

export default RegisterForm;
