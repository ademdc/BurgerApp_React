import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
import Orders from '../containers/Orders/Orders';
import HomePage from '../containers/HomePage/HomePage';
import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";
import SandwichBuilder from "./SandwichBuilder/SandwichBuilder";

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Switch>
                  <Route path='/checkout' component= {Checkout}/>
                  <Route path='/orders' component= {Orders}/>
                  <Route path='/burger' component= {BurgerBuilder}/>
                  <Route path='/pizza' component= {PizzaBuilder}/>
                  <Route path='/sandwich' component= {SandwichBuilder}/>
                  <Route path='/' exact component= {HomePage}/>
              </Switch>
          </Layout>

      </div>
    );
  }
}

export default App;
