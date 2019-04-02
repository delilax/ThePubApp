import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId,ad) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        ad:ad
    };
};

export const adminSuccess = (admin) => {
        let newBooleanIsA=null;
        switch(admin){
            case "true": newBooleanIsA=true;break;
            case "false": newBooleanIsA=false;break;
            default: newBooleanIsA=null;
        }

    return {
        type:actionTypes.ADMIN_SUCCESS,
        authAdmin:newBooleanIsA
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userID');
    return{
        type: actionTypes.AUTH_LOGOUT
    };
};
export const checkAuthTimeout = (expirationDate) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logOut());
        },expirationDate*1000);
    };
};

export const authCheckState = (isAdmin) =>{
    return dispatch =>{
        const token=localStorage.getItem('token');
        if (!token){        
            dispatch(logOut());
        } else {
            const expirationDate=new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()){
                const userId=localStorage.getItem('userID');
                dispatch(authSuccess(token,userId)); 
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000));
                const authAdmin=localStorage.getItem('isA');
                dispatch(adminSuccess(authAdmin));
            } else {
                dispatch(logOut());
            }
        }
    }
}


export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch (authStart());
        const authData={
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url=null;
        if(isSignUp==='register'){
            url='***';
        }
        else if(isSignUp==='singin'){
            url='***U';
        }
        else{
            console.log('wrong url');
        }

        axios.post(url, authData)
             .then(response => {

                const expirationDate=new Date(new Date().getTime() + response.data.expiresIn * 1000);
                 localStorage.setItem('token',response.data.idToken);
                 localStorage.setItem('expirationDate',expirationDate);
                 localStorage.setItem('userID',response.data.localId);

                 axios.get('***')
                    .then(res=>{
                        if(response.data.email===res.data){
                            localStorage.setItem('isA',true);
                            dispatch(authSuccess(response.data.idToken,response.data.localId));
                            dispatch(adminSuccess("true"));                            
                        } else{
                        localStorage.setItem('isA',false);
                        dispatch(adminSuccess("false"));
                        }
                       
                    })
                    
                 dispatch(authSuccess(response.data.idToken,response.data.localId));
                 dispatch(checkAuthTimeout(response.data.expiresIn));
             })
             .catch(err =>{
                 dispatch(authFail(err.response.data.error.message));
             })

    };
};

export const setAuthRedirectPath= (path) => {
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    };
};