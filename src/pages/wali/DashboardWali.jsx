import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { editListSurekDiperiksa, editListSurekUpload, editListSurekDiteruskan, editListSurekSelesai, editListSurekGagal, getListSurek } from "../../actions/surekActions";

import { NavbarWali } from "../../componentsWali";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";

import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const Sureks = () => {

    const { getListSurekResult, getListSurekLoading, getListSurekError } = useSelector((state) => state.surekReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListSurek());
    }, [dispatch]);

    // start firebase upload-file
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [linkFile, setLinkFile] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setLinkFile(url)
                // setImageUrls((prev) => [...prev, url]);
                // console.log(url);
            });
        });
    };

    console.log(linkFile);
    //end

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
    const handleSurekUpload = (e, id, lin) => {
        e.preventDefault();

        dispatch(editListSurekUpload(id));
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
        console.log("Cetak surat dengan surat_id:", suratId);
        navigate(`/detail-pengajuan/${suratId}`);
    };

    return (
        <>
            <NavbarWali />
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
                                        {surek.status === "diteruskan" ? (
                                            <>
                                                <th scope="row">{index + 1}</th>
                                                <td className="px-4 py-2 text-center">{surek.name}</td>
                                                <td className="px-4 py-2 text-center">{surek.date.slice(0, 10)}</td>
                                                <td className={`px-4 py-2 text-center ${getStatusColor(surek.status)}`}>{surek.status}</td>
                                                <td className="px-4 py-2 text-center">{surek.layanan}</td>
                                                <td className="px-4 py-2 text-center"><button className="btn bg-cyan-500 hover:bg-tiga text-white"
                                                    onClick={(event) => handleCetakSurat(event, surek.id)}
                                                    data-suratid={surek.id}><FaEye /></button></td>
                                                <td className="px-4 py-2 text-center">
                                                    <div className="flex flex-col space-y-4">
                                                        {surek.status === "diteruskan" ? (
                                                            <>
                                                                <button
                                                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                                    onClick={(event) => handleSelesai(event, surek.id)}
                                                                    data-suratid={surek.id}
                                                                >
                                                                    Selesai
                                                                </button>
                                                                <button
                                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                                    onClick={(event) => handleGagal(event, surek.id)}
                                                                    data-suratid={surek.id}
                                                                >
                                                                    Gagal
                                                                </button>
                                                            </>
                                                        ) : surek.status !== "selesai" ? (
                                                            <button
                                                                className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                                                            >
                                                                Selesai
                                                            </button>
                                                        ) : (
                                                            <p>Belum Tersedia</p>
                                                        )}
                                                    </div>
                                                </td>
                                            </>
                                        ) : surek.status === "selesai" ? (
                                            <>
                                                <th scope="row">{index + 1}</th>
                                                <td className="px-4 py-2 text-center">{surek.name}</td>
                                                <td className="px-4 py-2 text-center">{surek.date.slice(0, 10)}</td>
                                                <td className={`px-4 py-2 text-center ${getStatusColor(surek.status)}`}>{surek.status}</td>
                                                <td className="px-4 py-2 text-center">{surek.layanan}</td>
                                                <td className="px-4 py-2 text-center"><button className="btn bg-cyan-500 hover:bg-tiga text-white"
                                                    onClick={(event) => handleCetakSurat(event, surek.id)}
                                                    data-suratid={surek.id}><FaEye /></button></td>
                                                <td className="px-4 py-2 text-center">
                                                    <div className="flex flex-col space-y-4">
                                                        <button
                                                            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                                                        >
                                                            Selesai
                                                        </button>
                                                    </div>
                                                </td>
                                            </>
                                        ) : (
                                            <p className="badge badge-info">Surat Baru Belum Tersedia</p>
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