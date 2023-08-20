import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_PENGAJUAN = "ADD_LIST_PENGAJUAN";
export const EDIT_LIST_PENGAJUAN = "EDIT_LIST_PENGAJUAN";
export const GET_DETAIL_LIST_PENGAJUAN = "GET_DETAIL_LIST_PENGAJUAN";
export const GET_LIST_PENGAJUAN = "GET_LIST_PENGAJUAN";
export const DELETE_LIST_PENGAJUAN = "DELETE_LIST_PENGAJUAN";

//For API Create PENGAJUAN
export const addListPengajuan = (data) => (dispatch) => {
    dispatch({
        type: ADD_LIST_PENGAJUAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/create-pengajuan",
        data: data,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_PENGAJUAN,
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
                type: ADD_LIST_PENGAJUAN,
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
export const editListPengajuan = (id, formData) => (dispatch) => {
    // console.log("formdata ", formData);
    dispatch({
        type: DELETE_LIST_PENGAJUAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/pengajuan/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_PENGAJUAN,
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
                type: EDIT_LIST_PENGAJUAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListPengajuan = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_PENGAJUAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: `http://localhost:3000/pengajuan/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_PENGAJUAN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_PENGAJUAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Users
export const getListPengajuan = () => (dispatch) => {
    dispatch({
        type: GET_LIST_PENGAJUAN,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/pengajuan",
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_PENGAJUAN,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_PENGAJUAN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const deletePengajuan = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: DELETE_LIST_PENGAJUAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "delete",
      url: `http://localhost:3000/api/v1/pengajuan/${id}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_LIST_PENGAJUAN,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_LIST_PENGAJUAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };