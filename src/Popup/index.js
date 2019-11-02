import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

const Popup = (Component) => (path) => {
  const routePath = path[0] === '/' ? path : '/' + path;
  return () => (
    <Route path={routePath} exact>
    {
      ({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames="popup"
          unmountOnExit
        >
          <div className="popup-container">
            <Component />
          </div>
        </CSSTransition>
      )
    }
    </Route>
  );
};

export default Popup;
