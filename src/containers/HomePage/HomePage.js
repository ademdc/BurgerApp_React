import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import PizzaBuilder from "../PizzaBuilder/PizzaBuilder";
import classes from './HomePage.css';
import burgerPic from "../../assets/images/burger-logo.png";
import pizzaPic from '../../assets/images/pizza.png';
import sandwichPic from '../../assets/images/sandwich.png';

class HomePage extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.HomePage}>
                    <h2>Choose your food:</h2>

                    <NavLink to = "/burger" > <img className={classes.food} src={burgerPic} alt="Burger"/></NavLink>
                    <br></br>
                    <NavLink to="/pizza"><img className={classes.food} src={pizzaPic} alt="Pizza"/></NavLink>
                    <br></br>

                    <NavLink to="/sandwich"><img className={classes.food} src={sandwichPic} alt="Sandwich"/></NavLink>
                    <br></br>

                    <Route path='/burger' component= {BurgerBuilder}/>
                    <Route path='/pizza' component= {PizzaBuilder}/>
                </div>
            </Aux>
        );
    };
}
export default HomePage;