import React, { useState } from "react";
import { Alert, AlertTitle } from '@mui/material';
import { Link as RouterLink, useNavigate} from "react-router-dom";
import {
  FormControl,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Container
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import httpClient from "../../httpClient";
import { isDemoMode, DEMO_ACCOUNTS } from "../../demo";

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


export const loginUserRequest = async (email, password) => {
  return await httpClient.post("/login", {
    email,
    password,
  });
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const LoginUser = async (overrideEmail) => {
    try {
      const res = await loginUserRequest(
        typeof overrideEmail === "string" ? overrideEmail : email,
        password
      );
      if (res && res.data && res.data.value) {
        localStorage.setItem("user_role", res.data.value.user_role);
        localStorage.setItem("access_token", res.data.value.access_token);
      }
      setSuccess('successfully login');
      setTimeout(() => {
        setSuccess('');
      }, 4000);
      navigate('/');
    } catch (err) {
      setError('Wrong password or email credentials');
      setTimeout(() => {
        setError('');
      }, 4000);
    }
  };

  return (
    <Container>
     

      <FormControl>

        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >


          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    className="me-2 mt-lg-2"
                  />
                }
                label="Remember me"
              />

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="#"
                underline="hover"
              >
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => LoginUser()}
            >
              { success && <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  <strong>{ success } </strong>
</Alert> }
              Login
            </LoadingButton>
            {isDemoMode() && (
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => LoginUser(DEMO_ACCOUNTS.user)}
                >
                  Try Demo
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={() => LoginUser(DEMO_ACCOUNTS.admin)}
                >
                  Try Demo as Admin
                </Button>
              </Stack>
            )}
            { error && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  <strong>{ error } </strong>
</Alert> }
          </Box>
        </Box>

        </FormControl>
    </Container>
  );
};

export default LoginForm;