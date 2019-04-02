import React from 'react';
import classes from './Auth.css';

import SingRegister from './SingRegister/SingRegister';

const bck4="https://firebasestorage.googleapis.com/***";
const bck5="https://firebasestorage.googleapis.com/***";

const auth = (props) => (
          <div className={classes.Auth}>

               <div className={classes.SingIn}>
                    <img src={bck4} alt="bck"></img>
                    
                    <div className={classes.SingInForm}>
                         <h1>Log in</h1>
                         <SingRegister  isSoR='singin'/>
                    </div>
               </div>

               <div className={classes.Register}>
                    <img src={bck5} alt="bck5"></img>
                    <div className={classes.RegisterForm}>
                         <h1>Register</h1>
                         <SingRegister isSoR='register'/>
                    </div>
               </div>

          </div>

);

export default auth ;