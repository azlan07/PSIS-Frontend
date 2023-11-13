import {
    ADD_LIST_SKCK,
    EDIT_LIST_SKCK,
    GET_DETAIL_LIST_SKCK,
    GET_LIST_SKCK,
    DELETE_LIST_SKCK
} from "../../actions/skckActions";

const initialState = {
    addSkckResult: false,
    addSkckLoading: false,
    addSkckError: false,

    editSkckResult: false,
    editSkckLoading: false,
    editSkckError: false,

    getDetailListSkckResult: false,
    getDetailListSkckLoading: false,
    getDetailListSkckError: false,

    getListSkckResult: false,
    getListSkckLoading: false,
    getListSkckError: false,

    deleteSkckResult: false,
    deleteSkckLoading: false,
    deleteSkckError: false,
};

const skckReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_SKCK:
            return {
                ...state,
                addSkckResult: action.payload.data,
                addSkckLoading: action.payload.loading,
                addSkckError: action.payload.errorMessage,
            };

        case EDIT_LIST_SKCK:
            return {
                ...state,
                editSkckResult: action.payload.data,
                editSkckLoading: action.payload.loading,
                editSkckError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_SKCK:
            return {
                ...state,
                getDetailListSkckResult: action.payload.data,
                getDetailListSkckLoading: action.payload.loading,
                getDetailListSkckError: action.payload.errorMessage,
            };

        case GET_LIST_SKCK:
            return {
                ...state,
                getListSkckResult: action.payload.data,
                getListSkckLoading: action.payload.loading,
                getListSkckError: action.payload.errorMessage,
            };

        case DELETE_LIST_SKCK:
            return {
                ...state,
                deleteSkckResult: action.payload.data,
                deleteSkckLoading: action.payload.loading,
                deleteSkckError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default skckReducer;
