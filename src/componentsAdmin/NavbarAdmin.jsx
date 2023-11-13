import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmI } from '../actions/authActions';
import { FiBell } from 'react-icons/fi';
import logoPsis from '../../public/images/LogoPsis.svg';
import { FaHouseUser, FaUserFriends, FaUserPlus, FaFileAlt, FaBullhorn, FaExclamationTriangle } from "react-icons/fa";
import { FaMoneyCheckDollar, FaUsers } from "react-icons/fa6";

const NavbarAdmin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { whoAmIResult } = useSelector((state) => state.authReducer);
  const Token = localStorage.getItem('token');
  const Role = localStorage.getItem('role');

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
    <>
      <div className="navbar fixed top-0 left right-0 z-10 bg-dua">
        <div className="flex-1">
          <a href="/" className="w-10">
            <img src={logoPsis} alt="logo-psis" />
          </a>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            PSIS - NAGARI
          </Link>
        </div>
        <div className="flex-none">
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
                      <a href='/'>Halaman Utama</a>
                    </li>
                  )}
                  <li>
                    <a href='/profile'>
                      Profile
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
        </div>
      </div>
      <aside className="w-full md:w-48 bg-lima text-white p-4 md:fixed md:top-16 md:left-0 md:h-full">
        <div>
          <p className="text-lg text-center font-semibold">ADMIN PAGE</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/dashboard-admin" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaHouseUser className="w-5 h-5 mr-2 inline" />Dashboard
              </Link>
            </li>
            <li>
              <Link to="/users" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaUserFriends className="w-5 h-5 mr-2 inline" />Pengguna
              </Link>
            </li>
            <hr />
            <li>
              <Link to="/sureks" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaFileAlt className="w-5 h-5 mr-2 inline" />E - Surek
              </Link>
            </li>
            <li>
              <Link to="/kabas" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaBullhorn className="w-5 h-5 mr-2 inline" />E - Kaba
              </Link>
            </li>
            <li>
              <Link to="/lapors" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaExclamationTriangle className="w-5 h-5 mr-2 inline" />E - Lapor
              </Link>
            </li>
            <li>
              <Link to="/table-transparansi" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaMoneyCheckDollar className="w-5 h-5 mr-2 inline" />Anggaran
              </Link>
            </li>
            <li>
              <Link to="/penduduks" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaUsers className="w-5 h-5 mr-2 inline" />Penduduk
              </Link>
            </li>
            <li>
              <Link to="/pemilih-baru-admin" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaFileAlt className="w-5 h-5 mr-2 inline" /> Pemilih
              </Link>
            </li>
            <li>
              <Link to="/survey-kepuasan-admin" className="btn btn-ghost hover:bg-tiga normal-case text-lg">
                <FaFileAlt className="w-5 h-5 mr-2 inline" /> Survey
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavbarAdmin;
