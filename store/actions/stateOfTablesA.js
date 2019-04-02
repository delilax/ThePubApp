import * as actionTypes from './actionTypes';

export const stateOfTable = (table) =>{
    return{
        type:actionTypes.STATE_OF_TABLE,
        table:table
    }
}

export const stateOfTableDelete = (table) =>{
    return{
        type:actionTypes.STATE_OF_TABLE_DELETE
    }
}