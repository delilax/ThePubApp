import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import GridLayout from 'react-grid-layout';

import classes from './Tables.css';
import Table from './Table/Table';
import * as TableGrid from './TableGridIndex';
import ModalContactForm from '../../../UI/Modal/Modal';
import ContactForm from './ContactForm/ContactForm';


class blueprint extends Component{

    state={
        isShownModalForm:false,
        table:null,
        contact:null,
        authRedirect:null,
        redirect:null
    }

   onClickedTableHandler=(table)=>{
        if(this.props.isAuthenticated){
            this.setState({isShownModalForm:true,
                                table:table,
                                contact:<ContactForm table={table} date={this.props.date}/>});
        }
        else {
            this.setState({redirect:<Redirect to='/sing-in'></Redirect>});
    }
}
            // this.setState({isShownModalForm:true,
            //                     contact:<Auth/>});
            
   reservationCancelHandler=()=>{
    this.setState({isShownModalForm:false,
                    table:null,
                    contact:null});
   }

    render(){

        return(
            <div className={classes.DivGrid}>
                    <GridLayout className="layout" layout={TableGrid.layout} cols={4} rowHeight={5} width={800}>

                    <div className={classes.Table} key={TableGrid.tables.t1} onClick={this.props.tab.table1 ? ()=>this.onClickedTableHandler(TableGrid.tables.t1) : null} ><Table id={TableGrid.tables.t1} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t2} onClick={this.props.tab.table2 ? ()=>this.onClickedTableHandler(TableGrid.tables.t2) : null} ><Table id={TableGrid.tables.t2} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t3} onClick={this.props.tab.table3 ? ()=>this.onClickedTableHandler(TableGrid.tables.t3) : null} ><Table id={TableGrid.tables.t3} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t4} onClick={this.props.tab.table4 ? ()=>this.onClickedTableHandler(TableGrid.tables.t4) : null} ><Table id={TableGrid.tables.t4} /></div>
            
                    <div className={classes.Table} key={TableGrid.tables.t5} onClick={this.props.tab.table5 ? ()=>this.onClickedTableHandler(TableGrid.tables.t5) : null} ><Table id={TableGrid.tables.t5} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t6} onClick={this.props.tab.table6 ? ()=>this.onClickedTableHandler(TableGrid.tables.t6) : null} ><Table id={TableGrid.tables.t6} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t7} onClick={this.props.tab.table7 ? ()=>this.onClickedTableHandler(TableGrid.tables.t7) : null} ><Table id={TableGrid.tables.t7} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t8} onClick={this.props.tab.table8 ? ()=>this.onClickedTableHandler(TableGrid.tables.t8) : null} ><Table id={TableGrid.tables.t8} /></div>
            
                    <div className={classes.Table} key={TableGrid.tables.t9} onClick={this.props.tab.table9 ? ()=>this.onClickedTableHandler(TableGrid.tables.t9) : null} ><Table id={TableGrid.tables.t9} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t10} onClick={this.props.tab.table10 ? ()=>this.onClickedTableHandler(TableGrid.tables.t10) : null} ><Table id={TableGrid.tables.t10} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t11} onClick={this.props.tab.table11 ? ()=>this.onClickedTableHandler(TableGrid.tables.t11) : null} ><Table id={TableGrid.tables.t11} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t12} onClick={this.props.tab.table12 ? ()=>this.onClickedTableHandler(TableGrid.tables.t12) : null} ><Table id={TableGrid.tables.t12} /></div>
            
                    <div className={classes.Table} key={TableGrid.tables.t13} onClick={this.props.tab.table13 ? ()=>this.onClickedTableHandler(TableGrid.tables.t13) : null} ><Table id={TableGrid.tables.t13} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t14} onClick={this.props.tab.table14 ? ()=>this.onClickedTableHandler(TableGrid.tables.t14) : null} ><Table id={TableGrid.tables.t14} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t15} onClick={this.props.tab.table15 ? ()=>this.onClickedTableHandler(TableGrid.tables.t15) : null} ><Table id={TableGrid.tables.t15} /></div>
                    <div className={classes.Table} key={TableGrid.tables.t16} onClick={this.props.tab.table16 ? ()=>this.onClickedTableHandler(TableGrid.tables.t16) : null} ><Table id={TableGrid.tables.t16} /></div>
            
                </GridLayout>

                <ModalContactForm show={this.state.isShownModalForm} modalClosed={this.reservationCancelHandler}>
                    {this.state.contact}
                </ModalContactForm>

                {this.state.redirect}
         </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        tab: state.stateTable,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}


export default connect(mapStateToProps) (blueprint);