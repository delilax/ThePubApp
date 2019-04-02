import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <div className={classes.NavigationItem}>
        <NavLink className={classes.NavLinks} to={props.link} exact={props.exact}>{props.children}</NavLink>
    </div>
);

export default navigationItem ;