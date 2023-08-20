import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListPenduduk } from "../actions/pendudukActions";

import { FaUsers, FaHouseChimney } from "react-icons/fa6";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const JumlahPenduduk = () => {

    const id = "1";
    const { getListPendudukResult } = useSelector((state) => state.pendudukReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPenduduk());
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    const filteredSurek = Array.isArray(getListPendudukResult)
        ? getListPendudukResult.filter(
            (surek) => surek.id === parseInt(id)
        )
        : [];
    console.log(getListPendudukResult);

    return (
        <>
            {filteredSurek.map((surek) => (
                <div className="my-20 py-5">
                    <h1 className="text-4xl font-semibold text-center mb-10">Jumlah Penduduk</h1>
                    <div key={surek.id} className="flex justify-center">
                        <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                            <div className="card-body items-center text-center">
                                <FaUsers className='text-9xl' />
                                <h2 className="card-title">Total Penduduk</h2>
                                <p className="text-5xl">{parseInt(surek.laki_laki) + parseInt(surek.perempuan)}</p>
                            </div>
                        </div>
                        <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                            <div className="card-body items-center text-center">
                                <BsGenderMale className='text-9xl' />
                                <h2 className="card-title">Laki-laki</h2>
                                <p className="text-5xl">{surek.laki_laki}</p>
                            </div>
                        </div>
                        <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                            <div className="card-body items-center text-center">
                                <BsGenderFemale className='text-9xl' />
                                <h2 className="card-title">Perempuan</h2>
                                <p className="text-5xl">{surek.perempuan}</p>
                            </div>
                        </div>
                        <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                            <div className="card-body items-center text-center">
                                <FaHouseChimney className='text-9xl' />
                                <h2 className="card-title">Kepala Keluarga</h2>
                                <p className="text-5xl">{surek.kepala_keluarga}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </>
    );
}

export default JumlahPenduduk;