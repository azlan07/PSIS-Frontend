import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_SURVEY_KEPUASAN = "ADD_LIST_SURVEY_KEPUASAN";
export const EDIT_LIST_SURVEY_KEPUASAN = "EDIT_LIST_SURVEY_KEPUASAN";
export const GET_DETAIL_LIST_SURVEY_KEPUASAN = "GET_DETAIL_LIST_SURVEY_KEPUASAN";
export const GET_LIST_SURVEY_KEPUASAN = "GET_LIST_SURVEY_KEPUASAN";
export const DELETE_LIST_SURVEY_KEPUASAN = "DELETE_LIST_SURVEY_KEPUASAN";

//For API Register
export const addListSurveyKepuasan = (data) => (dispatch) => {
    dispatch({
        type: ADD_LIST_SURVEY_KEPUASAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/survey",
        data: data,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        })
        .catch((error) => {
            dispatch({
                type: ADD_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Update
export const editListSurveyKepuasan = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: DELETE_LIST_SURVEY_KEPUASAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    //get API
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/survey/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: response.data.data[0],
                    errorMessage: false,
                },
            });
            // window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListSurveyKepuasan = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_SURVEY_KEPUASAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });

    axios({
        method: "GET",
        url: `http://localhost:3000/survey/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List SurveyKepuasan
export const getListSurveyKepuasan = () => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GET_LIST_SURVEY_KEPUASAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/survey",
        timeout: 120000,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_SURVEY_KEPUASAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const deleteSurveyKepuasan = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: DELETE_LIST_SURVEY_KEPUASAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "delete",
      url: `http://localhost:3000/api/v1/survey/${id}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_LIST_SURVEY_KEPUASAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_LIST_SURVEY_KEPUASAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };