import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './BurgerBuilder.css';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {
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
        if(this.props.isAuthenticated){
        this.setState({purchasing:true});
        } else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth')
        }
    }

    purchasedCancelHadler = () =>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () =>{
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render(){
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
                <div>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientDeleted}
                        disabled={disabledInfo}
                        price={this.props.price}
                        isAuth={this.props.isAuthenticated}
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
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price:state.burgerBuilder.price,
        isAuthenticated:state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientDeleted: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitPurchase: ()=> dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path)=> dispatch(actions.setAuthRedirectPath(path)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));