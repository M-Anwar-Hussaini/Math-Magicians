import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const Home = () => (
  <div className="container">
    <div className="row g-3 mt-2">
      <div className="col col-12 col-md-6">
        <Calculator />
      </div>
      <div className="col col-12 col-md-6">
        <Quote />
      </div>
    </div>
  </div>
);

export default Home;
