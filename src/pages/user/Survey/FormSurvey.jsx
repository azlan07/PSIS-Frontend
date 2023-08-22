import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListSurveyKepuasan, getListSurveyKepuasan } from "../../../actions/surveyKepuasanActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { NavbarContent, Loading } from "../../../components";

const FormSurvey = () => {

    const [user_id, setUserId] = useState('');
    const [pernah_kekantor, setPernahKekantor] = useState('');
    const [pernah_mendapat_pelayanan, setPernahMendapatPelayanan] = useState('');
    const [kebersihan_kantor, setKebersihanKantor] = useState('');
    const [kepuasan_pelayanan, setKepuasanPelayanan] = useState('');
    const [sikap_petugas, setSikapPetugas] = useState('');
    const [waktu_pelayanan, setWaktuPelayanan] = useState('');
    const [informasi_pembangunan, setInformasiPembangunan] = useState('');
    const [kinerja_kepala_jorong, setKinerjaKepalaJorong] = useState('');
    const [kedisiplinan_perangkat, setKedisiplinanPerangkat] = useState('');
    const [sumber_informasi_nagari, setSumberInformasiNagari] = useState('');
    const [pungli, setPungli] = useState('');
    const [kritik_saran, setKritikSaran] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const { addSurveyKepuasanResult, getListSurveyKepuasanResult } = useSelector((state) => state.surveyKepuasanReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const id = whoAmIResult.id;
    // console.log(id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListSurveyKepuasan());
    }, [dispatch]);

    const filtered = Array.isArray(getListSurveyKepuasanResult)
        ? getListSurveyKepuasanResult.filter(
            (survey) => survey.id === parseInt(id)
        )
        : [];
    // console.log(filtered);

    useEffect(() => {
        if (whoAmIResult.id) {
            setUserId(whoAmIResult.id);
        }
    }, [whoAmIResult.id]);

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        setPernahKekantor('');
        setPernahMendapatPelayanan();
        setKebersihanKantor('');
        setKepuasanPelayanan('');
        setSikapPetugas('');
        setWaktuPelayanan('');
        setInformasiPembangunan('');
        setKinerjaKepalaJorong('');
        setKedisiplinanPerangkat('');
        setSumberInformasiNagari('');
        setPungli('');
        setKritikSaran('');

        dispatch(
            addListSurveyKepuasan({
                user_id,
                pernah_kekantor,
                pernah_mendapat_pelayanan,
                kebersihan_kantor,
                kepuasan_pelayanan,
                sikap_petugas,
                waktu_pelayanan,
                informasi_pembangunan,
                kinerja_kepala_jorong,
                kedisiplinan_perangkat,
                sumber_informasi_nagari,
                pungli,
                kritik_saran
            })
        );
    }

    useEffect(() => {
        if (addSurveyKepuasanResult) {
            Swal.fire('Berhasil!', 'Permohonan Anda Telah Terkirim, Harap Tunggu...', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/');
                });
        }
    }, [addSurveyKepuasanResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <NavbarContent />
                    <main className="mx-72 p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form Survey Kepuasan</h2>
                            <h2 className="text-sm font-semibold mb-2">(Survey Kepuasan Masyarakat mengenai kinerja dan pelayanan dikantor Wali Nagari)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                {/* Form input*/}
                                <div div className="w-full mr-4 mt-3">
                                    <div className="mb-2">
                                        <label htmlFor="pernah_kekantor" className="block text-gray-700 font-medium mb-2">Apakah anda pernah ke-kantor wali nagari?</label>
                                        <select
                                            id="pernah_kekantor" name="pernah_kekantor"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setPernahKekantor(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="pernah">Pernah</option>
                                            <option value="belum">Belum</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="pernah_mendapat_pelayanan" className="block text-gray-700 font-medium mb-2">Apakah anda pernah mendapat pelayanan di kantor wali nagari?</label>
                                        <select
                                            id="pernah_mendapat_pelayanan" name="pernah_mendapat_pelayanan"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setPernahMendapatPelayanan(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="pernah">Pernah</option>
                                            <option value="belum">Belum</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="kebersihan_kantor" className="block text-gray-700 font-medium mb-2">Bagaimana kebersihan di kantor wali nagari?</label>
                                        <select
                                            id="kebersihan_kantor" name="kebersihan_kantor"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKebersihanKantor(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="bersih">Bersih</option>
                                            <option value="cukup bersih">Cukup Bersih</option>
                                            <option value="kotor">Kotor</option>
                                            <option value="sangat kotor">Sangat Kotor</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="kepuasan_pelayanan" className="block text-gray-700 font-medium mb-2">Bagaimana pelayanan administrasi di kantor wali nagari?</label>
                                        <select
                                            id="kepuasan_pelayanan" name="kepuasan_pelayanan"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKepuasanPelayanan(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="puas">Puas</option>
                                            <option value="cukup puas">Cukup Puas</option>
                                            <option value="tidak puas">Tidak Puas</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="sikap_petugas" className="block text-gray-700 font-medium mb-2">Bagaimana sikap petugas di kantor wali nagari?</label>
                                        <select
                                            id="sikap_petugas" name="sikap_petugas"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setSikapPetugas(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="ramah">Ramah</option>
                                            <option value="tidak ramah">Tidak Ramah</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="waktu_pelayanan" className="block text-gray-700 font-medium mb-2">Bagaimana waktu pelayanan administrasi di kantor wali nagari?</label>
                                        <select
                                            id="waktu_pelayanan" name="waktu_pelayanan"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setWaktuPelayanan(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="cepat">Cepat</option>
                                            <option value="lambat">Lambat</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="informasi_pembangunan" className="block text-gray-700 font-medium mb-2">Apakah anda memperoleh informasi pembangunan nagari?</label>
                                        <select
                                            id="informasi_pembangunan" name="informasi_pembangunan"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setInformasiPembangunan(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="ya">Ya</option>
                                            <option value="tidak">Tidak</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="kinerja_kepala_jorong" className="block text-gray-700 font-medium mb-2">Bagaimana kinerja kepala jorong dalam melayani masyarakat nagari?</label>
                                        <select
                                            id="kinerja_kepala_jorong" name="kinerja_kepala_jorong"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKinerjaKepalaJorong(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="baik">Baik</option>
                                            <option value="tidak baik">Tidak Baik</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="kedisiplinan_perangkat" className="block text-gray-700 font-medium mb-2">Bagaimana menurut anda kedisiplinan perangkat nagari?</label>
                                        <select
                                            id="kedisiplinan_perangkat" name="kedisiplinan_perangkat"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKedisiplinanPerangkat(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="disiplin">Disiplin</option>
                                            <option value="tidak disiplin">Tidak Disiplin</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="sumber_informasi_nagari" className="block text-gray-700 font-medium mb-2">Dari mana anda memperoleh informasi nagari?</label>
                                        <select
                                            id="sumber_informasi_nagari" name="sumber_informasi_nagari"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setSumberInformasiNagari(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="media sosial">Media Sosial</option>
                                            <option value="baliho/baner">Baliho/Baner</option>
                                            <option value="perangkat desa">Perangkat Desa</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="pungli" className="block text-gray-700 font-medium mb-2">Apakah ada Perangkat Desa yang meminta imbalan setelah memberikan pelayanan?
                                            Jika ada sebutkan nama Perangkatnya (Kami akan menjaga privasi dan nama Anda)</label>
                                        <input type="text"
                                            id="pungli" name="pungli"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setPungli(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="kritik_saran" className="block text-gray-700 font-medium mb-2">Silahkan masukkan kritik & saran yang bersifat membangun demi kemajuan Nagari</label>
                                        <input type="text"
                                            id="kritik_saran" name="kritik_saran"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setKritikSaran(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <button type="submit" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">{isLoading ? 'Loading...' : 'Kirim Data'}</button>
                                </div>
                            </form>

                        </div>
                    </main >
                </ >
            )}
        </>
    );
}

export default FormSurvey;