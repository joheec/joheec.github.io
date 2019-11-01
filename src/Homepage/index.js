import React from 'react';
import Media from '../Media';
import Navigation from '../Navigation';
import './styles.css';

const Homepage = () => {
  return <div id="homepage-container">
    <div id="homepage-media">
      <Media />
    </div>
    <div id="homepage-navigation">
      <Navigation />
    </div>
  </div>;
};

export default Homepage;
