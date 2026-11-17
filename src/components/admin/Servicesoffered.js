import React, { useState } from 'react';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Stack, Typography, Alert, AlertTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { motion } from "framer-motion";
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import { LoadingButton } from "@mui/lab";
import httpClient from '../../httpClient';
import AllServices from './AllServices';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important',
  },
});

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

const Servicesoffered = () => {
  const [style, setStyle] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const AddService = async () => {
    try {
      const token = localStorage.getItem("access_token");
      await httpClient.post(
        "/stylings",
        {
          style,
          cost,
          duration,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess('Service added successfully');
      setTimeout(() => {
        setSuccess('');
      }, 4000);
    } catch (err) {
      setError('Failed to add service. Admin privileges required.');
      setTimeout(() => {
        setError('');
      }, 4000);
    }
  };

  return (
    <div className="app container">
      <Typography gutterBottom variant="h5" className="py-4 text-primary">
        Add new services to our application
      </Typography>
      <Stack spacing={3}>
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={animate}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Typography sx={{ minWidth: 80, alignSelf: "center" }}>Styles</Typography>
          <ValidationTextField
            variant="standard"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          />
        </Stack>

        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={animate}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Typography sx={{ minWidth: 80, alignSelf: "center" }}>Prices</Typography>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
            <Input
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              endAdornment={<InputAdornment position="end">ksh</InputAdornment>}
            />
            <FormHelperText id="filled-weight-helper-text">cost </FormHelperText>
          </FormControl>
        </Stack>

        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={animate}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Typography sx={{ minWidth: 80, alignSelf: "center" }}>Time</Typography>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
            <Input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              endAdornment={<InputAdornment position="end">hour</InputAdornment>}
            />
            <FormHelperText id="filled-weight-helper-text"> duration </FormHelperText>
          </FormControl>
        </Stack>

        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={animate}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Typography sx={{ minWidth: 80, alignSelf: "center" }}>Detail</Typography>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={5}
            variant="standard"
            fullWidth
          />
        </Stack>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={animate}
          style={{ marginBottom: "20px" }}
        >
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={AddService}
          >
            Add Service
          </LoadingButton>
        </Box>
        {success && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>{success}</strong>
          </Alert>
        )}
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>{error}</strong>
          </Alert>
        )}
      </Stack>

      <AllServices />
    </div>
  );
};

export default Servicesoffered;
