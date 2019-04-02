import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import classes from './ThankYouPage.css';
import * as actionCreator from '../../../store/actions/index';

class ThankYou extends Component{

    state={
        redirect:null
    }

    componentDidMount=()=>{
        this.props.resetRoute();
        
        setTimeout(()=>{
            this.setState({redirect:<Redirect to='/'/>})
        },3000);
    }



    render(){
        
        return(
            <div className={classes.ThankYou}>
            {this.state.redirect}
            <div>Thank you!</div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        resetRoute: () => dispatch(actionCreator.resetPathReservation())
    }
}
export default connect(null,mapDispatchToProps) (ThankYou);