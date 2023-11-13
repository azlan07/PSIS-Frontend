import {
    ADD_LIST_SKTM,
    EDIT_LIST_SKTM,
    GET_DETAIL_LIST_SKTM,
    GET_LIST_SKTM,
    DELETE_LIST_SKTM
} from "../../actions/sktmActions";

const initialState = {
    addSktmResult: false,
    addSktmLoading: false,
    addSktmError: false,

    editSktmResult: false,
    editSktmLoading: false,
    editSktmError: false,

    getDetailListSktmResult: false,
    getDetailListSktmLoading: false,
    getDetailListSktmError: false,

    getListSktmResult: false,
    getListSktmLoading: false,
    getListSktmError: false,

    deleteSktmResult: false,
    deleteSktmLoading: false,
    deleteSktmError: false,
};

const sktmReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_SKTM:
            return {
                ...state,
                addSktmResult: action.payload.data,
                addSktmLoading: action.payload.loading,
                addSktmError: action.payload.errorMessage,
            };

        case EDIT_LIST_SKTM:
            return {
                ...state,
                editSktmResult: action.payload.data,
                editSktmLoading: action.payload.loading,
                editSktmError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_SKTM:
            return {
                ...state,
                getDetailListSktmResult: action.payload.data,
                getDetailListSktmLoading: action.payload.loading,
                getDetailListSktmError: action.payload.errorMessage,
            };

        case GET_LIST_SKTM:
            return {
                ...state,
                getListSktmResult: action.payload.data,
                getListSktmLoading: action.payload.loading,
                getListSktmError: action.payload.errorMessage,
            };

        case DELETE_LIST_SKTM:
            return {
                ...state,
                deleteSktmResult: action.payload.data,
                deleteSktmLoading: action.payload.loading,
                deleteSktmError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default sktmReducer;
