import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return <div id="navigation-container">
    <Link to='/about'>
      <div className="navigation-button">about me</div>
    </Link>
    <Link to='/lifestyle'>
      <div className="navigation-button">lifestyle</div>
    </Link>
    <Link to='/rollerderby'>
      <div className="navigation-button">roller derby</div>
    </Link>
    <Link to='/finance'>
      <div className="navigation-button">finance</div>
    </Link>
    <Link to='/tech'>
      <div className="navigation-button">tech</div>
    </Link>
  </div>;
}

export default Navigation;
