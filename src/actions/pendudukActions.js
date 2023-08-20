import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_PENDUDUK = "ADD_LIST_PENDUDUK";
export const EDIT_LIST_PENDUDUK = "EDIT_LIST_PENDUDUK";
export const GET_DETAIL_LIST_PENDUDUK = "GET_DETAIL_LIST_PENDUDUK";
export const GET_LIST_PENDUDUK = "GET_LIST_PENDUDUK";
export const DELETE_LIST_PENDUDUK = "DELETE_LIST_PENDUDUK";

//For API Create PENDUDUK
export const addListPenduduk = (data) => (dispatch) => {
    console.log(data);
    dispatch({
        type: ADD_LIST_PENDUDUK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/create-penduduk",
        data: data,
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_PENDUDUK,
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
                type: ADD_LIST_PENDUDUK,
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
export const editListPenduduk = (id, data) => (dispatch) => {
    console.log("formdata ", data);
    dispatch({
        type: EDIT_LIST_PENDUDUK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/penduduk/${id}`,
        data: data,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_PENDUDUK,
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
                type: EDIT_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListPenduduk = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_PENDUDUK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: `http://localhost:3000/api/v1/penduduk/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Users
export const getListPenduduk = () => (dispatch) => {
    dispatch({
        type: GET_LIST_PENDUDUK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/penduduk",
        timeout: 120000,
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const deletePenduduk = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: DELETE_LIST_PENDUDUK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "delete",
        url: `http://localhost:3000/api/v1/penduduk/${id}`,
        timeout: 120000,
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
    })
        .then((response) => {
            dispatch({
                type: DELETE_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: DELETE_LIST_PENDUDUK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};