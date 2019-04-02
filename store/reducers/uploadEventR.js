import * as actionTypes from '../actions/actionTypes';

const initialState={
        date:'date',
        title:'time',
        color:'color',
        isFileUploaded: false,
        isUploadEnded:null
};

const uploadFileSuccess = (state,action) =>{
    return{
        ...state,
        isFileUploaded:true
    };
};

const uploadFileFailed = (state,action) => {
    return null;
};

const uploadFormDataSuccess = (state,action) =>{
    return{
        ...state,
        isUploadEnded:true
    };
};

const uploadFormDataFailed = (state,action) => {
    return {
        ...state,
        isUploadEnded:false
    };
};

const reducer = (state = initialState,action) => {
        switch(action.type){
            case(actionTypes.UPLOAD_FILE_SUCCESS): return uploadFileSuccess(state,action);
            case(actionTypes.UPLOAD_FILE_FAILED): return uploadFileFailed(state,action);
            case(actionTypes.UPLOAD_FORM_DATA_SUCCESS): return uploadFormDataSuccess(state,action);
            case(actionTypes.UPLOAD_FORM_DATA_FAILED): return uploadFormDataFailed(state,action);
            default: return state;
        }
};

export default reducer;