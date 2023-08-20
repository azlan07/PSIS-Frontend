import {
    ADD_LIST_SUREK,
    EDIT_LIST_SUREK,
    GET_DETAIL_LIST_SUREK,
    GET_LIST_SUREK,
    DELETE_LIST_SUREK
} from "../../actions/surekActions";

const initialState = {
    addSurekResult: false,
    addSurekLoading: false,
    addSurekError: false,

    editSurekResult: false,
    editSurekLoading: false,
    editSurekError: false,

    getDetailListSurekResult: false,
    getDetailListSurekLoading: false,
    getDetailListSurekError: false,

    getListSurekResult: false,
    getListSurekLoading: false,
    getListSurekError: false,

    deleteSurekResult: false,
    deleteSurekLoading: false,
    deleteSurekError: false,
};

const surekReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_SUREK:
            return {
                ...state,
                addSurekResult: action.payload.data,
                addSurekLoading: action.payload.loading,
                addSurekError: action.payload.errorMessage,
            };

        case EDIT_LIST_SUREK:
            return {
                ...state,
                editSurekResult: action.payload.data,
                editSurekLoading: action.payload.loading,
                editSurekError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_SUREK:
            return {
                ...state,
                getDetailListSurekResult: action.payload.data,
                getDetailListSurekLoading: action.payload.loading,
                getDetailListSurekError: action.payload.errorMessage,
            };

        case GET_LIST_SUREK:
            return {
                ...state,
                getListSurekResult: action.payload.data,
                getListSurekLoading: action.payload.loading,
                getListSurekError: action.payload.errorMessage,
            };

        case DELETE_LIST_SUREK:
            return {
                ...state,
                deleteSurekResult: action.payload.data,
                deleteSurekLoading: action.payload.loading,
                deleteSurekError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default surekReducer;
