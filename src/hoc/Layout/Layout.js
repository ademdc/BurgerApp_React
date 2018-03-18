import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

class Layout extends Component{
    state = {
        showSideDrawer:false,
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    }

    sideDrawerOpenedHandler = () =>{
        this.setState({showSideDrawer:true});
    }

    render(){
        return(
            <Aux>
                <Toolbar opened={this.sideDrawerOpenedHandler}></Toolbar>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer></Footer>
            </Aux>
        );
    }
}

export default Layout;