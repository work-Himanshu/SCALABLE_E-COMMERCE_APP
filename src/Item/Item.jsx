import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../ReduxStore/cartSlice'; // ✅ add this

export default function Item() {
  const { state } = useLocation();
  const { item } = useParams();
  const [data, setData] = useState(null);

  // ✅ Redux setup
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Fetch only if no state (refresh or direct open)
  useEffect(() => {
    if (!state) {
      fetchData(item);
    }
  }, [item]);

  const fetchData = async (queryVal) => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: queryVal, per_page: 1 },
        headers: {
          Authorization:
            'zEg8HUKQJWRvqWFCZP4RRT8tL5iSrWpR4pzDi3DlIneQ0Z2BRXdKAh6l',
        },
      });

      setData(response.data.photos[0]); // ✅ pick single item
    } catch (err) {
      console.log(err);
    }
  };

  const parsingData = state || data;

  if (!parsingData) {
    return <div className="pt-16 flex justify-center">Loading…</div>;
  }

  // ✅ quantity check in cart
  const existingItem = cartItems.find((i) => i.id === parsingData.id);
  const quantity = existingItem ? existingItem.quantity : 0;

  // ✅ Add to cart
  const handleAdd = () => {
    dispatch(
      addItem({
        id: parsingData.id,
        photographer: parsingData.photographer,
        alt: parsingData.alt,
        price: parsingData.width, // ✅ SAME data source
        src: parsingData.src.medium, // ✅ used later in cart
      })
    );
  };

  // ✅ Remove from cart
  const handleRemove = () => {
    dispatch(removeItem(parsingData.id));
  };

  const images = [
    parsingData.src.original,
    parsingData.src.large2x,
    parsingData.src.large,
    parsingData.src.portrait,
    parsingData.src.landscape,
  ].filter(Boolean);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="pt-18 px-4">
      <Card>
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={parsingData.alt}
                className="max-h-[800px] object-contain rounded-base justify-self-center"
              />
            </div>
          ))}
        </Slider>

        <CardContent>
          <CardContent className="flex justify-between items-center ">
            <Typography gutterBottom variant="h6" sx={{ marginTop: '1rem' }}>
              {parsingData.photographer}
            </Typography>
            <div className=" flex justify-end md:justify-center mt:2  scale-90">
              {/* ✅ Added quantity controls */}
              <Button
                size="small"
                variant="contained"
                sx={{ marginRight: '.5rem' }}
                onClick={handleRemove}
              >
                –
              </Button>

              <div className="mx-2 mr-4">{quantity}</div>

              <Button
                size="small"
                variant="contained"
                onClick={handleAdd}
                className="border"
              >
                +
              </Button>
            </div>
          </CardContent>

          <Typography variant="body2" sx={{ color: 'text.secondary, ' }}>
            {parsingData.alt}
            {parsingData.alt}
            {parsingData.alt}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
