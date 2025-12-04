import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export function Animations() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export default function HeroElement() {
  const [hero, setHero] = useState(null);
  const location = useLocation();

  useEffect(() => {
    dataFetcher();
  }, [location.pathname]);

  const dataFetcher = async () => {
    try {
      let query = ' all male friends';
      switch (location.pathname.split('/')[2]) {
        case 'men':
          query = 'men fashion model portrait';

          break;
        case 'women':
          query = 'women fashion model portrait';

          break;
        case 'sneakers':
          query = 'sneakers shoes footwear';

          break;
      }
      const res = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: query, per_page: 1 },
        headers: {
          Authorization:
            'zEg8HUKQJWRvqWFCZP4RRT8tL5iSrWpR4pzDi3DlIneQ0Z2BRXdKAh6l',
        },
      });
      console.log(res.data.photos);
      setHero(res.data.photos[0]);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hero)
    return (
      <Card>
        <Animations />
      </Card>
    );

  return (
    <Card>
      <CardMedia
        className="h-160 w-full"
        image={hero.src.large}
        title={hero.photographer}
      >
        <span className="text-amber-50 text-5xl flex justify-self-center p-10 font-extrabold">
          {location.pathname.split('/')[2].toUpperCase()} COLLECTIONS
        </span>
      </CardMedia>
    </Card>
  );
}
