import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Elements from '../Products/Elements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search() {
  const search = useSelector((state) => state.search.search);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search]);

  const fetchData = async (searchTerm) => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: searchTerm, per_page: 20 },
        headers: {
          Authorization:
            'zEg8HUKQJWRvqWFCZP4RRT8tL5iSrWpR4pzDi3DlIneQ0Z2BRXdKAh6l',
        },
      });

      setData(response.data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardClick = (photoData) => {
    const itemSlug = photoData.photographer
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^a-z0-9-]/g, '');

    navigate(`/products/search/${itemSlug}`, { state: photoData });
  };

  return (
    <div className="pt-18">
      <Typography variant="h4" className="flex justify-center text-gray-600">
        Your Search Results
      </Typography>

      <p className="text-center text-lg text-gray-500 mt-3">
        {search ? `Showing results for: ${search}` : 'No search term yet'}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((photoData) => (
          <div
            key={photoData.id}
            onClick={() => handleCardClick(photoData)}
            className="cursor-pointer"
          >
            <Elements
              url={photoData.src.medium}
              alt={photoData.photographer}
              description={photoData.alt}
              price={photoData.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
