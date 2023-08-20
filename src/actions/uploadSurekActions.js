import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_UPLOAD_SUREK = "ADD_LIST_UPLOAD_SUREK";
export const EDIT_LIST_UPLOAD_SUREK = "EDIT_LIST_UPLOAD_SUREK";
export const GET_DETAIL_LIST_UPLOAD_SUREK = "GET_DETAIL_LIST_UPLOAD_SUREK";
export const GET_LIST_UPLOAD_SUREK = "GET_LIST_UPLOAD_SUREK";
export const DELETE_LIST_UPLOAD_SUREK = "DELETE_LIST_UPLOAD_SUREK";

//For API Create UPLOAD_SUREK
export const addListUploadSurek = (data) => (dispatch) => {
    console.log(data);
    dispatch({
        type: ADD_LIST_UPLOAD_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/file-surat",
        data: data,
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_UPLOAD_SUREK,
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
                type: ADD_LIST_UPLOAD_SUREK,
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
export const editListUploadSurek = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: DELETE_LIST_UPLOAD_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/file-surat/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_UPLOAD_SUREK,
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
                type: EDIT_LIST_UPLOAD_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListUploadSurek = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_UPLOAD_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: `http://localhost:3000/api/v1/file-surat/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_UPLOAD_SUREK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_UPLOAD_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Users
export const getListUploadSurek = () => (dispatch) => {
    dispatch({
        type: GET_LIST_UPLOAD_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/file-surat",
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_UPLOAD_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_UPLOAD_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const deleteUploadSurek = (id) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
      type: DELETE_LIST_UPLOAD_SUREK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "delete",
      url: `http://localhost:3000/api/v1/file-surat/${id}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_LIST_UPLOAD_SUREK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_LIST_UPLOAD_SUREK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };