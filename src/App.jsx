import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Cart from './Cart/Cart';
import Login from './Login/Login';
import { useState } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import { Provider } from 'react-redux';
import store from './ReduxStore/store';
function App() {
  const [query, setQuery] = useState('men');
  return (
    <Provider store={store}>
      <Navigation setQuery={setQuery} />
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
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
