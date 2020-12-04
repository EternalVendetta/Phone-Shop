// Library
import React, { Component, Fragment } from 'react';
// CSS
import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Components imported
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
// Default Component
import Default from './Components/Default';
// React Router 
import { Switch, Route } from 'react-router-dom';

// Class Component
class App extends Component {
  // JSX
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
      </Fragment> 
    )
  }
}

export default App;
