import * as actionTypes from '../actions/actionTypes';

const initialState={
    events:[
        {
        date:null,
        title: null,
        id:null,
        url:null
        }
    ],
    isUpdated:false,
    isDeleted:false
};


const getEventsSuccess = (state,action) =>{

    let ev=[];
    for(let key in action.events){
        ev[key]=(action.events[key]);
    };

        return{
            ...state,
            events:ev,
            isUpdated:true
            };
           

};


const reducer = (state=initialState,action) => {
    switch(action.type){
        case(actionTypes.GET_EVENTS): return getEventsSuccess(state,action);
        default: return state;
    }
};

export default reducer;



