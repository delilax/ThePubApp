import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tables from './Tables/Tables';

import classes from './Reservation.css';
import Auxx from '../../../hoc/Auxx/Auxx';
import * as actionCreator from '../../../store/actions/index';

class Reservation extends Component{

     state={
          date:'2019-01-01'
     }

     componentDidMount=()=>{

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
          this.props.onReservationDownload(date);
     }

     onDateChangedHandler = event =>{
          this.setState({date:event.target.value,loaded:true});
          this.props.onReservationDownload(event.target.value);
          this.props.onTablesDelete();
     }

     render(){

          return(
               <Auxx>
                    <div className={classes.ReservationText}>Reservation<br/>
                                                             Please pick a date and select a table.</div>
                    <div className={classes.Date}>
                         <input type="date" value={this.state.date} className={classes.DatePicker} onChange={this.onDateChangedHandler}></input>
                    </div>
                    <Tables date={this.state.date}/>
               </Auxx>
               );
     };
}

const mapDispatchToProps = dispatch =>{
     return{
          onReservationDownload: (date) => dispatch(actionCreator.downloadReservations(date)),
          onTablesDelete: () => dispatch(actionCreator.stateOfTableDelete())
     }
}
export default connect(null,mapDispatchToProps) (Reservation);