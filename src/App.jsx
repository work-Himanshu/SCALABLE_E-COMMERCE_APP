import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Cart from './Cart/Cart';
import Login from './Login/Login';
import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

function App() {
  const [query, setQuery] = useState('men');
  return (
    <>
      <Navigation setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Navigate to="/products/men" replace />} />
        <Route
          path="/products"
          element={<Navigate to="/products/men" replace />}
        />
        <Route path="/products/:section" element={<Products />} />
        <Route path="/products/:section" element={<Products />} />
        <Route path="/products/:section" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
