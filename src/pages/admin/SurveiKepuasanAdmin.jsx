import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListSurveyKepuasan } from "../../actions/surveyKepuasanActions";

import { NavbarAdmin } from "../../componentsAdmin";

const SurveyKepuasanAdmin = () => {

    const { getListSurveyKepuasanResult, getListSurveyKepuasanLoading, getListSurveyKepuasanError } = useSelector((state) => state.surveyKepuasanReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListSurveyKepuasan());
    }, [dispatch]);

    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        // Filter data berdasarkan user_id yang sesuai
        if (whoAmIResult && getListSurveyKepuasanResult) {
            const filteredData = getListSurveyKepuasanResult.filter((surek) => surek.user_id === whoAmIResult.id);
            setFiltered(filteredData);
        }
    }, [whoAmIResult, getListSurveyKepuasanResult]);

    return (
        <>
            <NavbarAdmin />
            <div className="mx-auto ml-32 p-24">
                <div className="overflow-x-auto">
                    <h2 className="mx-auto mb-5 text-center text-lg font-bold shadow-sm">Rekap Survey Kepuasan Penduduk</h2>
                    <table className="table bg-satu" encType="multipart/form-data">
                        {filtered.length > 0 ? (
                            <tbody>
                                {filtered.map((surek, index) => (
                                    <React.Fragment key={surek.id}>
                                        <tr className="text-justify text-xl font-mono bg-kosong">
                                            <td className="py-2 font-semibold">Nomor</td>
                                            <td>:</td>
                                            <td className="pl-4">{index + 1}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Apakah anda pernah ke-kantor wali nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.pernah_kekantor}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Apakah anda pernah mendapat pelayanan di kantor wali nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.pernah_mendapat_pelayanan}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Bagaimana kebersihan di kantor wali nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.kebersihan_kantor}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Bagaimana pelayanan administrasi di kantor wali nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.kepuasan_pelayanan}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Bagaimana sikap petugas di kantor wali nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.sikap_petugas}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Bagaimana waktu pelayanan administrasi di kantor wali nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.waktu_pelayanan}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Apakah anda memperoleh informasi pembangunan nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.informasi_pembangunan}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Bagaimana kinerja kepala jorong dalam melayani masyarakat nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.kinerja_kepala_jorong}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Bagaimana menurut anda kedisiplinan perangkat nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.kedisiplinan_perangkat}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Dari mana anda memperoleh informasi nagari?</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.sumber_informasi_nagari}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Apakah ada Perangkat Desa yang meminta imbalan setelah memberikan pelayanan? Jika ada sebutkan nama Perangkatnya (Kami akan menjaga privasi dan nama Anda)</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.pungli}</td>
                                        </tr>
                                        <tr className="text-justify text-base font-mono">
                                            <td className="py-2 font-medium">Silahkan masukkan kritik & saran yang bersifat membangun demi kemajuan Nagari</td>
                                            <td>:</td>
                                            <td className="pl-4">{surek.kritik_saran}</td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        ) : getListSurveyKepuasanLoading ? (
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
                                            {getListSurveyKepuasanError ? getListSurveyKepuasanError : "Data Kosong"}
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

export default SurveyKepuasanAdmin;