import axios from "axios";
import Swal from 'sweetalert2'
export const LOGIN_USERS = "LOGIN_USERS";
export const WHO_AM_I = "WHO_AM_I";

//For API Login
export const loginUsers = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: LOGIN_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });
  axios({
    method: "post",
    url: "http://localhost:3000/api/v1/login",
    data: data,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      dispatch({
        type: LOGIN_USERS,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
      //--Start -For Allert using Sweetalert 1/2
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Login Berhasil!'
      })
      //--End -For Allert using Sweetalert 1/2
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

//For API Whoami 
export const whoAmI = () => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: WHO_AM_I,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });
  axios({
    method: "get",
    url: "http://localhost:3000/api/v1/whoami",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      dispatch({
        type: WHO_AM_I,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: WHO_AM_I,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};