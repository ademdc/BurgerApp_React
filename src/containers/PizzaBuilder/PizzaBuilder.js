import React, { Component } from 'react';
//import {Route, Switch,NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';
//import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
//import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import classes from './PizzaBuilder.css';

class PizzaBuilder extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.PizzaBuilder}>
                    <h1>Pizza</h1>
                </div>
            </Aux>
        );
    };
}
export default PizzaBuilder;