import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Elements from './Elements';
import axios from 'axios';
function Products() {
  const { section } = useParams();
  useEffect(() => {
    fetchData(section);
  }, [section]);
  const [data, setData] = useState([]);

  const fetchData = async (section) => {
    try {
      let query = 'men';
      switch (section) {
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
        params: { query: query, per_page: 10 },
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
    <div className="md:px-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-20">
        {data.map((photoData) => {
          return (
            <Elements
              key={photoData.id}
              url={photoData.src.medium}
              alt={photoData.photographer}
              description={photoData.alt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
