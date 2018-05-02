import React, { Component } from 'react';
//import {Route, Switch,NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';
//import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
//import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import classes from './PizzaBuilder.css';
import Burger from '../../components/Pizza/Burger';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';


class PizzaBuilder extends Component {
    constructor(props){
        super(props);
        this.state ={
            purchasing:false,
            loading:false,
            error:false
        }
    }
    componentDidMount () {
        // axios.get( 'https://react-my-burger-8c974.firebaseio.com/ingredient.json' )
        //     .then( response => {
        //         this.setState( { ingredients: response.data } );
        //     } )
        //     .catch( error => {
        //         this.setState( { error: true } );
        //     } );
    }

    updatePurchaseState = (ingredients) =>{
        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey];
        }).reduce((sum,el) =>{
            return sum+el;
        },0);

        return sum>0;
    }


    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }

    purchasedCancelHadler = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{

        this.props.history.push('/checkout');
    }

    render() {
        // return (
        //     <Aux>
        //         <div className={classes.PizzaBuilder}>
        //             <h1>Pizza</h1>
        //         </div>
        //     </Aux>
        // );


        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }

        let orderSummary = null;

        if(this.state.loading){
            orderSummary = <Spinner/>
        }
        let burger = this.state.error ? <p>Ingredients can't be loaded</p>:  <Spinner/>;

        if(this.props.ings){
            burger = (<Aux>
                <br></br>
                <div className={classes.Burger}>
                    <Burger ingredients={this.props.ings}/></div>
                <div >
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientDeleted}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}/>
                </div>
            </Aux>);

            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchasedCanceled={this.purchasedCancelHadler}
                purchasedContinue={this.purchaseContinueHandler}
                price={this.props.price}/>;
        }

        if(this.state.loading){
            orderSummary=<Spinner/>;
        }

        return(
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchasedCancelHadler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>);

    };
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price:state.price
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
        onIngredientDeleted: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName:ingName}),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(PizzaBuilder,axios));