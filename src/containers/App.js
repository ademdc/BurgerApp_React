import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Orders from '../containers/Orders/Orders';
import HomePage from '../containers/HomePage/HomePage';
import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";
import SandwichBuilder from "./SandwichBuilder/SandwichBuilder";
import Auth from './Auth/Auth';
import Logout from './Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
class App extends Component {

    componentDidMount(){
        this.props.onTryAutoSignup();
    }

  render() {
        let routes = (
            <Switch>
                <Route path='/auth' component= {Auth}/>
                <Route path='/burger' component= {BurgerBuilder}/>
                <Route path='/pizza' component= {PizzaBuilder}/>
                <Route path='/sandwich' component= {SandwichBuilder}/>
                <Route path='/' exact component= {HomePage}/>
                <Redirect to='/'/>
            </Switch>
        );


        if(this.props.isAuthenticated){
            routes = (
                <Switch>
                    <Route path='/checkout' component= {Checkout}/>
                    <Route path='/auth' component= {Auth}/>
                    <Route path='/orders' component= {Orders}/>
                    <Route path='/logout' component= {Logout}/>
                    <Route path='/burger' component= {BurgerBuilder}/>
                    <Route path='/pizza' component= {PizzaBuilder}/>
                    <Route path='/sandwich' component= {SandwichBuilder}/>
                    <Route path='/' exact component= {HomePage}/>
                    <Redirect to='/'/>
                </Switch>
            );
        }
    return (
      <div>
          <Layout>
              {routes}
          </Layout>

      </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !==null
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onTryAutoSignup: ()=>dispatch(actions.authCheckState())
    };

};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
