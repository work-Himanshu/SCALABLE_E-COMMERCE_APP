import React from 'react';
import SearchingIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setSearch } from '../ReduxStore/searchSlice';
import { useNavigate } from 'react-router-dom';

function SearchIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (event, value) => {
    if (value) {
      dispatch(setSearch(value.title));
      navigate('/products/search');
      handleClose();
    }
  };

  const categories = [
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
    { title: 'Women Dresses' },
    { title: 'Women Tops' },
    { title: 'Women Sarees' },
    { title: 'Women Ethnic Wear' },
    { title: 'Women Jeans' },
    { title: 'Women Winter Jackets' },
    { title: 'Sneakers' },
    { title: 'Running Shoes' },
    { title: 'Canvas Shoes' },
    { title: 'Sports Shoes' },
    { title: 'Walking Shoes' },
    { title: 'Watches' },
    { title: 'Sunglasses' },
    { title: 'Backpacks' },
  ];

  return (
    <>
      <SearchingIcon
        onClick={handleClick}
        className="mr-4 hover:scale-90 cursor-pointer"
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <div spacing={2} className="w-screen mx-4 justify-center">
            <Autocomplete
            options={categories}
            getOptionLabel={(option) => option.title}
            onChange={handleSelect}
            renderInput={(params) => (
              <TextField {...params} label="Search categories" />
            )}
          />
        </div>
      </Menu>
    </>
  );
}

export default SearchIcon;
