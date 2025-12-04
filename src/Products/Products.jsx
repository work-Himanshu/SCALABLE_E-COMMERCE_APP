import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../ReduxStore/counterSlice';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

// 🔥 Lazy Loaded Components
const Elements = React.lazy(() => import('./Elements'));
const HeroElement = React.lazy(() => import('./HeroElement'));
const Categories = React.lazy(() => import('./Categories'));
const NavigationButton = React.lazy(() =>
  import('../Navigation/NavigationButton')
);

// Reusable Skeleton Card for Product Grid
function CardSkeleton() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton variant="rectangular" height={180} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
}

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { section } = useParams();
  const query = useSelector((state) => state.counter.query);

  const [data, setData] = useState([]);

  // Update Redux when URL changes
  useEffect(() => {
    dispatch(setQuery(section));
  }, [section]);

  // Fetch data when query changes
  useEffect(() => {
    if (query) fetchData(query);
  }, [query]);

  const fetchData = async (queryVal) => {
    try {
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

  // Card click
  const handleCardClick = (photoData) => {
    const itemSlug = photoData.photographer
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^a-z0-9-]/g, '');

    navigate(`/products/${section}/${itemSlug}`, { state: photoData });
  };

  return (
    <div>
      {/* 🔥 Navigation Button Lazy Loaded */}
      <Suspense fallback={<Skeleton height={50} />}>
        <div className="fixed mt-14 md:mt-16 w-full bg-white z-10">
          <NavigationButton />
        </div>
      </Suspense>

      <div className="md:px-50 pt-26">
        {/* 🔥 Hero Section Lazy Loaded */}
        <Suspense fallback={<Skeleton height={200} />}>
          <HeroElement />
        </Suspense>

        {/* 🔥 Categories Lazy Loaded */}
        <Suspense fallback={<Skeleton height={150} />}>
          <Categories />
        </Suspense>

        {/* 🔥 Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          {data.length === 0
            ? Array(8)
                .fill(0)
                .map((_, i) => <CardSkeleton key={i} />)
            : data.map((photoData) => (
                <div
                  key={photoData.id}
                  onClick={() => handleCardClick(photoData)}
                  className="cursor-pointer"
                >
                  {/* 🔥 Lazy load product cards individually */}
                  <Suspense fallback={<CardSkeleton />}>
                    <Elements
                      url={photoData.src.medium}
                      alt={photoData.photographer}
                      description={photoData.alt}
                      price={photoData.width}
                    />
                  </Suspense>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
