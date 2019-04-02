import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './AdminPanel.css';
import ReservationList from './ReservationList/ReservationList';
import EventsHandler from './EventsHandler/EventsHandler';
import Auxx from '../../hoc/Auxx/Auxx';


class AdminPanel extends Component{

    render(){

        let isAuthJsx=null;

        if(this.props.isAuthAdm){
            isAuthJsx=
            <div className={classes.AdminPanel}>
            <EventsHandler/>
            <ReservationList/>
            </div>

        }
        else{
            isAuthJsx=<div>You have to be loged in as administrator to see this page.</div>
        }
        return(
            <Auxx>
            {isAuthJsx}
            </Auxx>
        );
    };

};

const mapStateToProps = state =>{
    return{
        isAuthAdm: state.auth.isA !== false
    }
}
export default connect(mapStateToProps) (AdminPanel);