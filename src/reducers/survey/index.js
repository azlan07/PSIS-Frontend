import {
    ADD_LIST_SURVEY_KEPUASAN,
    EDIT_LIST_SURVEY_KEPUASAN,
    GET_DETAIL_LIST_SURVEY_KEPUASAN,
    GET_LIST_SURVEY_KEPUASAN,
    DELETE_LIST_SURVEY_KEPUASAN
} from "../../actions/surveyKepuasanActions";

const initialState = {
    addSurveyKepuasanResult: false,
    addSurveyKepuasanLoading: false,
    addSurveyKepuasanError: false,

    editSurveyKepuasanResult: false,
    editSurveyKepuasanLoading: false,
    editSurveyKepuasanError: false,

    getDetailListSurveyKepuasanResult: false,
    getDetailListSurveyKepuasanLoading: false,
    getDetailListSurveyKepuasanError: false,

    getListSurveyKepuasanResult: false,
    getListSurveyKepuasanLoading: false,
    getListSurveyKepuasanError: false,

    deleteSurveyKepuasanResult: false,
    deleteSurveyKepuasanLoading: false,
    deleteSurveyKepuasanError: false,
};

const surveyKepuasanReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_SURVEY_KEPUASAN:
            return {
                ...state,
                addSurveyKepuasanResult: action.payload.data,
                addSurveyKepuasanLoading: action.payload.loading,
                addSurveyKepuasanError: action.payload.errorMessage,
            };

        case EDIT_LIST_SURVEY_KEPUASAN:
            return {
                ...state,
                editSurveyKepuasanResult: action.payload.data,
                editSurveyKepuasanLoading: action.payload.loading,
                editSurveyKepuasanError: action.payload.errorMessage,
            };

        case GET_DETAIL_LIST_SURVEY_KEPUASAN:
            return {
                ...state,
                getDetailListSurveyKepuasanResult: action.payload.data,
                getDetailListSurveyKepuasanLoading: action.payload.loading,
                getDetailListSurveyKepuasanError: action.payload.errorMessage,
            };

        case GET_LIST_SURVEY_KEPUASAN:
            return {
                ...state,
                getListSurveyKepuasanResult: action.payload.data,
                getListSurveyKepuasanLoading: action.payload.loading,
                getListSurveyKepuasanError: action.payload.errorMessage,
            };

        case DELETE_LIST_SURVEY_KEPUASAN:
            return {
                ...state,
                deleteSurveyKepuasanResult: action.payload.data,
                deleteSurveyKepuasanLoading: action.payload.loading,
                deleteSurveyKepuasanError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default surveyKepuasanReducer;
