import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';

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
                <Toolbar
                    opened={this.sideDrawerOpenedHandler}
                    isAuth={this.props.isAuthenticated}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
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

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);