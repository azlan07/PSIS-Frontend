import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListLapor } from "../../../actions/laporActions";

import { NavbarContent } from "../../../components";

const HistoryLapor = () => {

    const { getListLaporResult, getListLaporLoading, getListLaporError } = useSelector((state) => state.laporReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListLapor());
    }, [dispatch]);

    // 
    const [filteredLapor, setFilteredLapor] = useState([]);

    useEffect(() => {
        dispatch(getListLapor());
    }, [dispatch]);

    useEffect(() => {
        if (whoAmIResult && getListLaporResult) {
            const filteredData = getListLaporResult.filter((lapor) => lapor.user_id === whoAmIResult.id);
            setFilteredLapor(filteredData);
        }
    }, [whoAmIResult, getListLaporResult]);

    return (
        <>
            <NavbarContent />
            <div className="mx-auto p-24">
                <div className="overflow-x-auto">
                    <h2 className="mx-auto mb-5 text-center text-lg font-bold shadow-sm">History Lapor</h2>
                    <table className="table bg-satu" encType="multipart/form-data">
                        <thead>
                            <tr className="text-black">
                                <th className="py-2 px-4">No</th>
                                <th className="py-2 px-4 text-center">Nama</th>
                                <th className="py-2 px-4 text-center">Judul</th>
                                <th className="py-2 px-4 text-center">Isi</th>
                                <th className="py-2 px-4 text-center">Tanggal</th>
                                <th className="py-2 px-4 text-center">Lokasi</th>
                            </tr>
                        </thead>
                        {filteredLapor.length > 0 ? (
                            <tbody>
                                {filteredLapor.map((lapor, index) => (
                                    <tr key={lapor.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="px-4 py-2 text-center">{lapor.namePelapor}</td>
                                        <td className="px-4 py-2 text-center">{lapor.judul}</td>
                                        <td className="px-4 py-2 text-center">{lapor.isi}</td>
                                        <td className="px-4 py-2 text-center">{lapor.tanggal.slice(0, 10)}</td>
                                        <td className="px-4 py-2 text-center">{lapor.lokasi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : getListLaporLoading ? (
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
                                            {getListLaporError ? getListLaporError : "Data Kosong"}
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

export default HistoryLapor;