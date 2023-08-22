import {
    ADD_LIST_PEMILIH_BARU,
    EDIT_LIST_PEMILIH_BARU,
    GET_DETAIL_LIST_PEMILIH_BARU,
    GET_LIST_PEMILIH_BARU,
    DELETE_LIST_PEMILIH_BARU
} from "../../actions/pemilihBaruActions";

const initialState = {
    addPemilihBaruResult: false,
    addPemilihBaruLoading: false,
    addPemilihBaruError: false,

    editPemilihBaruResult: false,
    editPemilihBaruLoading: false,
    editPemilihBaruError: false,

    getDetailListPemilihBaruResult: false,
    getDetailListPemilihBaruLoading: false,
    getDetailListPemilihBaruError: false,

    getListPemilihBaruResult: false,
    getListPemilihBaruLoading: false,
    getListPemilihBaruError: false,

    deletePemilihBaruResult: false,
    deletePemilihBaruLoading: false,
    deletePemilihBaruError: false,
};

const pemilihBaruReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_PEMILIH_BARU:
            return {
                ...state,
                addPemilihBaruResult: action.payload.data,
                addPemilihBaruLoading: action.payload.loading,
                addPemilihBaruError: action.payload.errorMessage,
            };

        case EDIT_LIST_PEMILIH_BARU:
            return {
                ...state,
                editPemilihBaruResult: action.payload.data,
                editPemilihBaruLoading: action.payload.loading,
                editPemilihBaruError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_PEMILIH_BARU:
            return {
                ...state,
                getDetailListPemilihBaruResult: action.payload.data,
                getDetailListPemilihBaruLoading: action.payload.loading,
                getDetailListPemilihBaruError: action.payload.errorMessage,
            };

        case GET_LIST_PEMILIH_BARU:
            return {
                ...state,
                getListPemilihBaruResult: action.payload.data,
                getListPemilihBaruLoading: action.payload.loading,
                getListPemilihBaruError: action.payload.errorMessage,
            };

        case DELETE_LIST_PEMILIH_BARU:
            return {
                ...state,
                deletePemilihBaruResult: action.payload.data,
                deletePemilihBaruLoading: action.payload.loading,
                deletePemilihBaruError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default pemilihBaruReducer;
