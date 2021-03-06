import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState ={
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    isA:()=>{
        const stringStorage=localStorage.getItem('isA');
        switch(stringStorage){
            case "true": return true;
            case "false": return false;
            default: return null;
        }
    }
    
};

const authStart= (state,action) => {
    return updateObject(state,{error: null, loading: true});
};

const authSuccess = (state, action) => {
    return updateObject(state,{
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const adminSuccess = (state,action) => {
    return updateObject(state,{
        isA:action.authAdmin
    });
};

const authFail= (state,action) => {
    return updateObject(state,{
        error: action.error, 
        loading: false
    });
};

const authLogOut = (state,action) => {
    return updateObject(state, {
        token: null, 
        userId: null,
        isA: false
    });
};

const setAuthRedirectPath = (state,action) => {
    return updateObject(state, {authRedirectPath:action.path})
};

const reducer = (state= initialState, action) => {
    switch (action.type){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.ADMIN_SUCCESS: return adminSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogOut(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
            
        default:
            return state;
    }
};

export default reducer;