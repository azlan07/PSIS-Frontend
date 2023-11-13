import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Redux
import { loginUsers } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

import imgLogin from "../../public/images/login.svg"

const Login = () => {

    const { loginUsersResult, loginUsersError } = useSelector(
        (state) => state.authReducer
    );
    const { whoAmIResult, whoAmIError } = useSelector((state) => state.authReducer)

    const [nik, setNik] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const Token = localStorage.getItem("token");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (loginUsersResult && loginUsersResult.token) {
            localStorage.setItem("token", loginUsersResult.token);
            localStorage.setItem("role", loginUsersResult.role);

            if (loginUsersResult.role === "admin") {
                navigate("/dashboard-admin");
            } else if (loginUsersResult.role === "wali") {
                navigate("/dashboard-wali");
            } else {
                navigate("/");
            }
        } else if (loginUsersError) {
            setError(loginUsersError);
        }
    }, [loginUsersResult, loginUsersError]);

    useEffect(() => {
        setIsLoggedIn(!!Token);
    }, [Token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            loginUsers({
                nik,
                password,
            })
        );
    };

    function handleLogout(e) {
        setIsLoading(true);
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        setIsLoading(false);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="max-w-3xl">
                    <a href="/">
                        <img src={imgLogin} alt="image-login" />
                    </a>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center">Login Akun</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nik</span>
                                </label>
                                <input type="number" placeholder="nik" className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setNik(e.target.value)}
                                    value={nik} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setPassword(e.target.value)}
                                    value={password} />
                            </div>
                            {error && (
                                <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Password atau email salah</span>
                              </div>
                            )}
                            <div className="form-control mt-4">
                                <button className="btn bg-empat hover:bg-tiga text-white">Login</button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <a href="https://api.whatsapp.com/send?phone=6282377458691&text=Min%20buatkan%20akun,%20berikut%20foto%20identitas%20saya" target="_blank" className="label-text-alt link link-hover text-sm font-semibold">Belum punya akun? Hubungi Admin</a>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;