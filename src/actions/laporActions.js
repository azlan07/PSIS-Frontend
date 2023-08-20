import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_LAPOR = "ADD_LIST_LAPOR";
export const EDIT_LIST_LAPOR = "EDIT_LIST_LAPOR";
export const GET_DETAIL_LIST_LAPOR = "GET_DETAIL_LIST_LAPOR";
export const GET_LIST_LAPOR = "GET_LIST_LAPOR";
export const DELETE_LIST_LAPOR = "DELETE_LIST_LAPOR";

//For API Register
export const addListLapor = (data) => (dispatch) => {
    dispatch({
        type: ADD_LIST_LAPOR,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/createlapor",
        data: data,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_LAPOR,
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
                type: ADD_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Update
export const editListLapor = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: DELETE_LIST_LAPOR,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    //get API
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/lapor/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: response.data.data[0],
                    errorMessage: false,
                },
            });
            window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListLapor = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_LAPOR,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });

    axios({
        method: "GET",
        url: `http://localhost:3000/lapor/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Lapor
export const getListLapor = () => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GET_LIST_LAPOR,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/lapors",
        timeout: 120000,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_LAPOR,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const deleteLapor = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: DELETE_LIST_LAPOR,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "delete",
      url: `http://localhost:3000/api/v1/lapor/${id}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_LIST_LAPOR,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_LIST_LAPOR,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };