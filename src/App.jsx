import { Routes, Route, Navigate } from 'react-router-dom';
import Orders from './Orders/Orders';
import React from 'react';
const Products = React.lazy(() => import('./Products/Products'));
const Cart = React.lazy(() => import('./Cart/Cart'));
const Search = React.lazy(() => import('./Search/Search'));
import Login from './Login/Login';
import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import { Provider } from 'react-redux';
import store from './ReduxStore/store';
import Item from './Item/Item';
import { Suspense } from 'react';
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

function App() {
  const [query, setQuery] = useState('men');
  return (
    <Provider store={store}>
      <Suspense fallback={<Animations />}>
        <Navigation setQuery={setQuery} />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <Animations />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/products/men" replace />} />
          <Route
            path="/products"
            element={<Navigate to="/products/men" replace />}
          />
          <Route path="/products/:section" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/search" element={<Search />} />
          <Route path="/products/:section/:item" element={<Item />} />
        </Routes>
        <Footer />
      </Suspense>
    </Provider>
  );
}

export default App;
