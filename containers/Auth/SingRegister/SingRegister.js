import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import classes from './SingRegister.css';
import Input from '../../../components/UI/Input/Input';
import * as actionContainer from '../../../store/actions/index';
import Button from '../../../components/UI/Button/Button';




class Register extends Component{

    state= {
        modalReset:false,
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
             isSignUp: this.props.isSoR
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

    componentDidMount(){
        alert("Log in as administrator to see Admin Page");
    }

    componentDidUpdate =()=>{
        if(this.props.isAuthenticated){
            this.props.onSetAuthRedirectPath();
        }
    }
    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

   render(){
   
    const formELementsArray=[];
        for (let key in this.state.controls){
            formELementsArray.push({
                id:key,
                config: this.state.controls[key]
            });
        }

        let form=formELementsArray.map(formElement =>(
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value} 
                shouldValidate={formElement.config.validation}
                invalid={formElement.config.touched && !formElement.config.valid}
                changed={(event)=> this.inputChangedHandler(event,formElement.id)}/>
        ));

        let buttonArray=[];
        formELementsArray.map(formElement =>{
                if(!formElement.config.valid){
                    buttonArray.push('disabled');
                }
                return null;
            });

        let buttonDisabled=buttonArray.includes('disabled');

        let authRedirect=null;
        if(this.props.isAuthenticated){
            authRedirect=<Redirect to={this.props.authRedirectPath} />
        }

       return(
            <div className={classes.Register}>
            {authRedirect}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button disabled={buttonDisabled}>SUBMIT</Button>
                </form>
            </div>
   )};
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (name, email, isSignUp) => dispatch(actionContainer.auth(name, email, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actionContainer.setAuthRedirectPath('/'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Register);
     
