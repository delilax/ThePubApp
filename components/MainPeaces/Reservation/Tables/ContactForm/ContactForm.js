import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../../../../../store/actions/index';
import {Redirect} from 'react-router-dom';

import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';

class ContactForm extends Component{

    state={
        controls:{
            date:{
                elementType:"textarea",
                elementConfig: {
                    type:'text',
                    min:'',
                    max:'',
                    placeholder: ''
               },
               value:this.props.date,
               validation:{
                    required: false
               },
               valid:true,
               touched:false   
            },
    
            table:{
                elementType:"textarea",
                elementConfig: {
                    type:'text',
                    min:'',
                    max:'',
                    placeholder: ''
               },
               value:this.props.table,
               validation:{
                    required: false
               },
               valid:true,
               touched:false   
            },
           numPeople:{
                elementType:"input",
                elementConfig: {
                    type:'number',
                    min:'2',
                    max:'10',
                    placeholder: 'Number of people'
               },
               value:'',
               validation:{
                    required: true,
                    isNumeric: true,
                    isNotEmpty: true
               },
               valid:false,
               touched:false   
            },

            name:{
                elementType:"input",
                elementConfig: {
                    type:'text',
                    min:'',
                    max:'',
                    placeholder: 'Name'
               },
               value:'',
               validation:{
                    required: true,
                    minLength:4,
                    isNotEmpty: true
               },
               valid:false,
               touched:false   
            },

            lastname:{
                elementType:"input",
                elementConfig: {
                    type:'text',
                    min:'',
                    max:'',
                    placeholder: 'Last Name'
               },
               value:'',
               validation:{
                    required: true,
                    minLength:4,
                    isNotEmpty: true
               },
               valid:false,
               touched:false   
            },

            phone:{
                elementType:"input",
                elementConfig: {
                    type:'number',
                    min:'',
                    max:'',
                    placeholder: 'Phone number'
               },
               value:'',
               validation:{
                    required: true,
                    isNumeric: true,
                    minLength:9,
                    isNotEmpty: true
               },
               valid:false,
               touched:false   
            }
        },
    }

    checkValidity ( value, rules ) {
        let isValid = true;

        if ( !rules ) {
            // console.log(!rules);
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
            // console.log("[Is required ]"+isValid);
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid;
            // console.log(value+" "+!rules.minLength+" "+isValid);
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid;
            // console.log(!rules.maxLength+" "+isValid);
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid;
            // console.log(!rules.isEmail+" "+isValid);
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid;
            // console.log(!rules.isNumeric+" "+isValid);
        }

        return isValid;
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
    
    componentWillUpdate=()=>{
        // console.log("[willUpdate ContactForm]"+this.props.date);
        // console.log("[willUpdate ContactForm]"+this.props.table);
    }

    uploadFormHandler = () =>{
        // console.log("upload");
        // console.log(this.state);

        const newState={
            date:this.state.controls.date.value,
            table:this.state.controls.table.value,
            numPeople:this.state.controls.numPeople.value,
            name:this.state.controls.name.value,
            lastname:this.state.controls.lastname.value,
            phone:this.state.controls.phone.value
        }

        // console.log(newState);
        this.props.onUploadForm(newState);


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
            });
            let buttonDisabled=buttonArray.includes('disabled');
            // console.log(buttonArray);
            // console.log(buttonDisabled);




        return(
            <div>
                {this.props.onSave ? <Redirect to={this.props.onSave}/> : null}
                {form}
                {buttonDisabled ? <Button disabled clicked={this.uploadFormHandler}>Save</Button> :
                <Button clicked={this.uploadFormHandler}>Save</Button>}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        onSave: state.reservation.resPath
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        onUploadForm: (contactForm) => dispatch(actionCreator.uploadContactForm(contactForm))
    }
}

export default connect(mapStateToProps,mapDispatchtoProps) (ContactForm);