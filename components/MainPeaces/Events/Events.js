import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './Events.css';
import * as actionCreator from '../../../store/actions/index';
import Event from './Event/Event';
import Spinner from '../../UI/Spinner/Spinner';
import Auxx from '../../../hoc/Auxx/Auxx';

import { Parallax } from 'react-scroll-parallax';

class Events extends Component {

     
     state={
          title:null,
          date:null,
          pathEventOpen:null,
          deleted:false
     }

     componentWillMount(){
          this.props.onGetEvents();
     }

     onClickDeleteHandler = (id) =>{
          this.props.onDeleteEvent(id);

          setInterval(()=>{
            if(this.props.onDeleteEvent!=null && this.props.onDeleteEvent!==undefined){
                window.location.reload();
            }
        },1000);
     }

     render(){

          let eventsVar=<Spinner />;

          if(this.props.eventsState!=null && this.props.isUpdated){
          eventsVar=
               <div>
                    {this.props.eventsState.sort((b, a) => a.date.localeCompare(b.date)).map(event=>(
                         <Event 
                              key={event.id}
                              date={event.date}
                              title={event.title}
                              color={event.color}
                              image={event.url}
                              isAdm={this.props.isAuthAdm}
                              delete={()=> this.onClickDeleteHandler(event.id)}
                         />

                    ))}
               </div>        
          };

          const scrSize = window.innerWidth;

          let layout=
               <Parallax
                    className={classes.Events}
                    offsetXMax={''}
                    offsetXMin={''}
                    slowerScrollRate
                    tag="figure">
                         {this.state.pathEventOpen}
                         {eventsVar}
                    </Parallax>;

          if(scrSize<600){
               this.setState({offsetXMax:'',offsetXMin:''});
          }

          return(
               <Auxx>
               {layout}
               </Auxx>
          );
     }
}


const mapStateToProps = state =>{
     return {
         eventsState: state.eventDown.events,
         isUpdated: state.eventDown.isUpdated,
         isDeleted: state.eventDown.isDeleted,
         isAuthAdm: state.auth.isA !== false
     };
 };

const mapDispatchToProps = dispatch => {
     return{
          onGetEvents: () => dispatch(actionCreator.getEvents()),
          onDeleteEvent: (id) => dispatch(actionCreator.deleteEvents(id))
     };
};

export default connect(mapStateToProps,mapDispatchToProps)(Events);