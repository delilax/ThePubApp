import React from 'react';
import classes from './Event.css';
const event = (props) => {

    const style={
        color:props.color
    }

    const year=props.date.substr(0,4);
    const month=props.date.substr(5,2);
    const day=props.date.substr(8,2);

    return (
        <div className={classes.Event} >
            <div className={classes.Box}>
                <img alt="" src={props.image}/>
                <div  className={classes.TitleHeader} style={style}>{props.title}</div>
                <div className={classes.DateHeder} style={style}>{day+'.'+month+'.'+year+'.'}</div>
            </div>
            {props.isAdm ? <button onClick={props.delete}>Delete</button> : null}
        </div>
        
    )
};

export default event ;