import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import Details from './Details/Details';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path='/details/:id' component={Details} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
