import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props)=>{
    let sauces= (
        <div className={classes.Sauces}>
            <h2>Sauces</h2>
            <div className={classes.Sauce}> <p> <strong>Ketchup</strong><br></br>
                <input type="radio" name="ketchup" value="less"/> No
                <input type="radio" name="ketchup" value="normal"/> Normal
                <input type="radio" name="ketchup" value="more"/> More </p></div>

            <div className={classes.Sauce}> <p> <strong>Mustard</strong><br></br>
                <input type="radio" name="mustard" value="less"/> No
                <input type="radio" name="mustard" value="normal"/> Normal
                <input type="radio" name="mustard" value="more"/> More </p></div>

            <div className={classes.Sauce}> <p> <strong>Mayo</strong><br></br>
                <input type="radio" name="mayo" value="less"/> No
                <input type="radio" name="mayo" value="normal"/> Normal
                <input type="radio" name="mayo" value="more"/> More </p></div>
        </div>
    );

    let drinks= (
        <div className={classes.Drinks}>
            <h2>Drinks</h2>
            <div className={classes.Drink}> <p> <strong>Ketchup</strong><br></br>
                <input type="radio" name="drink" value="water"/> Water
                <input type="radio" name="drink" value="coca-cola"/> Coca-Cola
                <input type="radio" name="drink" value="fanta"/> Fanta
                <input type="radio" name="drink" value="lipton"/> Lipton
                <input type="radio" name="drink" value="sprite"/> Sprite </p></div>
            <div className={classes.Drink}> <p> <strong>Size</strong><br></br>
                <input type="radio" name="size" value="s"/> S
                <input type="radio" name="size" value="m"/> M
                <input type="radio" name="size" value="l"/> L
                <input type="radio" name="size" value="xl"/> XL</p></div>
        </div>
    );

    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width:"100%", margin:"auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>

            {sauces}
            {drinks}
            <Button
                btnTtype="Danger"
                clicked={props.checkotCanceled}>CANCEL</Button>
            <Button
                btnTtype="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>

        </div>
    );
}

export default CheckoutSummary;