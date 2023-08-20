import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListKaba, editListKaba, deleteKaba } from "../../actions/kabaActions";

import { NavbarAdmin } from "../../componentsAdmin";
import { FaRegTrashCan, FaEye, FaPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2'

const Kabas = () => {
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const { getListKabaResult, getListKabaLoading, getListKabaError } = useSelector((state) => state.kabaReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Dispatch aksi untuk mengambil daftar pengguna
    useEffect(() => {
        dispatch(getListKaba());
    }, [dispatch]);
    // console.log(whoAmIResult);
    // console.log(getListKabaResult);

    const handleClick = (id) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Berita akan dihapus secara permanen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
            dangerMode: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteKaba(id));
                Swal.fire("Terhapus!", "Data telah dihapus.", "success");
                location.reload();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Dibatalkan", "Data aman.", "info");
            }
        });
    };

    const handleDetailClick = (id) => {
        navigate(`/detail-kaba/${id}`);
    };

    const truncateText = (text, maxLength) => {
        const words = text.split(" ");
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(" ") + " ...";
        }
        return text;
    };

    return (
        <>
            <NavbarAdmin />
            <div className="mx-auto ml-32 p-24">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Tabel Kaba</p>
                    <a href="/add-kabas" className="btn bg-empat hover:bg-tiga text-white mb-2">
                        <FaPenToSquare /> Tambah Kaba
                    </a>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Image</th>
                                <th className="py-2 px-4 text-center">Judul</th>
                                <th className="py-2 px-4 text-center">Isi</th>
                                <th className="py-2 px-4 text-center">Tanggal</th>
                                <th className="py-2 px-4 text-center">Pembuat</th>
                                <th className="py-2 px-4 text-center">Sumber</th>
                                <th className="py-2 px-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        {getListKabaResult ? (
                            <tbody>
                                {getListKabaResult.slice().reverse().map((kaba, index) => (
                                    <tr key={kaba.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center"><img src={kaba.image} alt="user-image" className="rounded-full" style={{ width: "50px" }} /></td>
                                        <td className="px-4 py-2 text-center">{kaba.judul}</td>
                                        <td className="px-4 py-2 text-center">{truncateText(kaba.isi, 5)}</td>
                                        <td className="px-4 py-2 text-center">{kaba.tanggal.slice(0, 10)}</td>
                                        <td className="px-4 py-2 text-center">{kaba.pembuat}</td>
                                        <td className="px-4 py-2 text-center">{kaba.sumber}</td>
                                        <td className="px-4 py-2 text-center">
                                            <button className="btn bg-cyan-500 text-white" onClick={() => handleDetailClick(kaba.id)}><FaEye /></button>
                                            <button className="btn bg-red-500 text-white" onClick={() => handleClick(kaba.id)}><FaRegTrashCan /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListKabaLoading ? (
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
                                        <h1>{getListKabaError ? getListKabaError : "Data Kosong"}</h1>
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

export default Kabas;