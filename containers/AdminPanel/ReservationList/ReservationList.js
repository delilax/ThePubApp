import React, {Component} from 'react';
import classes from './ReservationList.css';
import {connect} from 'react-redux';
import * as actionCreator from '../../../store/actions/index';

import Button3 from '../../../components/UI/Button3/Button3';

class ReservationList extends Component{

    state={
        date:'0000-00-00'
   }

   componentDidMount=()=>{

        if(localStorage.getItem('date')!=null){
            this.setState({date:localStorage.getItem('date')});
            this.props.onReservationDownload(localStorage.getItem('date'));
        } else{
            let day =new Date().getDate();
            if(day<10) 
                day=String('0'+(new Date().getDate()));
            else
                day=String(new Date().getDate());

            let month =(new Date().getMonth()+1);
            if(month<10)
                month=String('0'+(new Date().getMonth()+1));
            else
                month=String((new Date().getMonth()+1));
            

            const date=String(new Date().getFullYear()+"-"+month+"-"+day);
            
            this.setState({date:date});

            this.props.onReservationDownload(this.state.date);
        }
    }


    onDateChangedHandler = event =>{
        this.setState({date:event.target.value});
        localStorage.setItem('date',event.target.value);
        this.props.onReservationDownload(event.target.value);
    }

    onPrintHandler = () =>{
        window.print();
    }

    deleteReservationHandler = (res)=>{
        this.props.onReservationDelete(res);

        setInterval(()=>{
            if(this.props.onReservationDelete!=null && this.props.onReservationDelete!==undefined){
                window.location.reload();
            }
        },1000);

    };

    onChangeLabel = (table)=> {
            if(table!=null){
            // const oldLabel=table;
            const newTableLabel="Table "+table.replace( /^\D+/g, '');
            return newTableLabel;

            }
            return null;
    };
    
   render(){

       return(
           <div className={classes.Wrapper}> 
            <h1>Reservation List</h1>
           <input type="date" className={classes.DatePicker} value={this.state.date} onChange={this.onDateChangedHandler}></input>
           
           {this.state.date!=null ? <div className={classes.List}> 
               {this.props.res.map(res=>(
                   
                   <div className={classes.Reservation}>
                            <div style={{visibility:'hidden'}}>key=res.table</div>
                            <div className={classes.ReservationTable}>{this.onChangeLabel(res.table)}</div>
                            <div>{'Number of people: '+res.numPeople}</div>
                            <div>{'Name Lastname: '+res.name+' '+res.lastname}</div>
                            <div>{'Phone number: '+res.phone}</div>
                            <Button3 clicked={()=>this.deleteReservationHandler(res.id)}>Delete</Button3>
                   </div>
               ))} 
               {/* <br /><Button clicked={this.onPrintHandler}>PRINT</Button> */}
           </div>
           :null}

           </div>
   )};
};

const mapStateToProps = state =>{
    return{
        res: state.reservation.reservations
    };
};

const mapDispatchToProps = dispatch =>{
    return{
         onReservationDownload: (date) => dispatch(actionCreator.downloadReservations(date)),
         onReservationDelete: (id) => dispatch(actionCreator.deleteReservation(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ReservationList);