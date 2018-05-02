import React, {Component} from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

class CheckoutSummary extends Component{
    constructor(props, context) {
        super(props, context)
        this.state = {
            sauces:
                {
                    ketchup: 50,
                    mayo:50,
                    mustard:50,
                },
            drink:''
        }
    }

    handleChange = (event) => {
        let sauces = Object.assign({}, this.state.sauces);  //creating copy of object
        sauces.ketchup = event.target.value;                //updating value
        this.setState({sauces});
    }
    handleChange2 = (event) => {
        let sauces = Object.assign({}, this.state.sauces);
        sauces.mustard = event.target.value;
        this.setState({sauces});
    }
    handleChange3 = (event) => {
        let sauces = Object.assign({}, this.state.sauces);
        sauces.mayo = event.target.value;
        this.setState({sauces});    }
    render(){
        let ketchupSlider = (
            <input type="range" min="0" max="100" value={this.state.sauces.ketchup} className="slider"  onChange={this.handleChange}
                   id="myRange"/>
        );
        let mustardSlider = (
            <input type="range" min="0" max="100" value={this.state.sauces.mustard} className="slider"  onChange={this.handleChange2}
                   id="myRange"/>
        );
        let mayoSlider = (
            <input type="range" min="0" max="100" value={this.state.sauces.mayo} className="slider"  onChange={this.handleChange3}
                   id="myRange"/>
        );
        let outputKetchup = this.state.sauces.ketchup;
        let outputMustard = this.state.sauces.mustard;
        let outputMayo = this.state.sauces.mayo;

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