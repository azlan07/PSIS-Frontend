import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmI } from '../actions/authActions';

import { FiBell } from "react-icons/fi";
import logoPsis from "../../public/images/LogoPsis.svg"

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const Token = localStorage.getItem('token');
    const Role = localStorage.getItem('role');

    // console.log(whoAmIResult);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(whoAmI());
    }, [dispatch]);

    useEffect(() => {
        setIsLoggedIn(!!Token);
    }, [Token]);

    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.reload();
    }

    return (
        <div className="navbar fixed top-0 left-0 right-0 z-10 bg-dua">
            <div className="flex-1">
                <a href="/" className="w-10"><img src={logoPsis} alt="logo-psis" /></a>
                <a href="/" className="btn btn-ghost normal-case text-xl">PSIS - NAGARI</a>
            </div>
            <div className="flex-none">
                {/* <div className='mr-5'>
                    <a href="#home" className='text-lg font-semibold mx-2 hover:text-empat'>Home</a>
                    <a href="#fitur-utama" className='text-lg font-semibold mx-2 hover:text-empat'>Fitur Utama</a>
                    <a href="#e-surek" className='text-lg font-semibold mx-2 hover:text-empat'>E-Surek</a>
                    <a href="#e-kaba" className='text-lg font-semibold mx-2 hover:text-empat'>E-Kaba</a>
                    <a href="#e-lapor" className='text-lg font-semibold mx-2 hover:text-empat'>E-Lapor</a>
                    <a href="#maps" className='text-lg font-semibold mx-2 hover:text-empat'>Peta</a>
                    <a href="#faq" className='text-lg font-semibold mx-2 hover:text-empat'>Faq</a>
                </div> */}

                {isLoggedIn ? (
                    <>
                        {/* <div className="dropdown dropdown-end mr-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <FiBell className="text-xl" />
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex items-center bg-tiga rounded-full">
                            <div className="dropdown dropdown-end mx-2">
                                <p className="text-lg text-white font-semibold uppercase">
                                    {whoAmIResult.name}
                                </p>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={whoAmIResult.image} alt="Avatar" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {Role === 'admin' && (
                                        <li>
                                            <a href='/dashboard-admin'>Dashboard Admin</a>
                                        </li>
                                    )}
                                    {Role === 'wali' && (
                                        <li>
                                            <a href='/dashboard-wali'>Dashboard Wali</a>
                                        </li>
                                    )}
                                    <li>
                                        <a href='/profile'>
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/history-sureks'>
                                            History Surat
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/history-elapor'>
                                            History Laporan
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/table-pemilih-baru'>
                                            Pemilih Baru
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={handleLogout}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <a href="/login" className="btn bg-empat hover:bg-tiga normal-case text-lg text-white">Login</a>
                )}
            </div>
        </div>
    );
}

export default Navbar;