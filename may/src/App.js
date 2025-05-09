import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import FAQ from './components/FAQ';
import About from './components/About';
import Gallery from './components/Gallery';
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component
import Testimonials from './components/Testimonials'; // Import Testimonials component
import HolidayTheme from './components/HolidayTheme'; // Import the HolidayTheme component
import './App.css';

function App() {
  return (
    <Router>
      <HolidayTheme> {/* Wrap the app in the HolidayTheme component */}
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ProductDetail />} /> {/* Add ProductDetail route */}
              <Route path="/testimonials" element={<Testimonials />} /> {/* Add Testimonials route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </HolidayTheme>
    </Router>
  );
}

export default App;










