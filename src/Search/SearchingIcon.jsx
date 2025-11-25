import React, { useEffect } from 'react';
import SearchingIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SearchIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    navigate('/products/search');
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = [
    // --- MEN CLOTHING ---
    { title: 'Men Jackets' },
    { title: 'Men Bomber Jackets' },
    { title: 'Men Denim Jackets' },
    { title: 'Men Leather Jackets' },
    { title: 'Men Hoodies' },
    { title: 'Men Sweatshirts' },
    { title: 'Men Sweaters' },
    { title: 'Men Blazers' },
    { title: 'Men Suits' },
    { title: 'Men Shirts' },
    { title: 'Men Casual Shirts' },
    { title: 'Men Formal Shirts' },
    { title: 'Men Polo T-Shirts' },
    { title: 'Men Graphic T-Shirts' },
    { title: 'Men Plain T-Shirts' },
    { title: 'Men Kurta' },
    { title: 'Men Ethnic Wear' },
    { title: 'Men Jeans' },
    { title: 'Men Slim Fit Jeans' },
    { title: 'Men Regular Fit Jeans' },
    { title: 'Men Trousers' },
    { title: 'Men Chinos' },
    { title: 'Men Joggers' },
    { title: 'Men Shorts' },
    { title: 'Men Track Pants' },

    // --- WOMEN CLOTHING ---
    { title: 'Women Dresses' },
    { title: 'Women Maxi Dresses' },
    { title: 'Women Bodycon Dresses' },
    { title: 'Women Tops' },
    { title: 'Women Crop Tops' },
    { title: 'Women Tunics' },
    { title: 'Women Kurtis' },
    { title: 'Women Anarkali Kurtis' },
    { title: 'Women Sarees' },
    { title: 'Women Silk Sarees' },
    { title: 'Women Party Wear Sarees' },
    { title: 'Women Ethnic Wear' },
    { title: 'Women Lehenga Choli' },
    { title: 'Women Skirts' },
    { title: 'Women Jeans' },
    { title: 'Women Jeggings' },
    { title: 'Women Palazzo Pants' },
    { title: 'Women Jumpsuits' },
    { title: 'Women Shrugs' },
    { title: 'Women Cardigans' },
    { title: 'Women Winter Jackets' },

    // --- SNEAKERS & FOOTWEAR ---
    { title: 'Sneakers' },
    { title: 'High-Top Sneakers' },
    { title: 'Chunky Sneakers' },
    { title: 'Minimal Sneakers' },
    { title: 'Running Shoes' },
    { title: 'Training Shoes' },
    { title: 'Casual Shoes' },
    { title: 'Canvas Shoes' },
    { title: 'Slip-On Shoes' },
    { title: 'Sports Shoes' },
    { title: 'Walking Shoes' },

    // --- ACCESSORIES (OPTIONAL BUT USEFUL) ---
    { title: 'Men Belts' },
    { title: 'Women Handbags' },
    { title: 'Men Caps' },
    { title: 'Women Scarves' },
    { title: 'Socks' },
    { title: 'Watches' },
    { title: 'Sunglasses' },
    { title: 'Backpacks' },
  ];

  return (
    <>
      <SearchingIcon
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="mr-4 hover:scale-90"
      />
      <Menu
        className="transition"
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack spacing={3} className="w-screen scale-90 justify-self-center">
          <Autocomplete
            options={categories}
            getOptionLabel={(option) => option.title}
            renderValue={(value, getItemProps) => (
              <Chip label={value.title} {...getItemProps()} />
            )}
            renderInput={(params) => <TextField {...params} label=" " />}
          />
        </Stack>
      </Menu>
    </>
  );
}

export default SearchIcon;
