import React from 'react';
import { Container } from 'react-bootstrap';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('user_role');
    navigate('/login');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className="navbar navbar-expand-lg bg-warning navbar-dark py-0 mb-1">
        <Container>
          <Typography component="div">
            <Link to="/" className="navbar-brand text-dark">
              Salon Gerente
            </Link>
          </Typography>
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="menu"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
              className="navbar-toggler"
              style={{
                color: 'black',
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography component="div">
              <div className="collapse navbar-collapse mx-5" id="navmenu">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="#about" className="nav-link text-dark">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link text-dark">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#stylist" className="nav-link text-dark">
                      Stylist
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#location" className="nav-link text-dark">
                      Location
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#more" onClick={handleClick} className="nav-link text-dark">
                      View More
                    </a>
                  </li>
                </ul>
              </div>
            </Typography>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              autoFocus
              className="m-2"
            >
              {window.localStorage.getItem('access_token') ? (
                <MenuItem onClick={logout}>Logout</MenuItem>
              ) : (
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
              )}

              {window.localStorage.getItem('access_token') ? (
                <Link to="/testimony" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={handleClose}>Testimonies</MenuItem>
                </Link>
              ) : (
                <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              )}

              {window.localStorage.getItem('user_role') && (
                <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem onClick={handleClose}>Admin</MenuItem>
                </Link>
              )}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
