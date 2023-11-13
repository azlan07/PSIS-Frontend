import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListPemilihBaru } from "../../../actions/pemilihBaruActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { NavbarContent, Loading } from "../../../components";

const FormPemilihBaru = () => {

    const [user_id, setUserId] = useState('');
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [kelamin, setKelamin] = useState('');
    const [umur, setUmur] = useState('');
    const [alamat, setAlamat] = useState('');
    const [punya_ktp, setPunyaKtp] = useState('');
    const [image_kk, setImageKk] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addPemilihBaruResult } = useSelector((state) => state.pemilihBaruReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    // console.log(whoAmIResult.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (whoAmIResult.id) {
            setUserId(whoAmIResult.id);
        }
    }, [whoAmIResult.id]);

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        setNama('');
        setNik('');
        setKelamin('');
        setUmur('');
        setAlamat('');
        setPunyaKtp('');
        setImageKk('');

        dispatch(
            addListPemilihBaru({
                user_id,
                nama,
                nik,
                kelamin,
                umur,
                alamat,
                punya_ktp,
                image_kk
            })
        );
    }

    useEffect(() => {
        if (addPemilihBaruResult) {
            Swal.fire('Berhasil!', 'Permohonan Anda Telah Terkirim, Harap Tunggu...', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/table-pemilih-baru');
                });
        }
    }, [addPemilihBaruResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarContent />
                    <main className="mx-auto ml-32 p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form Pengajuan Pembuatan Surat</h2>
                            <h2 className="text-sm font-semibold mb-2">(Harap mengisi form dengan data asli sesuai ktp/kk)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                {/* Form input*/}
                                <div className="w-1/2 mr-4 mt-3">
                                    <div className="mb-2">
                                        <label htmlFor="nama" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                        <input type="text" id="nama" name="nama" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nama lengkap" required onChange={(e) => setNama(e.target.value)} value={nama} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="Nik" className="block text-gray-700 font-medium mb-2">Nik</label>
                                        <input type="number" id="nik" name="nik" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="NIK" required onChange={(e) => setNik(e.target.value)} value={nik} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="jenis_kelamin" className="block text-gray-700 font-medium mb-2">Jenis Kelamin</label>
                                        <select
                                            id="jenis_kelamin" name="jenis_kelamin"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKelamin(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="laik-laki">Laki-laki</option>
                                            <option value="perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="umur" className="block text-gray-700 font-medium mb-2">Umur</label>
                                        <input type="number" id="umur" name="umur" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan umur" required onChange={(e) => setUmur(e.target.value)} value={umur} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">Alamat Lengkap</label>
                                        <input type="text" id="alamat" name="alamat" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan alamat lengkap" required onChange={(e) => setAlamat(e.target.value)} value={alamat} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="punya_ktp" className="block text-gray-700 font-medium mb-2">Apakah sudah punya ktp?</label>
                                        <select
                                            id="punya_ktp" name="punya_ktp"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setPunyaKtp(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="sudah">Sudah</option>
                                            <option value="belum">Belum</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Form Image */}
                                <div className="w-1/2 mt-3 ml-3">
                                    <div className="bg-empat p-3 rounded-lg">
                                        <div className="mb-1">
                                            <label htmlFor="image_kk" className="block text-white font-medium mb-2">Foto Ktp / Kk</label>
                                            <input type="file" id="image_kk" name="image_kk" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={(e) => setImageKk(e.target.files[0])} defaultValue={image_kk} required />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">{isLoading ? 'Loading...' : 'Kirim Data'}</button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default FormPemilihBaru;