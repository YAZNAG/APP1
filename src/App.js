import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Product/ProductDetail'; 
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/login';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
