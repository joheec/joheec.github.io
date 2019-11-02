import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return <div id="navigation-container">
    <div className="navigation-button">
      <Link to='/about'>about me</Link>
    </div>
    <div className="navigation-button">lifestyle</div>
    <div className="navigation-button">roller derby</div>
    <div className="navigation-button">finance</div>
    <div className="navigation-button">tech</div>
  </div>;
}

export default Navigation;
