import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import NavigationButtons from './NavigationButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import SearchingIcon from '../Search/SearchingIcon';
import Categories from '../Products/Categories';
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
          <Toolbar className="flex justify-between">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <div
              className=" hover:scale-95 transform cursor-pointer text-lg"
              onClick={() => navigate('/products/men')}
            >
              The Roy Store
            </div>
            <Box color="inherit">
              <SearchingIcon />
              <ShoppingCartIcon
                onClick={() => navigate('/cart')}
                className="hover:scale-90"
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className="w-sm md:w-md lg:w-lg">
          <div className="flex justify-end"></div>
          <Box
            elevation={10}
            sx={{
              my: 2,
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 'bold',
            }}
            className="flex justify-between"
          >
            <div></div>
            <div>The Roy Store</div>
            <CloseIcon
              className="mr-4 mt-1 cursor-pointer"
              onClick={() => setDrawerOpen(false)}
            />
          </Box>
          <NavigationButtons />
          <Categories />
          <Menu />
        </Box>
      </Drawer>
    </>
  );
}

export default Navigation;
