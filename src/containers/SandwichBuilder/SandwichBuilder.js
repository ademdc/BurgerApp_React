import React, { Component } from 'react';
//import {Route, Switch,NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';
//import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
//import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import classes from './SandwichBuilder.css';

class SandwichBuilder extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.SandwichBuilder}>
                    <h1>Sandwich</h1>
                </div>
            </Aux>
        );
    };
}
export default SandwichBuilder;