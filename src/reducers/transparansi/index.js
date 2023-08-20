import {
    ADD_LIST_TRANSPARANSI,
    EDIT_LIST_TRANSPARANSI,
    GET_DETAIL_LIST_TRANSPARANSI,
    GET_LIST_TRANSPARANSI,
    DELETE_LIST_TRANSPARANSI
} from "../../actions/transparansiActions";

const initialState = {
    addTransparansiResult: false,
    addTransparansiLoading: false,
    addTransparansiError: false,

    editTransparansiResult: false,
    editTransparansiLoading: false,
    editTransparansiError: false,

    getDetailListTransparansiResult: false,
    getDetailListTransparansiLoading: false,
    getDetailListTransparansiError: false,

    getListTransparansiResult: false,
    getListTransparansiLoading: false,
    getListTransparansiError: false,

    deleteTransparansiResult: false,
    deleteTransparansiLoading: false,
    deleteTransparansiError: false,
};

const transparansiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_TRANSPARANSI:
            return {
                ...state,
                addTransparansiResult: action.payload.data,
                addTransparansiLoading: action.payload.loading,
                addTransparansiError: action.payload.errorMessage,
            };

        case EDIT_LIST_TRANSPARANSI:
            return {
                ...state,
                editTransparansiResult: action.payload.data,
                editTransparansiLoading: action.payload.loading,
                editTransparansiError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_TRANSPARANSI:
            return {
                ...state,
                getDetailListTransparansiResult: action.payload.data,
                getDetailListTransparansiLoading: action.payload.loading,
                getDetailListTransparansiError: action.payload.errorMessage,
            };

        case GET_LIST_TRANSPARANSI:
            return {
                ...state,
                getListTransparansiResult: action.payload.data,
                getListTransparansiLoading: action.payload.loading,
                getListTransparansiError: action.payload.errorMessage,
            };

        case DELETE_LIST_TRANSPARANSI:
            return {
                ...state,
                deleteTransparansiResult: action.payload.data,
                deleteTransparansiLoading: action.payload.loading,
                deleteTransparansiError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default transparansiReducer;
