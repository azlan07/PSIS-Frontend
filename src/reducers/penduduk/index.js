import {
    ADD_LIST_PENDUDUK,
    EDIT_LIST_PENDUDUK,
    GET_DETAIL_LIST_PENDUDUK,
    GET_LIST_PENDUDUK,
    DELETE_LIST_PENDUDUK
} from "../../actions/pendudukActions";

const initialState = {
    addPendudukResult: false,
    addPendudukLoading: false,
    addPendudukError: false,

    editPendudukResult: false,
    editPendudukLoading: false,
    editPendudukError: false,

    getDetailListPendudukResult: false,
    getDetailListPendudukLoading: false,
    getDetailListPendudukError: false,

    getListPendudukResult: false,
    getListPendudukLoading: false,
    getListPendudukError: false,

    deletePendudukResult: false,
    deletePendudukLoading: false,
    deletePendudukError: false,
};

const pendudukReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_PENDUDUK:
            return {
                ...state,
                addPendudukResult: action.payload.data,
                addPendudukLoading: action.payload.loading,
                addPendudukError: action.payload.errorMessage,
            };

        case EDIT_LIST_PENDUDUK:
            return {
                ...state,
                editPendudukResult: action.payload.data,
                editPendudukLoading: action.payload.loading,
                editPendudukError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_PENDUDUK:
            return {
                ...state,
                getDetailListPendudukResult: action.payload.data,
                getDetailListPendudukLoading: action.payload.loading,
                getDetailListPendudukError: action.payload.errorMessage,
            };

        case GET_LIST_PENDUDUK:
            return {
                ...state,
                getListPendudukResult: action.payload.data,
                getListPendudukLoading: action.payload.loading,
                getListPendudukError: action.payload.errorMessage,
            };

        case DELETE_LIST_PENDUDUK:
            return {
                ...state,
                deletePendudukResult: action.payload.data,
                deletePendudukLoading: action.payload.loading,
                deletePendudukError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default pendudukReducer;
