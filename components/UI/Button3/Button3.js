import React from 'react';
import classes from './Button3.css';

const button = (props) => (
    <button 
    disabled={props.disabled}
    // className={[classes.Button,classes[props.btnType]].join(' ')}
    className={classes.Button}
    onClick={props.clicked}>{props.children}</button>
);

export default button;