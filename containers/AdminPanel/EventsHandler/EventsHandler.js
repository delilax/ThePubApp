import React, {Component} from 'react';
import classes from './EventsHandler.css';
import {connect} from 'react-redux';

import * as actionCreators from '../../../store/actions/index';
import Events from '../../../components/MainPeaces/Events/Events';

import Button from '../../../components/UI/Button/Button';

const firebase =require("firebase");

class EventsHandler extends Component{

    state={
        date:'2019-01-01',
        title:'',
        color:'#000000',
        selectedFile:''
   }

   componentDidMount=()=>{
        let date=this.setDate();      
        this.setState({date:date});
   }

   setDate=() => {
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

    return String(new Date().getFullYear()+"-"+month+"-"+day);

   }

   setDefault = () =>{
        let date=this.setDate();
        
        this.setState({date:date,
            title:'',
            color:'#000000',
            selectedFile: ''  
            });
        
        window.location.reload();
   }

    fileSelectedHandler = event =>{
        this.setState({selectedFile: event.target.files[0]})
    }

    dateSelectedHandler = event =>{
        this.setState({date:event.target.value});
    }

    titleSelectedHandler = event =>{
        this.setState({title:event.target.value});
    }

    colorSelectedHandler = event => {
        this.setState({color:event.target.value});
    }

    uploadFileHandler = () =>{
        const formFile =new FormData();
        formFile.append('image', this.state.selectedFile,[this.state.title,this.state.date].join('-'));

        const storage=firebase.storage();
        const baseUrl='***';
        const crUrlT=baseUrl+this.state.title+'-'+this.state.date;
        const gsReference=storage.refFromURL(crUrlT);

        const formData={date:this.state.date, 
                        title: this.state.title,
                        color: this.state.color,
                        url:String(gsReference)};
        
        

        this.props.onUploadForm(formFile,formData);

        setTimeout(()=>{this.setDefault()},30000);

        setInterval(()=>{
            if(this.props.uploadEnd!=null){
                setTimeout(()=>{this.setDefault()},3000);
            }
        },1000);
    }

   render(){
    return(
        <div className={classes.EventsHandler}>
            <h1>Upload events</h1>
            <input type='date' className={classes.DatePicker} value={this.state.date} onChange={this.dateSelectedHandler} /><br />
            <input type='file' className={classes.FilePicker} value={this.props.selectedFile} onChange={this.fileSelectedHandler} /><br />
            <input type='text' className={classes.TitlePicker} value={this.state.title} placeholder='Title' onChange={this.titleSelectedHandler} /><br />
            <label className={classes.DatePicker}>Color of title:</label>
            <input type='color' className={classes.ColorPicker} value={this.state.color} onChange={this.colorSelectedHandler}/><br />

            {this.state.selectedFile ? <Button className={classes.Button} clicked={this.uploadFileHandler}>SAVE</Button> : <Button disabled clicked={this.uploadFileHandler}>SAVE</Button>}

            <Events />
        </div>
    );
};
};

const mapStateToProps = state =>{
    return{
        uploadEnd: state.eventUp.isUploadEnded
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onUploadForm: (formFile,formData) => dispatch(actionCreators.uploadFile(formFile,formData)),
        onGetEvent: () => dispatch(actionCreators.getEvents())
    };
};
export default connect(mapStateToProps,mapDispatchToProps) (EventsHandler);