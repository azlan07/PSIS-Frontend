import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListTransparansi } from "../../../actions/transparansiActions";

import { NavbarContent } from "../../../components";
import { FaRegTrashCan, FaEye, FaPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2'

const TransparansiUser = () => {
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const { getListTransparansiResult, getListTransparansiLoading, getListTransparansiError } = useSelector((state) => state.transparansiReducer);

    const dispatch = useDispatch();

    // Dispatch aksi untuk mengambil daftar pengguna
    useEffect(() => {
        dispatch(getListTransparansi());
    }, [dispatch]);
    // console.log(getListTransparansiResult);

    function showTransparansiModal(id) {
        const modal = document.getElementById(`transparansi-${id}`);
        if (modal) {
            modal.showModal();
        }
    }

    return (
        <>
            < NavbarContent />
            <div className="mx-auto p-24">
                <div className="flex justify-between items-center">
                    <div className="flex items-center mb-2 rounded-md">
                        <button className="btn bg-empat hover:bg-tiga text-white rounded-lg">
                            <a href="/">Kembali</a>
                        </button>
                        <p className="text-lg font-semibold ml-5">Tabel Transparansi Anggaran perTahun</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Tahun</th>
                                <th className="py-2 px-4 text-center">File</th>
                            </tr>
                        </thead>
                        {getListTransparansiResult ? (
                            <tbody>
                                {getListTransparansiResult.map((transparansi, index) => (
                                    <tr key={transparansi.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center">{transparansi.tahun}</td>
                                        <td className="px-4 py-2 text-center">
                                            <a onClick={() => showTransparansiModal(transparansi.id)} className="btn bg-empat hover:bg-tiga text-white">
                                                <FaEye />
                                            </a>
                                            <dialog id={`transparansi-${transparansi.id}`} className="modal">
                                                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                                                    <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    <h3 className="font-bold text-lg">File Transparansi Anggaran Tahun {transparansi.tahun}</h3>
                                                    <object data={transparansi.file} type="application/pdf" width="100%" height="500px">
                                                    </object>
                                                </form>
                                            </dialog>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListTransparansiLoading ? (
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
                                        <h1>{getListTransparansiError ? getListTransparansiError : "Data Kosong"}</h1>
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

export default TransparansiUser;