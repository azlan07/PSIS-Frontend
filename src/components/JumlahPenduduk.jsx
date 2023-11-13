import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListPenduduk } from "../actions/pendudukActions";
import { getListUsers } from '../actions/userActions';

import { FaUsers, FaHouseChimney } from "react-icons/fa6";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const JumlahPenduduk = () => {

    const id = "1";
    const { getListPendudukResult } = useSelector((state) => state.pendudukReducer);
    const { getListUsersResult } = useSelector((state) => state.usersReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPenduduk());
        dispatch(getListUsers())
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    // const filteredSurek = Array.isArray(getListPendudukResult)
    //     ? getListPendudukResult.filter(
    //         (surek) => surek.id === parseInt(id)
    //     )
    //     : [];

    //fungsi untuk filter data user
    const filteredUsers = Array.isArray(getListUsersResult)
        ? getListUsersResult.filter(
            (users) => users.id === users.id
        )
        : [];
    // console.log(filteredUsers.length);

    let countLakiLaki = 0;
    let countPerempuan = 0;

    if (Array.isArray(filteredUsers) && filteredUsers.length > 0) {
        filteredUsers.forEach(user => {
            if (user.kelamin === 'laki-laki') {
                countLakiLaki++;
            } else if (user.kelamin === 'perempuan') {
                countPerempuan++;
            }
        });
    }
    // console.log('Jumlah kelamin laki-laki:', countLakiLaki);
    // console.log('Jumlah kelamin perempuan:', countPerempuan);


    return (
        <>
            <div className="my-20 py-5">
                <h1 className="text-4xl font-semibold text-center mb-10">Jumlah Akun Penduduk</h1>
                <div className="flex justify-center">
                    <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                        <div className="card-body items-center text-center">
                            <FaUsers className='text-9xl' />
                            <h2 className="card-title">Total Pengguna</h2>
                            <div className='bg-satu p-5 rounded-lg mt-2'>
                                <p className="text-5xl">{filteredUsers.length} Orang</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                        <div className="card-body items-center text-center">
                            <BsGenderMale className='text-9xl' />
                            <h2 className="card-title">Laki-laki</h2>
                            <div className='bg-satu p-5 rounded-lg mt-2'>
                                <p className="text-5xl">{countLakiLaki} Orang</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                        <div className="card-body items-center text-center">
                            <BsGenderFemale className='text-9xl' />
                            <h2 className="card-title">Perempuan</h2>
                            <div className='bg-satu p-5 rounded-lg mt-2'>
                            <p className="text-5xl">{countPerempuan} Orang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JumlahPenduduk;