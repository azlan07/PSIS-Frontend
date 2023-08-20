import {
    ADD_LIST_PENGAJUAN,
    EDIT_LIST_PENGAJUAN,
    GET_DETAIL_LIST_PENGAJUAN,
    GET_LIST_PENGAJUAN,
    DELETE_LIST_PENGAJUAN
} from "../../actions/pengajuanActions";

const initialState = {
    addPengajuanResult: false,
    addPengajuanLoading: false,
    addPengajuanError: false,

    editPengajuanResult: false,
    editPengajuanLoading: false,
    editPengajuanError: false,

    getDetailListPengajuanResult: false,
    getDetailListPengajuanLoading: false,
    getDetailListPengajuanError: false,

    getListPengajuanResult: false,
    getListPengajuanLoading: false,
    getListPengajuanError: false,

    deletePengajuanResult: false,
    deletePengajuanLoading: false,
    deletePengajuanError: false,
};

const pengajuanReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_PENGAJUAN:
            return {
                ...state,
                addPengajuanResult: action.payload.data,
                addPengajuanLoading: action.payload.loading,
                addPengajuanError: action.payload.errorMessage,
            };

        case EDIT_LIST_PENGAJUAN:
            return {
                ...state,
                editPengajuanResult: action.payload.data,
                editPengajuanLoading: action.payload.loading,
                editPengajuanError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_PENGAJUAN:
            return {
                ...state,
                getDetailListPengajuanResult: action.payload.data,
                getDetailListPengajuanLoading: action.payload.loading,
                getDetailListPengajuanError: action.payload.errorMessage,
            };

        case GET_LIST_PENGAJUAN:
            return {
                ...state,
                getListPengajuanResult: action.payload.data,
                getListPengajuanLoading: action.payload.loading,
                getListPengajuanError: action.payload.errorMessage,
            };

        case DELETE_LIST_PENGAJUAN:
            return {
                ...state,
                deletePengajuanResult: action.payload.data,
                deletePengajuanLoading: action.payload.loading,
                deletePengajuanError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default pengajuanReducer;
