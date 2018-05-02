import React, { Component }from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component
{
    //this can be a functional
    componentWillUpdate(){
        console.log('updated unnecsesary');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey=>{
            return <li key={igKey}>
                <span style={{textTransform:'capitalize'}}> {igKey} </span> {this.props.ingredients[igKey]}
            </li>
        });
        return(
            <Aux>
                <h1>Your order</h1>
                <p>A delicious order with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: ${this.props.price.toFixed(2)} </strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasedCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasedContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}


export default OrderSummary;