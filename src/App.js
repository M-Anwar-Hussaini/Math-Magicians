import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => (
  <>
    <Navigator />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quote />} />
    </Routes>

    <Footer />
  </>
);

export default App;
