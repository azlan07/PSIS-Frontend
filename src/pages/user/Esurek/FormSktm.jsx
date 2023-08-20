import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListSktm } from "../../../actions/sktmActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { NavbarContent, Loading } from "../../../components";

const FormSktm = () => {

    const [user_id, setUserId] = useState('');
    const [name, setName] = useState('');
    const [nik, setNik] = useState('');
    const [kelamin, setKelamin] = useState('');
    const [alamat, setAlamat] = useState('');
    const [imageKk, setImageKk] = useState('');
    const [imageKtpAyah, setImageKtpAyah] = useState('');
    const [imageKtpIbu, setImageKtpIbu] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addSktmError, addSktmResult } = useSelector((state) => state.sktmReducer);
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

        setName('');
        setNik('');
        setKelamin('');
        setAlamat('');
        setImageKk('');
        setImageKtpAyah('');
        setImageKtpIbu('');

        dispatch(
            addListSktm({
                user_id,
                name,
                nik,
                kelamin,
                alamat,
                imageKk,
                imageKtpAyah,
                imageKtpIbu
            })
        );
    }

    useEffect(() => {
        if (addSktmResult) {
            Swal.fire('Berhasil!', 'Permohonan Anda Telah Terkirim, Harap Tunggu...', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/history-sureks');
                });
        }
    }, [addSktmResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarContent />
                    <main className="mx-auto ml-32 p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form SKTM</h2>
                            <h2 className="text-sm font-semibold mb-2">(Surat Keterangan Tidak Mampu)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                {/* Form input*/}
                                <div className="w-1/2 mr-4 mt-3">
                                    <div className="mb-2">
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                        <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nama lengkap" required onChange={(e) => setName(e.target.value)} value={name} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="Nik" className="block text-gray-700 font-medium mb-2">Nik</label>
                                        <input type="number" id="nik" name="nik" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="NIK" required onChange={(e) => setNik(e.target.value)} value={nik} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="kelamin" className="block text-gray-700 font-medium mb-2">Jenis Kelamin</label>
                                        <select
                                            id="kelamin" name="kelamin"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKelamin(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="laki-laki">laki-laki</option>
                                            <option value="perempuan">perempuan</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">Alamat Lengkap</label>
                                        <input type="text" id="alamat" name="alamat" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan alamat lengkap" required onChange={(e) => setAlamat(e.target.value)} value={alamat} />
                                    </div>
                                </div>

                                {/* Form Image */}
                                <div className="w-1/2 mt-3 ml-3">
                                    <div className="bg-empat p-3 rounded-lg">
                                        <div className="mb-1">
                                            <label htmlFor="imageKk" className="block text-white font-medium mb-2">Foto KK Asli</label>
                                            <input type="file" id="imageKk" name="imageKk" className="file-input file-input-bordered file-input-success w-full max-w-xs" required onChange={(e) => setImageKk(e.target.files[0])} defaultValue={imageKk} />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="imageKtpAyah" className="block text-white font-medium mb-2">Foto KTP Ayah Asli</label>
                                            <input type="file" id="imageKtpAyah" name="imageKtpAyah" className="file-input file-input-bordered file-input-success w-full max-w-xs" required onChange={(e) => setImageKtpAyah(e.target.files[0])} defaultValue={imageKtpAyah} />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="imageKtpIbu" className="block text-white font-medium mb-2">Foto KTP Ibu Asli</label>
                                            <input type="file" id="imageKtpIbu" name="imageKtpIbu" className="file-input file-input-bordered file-input-success w-full max-w-xs" required onChange={(e) => setImageKtpIbu(e.target.files[0])} defaultValue={imageKtpIbu} />
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

export default FormSktm;