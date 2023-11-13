import {
    ADD_LIST_LAPOR,
    EDIT_LIST_LAPOR,
    GET_DETAIL_LIST_LAPOR,
    GET_LIST_LAPOR,
    DELETE_LIST_LAPOR
} from "../../actions/laporActions";

const initialState = {
    addLaporResult: false,
    addLaporLoading: false,
    addLaporError: false,

    editLaporResult: false,
    editLaporLoading: false,
    editLaporError: false,

    getDetailListLaporResult: false,
    getDetailListLaporLoading: false,
    getDetailListLaporError: false,

    getListLaporResult: false,
    getListLaporLoading: false,
    getListLaporError: false,

    deleteLaporResult: false,
    deleteLaporLoading: false,
    deleteLaporError: false,
};

const laporReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_LAPOR:
            return {
                ...state,
                addLaporResult: action.payload.data,
                addLaporLoading: action.payload.loading,
                addLaporError: action.payload.errorMessage,
            };

        case EDIT_LIST_LAPOR:
            return {
                ...state,
                editLaporResult: action.payload.data,
                editLaporLoading: action.payload.loading,
                editLaporError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_LAPOR:
            return {
                ...state,
                getDetailListLaporResult: action.payload.data,
                getDetailListLaporLoading: action.payload.loading,
                getDetailListLaporError: action.payload.errorMessage,
            };

        case GET_LIST_LAPOR:
            return {
                ...state,
                getListLaporResult: action.payload.data,
                getListLaporLoading: action.payload.loading,
                getListLaporError: action.payload.errorMessage,
            };

        case DELETE_LIST_LAPOR:
            return {
                ...state,
                deleteLaporResult: action.payload.data,
                deleteLaporLoading: action.payload.loading,
                deleteLaporError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default laporReducer;
