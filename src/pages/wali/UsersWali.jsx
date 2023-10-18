import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListUsers, deleteUsers } from "../../actions/userActions";

import { NavbarWali } from "../../componentsWali";
import { FaUserPlus } from "react-icons/fa";
import { FaRegTrashCan, FaEye, FaPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2'

const UsersWali = () => {
    const { id } = useParams();
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const { getListUsersResult, getListUsersLoading, getListUsersError } = useSelector((state) => state.usersReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Dispatch aksi untuk mengambil daftar pengguna
    useEffect(() => {
        dispatch(getListUsers());
    }, [dispatch]);
    console.log(getListUsersResult);

    const handleClick = (id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "User akan dihapus secara permanen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUsers(id));
                Swal.fire("Terhapus!", "User telah dihapus.", "success");
                location.reload();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Dibatalkan", "Data aman.", "info");
            }
        });
    };

    const handleEdit = (id) => {
        navigate(`/edit-users/${id}`);
    };

    return (
        <>
            <NavbarWali />
            <div className="mx-auto ml-32 p-24">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Tabel User</p>
                    <a href="/add-users" className="btn bg-empat hover:bg-tiga text-white mb-2">
                        <FaUserPlus /> Tambah User
                    </a>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Foto</th>
                                <th className="py-2 px-4 text-center">Nama</th>
                                <th className="py-2 px-4 text-center">Nik</th>
                                <th className="py-2 px-4 text-center">Kelamin</th>
                                <th className="py-2 px-4 text-center">Alamat</th>
                                <th className="py-2 px-4 text-center">Telepon</th>
                            </tr>
                        </thead>
                        {getListUsersResult ? (
                            <tbody>
                                {getListUsersResult.map((users, index) => (
                                    <tr key={users.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center"><img src={users.image} alt="user-image" className="rounded-full" style={{ width: "50px" }} /></td>
                                        <td className="px-4 py-2 text-center">{users.name}</td>
                                        <td className="px-4 py-2 text-center">{users.nik}</td>
                                        <td className="px-4 py-2 text-center">{users.kelamin}</td>
                                        <td className="px-4 py-2 text-center">{users.alamat}</td>
                                        <td className="px-4 py-2 text-center">{users.telepon}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListUsersLoading ? (
                            <tbody>
                                <tr>
                                    <td colSpan="7">
                                        <h1 className="text-center">Loading</h1>
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan="7">
                                        <h1>{getListUsersError ? getListUsersError : "Data Kosong"}</h1>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </>
    );
}

export default UsersWali;