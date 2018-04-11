import React, {Component} from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

class CheckoutSummary extends Component{
    constructor(props, context) {
        super(props, context)
        this.state = {
            ketchup: 50,
            mayo:50,
            mustard:50,
            drink:''
        }
    }

    handleChange = (event) => {
        this.setState({ketchup: event.target.value});
    }
    handleChange2 = (event) => {
        this.setState({mustard: event.target.value});
    }
    handleChange3 = (event) => {
        this.setState({mayo: event.target.value});
    }
csvlsssf;'nsffsfsfssffsfsfsfs'
    render(){
        let ketchupSlider = (
            <input type="range" min="0" max="100" value={this.state.ketchup} className="slider"  onChange={this.handleChange}
                   id="myRange"/>
        );
        let mustardSlider = (
            <input type="range" min="0" max="100" value={this.state.mustard} className="slider"  onChange={this.handleChange2}
                   id="myRange"/>
        );
        let mayoSlider = (
            <input type="range" min="0" max="100" value={this.state.mayo} className="slider"  onChange={this.handleChange3}
                   id="myRange"/>
        );
        let outputKetchup = this.state.ketchup;
        let outputMustard = this.state.mustard;
        let outputMayo = this.state.mayo;

        let sauces= (
            <div className={classes.Sauces}>
                <h2>Sauces</h2>
                <div className={classes.Sauce}> <p> <strong>Ketchup</strong><br></br></p>
                    <div className={classes.slidercontainer}>{ketchupSlider}{outputKetchup}</div></div>

                <div className={classes.Sauce}> <p> <strong>Mustard</strong><br></br></p>
                    {mustardSlider}{outputMustard}</div>

                <div className={classes.Sauce}> <p> <strong>Mayo</strong><br></br></p>
                    {mayoSlider}{outputMayo}</div>
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
                    <input type="radio" name="drink" value="sprite"/> Sprite
                    <input type="radio" name="drink" value="none"/> None
                </p></div>
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
                    <Burger ingredients={this.props.ingredients}/>
                </div>

                {sauces}
                {drinks}
                <Button
                    btnTtype="Danger"
                    clicked={this.props.checkotCanceled}>CANCEL</Button>
                <Button
                    btnTtype="Success"
                    clicked={this.props.checkoutContinued}>CONTINUE</Button>

            </div>
        );
    }

}

export default CheckoutSummary;