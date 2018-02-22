import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state={
        name:'',
        email:'',
        addess:{
            street:'',
            postalCode:''
        },
        loading:false,
    }

    orderHandler = (event) =>{
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading:true});
        const order={
            ingredients:this.props.ingredients,
            price: this.props.price,
            customer:{
                name:'Adem Dinarevic',
                address:{
                    street:"Novo Naselje bb Breza",
                    zipCode:71370,
                    country:"Bosnia"
                },
                email:"ademdinarevic@gmail.com",
            },
            deliveryMethod:'fastest'
        }

        axios.post('/orders.json',order)
            .then(response=>  {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error=> {
                this.setState({loading:false});
            });
    }

    render(){
        let form=(
            <div className={classes.Form}>
                <form action="">
                    <input className={classes.Input} type="text" name='name' placeholder="Your name"/>
                    <input className={classes.Input} type="email" name='email' placeholder="Your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                    <input className={classes.Input} type="text" name='postalCode' placeholder='Your postalcode'/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
            );
        if (this.state.loading){
            form=<Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}
export default ContactData;