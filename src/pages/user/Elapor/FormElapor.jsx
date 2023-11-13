import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListLapor } from "../../../actions/laporActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { NavbarContent, Loading } from "../../../components";

const FormElapor = () => {

    const [user_id, setUserId] = useState('');
    const [namePelapor, setNamePelapor] = useState('');
    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addLaporResult } = useSelector((state) => state.laporReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    // console.log(whoAmIResult.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const namePelaporDefault = id === '1' ? 'anonim' : whoAmIResult.name;

    useEffect(() => {
        if (whoAmIResult.id) {
            setUserId(whoAmIResult.id);
        }
        if (whoAmIResult.name) {
            setNamePelapor(namePelaporDefault);
        }
    }, [whoAmIResult.id, namePelaporDefault]);

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        setNamePelapor('');
        setJudul('');
        setIsi('');
        setTanggal('');
        setLokasi('');

        dispatch(
            addListLapor({
                user_id,
                namePelapor,
                judul,
                isi,
                tanggal,
                lokasi
            })
        );
    }

    useEffect(() => {
        if (addLaporResult) {
            Swal.fire('Berhasil!', 'Laporan Anda Telah Terkirim!', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/history-elapor');
                });
        }
    }, [addLaporResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarContent />
                    <main className="mx-auto p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form Laporan</h2>
                            <h2 className="text-sm font-semibold mb-2">(Laporan dan Kritik Masyarakat)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                {/* Form input*/}
                                <div className="w-full mr-4 mt-3">
                                    <div className="mb-2">
                                        <label htmlFor="namePelapor" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                        <input type="text" id="namePelapor" name="namePelapor" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nama lengkap" readOnly value={namePelapor} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="judul" className="block text-gray-700 font-medium mb-2">Judul Laporan</label>
                                        <input type="text" id="judul" name="judul" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Judul Laporan" required onChange={(e) => setJudul(e.target.value)} value={judul} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="isi" className="block text-gray-700 font-medium mb-2">Isi Laporan</label>
                                        <textarea type="text" id="isi" name="isi" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan isi laporan" required onChange={(e) => setIsi(e.target.value)} value={isi} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="tanggal" className="block text-gray-700 font-medium mb-2">Tanggal</label>
                                        <input type="date" id="tanggal" name="tanggal" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required onChange={(e) => setTanggal(e.target.value)} value={tanggal} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="lokasi" className="block text-gray-700 font-medium mb-2">Lokasi Lengkap</label>
                                        <input type="text" id="lokasi" name="lokasi" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan lokasi laporan" required onChange={(e) => setLokasi(e.target.value)} value={lokasi} />
                                    </div>
                                    <button type="submit" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">{isLoading ? 'Loading...' : 'Kirim'}</button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default FormElapor;

