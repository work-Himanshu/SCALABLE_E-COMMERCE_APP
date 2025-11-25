import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Elements from './Elements';
import axios from 'axios';
import NavigationButton from '../Navigation/NavigationButton';
import HeroElement from './HeroElement';
import Categories from './Categories';
import { setQuery } from '../ReduxStore/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { section } = useParams();
  const query = useSelector((state) => state.counter.query);
  const [data, setData] = useState([]);

  // Update Redux when URL section changes
  useEffect(() => {
    dispatch(setQuery(section));
  }, [section]);

  // Fetch Data when query updates
  useEffect(() => {
    if (query) {
      fetchData(query);
    }
  }, [query]);

  const fetchData = async (queryVal) => {
    try {
      // transform based on section
      switch (queryVal) {
        case 'men':
          queryVal = 'men zara';
          break;
        case 'women':
          queryVal = 'women zara';
          break;
        case 'sneakers':
          queryVal = 'sneakers';
          break;
      }

      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: queryVal, per_page: 20 },
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
    // Build readable URL
    const itemSlug = photoData.photographer
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^a-z0-9-]/g, '');

    navigate(`/products/${section}/${itemSlug}`, { state: photoData });
  };

  return (
    <div>
      <div className="fixed mt-14 md:mt-16 w-full bg-white z-10">
        <NavigationButton />
      </div>

      <div className="md:px-50 pt-30">
        <HeroElement />
        <Categories />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
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
    </div>
  );
}

export default Products;
