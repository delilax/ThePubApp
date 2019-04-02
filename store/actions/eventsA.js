import axios from '../../axios-events';
import * as actionTypes from './actionTypes';
const firebase =require("firebase");



export const getEventsSuccess = (events) => {
    return {
        type:actionTypes.GET_EVENTS,
        events:events
    };
};


export const getEventsFailed = () =>{
    return {
        type: actionTypes.GET_EVENTS_FAILED
    };
};

export const getEvents = () => {

    return dispatch => {
        axios.get('***')
		.then(response =>{

            let fetchOrders=[];
            for(let key in response.data){
                fetchOrders.push({
                    ...response.data[key],
                    id:key
                });
            }
            
            // deep clone of array !!!!! important !!!!!
            let newFetchOrders= JSON.parse(JSON.stringify(fetchOrders));


            for(let key in fetchOrders){
                const newUrl=fetchOrders[key].url;

                const storage=firebase.storage();
                const gsReference=storage.refFromURL(newUrl)
                gsReference.getDownloadURL()
                    .then(url =>{
                        newFetchOrders[key].url=url;  
                        dispatch (getEventsSuccess(newFetchOrders));
                    })
                    .catch(err =>{
                        console.log(err);
                });
                
                
            }   
            
        })
             
        .catch(error => {
            dispatch (getEventsFailed());
        });

    };
};

export const finishGetEvents = () => {
    return {
        type: actionTypes.FINISHED_GET_EVENTS
    };
}

export const deleteEvents = (id) =>{
    return dispatch =>{
        axios.delete(`${"***"}/${id}.json`)
        .then(response =>{
            return ('success');
        })
        .catch(error =>{
            console.log(error);
            return ("error");
        })
    }
}