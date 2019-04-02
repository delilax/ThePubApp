import React, {Component} from 'react';
import classes from './SingIn.css';

class SingIn extends Component{

    state= {
        controls: {
             email: {
                  elementType: 'input',
                  elementConfig: {
                       type: 'email',
                       placeholder: 'E-mail address'
                  },
                  value:'',
                  validation:{
                       required: true,
                       isEmail: true
                  },
                  valid:false,
                  touched:false
             },
             password: {
                  elementType: 'input',
                  elementConfig: {
                       type: 'password',
                       placeholder: 'Password'
                  },
                  value:'',
                  validation:{
                       required: true,
                       minLength: 6
                  },
                  valid:false,
                  touched:false
             }
             },
             isSignUp: true
        }

        checkValidity ( value, rules ) {
             let isValid = true;
             if ( !rules ) {
                 return true;
             }
     
             if ( rules.required ) {
                 isValid = value.trim() !== '' && isValid;
             }
     
             if ( rules.minLength ) {
                 isValid = value.length >= rules.minLength && isValid
             }
     
             if ( rules.maxLength ) {
                 isValid = value.length <= rules.maxLength && isValid
             }
     
             if ( rules.isEmail ) {
                 const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                 isValid = pattern.test( value ) && isValid
             }
     
             if ( rules.isNumeric ) {
                 const pattern = /^\d+$/;
                 isValid = pattern.test( value ) && isValid
             }
     
             return isValid;
         }

    render(){
        return(
            <div className={classes.SingIn}>SingIN</div>
        )};
};

export default SingIn ;

