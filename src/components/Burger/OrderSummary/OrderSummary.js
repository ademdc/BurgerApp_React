import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}>
            <span style={{textTransform:'capitalize'}}> {igKey} </span> {props.ingredients[igKey]}
            </li>
    });
    return(
        <Aux>
            <h1>Your order</h1>
            <p>A delicious order with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${props.price} </strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchasedCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasedContinue}>CONTINUE</Button>
        </Aux>
    );


}


export default orderSummary;