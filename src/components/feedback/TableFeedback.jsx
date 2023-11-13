import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListFeedback, deleteFeedback } from "../../actions/feedbackActions";

import { NavbarAdmin } from "../../componentsAdmin";
import { FaUserPlus } from "react-icons/fa";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import Swal from 'sweetalert2'

const TableFeedback = () => {
    const {id} = useParams();
    // console.log(id);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const { getListFeedbackResult, getListFeedbackLoading, getListFeedbackError } = useSelector((state) => state.feedbackReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Dispatch aksi untuk mengambil daftar pengguna
    useEffect(() => {
        dispatch(getListFeedback());
    }, [dispatch]);

    const handleClick = (id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Feedbackan akan dihapus secara permanen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteFeedback(id));
                Swal.fire("Terhapus!", "Data telah dihapus.", "success");
                location.reload();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Dibatalkan", "Data aman.", "info");
            }
        });
    };

    // const handleDetailClick = (id) => {
    //     navigate(`/detail-kaba/${id}`);
    // };
    const handleEdit = (id) => {
        navigate(`/edit-feedback/${id}`);
    };

    return (
        <>
            <NavbarAdmin />
            <div className="mx-auto ml-32 p-24">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">Tabel Feedbackan</p>
                    {/* <a href="/add-kabas" className="btn bg-empat hover:bg-tiga text-white mb-2">
                        <FaUserPlus /> Tambah Kaba
                    </a> */}
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Nama</th>
                                <th className="py-2 px-4 text-center">Telepon</th>
                                <th className="py-2 px-4 text-center">Pesan</th>
                                {/* <th className="py-2 px-4 text-center">Aksi</th> */}
                            </tr>
                        </thead>
                        {getListFeedbackResult ? (
                            <tbody>
                                {getListFeedbackResult.slice().reverse().map((lapor, index) => (
                                    <tr key={lapor.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center">{lapor.nama}</td>
                                        <td className="px-4 py-2 text-center">{lapor.telepon}</td>
                                        <td className="px-4 py-2 text-center">{lapor.pesan}</td>
                                        <td className="px-4 py-2 text-center">
                                            <button className="btn bg-yellow-500 text-white" onClick={() => handleEdit(lapor.id)}>Edit</button>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button className="btn bg-red-500 text-white" onClick={() => handleClick(lapor.id)}><FaRegTrashCan /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListFeedbackLoading ? (
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
                                        <h1>{getListFeedbackError ? getListFeedbackError : "Data Kosong"}</h1>
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

export default TableFeedback;