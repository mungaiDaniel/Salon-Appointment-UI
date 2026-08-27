import React from 'react';
import { Grid, ButtonBase, Box } from '@mui/material';

const AdminHeader = ({ activeStep, handleChange, tabs }) => {
  const tabWidth = 100 / tabs.length;
  const indicatorLeft = activeStep * tabWidth;
  const indicatorStyle = {
    width: `${tabWidth}%`,
    left: `${indicatorLeft}%`,
  };

  return (
    <Grid
      container
      sx={{
        overflow: 'visible',
        backgroundColor: 'common.white',
        boxShadow: 1,
        borderRadius: 1,
        position: 'relative',
        padding: 0,
        textTransform: 'uppercase',
        height: 32,
        width: 'calc(100% + 16px)',
        margin: '24px -8px',
        '@media (max-width: 600px)': {
          height: 28,
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Grid item key={index} style={{ width: `${tabWidth}%` }}>
          <ButtonBase
            sx={{
              overflow: 'visible',
              width: '100%',
              padding: '8px',
              color: 'primary.main',
              opacity: 0.5,
              textTransform: 'uppercase',
              fontSize: 12,
              '@media (max-width: 600px)': {
                fontSize: 10,
              },
            }}
            onClick={handleChange(index)}
          >
            {tab}
          </ButtonBase>
        </Grid>
      ))}

      <Box
        style={indicatorStyle}
        sx={{
          height: 32,
          position: 'absolute',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 10,
          borderRadius: 1,
          backgroundColor: 'primary.main',
          opacity: 1,
          color: 'primary.contrastText',
          fontSize: 12,
          transform: 'scale(1.1)',
          transition: 'all 0.3s ease',
          '@media (max-width: 600px)': {
            fontSize: 10,
          },
        }}
      >
        {tabs[activeStep]}
      </Box>
    </Grid>
  );
};

export default AdminHeader;
