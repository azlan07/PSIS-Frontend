import axios from "axios";
import Swal from 'sweetalert2'
export const ADD_LIST_SKCK = "ADD_LIST_SKCK";
export const EDIT_LIST_SKCK = "EDIT_LIST_SKCK";
export const GET_DETAIL_LIST_SKCK = "GET_DETAIL_LIST_SKCK";
export const GET_LIST_SKCK = "GET_LIST_SKCK";
export const DELETE_LIST_SKCK = "DELETE_LIST_SKCK";

//For API Create SKCK
export const addListSkck = (data) => (dispatch) => {
    dispatch({
        type: ADD_LIST_SKCK,
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
                type: ADD_LIST_SKCK,
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
                type: ADD_LIST_SKCK,
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
export const editListSkck = (id, formData) => (dispatch) => {
    console.log("formdata ", formData);
    dispatch({
        type: DELETE_LIST_SKCK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "put",
        url: `http://localhost:3000/api/v1/users/${id}`,
        data: formData,
        timeout: 120000,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((response) => {
            dispatch({
                type: EDIT_LIST_SKCK,
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
                type: EDIT_LIST_SKCK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API Get User by Id
export const getDetailListSkck = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_LIST_SKCK,
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
                type: GET_DETAIL_LIST_SKCK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_DETAIL_LIST_SKCK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

//For API List Users
export const getListSkck = () => (dispatch) => {
    dispatch({
        type: GET_LIST_SKCK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "GET",
        url: "http://localhost:3000/api/v1/skcks",
        timeout: 120000,
    })
        .then((response) => {
            dispatch({
                type: GET_LIST_SKCK,
                payload: {
                    loading: false,
                    data: response.data.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_LIST_SKCK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};

// export const notification = (id) => (dispatch) => {
//     console.log('notif id: ', id)
//     dispatch({
//         type: NOTIFICATION,
//         payload: {
//             loading: true,
//             data: false,
//             errorMessage: false,
//         },
//     });
//     axios({
//         method: "GET",
//         url: `http://localhost:3000/notification/${id}`,
//         // url: `https://be-final-production.up.railway.app/notification/${id}`,
//         timeout: 120000,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .then((response) => {
//             // console.log("response",response.data.data[0]);
//             dispatch({
//                 type: NOTIFICATION,
//                 payload: {
//                     loading: false,
//                     data: response.data.data,
//                     errorMessage: false,
//                 },
//             });
//         })
//         .catch((error) => {
//             // console.log(error);
//             dispatch({
//                 type: NOTIFICATION,
//                 payload: {
//                     loading: false,
//                     data: false,
//                     errorMessage: error.message,
//                 },
//             });
//         });
// };
