import {
    ADD_LIST_UPLOAD_SUREK,
    EDIT_LIST_UPLOAD_SUREK,
    GET_DETAIL_LIST_UPLOAD_SUREK,
    GET_LIST_UPLOAD_SUREK,
    DELETE_LIST_UPLOAD_SUREK
} from "../../actions/uploadSurekActions";

const initialState = {
    addUploadSurekResult: false,
    addUploadSurekLoading: false,
    addUploadSurekError: false,

    editUploadSurekResult: false,
    editUploadSurekLoading: false,
    editUploadSurekError: false,

    getDetailListUploadSurekResult: false,
    getDetailListUploadSurekLoading: false,
    getDetailListUploadSurekError: false,

    getListUploadSurekResult: false,
    getListUploadSurekLoading: false,
    getListUploadSurekError: false,

    deleteUploadSurekResult: false,
    deleteUploadSurekLoading: false,
    deleteUploadSurekError: false,
};

const uploadSurekReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_UPLOAD_SUREK:
            return {
                ...state,
                addUploadSurekResult: action.payload.data,
                addUploadSurekLoading: action.payload.loading,
                addUploadSurekError: action.payload.errorMessage,
            };

        case EDIT_LIST_UPLOAD_SUREK:
            return {
                ...state,
                editUploadSurekResult: action.payload.data,
                editUploadSurekLoading: action.payload.loading,
                editUploadSurekError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_UPLOAD_SUREK:
            return {
                ...state,
                getDetailListUploadSurekResult: action.payload.data,
                getDetailListUploadSurekLoading: action.payload.loading,
                getDetailListUploadSurekError: action.payload.errorMessage,
            };

        case GET_LIST_UPLOAD_SUREK:
            return {
                ...state,
                getListUploadSurekResult: action.payload.data,
                getListUploadSurekLoading: action.payload.loading,
                getListUploadSurekError: action.payload.errorMessage,
            };

        case DELETE_LIST_UPLOAD_SUREK:
            return {
                ...state,
                deleteUploadSurekResult: action.payload.data,
                deleteUploadSurekLoading: action.payload.loading,
                deleteUploadSurekError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default uploadSurekReducer;
