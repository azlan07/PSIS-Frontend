import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListKaba, editListKaba, deleteKaba } from "../../../actions/kabaActions";

import NavbarContent from '../../../components/NavbarContent';

function EkabaDashboard() {

  const { whoAmIResult } = useSelector((state) => state.authReducer);
  const { getListKabaResult, getListKabaLoading, getListKabaError } = useSelector((state) => state.kabaReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Dispatch aksi untuk mengambil daftar pengguna
  useEffect(() => {
    dispatch(getListKaba());
  }, [dispatch]);
  console.log(whoAmIResult);
  console.log(getListKabaResult);

  const handleDetailClick = (id) => {
    navigate(`/detail-kaba/${id}`);
  };

  //maksimal kata yang ditampilkan di list
  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + " ...";
    }
    return text;
  };

  //filter waktu upload
  const timeDifference = (date) => {
    const currentTime = new Date();
    const targetTime = new Date(date);
    const difference = currentTime - targetTime;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} hari yang lalu`;
    } else if (hours > 0) {
        return `${hours} jam yang lalu`;
    } else {
        return 'sekitar 1 jam yang lalu';
    }
};

  return (
    <div>
      <NavbarContent />
      <div className='mx-auto ml-32 p-24'>
        <h1 className="text-3xl font-semibold text-center">E - Kaba</h1>
        <h1 className="text-md font-semibold text-center">(Lihat dan baca informasi/berita terbaru seputar Nagari Sumanik)</h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {getListKabaResult && getListKabaResult.slice().reverse().map((kaba) => (
            <div className="bg-kosong rounded-lg shadow-md p-4" key={kaba.id} onClick={() => handleDetailClick(kaba.id)}>
              <h2 className="text-xl text-center font-semibold mb-2">{kaba.judul}</h2>
              <img src={kaba.image} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <p className="text-gray-500 font-extralight text-right">Pembuat: {kaba.pembuat}</p>
              <p className="text-gray-500 font-extralight text-right">Diupload {timeDifference(kaba.tanggal)}</p>
              <p className="text-gray-600 font-extralight text-right">sumber: ({kaba.sumber})</p>
              <p className="text-gray-600 font-semibold">{truncateText(kaba.isi, 5)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EkabaDashboard;
