import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListSktm } from "../../../actions/sktmActions";
import { ImageViewer } from '../../../components';

const Sktm = () => {
    const componentRef = useRef(null);

    const { id } = useParams();
    const { getListSktmResult, getListSktmLoading, getListSktmError } = useSelector((state) => state.sktmReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListSktm());
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    const filteredSurek = Array.isArray(getListSktmResult)
        ? getListSktmResult.filter(
            (surek) => surek.id === parseInt(id)
        )
        : [];
    console.log(filteredSurek);

    //Zoom
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    return (
        <main>
            <div className="container mx-auto p-8">
                <div className="flex items-center">
                    {whoAmIResult.role === "admin" ? (
                        // Jika user adalah admin, tambahkan pengalihan langsung menggunakan navigate
                        <button
                            className="btn bg-empat hover:bg-tiga text-white rounded-lg"
                        >
                            <a href="/sureks">Kembali</a>
                        </button>
                    ) : (
                        // Jika user adalah user, gunakan Link untuk mengarahkan ke /history-sureks
                        <button className="btn bg-empat hover:bg-tiga text-white rounded-lg">
                            <a href="/history-sureks">Kembali</a>
                        </button>
                    )}
                    <h1 className="text-lg font-semibold mx-auto">Detail Data Pemohon SKTM</h1>
                </div>


                {filteredSurek.map((surek) => (
                    <div key={surek.id} className="bg-white p-6 rounded-lg" ref={componentRef}>
                        <div className="p-6 rounded-lg">
                            <table className="table mx-auto">
                                <tbody>
                                    <tr>
                                        <td className="py-2 font-semibold">Nama</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Nik</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.nik}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Jenis Kelamin</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.kelamin}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Alamat</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.alamat}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Foto Kk</td>
                                        <td>:</td>
                                        <td className="pl-4">
                                            <ImageViewer imageUrl={surek.imageKk}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Foto Ktp Ayah</td>
                                        <td>:</td>
                                        <td className="pl-4">
                                            <ImageViewer imageUrl={surek.imageKtpAyah}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Foto Ktp Ibu</td>
                                        <td>:</td>
                                        <td className="pl-4">
                                            <ImageViewer imageUrl={surek.imageKtpIbu}/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                ))}
            </div>
        </main>
    );
};

export default Sktm;
