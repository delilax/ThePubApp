import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../../../../store/actions/index';
import classes from './Table.css';

const imgTable1="https://firebasestorage.googleapis.com/***";
const imgTable2="https://firebasestorage.googleapis.com/***";
const imgTable3="https://firebasestorage.googleapis.com/***";
const imgTable4="https://firebasestorage.googleapis.com/***";
const imgTable5="https://firebasestorage.googleapis.com/***";
const imgTable6="https://firebasestorage.googleapis.com/***";
const imgTableEmpty ="https://firebasestorage.googleapis.com/***";



class Table extends Component{

    state={
        tablesFull:[imgTable1,imgTable2,imgTable3,imgTable4,imgTable5,imgTable6]
    }
    render(){

    
   
    let image=imgTableEmpty;

    for (const key in this.props.res){
        
        if(this.props.res[key].table===this.props.id){
            const rand=Math.floor(Math.random() * 6);
            image=this.state.tablesFull[rand];
            this.props.onTableRes(this.props.id);
        }
    }

        return(
        <img className={classes.imgPeople} alt="table" src={image}></img>
        );
    };
}

const mapStateToProps = state =>{
    return{
        res: state.reservation.reservations
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onTableRes: (table) => dispatch(actionCreator.stateOfTable(table))
    };
};
export default connect(mapStateToProps,mapDispatchToProps) (Table);

// export default Table;