import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { addListUploadSurek } from "../../actions/uploadSurekActions";
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

const UploadSurat = () => {

    const { id } = useParams();
    const [surek_id, setSurekId] = useState(id);
    const [file, setFile] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { addUploadSurekResult } = useSelector((state) => state.uploadSurekReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    // console.log(whoAmIResult.id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

        // setFile('');


        dispatch(
            addListUploadSurek({
                surek_id,
                file
            })
        );
    }

    useEffect(() => {
        if (addUploadSurekResult) {
            Swal.fire('Berhasil!', 'Data Tersimpan', 'success')
                .then(() => {
                    setIsLoading(false);
                    navigate('/sureks');
                });
        }
    }, [addUploadSurekResult]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarAdmin />
                    <main className="mx-auto ml-32 p-24">
                        <div className="max-w-xl mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Form Input Surat</h2>
                            <h2 className="text-sm font-semibold mb-2">(Form untuk mengirim file surat ke masyarakat)</h2>
                            <hr />
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                <div className="w-1/2 mt-3">
                                    <div className="bg-empat p-3 rounded-lg">
                                        <div className="mb-1">
                                            <label htmlFor="file" className="block text-white font-medium mb-2">File</label>
                                            <input type="file" id="file" name="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" onChange={(event) => {
                                                setImageUpload(event.target.files[0]);
                                            }} />
                                        </div>
                                    </div>
                                    <a className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out" onClick={uploadFile}> Upload Image</a>
                                </div>
                                <div className="w-1/2 mt-3 ml-2">
                                    <div className="mb-2">
                                        <label htmlFor="tahun" className="block text-gray-700 font-medium mb-2">Surek Id</label>
                                        <input type="text" id="tahun" name="tahun" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan tahun anggaran" required onChange={(e) => setSurekId(e.target.value)} value={surek_id} readOnly />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="file" className="block text-gray-700 font-medium mb-2">Link File Surek</label>
                                        <input type="text" id="file" name="file" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan link file anggaran" required onChange={(e) => setFile(e.target.value)} value={file} readOnly />
                                    </div>
                                    {file === '' ? (
                                        <p className="badge bg-red-500 mt-4 text-white text-lg p-5">belum ada file</p>
                                    ) : (
                                        <div>
                                            <button type="submit" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">
                                                {isLoading ? 'Loading...' : 'Upload File'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default UploadSurat;

