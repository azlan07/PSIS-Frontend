import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListPemilihBaru } from "../../../actions/pemilihBaruActions";

import { NavbarContent } from "../../../components";

const TablePemilihBaru = () => {

    const { getListPemilihBaruResult, getListPemilihBaruLoading, getListPemilihBaruError } = useSelector((state) => state.pemilihBaruReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListPemilihBaru());
    }, [dispatch]);

    const [filteredPemilihBarus, setFilteredPemilihBarus] = useState([]);

    useEffect(() => {
        // Filter data berdasarkan user_id yang sesuai
        if (whoAmIResult && getListPemilihBaruResult) {
            const filteredData = getListPemilihBaruResult.filter((surek) => surek.user_id === whoAmIResult.id);
            setFilteredPemilihBarus(filteredData);
        }
    }, [whoAmIResult, getListPemilihBaruResult]);

    function getStatusColor(status) {
        switch (status) {
            case "diajukan":
                return "bg-yellow-500";
            case "didaftarkan":
                return "bg-green-500";
            default:
                return "";
        }
    }

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
            <NavbarContent />
            <div className="mx-auto p-24">
                <div className="overflow-x-auto">
                    <h2 className="mx-auto mb-5 text-center text-lg font-bold shadow-sm">Rekap Pemilih Baru</h2>
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Nama</th>
                                <th className="py-2 px-4 text-center">Nik</th>
                                <th className="py-2 px-4 text-center">Kelamin</th>
                                <th className="py-2 px-4 text-center">Alamat</th>
                                <th className="py-2 px-4 text-center">Status</th>
                            </tr>
                        </thead>
                        {filteredPemilihBarus.length > 0 ? (
                            <tbody>
                                {filteredPemilihBarus.map((surek, index) => (
                                    <React.Fragment key={surek.id}>
                                        <tr className="text-justify text-base font-mono">
                                            <th scope="row">{index + 1}</th>
                                            <td className="px-4 py-2 text-center">{surek.nama}</td>
                                            <td className="px-4 py-2 text-center">{surek.nik}</td>
                                            <td className="px-4 py-2 text-center">{surek.kelamin}</td>
                                            <td className="px-4 py-2 text-center">{surek.alamat}</td>
                                            <td className={`badge p-5 mt-3 text-center text-lg text-white font-semibold ${getStatusColor(surek.status)}`}>{surek.status}</td>
                                            <td className="px-4 py-2 text-center"><p className="bg-kosong rounded-full">{surek.layanan}</p></td>
                                            {/* <td className="px-4 py-2 text-center">
                                                <button className="btn bg-empat hover:bg-tiga text-white" onClick={(event) => handleCetakSurat(event, surek.id)} data-suratid={surek.id}>Lebih Detail</button>
                                            </td>
                                            {surek.status === "selesai" && (
                                                <td className="py-2 px-4">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => handleFile(event, surek.id)} data-suratid={surek.id}>Lihat File</button>
                                                </td>
                                            )} */}
                                        </tr>
                                        <tr>
                                            {surek.status === "diajukan" ? (
                                                <td colSpan="7" className="text-center">
                                                    <ul className="steps">
                                                        <li className="step step-success mx-2 font-semibold">Diajukan</li>
                                                        <li className="step mx-2 font-semibold">Didaftarkan</li>
                                                    </ul>
                                                </td>
                                            )  :
                                                <td colSpan="7" className="text-center">
                                                    <ul className="steps">
                                                        <li className="step step-success mx-2 font-semibold">Diajukan</li>
                                                        <li className="step step-success mx-2 font-semibold">Didaftarkan</li>
                                                    </ul>
                                                </td>
                                            }
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        ) : getListPemilihBaruLoading ? (
                            <tbody>
                                <tr>
                                    <td colSpan="7">
                                        <span className="loading loading-spinner loading-lg"></span>
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan="7">
                                        <div className="alert alert-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                            {getListPemilihBaruError ? getListPemilihBaruError : "Data Kosong"}
                                        </div>
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

export default TablePemilihBaru;