import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Elements from './Elements';
import axios from 'axios';
import NavigationButton from '../Navigation/NavigationButton';
import HeroElement from './HeroElement';
import Categories from './Categories';
import { setQuery } from '../ReduxStore/counterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Products() {
  const dispatch = useDispatch();
  const { section } = useParams();
  let query = useSelector((state) => state.counter.query);
  useEffect(() => {
    dispatch(setQuery(section));

    fetchData(query);
  }, [section]);
  const [data, setData] = useState([]);

  const fetchData = async (query) => {
    try {
      switch (query) {
        case 'men':
          query = 'men zara';
          break;
        case 'women':
          query = 'women zara';
          break;
        case 'sneakers':
          query = 'sneakers';
          break;
      }
      console.log(query);

      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: query, per_page: 20 },
        headers: {
          Authorization:
            'zEg8HUKQJWRvqWFCZP4RRT8tL5iSrWpR4pzDi3DlIneQ0Z2BRXdKAh6l',
        },
      });
      setData(response.data.photos);
      console.log(response.data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="fixed mt-14 md:mt-16 w-full bg-white z-10">
        <NavigationButton />
      </div>
      <div className="md:px-50 pt-30">
        <div>
          <HeroElement />
        </div>
        <div>
          <Categories />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          {data.map((photoData) => {
            return (
              <Elements
                key={photoData.id}
                url={photoData.src.medium}
                alt={photoData.photographer}
                description={photoData.alt}
                price={photoData.width}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
