import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Homepage from '../Homepage';
import About from '../Content/About';
import Lifestyle from '../Content/Lifestyle';
import RollerDerby from '../Content/RollerDerby';
import Finance from '../Content/Finance';
import Tech from '../Content/Tech';
import './styles.css';

function App() {
  return (
    <Router>
      <div id="app-container">
        <Route path='/' exact>
        {
          ({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="splash"
              unmountOnExit
            >
              <Homepage />
            </CSSTransition>
          )
        }
        </Route>
        <About />
        <Lifestyle />
        <RollerDerby />
        <Finance />
        <Tech />
      </div>
    </Router>
  );
}

export default App;
