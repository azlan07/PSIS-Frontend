import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { whoAmI } from "../actions/authActions";

function Protected({ children }) {
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(whoAmI());
    }, [dispatch]);

    // console.log(whoAmIResult);

    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/login" />;

    return children;
}

export default Protected;
