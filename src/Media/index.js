import React from 'react';
import Facebook from './images/facebook.png';
import GitHub from './images/github.png';
import Instagram from './images/instagram.png';
import './styles.css';

const Media = () => {
  return (
    <div>
      <div id="media-icons">
        <a
          className="media-link"
          href="https://www.facebook.com/johee.chung"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="media-img"
            src={Facebook}
            alt="Johee's Facebook"
          />
        </a>
        <a
          className="media-link"
          href="https://www.instagram.com/yellowfever.44"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="media-img"
            src={Instagram}
            alt="Instagram"
          />
        </a>
        <a
          className="media-link"
          href="https://www.github.com/joheec"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="media-img"
            src={GitHub}
            alt="Johee's GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default Media;
