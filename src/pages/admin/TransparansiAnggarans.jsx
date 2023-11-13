import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListTransparansi } from "../../actions/transparansiActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { Loading } from "../../components";
import { NavbarAdmin } from "../../componentsAdmin";

//Firebase
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const TransparansiAnggarans = () => {

    const [tahun, setTahun] = useState('');
    const [file, setFile] = useState('');
    const [jenis, setJenis] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addTransparansiResult } = useSelector((state) => state.transparansiReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    // console.log(whoAmIResult.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (whoAmIResult.id) {
    //         setUserId(whoAmIResult.id);
    //     }
    // }, [whoAmIResult.id]);

    //Firebase--Start
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [linkFile, setLinkFile] = useState([]);

    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setLinkFile(url)
                setFile(url)
                // setImageUrls((prev) => [...prev, url]);
                // console.log(url);
            });
        });
    };

    console.log(linkFile);
    //Firebase--End

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        setTahun('');
        // setFile('');
        setJenis('');
        setKeterangan('');

        dispatch(
            addListTransparansi({
                tahun,
                file,
                jenis,
                keterangan
            })
        );
    }

    useEffect(() => {
        if (addTransparansiResult) {
            Swal.fire('Berhasil!', 'Data Tersimpan', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/table-transparansi');
                });
        }
    }, [addTransparansiResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarAdmin />
                    <main className="mx-auto ml-32 p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form Anggaran</h2>
                            <h2 className="text-sm font-semibold mb-2">(Form pengisian Anggaran Nagari perTahun)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                {/* Form input*/}
                                <div className="w-1/2 mr-4 mt-3">
                                    <div className="bg-empat p-3 rounded-lg">
                                        {/* <div className="mb-1">
                                            <label htmlFor="image_kk" className="block text-white font-medium mb-2">Foto KK Asli</label>
                                            <input type="file" id="image_kk" name="image_kk" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={(e) => setImageKk(e.target.files[0])} defaultValue={image_kk} />
                                        </div> */}
                                        <div className="mb-1">
                                            <label htmlFor="file" className="block text-white font-medium mb-2">File</label>
                                            <input type="file" id="file" name="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={(event) => {
                                                setImageUpload(event.target.files[0]);
                                            }} />
                                        </div>
                                    </div>
                                    <button className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out" onClick={uploadFile}> Upload File</button>
                                </div>

                                {/* Form Image */}
                                <div className="w-1/2 mt-3 ml-3">
                                    <div className="mb-2">
                                        <label htmlFor="tahun" className="block text-gray-700 font-medium mb-2">Tahun Anggaran</label>
                                        <input
                                            type="number"
                                            id="tahun"
                                            name="tahun"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Masukan tahun anggaran"
                                            min="2020"
                                            max="2030"
                                            step="1" // Langkah perubahan nilai (dalam hal ini 1 tahun)
                                            required
                                            onChange={(e) => setTahun(e.target.value)}
                                            value={tahun}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="file" className="block text-gray-700 font-medium mb-2">File Anggaran</label>
                                        <input type="text" id="file" name="file" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan link file anggaran" required onChange={(e) => setFile(e.target.value)} value={file} readOnly />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="jenis" className="block text-gray-700 font-medium mb-2">Jenis Dokumen</label>
                                        <select
                                            id="jenis" name="jenis"
                                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            required
                                            onChange={(e) => setJenis(e.target.value)}
                                        >
                                            <option disabled selected value="">Silahkan pilih</option>
                                            <option value="statistik penduduk">Statistik Penduduk</option>
                                            <option value="peraturan nagari">Peraturan Nagari</option>
                                            <option value="keputusan wali nagari">Keputusan Wali Nagari</option>
                                            <option value="transparansi anggaran">Transparansi Anggaran</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="keterangan" className="block text-gray-700 font-medium mb-2">Keterangan</label>
                                        <input type="text" id="keterangan" name="keterangan" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan keterangan anggaran" required onChange={(e) => setKeterangan(e.target.value)} value={keterangan} />
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

export default TransparansiAnggarans;

