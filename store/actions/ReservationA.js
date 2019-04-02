import axios from 'axios';
import * as actionTypes from './actionTypes';


export const uploadContactFormSuccess = () =>{
    return{
        type:actionTypes.UPLOAD_RESERVATION_SUCCESS
    }
}

export const uploadContactFormFailed = () =>{
    return{
        type:actionTypes.UPLOAD_RESERVATION_FAILED
    }
}

export const uploadContactForm = (contactForm) =>{
    return dispatch =>{
        axios.post('***',contactForm)
            .then(response =>{
                dispatch(uploadContactFormSuccess());
            })
            .catch(error =>{
                console.log(error);
                dispatch(uploadContactFormFailed());
            })
    }
}

export const downloadReservationSuccess = (reservations) =>{
    return{
        type:actionTypes.DOWNLOAD_RESERVATION_SUCCESS,
        reservations:reservations
    }
}

export const downloadReservationFailed = (reservations) =>{
    return{
        type:actionTypes.DOWNLOAD_RESERVATION_FAILED
    }
}

export const downloadReservations = (date) =>{
    return dispatch=>{
        axios.get('***')
            .then(response =>{

                let fetchOrders=[];
                for(let key in response.data){
                    if(response.data[key].date===date){
                        
                        fetchOrders.push({
                        ...response.data[key],
                        id:key
                        })
                    }
                }
                dispatch(downloadReservationSuccess(fetchOrders));
            })

            .catch(error =>{
                console.log(error);
                dispatch(downloadReservationFailed(error));
            })
    }
}

export const resetPathReservation = () =>{
    return{
        type:actionTypes.RESET_PATH_RESERVATION
    }
}

export const deleteReservation = (id) =>{
    return dispatch =>{
        axios.delete(`${"***"}/${id}.json`)
        .then(response=>{
            return ('success');
        })
        .catch(error=>{
            console.log(error);
            return ('error');
        })
    }
}