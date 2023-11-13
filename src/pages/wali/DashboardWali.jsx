import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListUsers } from '../../actions/userActions';
import { getListSurek } from '../../actions/surekActions';
import { getListKaba } from "../../actions/kabaActions";
import { getListLapor } from "../../actions/laporActions";
import { getListPemilihBaru } from "../../actions/pemilihBaruActions";
import { getListSurveyKepuasan } from "../../actions/surveyKepuasanActions";

import ImageUser from "../../../public/images/User.svg"
import ImageEsurek from "../../../public/images/Esurek.svg"
import ImageElapor from "../../../public/images/Elapor.svg"
import ImageEkaba from "../../../public/images/Ekaba.svg"

import { NavbarWali } from "../../componentsWali";
const DashboardAdmin = () => {

  const { getListUsersResult } = useSelector((state) => state.usersReducer);
  const { getListSurekResult } = useSelector((state) => state.surekReducer);
  const { getListKabaResult } = useSelector((state) => state.kabaReducer);
  const { getListLaporResult } = useSelector((state) => state.laporReducer);
  const { getListPemilihBaruResult } = useSelector((state) => state.pemilihBaruReducer);
  const { getListSurveyKepuasanResult } = useSelector((state) => state.surveyKepuasanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUsers());
    dispatch(getListSurek());
    dispatch(getListKaba());
    dispatch(getListLapor());
    dispatch(getListPemilihBaru());
    dispatch(getListSurveyKepuasan());
  }, [dispatch]);

  return (
    <>
      <NavbarWali />
      <div className="mx-auto ml-32 p-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-dua hover:bg-satu shadow-md p-4 rounded-lg">
          <img className='w-24 mx-auto' src={ImageUser} alt="imageUser" />
          <h3 className="text-xl text-center font-semibold mb-2">Pengguna</h3><hr />
          <p className="text-gray-600">Jumlah Pengguna: <span className='text-center' style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0 auto' }}>{getListUsersResult.length}</span></p>
        </div>

        <div className="bg-dua hover:bg-satu shadow-md p-4 rounded-lg">
          <img className='w-24 mx-auto' src={ImageEsurek} alt="imageSurek" />
          <h3 className="text-xl text-center font-semibold mb-2">E - Surek</h3><hr />
          <p className="text-gray-600">Jumlah Surat yang masuk: <span className='text-center' style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0 auto' }}>{getListSurekResult.length}</span></p>
        </div>

        <div className="bg-dua hover:bg-satu shadow-md p-4 rounded-lg">
          <img className='w-24 mx-auto' src={ImageEkaba} alt="imageKaba" />
          <h3 className="text-xl text-center font-semibold mb-2">E - Kaba</h3><hr />
          <p className="text-gray-600">Jumlah Kaba: <span className='text-center' style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0 auto' }}>{getListKabaResult.length}</span></p>
        </div>

        <div className="bg-dua hover:bg-satu shadow-md p-4 rounded-lg">
          <img className='w-24 mx-auto' src={ImageElapor} alt="imageLapor" />
          <h3 className="text-xl text-center font-semibold mb-2">E - Lapor</h3><hr />
          <p className="text-gray-600">Jumlah Lapor: <span className='text-center' style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0 auto' }}>{getListLaporResult.length}</span></p>
        </div>

        <div className="bg-dua hover:bg-satu shadow-md p-4 rounded-lg">
          <img className='w-24 mx-auto' src={ImageElapor} alt="imageLapor" />
          <h3 className="text-xl text-center font-semibold mb-2">Pemilih Baru</h3><hr />
          <p className="text-gray-600">Jumlah Pendaftar: <span className='text-center' style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0 auto' }}>{getListPemilihBaruResult.length}</span></p>
        </div>

        <div className="bg-dua hover:bg-satu shadow-md p-4 rounded-lg">
          <img className='w-24 mx-auto' src={ImageElapor} alt="imageLapor" />
          <h3 className="text-xl text-center font-semibold mb-2">Survey Kepuasan</h3><hr />
          <p className="text-gray-600">Jumlah Survey: <span className='text-center' style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0 auto' }}>{getListSurveyKepuasanResult.length}</span></p>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;