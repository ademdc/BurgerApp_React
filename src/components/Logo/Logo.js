import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from './Logo.css';
import {NavLink} from 'react-router-dom';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <NavLink to='/'> <img src={burgerLogo} alt="My burger"/></NavLink>
    </div>
);

export default logo;