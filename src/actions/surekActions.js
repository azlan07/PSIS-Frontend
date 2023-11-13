import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_SUREK = "ADD_LIST_SUREK";
export const EDIT_LIST_SUREK = "EDIT_LIST_SUREK";
export const GET_DETAIL_LIST_SUREK = "GET_DETAIL_LIST_SUREK";
export const GET_LIST_SUREK = "GET_LIST_SUREK";
export const DELETE_LIST_SUREK = "DELETE_LIST_SUREK";

//For API Create SKCK
export const addListSurek = (data) => (dispatch) => {
    dispatch({
        type: ADD_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "http://localhost:3000/api/v1/createskck",
        data: data,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: ADD_LIST_SUREK,
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
                type: ADD_LIST_SUREK,
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
export const editListSurekDiperiksa = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: EDIT_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/surekdiperiksa/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
            // window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const editListSurekUpload = (id, formData, linkFile) => (dispatch) => {
    console.log("formdata ", linkFile);
    dispatch({
        type: EDIT_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/surek-upload/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
            // window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const editListSurekDiproses = (id, formData) => (dispatch) => {
    // console.log("formdata ", formData);
    dispatch({
        type: EDIT_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/surekdiproses/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
            // window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const editListSurekSelesai = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: EDIT_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/surekselesai/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
            // window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

export const editListSurekGagal = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: EDIT_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/surekgagal/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
            // window.location = "/profile";
        })
        .catch((error) => {
            console.log(error.message);
            dispatch({
                type: EDIT_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListSurek = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: `http://localhost:3000/user/${id}`,
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_DETAIL_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Users
export const getListSurek = () => (dispatch) => {
    dispatch({
        type: GET_LIST_SUREK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/sureks",
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_SUREK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_SUREK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};
