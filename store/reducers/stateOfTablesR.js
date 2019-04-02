import * as actionTypes from '../actions/actionTypes';

const initialState={
    table1:true,
    table2:true,
    table3:true,
    table4:true,
    table5:true,
    table6:true,
    table7:true,
    table8:true,
    table9:true,
    table10:true,
    table11:true,
    table12:true,
    table13:true,
    table14:true,
    table15:true,
    table16:true
}

export const stateOfTable = (state,action) =>{
    return{
        ...state,
        [action.table]:false
    }
}

export const stateOfTableDelete = (state,action) =>{
    return{
        ...state,
        table1:true,
        table2:true,
        table3:true,
        table4:true,
        table5:true,
        table6:true,
        table7:true,
        table8:true,
        table9:true,
        table10:true,
        table11:true,
        table12:true,
        table13:true,
        table14:true,
        table15:true,
        table16:true
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case(actionTypes.STATE_OF_TABLE): return stateOfTable(state,action);
        case(actionTypes.STATE_OF_TABLE_DELETE): return stateOfTableDelete(state,action);
        default: return state;
    }
};

export default reducer;