import {
    ADD_LIST_FEEDBACK,
    EDIT_LIST_FEEDBACK,
    GET_DETAIL_LIST_FEEDBACK,
    GET_LIST_FEEDBACK,
    DELETE_LIST_FEEDBACK
} from "../../actions/feedbackActions";

const initialState = {
    addFeedbackResult: false,
    addFeedbackLoading: false,
    addFeedbackError: false,

    editFeedbackResult: false,
    editFeedbackLoading: false,
    editFeedbackError: false,

    getDetailListFeedbackResult: false,
    getDetailListFeedbackLoading: false,
    getDetailListFeedbackError: false,

    getListFeedbackResult: false,
    getListFeedbackLoading: false,
    getListFeedbackError: false,

    deleteFeedbackResult: false,
    deleteFeedbackLoading: false,
    deleteFeedbackError: false,
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_FEEDBACK:
            return {
                ...state,
                addFeedbackResult: action.payload.data,
                addFeedbackLoading: action.payload.loading,
                addFeedbackError: action.payload.errorMessage,
            };

        case EDIT_LIST_FEEDBACK:
            return {
                ...state,
                editFeedbackResult: action.payload.data,
                editFeedbackLoading: action.payload.loading,
                editFeedbackError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_FEEDBACK:
            return {
                ...state,
                getDetailListFeedbackResult: action.payload.data,
                getDetailListFeedbackLoading: action.payload.loading,
                getDetailListFeedbackError: action.payload.errorMessage,
            };

        case GET_LIST_FEEDBACK:
            return {
                ...state,
                getListFeedbackResult: action.payload.data,
                getListFeedbackLoading: action.payload.loading,
                getListFeedbackError: action.payload.errorMessage,
            };

        case DELETE_LIST_FEEDBACK:
            return {
                ...state,
                deleteFeedbackResult: action.payload.data,
                deleteFeedbackLoading: action.payload.loading,
                deleteFeedbackError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default feedbackReducer;
