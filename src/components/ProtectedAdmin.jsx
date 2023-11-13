import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { whoAmI } from "../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Protected from "./Protected";

function ProtectedAdmin({ children }) {
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(whoAmI());
    }, [dispatch]);

    const role = localStorage.getItem("role");

    if (!role) {
        // Role not found, navigate to "/login"
        return navigate("/login");
    } else if (role !== "admin" && role !== "wali") {
        // User is not an admin, navigate to "/unauthorized"
        return navigate("/unauthorized");
    }
    return children;
}

export default ProtectedAdmin;
