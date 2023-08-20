import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { editListSurekDiperiksa, editListSurekDiteruskan, editListSurekSelesai, editListSurekGagal, getListSurek } from "../../actions/surekActions";
import { getListUploadSurek } from "../../actions/uploadSurekActions";

import { NavbarAdmin } from "../../componentsAdmin";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";

const Sureks = () => {

    const { getListSurekResult, getListSurekLoading, getListSurekError } = useSelector((state) => state.surekReducer);
    const { getListUploadSurekResult } = useSelector((state) => state.uploadSurekReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListSurek());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getListUploadSurek());
    }, [dispatch]);
    console.log(getListUploadSurekResult);

    function getStatusColor(status) {
        switch (status) {
            case "diajukan":
                return "bg-yellow-500";
            case "diperiksa":
                return "bg-blue-500";
            case "diteruskan":
                return "bg-indigo-500";
            case "selesai":
                return "bg-green-500";
            case "gagal":
                return "bg-red-500";
            default:
                return "";
        }
    }

    const handleDiperiksa = (e, id) => {
        e.preventDefault();

        dispatch(editListSurekDiperiksa(id));
        window.location.reload();
    };
    const handleDiteruskan = (e, id) => {
        e.preventDefault();

        dispatch(editListSurekDiteruskan(id));
        window.location.reload();
    };
    const handleSelesai = (e, id) => {
        e.preventDefault();

        dispatch(editListSurekSelesai(id));
        window.location.reload();
    };
    const handleGagal = (e, id) => {
        e.preventDefault();

        dispatch(editListSurekGagal(id));
        window.location.reload();
    };

    const handleCetakSurat = (event, suratId) => {
        event.preventDefault();
        navigate(`/detail-pengajuan/${suratId}`);
    };
    const handleFile = (event, suratId) => {
        event.preventDefault();
        navigate(`/detail-file/${suratId}`);
    };

    return (
        <>
            <NavbarAdmin />
            <div className="mx-auto ml-32 p-24">
                <div className="overflow-x-auto">
                    <h2 className="mx-auto mb-5 text-center text-lg font-bold shadow-sm">Rekap Pengurusan Surat</h2>
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Nama</th>
                                <th className="py-2 px-4 text-center">Tanggal Pengurusan</th>
                                <th className="py-2 px-4 text-center">Status</th>
                                <th className="py-2 px-4 text-center">Jenis Surat</th>
                                <th className="py-2 px-4 text-center">Detail</th>
                                <th className="py-2 px-4 text-center">Konfirmasi Status</th>
                            </tr>
                        </thead>
                        {getListSurekResult ? (
                            <tbody>
                                {getListSurekResult.map((surek, index) => (
                                    <tr key={surek.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center">{surek.name}</td>
                                        <td className="px-4 py-2 text-center">{surek.date.slice(0, 10)}</td>
                                        <td className={`badge p-5 mt-3 text-center text-lg text-white font-semibold ${getStatusColor(surek.status)}`}>{surek.status}</td>
                                        <td className="px-4 py-2 text-center"><p className="bg-kosong rounded-full">{surek.layanan}</p></td>
                                        <td className="px-4 py-2 text-center"><button className="btn bg-cyan-500 hover:bg-tiga text-white"
                                            onClick={(event) => handleCetakSurat(event, surek.id)}
                                            data-suratid={surek.id}><FaEye /></button></td>
                                        <td className="px-4 py-2 text-center">
                                            <div className="flex flex-col space-y-4">
                                                {surek.status === "diajukan" ? (
                                                    <>
                                                        <button
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                            onClick={(event) => handleDiperiksa(event, surek.id)}
                                                            data-suratid={surek.id}
                                                        >
                                                            Diperiksa
                                                        </button>
                                                    </>
                                                ) : surek.status === "diperiksa" ? (
                                                    <button
                                                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={(event) => handleDiteruskan(event, surek.id)}
                                                        data-suratid={surek.id}
                                                    >
                                                        Diteruskan
                                                    </button>
                                                ) : surek.status === "diteruskan" ? (
                                                    <button
                                                        className="bg-indigo-500 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Sedang Diteruskan
                                                    </button>
                                                ) :
                                                    <p
                                                        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                                                    >
                                                        Selesai
                                                    </p>
                                                }
                                            </div>
                                        </td>
                                        {surek.status === "diperiksa" && (
                                            <td>
                                                <a href={`/upload-surek/${surek.id}`} className="bg-empat hover:bg-tiga text-white font-bold py-2 px-4 rounded">
                                                    Upload
                                                </a>
                                            </td>
                                        )}
                                        {surek.status === "selesai" && (
                                            <td className="py-2 px-4">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={(event) => handleFile(event, surek.id)}
                                                    data-suratid={surek.id}
                                                >
                                                    Lihat File
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListSurekLoading ? (
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
                                        <h1>{getListSurekError ? getListSurekError : "Data Kosong"}</h1>
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

export default Sureks;