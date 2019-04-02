import React,{Component} from 'react';
import {connect} from 'react-redux';

import classes from './Header.css';
import NavigationItem from '../../Navigaton/NavigationItem/NavigationItem';

class Header extends Component{
    render(){
        return(
        <div className={classes.HeaderWrapper}>
            <div className={classes.Header}>
                <nav><NavigationItem link='/'>Home</NavigationItem></nav>

                {this.props.isAuthenticated ? 
                    <nav><NavigationItem link='/logout'>Log out</NavigationItem></nav> :
                    <nav><NavigationItem link='/sing-in'>Log in/Register</NavigationItem></nav>
                }
                
                {this.props.isAdm && this.props.isAuthenticated ?
                    <nav><NavigationItem link='/admin-panel'>Admin Page</NavigationItem></nav>
                 :null} 
            </div>
        </div>
        );
    };
};

const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token !== null,
        isAdm: state.auth.isA
    }
}
export default connect(mapStateToProps) (Header);