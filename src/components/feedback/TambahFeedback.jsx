import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListFeedback } from "../../actions/feedbackActions";
// import { whoAmI } from "../../../actions/authActions";

//Other
import Swal from 'sweetalert2'
import { Loading } from "..";
import { NavbarAdmin } from "../../componentsAdmin";

const addFeedback = () => {

    const [nama, setNama] = useState('');
    const [telepon, setTelepon] = useState('');
    const [pesan, setPesan] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addFeedbackResult } = useSelector((state) => state.feedbackReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    // console.log(whoAmIResult.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        setIsLoading(true);
        e.preventDefault();
        setIsLoading(true);

        setNama('');
        setTelepon();
        setPesan('');

        dispatch(
            addListFeedback({
                nama,
                telepon,
                pesan
            })
        );
    }

    useEffect(() => {
        if (addFeedbackResult) {
            Swal.fire('Berhasil!', 'Permohonan Anda Telah Terkirim, Harap Tunggu...', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('#');
                });
        }
    }, [addFeedbackResult]);

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
                                        <label htmlFor="nama" className="block text-gray-700 font-medium mb-2">Nama</label>
                                        <input type="text" id="nama" name="nama" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nama" required onChange={(e) => setNama(e.target.value)} value={nama} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="telepon" className="block text-gray-700 font-medium mb-2">Telepon</label>
                                        <input type="text" id="telepon" name="telepon" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan telepon" required onChange={(e) => setTelepon(e.target.value)} value={telepon} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="pesan" className="block text-gray-700 font-medium mb-2">Pesan</label>
                                        <textarea type="text" id="pesan" name="pesan" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan pesan" required onChange={(e) => setPesan(e.target.value)} value={pesan} />
                                    </div>
                                </div>

                                {/* Form Image */}
                                <div className="w-1/2 mt-3 ml-3">
                                    {/* <div className="bg-empat p-3 rounded-lg">
                                        <div className="mb-1">
                                            <label htmlFor="image" className="block text-white font-medium mb-2">Image</label>
                                            <input type="file" id="image" name="image" className="file-input file-input-bordered file-input-success w-full max-w-xs" required onChange={(e) => setImage(e.target.files[0])} defaultValue={image} />
                                        </div>
                                    </div> */}
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

export default addFeedback;