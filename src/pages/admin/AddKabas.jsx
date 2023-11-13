import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListKaba } from "../../actions/kabaActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { Loading } from "../../components";
import { NavbarAdmin } from "../../componentsAdmin";

const FormSktm = () => {

    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [pembuat, setPembuat] = useState('');
    const [sumber, setSumber] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    const { addKabaError, addKabaResult } = useSelector((state) => state.kabaReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    // console.log(whoAmIResult.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        setJudul('');
        setIsi();
        setTanggal('');
        setPembuat('');
        setSumber('');
        setImage('');

        dispatch(
            addListKaba({
                judul,
                isi,
                tanggal,
                pembuat,
                sumber,
                image
            })
        );
    }

    useEffect(() => {
        if (addKabaResult) {
            Swal.fire('Berhasil!', 'Permohonan Anda Telah Terkirim, Harap Tunggu...', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/kabas');
                });
        }
    }, [addKabaResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarAdmin />
                    <main className="mx-auto ml-32 p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form E-Kaba</h2>
                            <h2 className="text-sm font-semibold mb-2">(Update informasi terbaru)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                {/* Form input*/}
                                <div className="w-1/2 mr-4 mt-3">
                                    <div className="mb-2">
                                        <label htmlFor="judul" className="block text-gray-700 font-medium mb-2">Judul</label>
                                        <input type="text" id="judul" name="judul" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan judul" required onChange={(e) => setJudul(e.target.value)} value={judul} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="isi" className="block text-gray-700 font-medium mb-2">Isi</label>
                                        <textarea className="textarea textarea-accent rounded-lg px-4 py-2 w-full" placeholder="Isi" required onChange={(e) => setIsi(e.target.value)} value={isi}></textarea>
                                        {/* <ReactQuill
                                            id="isi" name="isi"
                                            className="bg-kosong"
                                            theme="snow"
                                            onChange={(e) => setIsi(e.target.value)}
                                            value={isi}
                                        /> */}
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="tanggal" className="block text-gray-700 font-medium mb-2">Tanggal</label>
                                        <input type="date" id="tanggal" name="tanggal" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required onChange={(e) => setTanggal(e.target.value)} value={tanggal} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="pembuat" className="block text-gray-700 font-medium mb-2">Pembuat</label>
                                        <input type="text" id="pembuat" name="pembuat" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan Pembuat" required onChange={(e) => setPembuat(e.target.value)} value={pembuat} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="sumber" className="block text-gray-700 font-medium mb-2">Sumber</label>
                                        <input type="text" id="sumber" name="sumber" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan sumber" required onChange={(e) => setSumber(e.target.value)} value={sumber} />
                                    </div>
                                </div>

                                {/* Form Image */}
                                <div className="w-1/2 mt-3 ml-3">
                                    <div className="bg-empat p-3 rounded-lg">
                                        <div className="mb-1">
                                            <label htmlFor="image" className="block text-white font-medium mb-2">Image</label>
                                            <input type="file" id="image" name="image" className="file-input file-input-bordered file-input-success w-full max-w-xs" required onChange={(e) => setImage(e.target.files[0])} defaultValue={image} />
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