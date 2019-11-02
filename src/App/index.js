import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Homepage from '../Homepage';
import Popup from '../Popup';
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
        <Route path='/about'>
        {
          ({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="popup"
            >
              <Popup />
            </CSSTransition>
          )
        }
        </Route>
        <Route path='/lifestyle'></Route>
        <Route path='/rollerderby'></Route>
        <Route path='/finance'></Route>
        <Route path='/tech'></Route>
      </div>
    </Router>
  );
}

export default App;
