import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'var(--neutral-color)' }}>
          Stray Mays Treats
        </Typography>
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
              <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/products">Products</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/gallery">Paw Prints Gallery</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/faq">FAQ</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/about">Our Story</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/cart">
                <ShoppingCartIcon sx={{ marginRight: '5px' }} />
                Cart
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div>
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






