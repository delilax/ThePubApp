import axios from '../../axios-events';
import * as actionTypes from './actionTypes';

export const uploadFileSucces = () =>{
    return{
        type:actionTypes.UPLOAD_FILE_SUCCESS 
    }
}

export const uploadFileFailed = (error) =>{
    return{
        type:actionTypes.UPLOAD_FILE_FAILED,
        errror:error
    }
}

export const uploadFormDataSuccess = () =>{
    return{
        type:actionTypes.UPLOAD_FORM_DATA_SUCCESS 
    }
}

export const uploadFormDataError = (error) =>{
    return{
        type:actionTypes.UPLOAD_FORM_DATA_FAILED,
        errror:error
    }
}

export const uploadFile = (formFile,formData) =>{
    return dispatch => {
        axios.post('***',formFile, {
            onUploadProgress: progressEvent =>{
                console.log('Upload Progress ' + Math.round(progressEvent.loaded/progressEvent.total*100)+'%');
            }
        })
            .then(response => {
                dispatch(uploadFileSucces());

                axios.post('***',formData)
                    .then(response =>{
                        dispatch(uploadFormDataSuccess());
                    })
                    .catch(error =>{
                        dispatch(uploadFormDataError());
                        console.log(error);
                    });

            })
            .catch(error =>{
                dispatch(uploadFileFailed(error));
                console.log('[AdminPanem ERROR] '+error);
            });
     
        
    };
};