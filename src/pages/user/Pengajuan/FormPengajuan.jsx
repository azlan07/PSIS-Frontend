import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListPengajuan } from "../../../actions/pengajuanActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { NavbarContent, Loading } from "../../../components";

const FormPengajuan = () => {

    const [user_id, setUserId] = useState('');
    const [name, setName] = useState('');
    const [nik, setNik] = useState('');
    const [alamat, setAlamat] = useState('');
    const [telepon, setTelepon] = useState('');
    const [image_kk, setImageKk] = useState('');
    const [nama_surat, setNamaSurat] = useState('');
    const [keterangan_lain, setKeteranganLain] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isDataComplete, setDataComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addPengajuanResult } = useSelector((state) => state.pengajuanReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (whoAmIResult.id) {
            setUserId(whoAmIResult.id);
        }
        if (whoAmIResult.name) {
            setName(whoAmIResult.name);
        }
        if (whoAmIResult.nik) {
            setNik(whoAmIResult.nik);
        }
        if (whoAmIResult.alamat) {
            setAlamat(whoAmIResult.alamat);
        }
        if (whoAmIResult.telepon) {
            setTelepon(whoAmIResult.telepon);
        }
    }, [whoAmIResult.id, whoAmIResult.name, whoAmIResult.nik, whoAmIResult.alamat, whoAmIResult.telepon]);

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        // setName('');
        setNik('');
        setAlamat('');
        setTelepon('');
        setImageKk('');
        setNamaSurat('');
        setKeteranganLain('');

        dispatch(
            addListPengajuan({
                user_id,
                name,
                nik,
                alamat,
                telepon,
                image_kk,
                nama_surat,
                keterangan_lain
            })
        );
    }

    useEffect(() => {
        if (addPengajuanResult) {
            Swal.fire('Berhasil!', 'Permohonan Anda Telah Terkirim, Harap Tunggu...', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/history-sureks');
                });
        }
    }, [addPengajuanResult])

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
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nama lengkap" onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="Nik" className="block text-gray-700 font-medium mb-2">Nik</label>
                                        <input type="number" id="nik" name="nik" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="NIK" onChange={(e) => setNik(e.target.value)} value={whoAmIResult.nik} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">Alamat Lengkap</label>
                                        <input type="text" id="alamat" name="alamat" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan alamat lengkap" onChange={(e) => setAlamat(e.target.value)} value={whoAmIResult.alamat} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="telepon" className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                                        <input type="text" id="telepon" name="telepon" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nomor whatsapp aktif" onChange={(e) => setTelepon(e.target.value)} value={whoAmIResult.telepon} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="nama_surat" className="block text-gray-700 font-medium mb-2">Nama Surat</label>
                                        <select
                                            id="nama_surat" name="nama_surat"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setNamaSurat(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="surat keterangan tidak mampu">Surat Keterangan Tidak Mampu</option>
                                            <option value="surat pengantar perubahan kk">Surat Pengantar Perubahan KK</option>
                                            <option value="surat keterangan domisili">Surat Keterangan Domisili</option>
                                            <option value="surat keterangan pindah/datang">Surat Keterangan Pindah/Datang</option>
                                            <option value="surat keterangan kelahiran">Surat Keterangan Kelahiran</option>
                                            <option value="surat keterangan izin hajatan">Surat Keterangan Izin Hajatan</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="keterangan_lain" className="block text-gray-700 font-medium mb-2">Keterangan Lainnya</label>
                                        <input type="text" id="keterangan_lain" name="keterangan_lain" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan keterangan lainnya sesuai instruksi disamping" onChange={(e) => setKeteranganLain(e.target.value)} value={keterangan_lain} required />
                                    </div>
                                    <div className="bg-empat p-3 rounded-lg">
                                        <div className="mb-1">
                                            <label htmlFor="image_kk" className="block text-white font-medium mb-2">Foto Dokumen</label>
                                            <input type="file" id="image_kk" name="image_kk" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={(e) => setImageKk(e.target.files[0])} defaultValue={image_kk} required />
                                        </div>
                                    </div>
                                    <button type="submit" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">{isLoading ? 'Loading...' : 'Kirim Data'}</button>
                                </div>

                                {/* Form Image */}
                                <div className="w-1/2 mt-3 ml-3">
                                    <div className="p-3">
                                        <h1 className="text-xl font-mono">Instruksi untuk Pengisian Form:</h1>
                                        <ul className="text-base font-serif text-justify">
                                            <li className="mt-1">1. Untuk Surat Keterangan Tidak Mampu, Tulis tujuan pengurusan, ID DTKS (kalau ada), dan foto kk pemohon.</li>
                                            <li className="mt-1">2. Untuk Surat Pengantar Perubahan KK, Tulis alasan perubahan dan foto kk lama.</li>
                                            <li className="mt-1">3. Untuk Surat Keterangan Domisili, Tulis tujuan pengurusan dan foto ktp pemohon.</li>
                                            <li className="mt-1">4. Untuk Surat Pindah/Datang, tulis Alamat asal, Alamat tujuan dengan lengkap serta alasan kepindahan dan foto ktp pemohon.</li>
                                            <li className="mt-1">5. Untuk Keterangan Kelahiran, Tulis data bayi (Nama, tempat lahir, berat dan panjang bayi, dan kelahiran ke-) serta foto kk orangtua.</li>
                                            <li className="mt-1">6. Untuk Surat Ijin Hajatan, tulis  tanggal hajatan, menikahkan/mengkhitankan, apa hiburannya, dan foto ktp pemohon.</li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default FormPengajuan;