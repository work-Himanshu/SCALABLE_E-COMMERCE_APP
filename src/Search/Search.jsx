import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
function Search() {
  return (
    <div className="h-120 pt-18">
      <Typography variant='h4' className="flex justify-center text-gray-600">Your Search Results</Typography>
      <p>{useSelector((state)=>state.search.search)}</p>
    </div>
  );
}

export default Search;
