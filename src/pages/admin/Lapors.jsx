import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListLapor, deleteLapor } from "../../actions/laporActions";

import { NavbarAdmin } from "../../componentsAdmin";
import { FaUserPlus } from "react-icons/fa";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import Swal from 'sweetalert2'

const Lapors = () => {
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const { getListLaporResult, getListLaporLoading, getListLaporError } = useSelector((state) => state.laporReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Dispatch aksi untuk mengambil daftar pengguna
    useEffect(() => {
        dispatch(getListLapor());
    }, [dispatch]);

    const handleClick = (id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Laporan akan dihapus secara permanen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteLapor(id));
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

    return (
        <>
            <NavbarAdmin />
            <div className="mx-auto ml-32 p-24">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">Tabel Laporan</p>
                    {/* <a href="/add-kabas" className="btn bg-empat hover:bg-tiga text-white mb-2">
                        <FaUserPlus /> Tambah Kaba
                    </a> */}
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Nama Pelapor</th>
                                <th className="py-2 px-4 text-center">Judul Laporan</th>
                                <th className="py-2 px-4 text-center">Isi Laporan</th>
                                <th className="py-2 px-4 text-center">Tanggal</th>
                                <th className="py-2 px-4 text-center">Lokasi</th>
                                <th className="py-2 px-4 text-center">Aksi</th>
                                {/* <th className="py-2 px-4 text-center">Aksi</th> */}
                            </tr>
                        </thead>
                        {getListLaporResult ? (
                            <tbody>
                                {getListLaporResult.slice().reverse().map((lapor, index) => (
                                    <tr key={lapor.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center">{lapor.namePelapor}</td>
                                        <td className="px-4 py-2 text-center">{lapor.judul}</td>
                                        <td className="px-4 py-2 text-center">{lapor.isi}</td>
                                        <td className="px-4 py-2 text-center">{lapor.tanggal.slice(0, 10)}</td>
                                        <td className="px-4 py-2 text-center">{lapor.lokasi}</td>
                                        <td className="px-4 py-2 text-center">
                                            {/* <button className="btn bg-cyan-500 text-white" onClick={() => handleDetailClick(lapor.id)}><FaEye /></button> */}
                                            <button className="btn bg-red-500 text-white" onClick={() => handleClick(lapor.id)}><FaRegTrashCan /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListLaporLoading ? (
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
                                        <h1>{getListLaporError ? getListLaporError : "Data Kosong"}</h1>
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

export default Lapors;