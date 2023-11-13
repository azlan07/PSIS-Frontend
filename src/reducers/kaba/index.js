import {
    ADD_LIST_KABA,
    EDIT_LIST_KABA,
    GET_DETAIL_LIST_KABA,
    GET_LIST_KABA,
    DELETE_LIST_KABA
} from "../../actions/kabaActions";

const initialState = {
    addKabaResult: false,
    addKabaLoading: false,
    addKabaError: false,

    editKabaResult: false,
    editKabaLoading: false,
    editKabaError: false,

    getDetailListKabaResult: false,
    getDetailListKabaLoading: false,
    getDetailListKabaError: false,

    getListKabaResult: false,
    getListKabaLoading: false,
    getListKabaError: false,

    deleteKabaResult: false,
    deleteKabaLoading: false,
    deleteKabaError: false,
};

const kabaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_KABA:
            return {
                ...state,
                addKabaResult: action.payload.data,
                addKabaLoading: action.payload.loading,
                addKabaError: action.payload.errorMessage,
            };

        case EDIT_LIST_KABA:
            return {
                ...state,
                editKabaResult: action.payload.data,
                editKabaLoading: action.payload.loading,
                editKabaError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_KABA:
            return {
                ...state,
                getDetailListKabaResult: action.payload.data,
                getDetailListKabaLoading: action.payload.loading,
                getDetailListKabaError: action.payload.errorMessage,
            };

        case GET_LIST_KABA:
            return {
                ...state,
                getListKabaResult: action.payload.data,
                getListKabaLoading: action.payload.loading,
                getListKabaError: action.payload.errorMessage,
            };

        case DELETE_LIST_KABA:
            return {
                ...state,
                deleteKabaResult: action.payload.data,
                deleteKabaLoading: action.payload.loading,
                deleteKabaError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default kabaReducer;
