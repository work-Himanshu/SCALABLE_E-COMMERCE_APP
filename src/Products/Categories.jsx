import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../ReduxStore/counterSlice';

export default function Categories() {
  const [hero, setHero] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const query = useSelector((state) => state.counter.query);

  useEffect(() => {
    const section = location.pathname.split('/')[2];
    dispatch(setQuery(section));
  }, [location.pathname]);

  useEffect(() => {
    if (query) {
      dataFetcher(query);
    }
  }, [query]);

  const dataFetcher = async (query) => {
    try {
      switch (query) {
        case 'men':
          query = 'men garment variety';
          break;
        case 'women':
          query = 'women garment variety';
          break;
        case 'sneakers':
          query = 'sneakers footwear shoes';
          break;
      }

      const res = await axios.get('https://api.pexels.com/v1/search', {
        params: { query, per_page: 4 },
        headers: {
          Authorization:
            'zEg8HUKQJWRvqWFCZP4RRT8tL5iSrWpR4pzDi3DlIneQ0Z2BRXdKAh6l',
        },
      });

      setHero(res.data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hero)
    return (
      <Card className="p-4">
        <p>Loading...</p>
      </Card>
    );

  return (
    <div className="py-2">
      <div className="display flex justify-center text-slate-600 mt-5">
        <h2 className="text-3xl font-extrabold p-4">Explore Categories</h2>
      </div>

      <Card>
        <CardContent>
          <div className="md:overflow-x-auto">
            <div
              className="grid grid-cols-2 gap-3 
                          md:grid-flow-col md:auto-cols-max md:grid-cols-none"
            >
              {hero.map((photo, index) => (
                <div key={index} className="w-full md:w-60 shrink-0">
                  <CardMedia
                    className="h-48 md:h-60 w-full rounded-sm object-cover hover:scale-105 transition"
                    image={photo.src.large}
                    title={photo.photographer}
                  />
                  <div className="flex justify-center p-2 font-bold">
                    {photo.photographer.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
