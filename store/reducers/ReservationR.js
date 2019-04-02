import * as actionTypes from '../actions/actionTypes';

const initialState={
    reservations:[
        {
        date:null,
        name:null,
        numPeople:null,
        phone:null,
        lastname:null,
        table:null
        }
    ],
    resPath:null

}

const uploadReservationSuccess= (state,action) =>{
    return{
        ...state,
        resPath:'/thankyou'
    }
}

const uploadReservationFailed= (state,action) =>{
    return{
        ...state,
        resPath:'/thankyoufailed'
    }
}

const resetPathReservation = (state,action) =>{
    return{
        ...state,
        resPath:'/'
    }
}

const downloadReservationSuccess=(state,action)=>{
    let res=[];
    for(let key in action.reservations){
        res[key]=(action.reservations[key]);
    };

    return{
        ...state,
        reservations:res
    }
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        case(actionTypes.UPLOAD_RESERVATION_SUCCESS): return uploadReservationSuccess(state,action);
        case(actionTypes.UPLOAD_RESERVATION_FAILED): return uploadReservationFailed(state,action);
        case(actionTypes.DOWNLOAD_RESERVATION_SUCCESS): return downloadReservationSuccess(state,action);
        case(actionTypes.RESET_PATH_RESERVATION): return resetPathReservation(state,action);
        default: return state;
    }
};

export default reducer;