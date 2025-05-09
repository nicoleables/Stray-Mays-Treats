import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../images/MAY-LOGO.PNG'; // Import your logo image
import '../styles/Header.css';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State to handle menu opening and closing
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'var(--primary-color)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Logo and Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-40px' }}>
          <img src={logo} alt="Stray Mays Logo" style={{ height: '8rem', marginRight: '8px' }} />
          <Typography variant="h6" component="div" sx={{ color: 'var(--neutral-color)' }}>
            Stray Mays Treats
          </Typography>
        </div>

        {/* Right side: Navigation */}
        {isMobile ? (
          <>
            {/* Icon Button to Open Menu */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/" style={{ marginBottom: '8px' }}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/products" style={{ marginBottom: '8px' }}>Products</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact" style={{ marginBottom: '8px' }}>Contact</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/gallery" style={{ marginBottom: '8px' }}>Paw Prints Gallery</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/faq" style={{ marginBottom: '8px' }}>FAQ</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about" style={{ marginBottom: '8px' }}>Our Story</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/cart" style={{ marginBottom: '8px' }}>
                <ShoppingCartIcon sx={{ marginRight: '5px' }} />
                Cart
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Button color="inherit" component={Link} to="/" sx={{ color: 'var(--neutral-color)' }}>Home</Button>
            <Button color="inherit" component={Link} to="/products" sx={{ color: 'var(--neutral-color)' }}>Products</Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: 'var(--neutral-color)' }}>Contact</Button>
            <Button color="inherit" component={Link} to="/gallery" sx={{ color: 'var(--neutral-color)' }}>Paw Prints Gallery</Button>
            <Button color="inherit" component={Link} to="/faq" sx={{ color: 'var(--neutral-color)' }}>FAQ</Button>
            <Button color="inherit" component={Link} to="/about" sx={{ color: 'var(--neutral-color)' }}>Our Story</Button>
            <IconButton color="inherit" component={Link} to="/cart" sx={{ color: 'var(--neutral-color)' }}>
              <ShoppingCartIcon />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;










