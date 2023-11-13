import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_TRANSPARANSI = "ADD_LIST_TRANSPARANSI";
export const EDIT_LIST_TRANSPARANSI = "EDIT_LIST_TRANSPARANSI";
export const GET_DETAIL_LIST_TRANSPARANSI = "GET_DETAIL_LIST_TRANSPARANSI";
export const GET_LIST_TRANSPARANSI = "GET_LIST_TRANSPARANSI";
export const DELETE_LIST_TRANSPARANSI = "DELETE_LIST_TRANSPARANSI";

//For API Create TRANSPARANSI
export const addListTransparansi = (data) => (dispatch) => {
    console.log(data);
    dispatch({
        type: ADD_LIST_TRANSPARANSI,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/create-transparansi",
        data: data,
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_TRANSPARANSI,
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
                type: ADD_LIST_TRANSPARANSI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
            // swal("Error", "Email sudah terdaftar", "error");
        });
};

//For API Update
export const editListTransparansi = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: DELETE_LIST_TRANSPARANSI,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/transparansi/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_TRANSPARANSI,
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
                type: EDIT_LIST_TRANSPARANSI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListTransparansi = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_TRANSPARANSI,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: `http://localhost:3000/api/v1/transparansi/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_TRANSPARANSI,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_TRANSPARANSI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Users
export const getListTransparansi = () => (dispatch) => {
    dispatch({
        type: GET_LIST_TRANSPARANSI,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/transparansi",
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_TRANSPARANSI,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_TRANSPARANSI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const deleteTransparansi = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: DELETE_LIST_TRANSPARANSI,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "delete",
      url: `http://localhost:3000/api/v1/transparansi/${id}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_LIST_TRANSPARANSI,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_LIST_TRANSPARANSI,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };