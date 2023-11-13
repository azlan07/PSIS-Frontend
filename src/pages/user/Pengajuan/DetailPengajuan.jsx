import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListPengajuan } from "../../../actions/pengajuanActions";
import { ImageViewer } from '../../../components';

const DetailPengajuan = () => {
    const componentRef = useRef(null);

    const { id } = useParams();
    const { getListPengajuanResult } = useSelector((state) => state.pengajuanReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPengajuan());
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    const filteredSurek = Array.isArray(getListPengajuanResult)
        ? getListPengajuanResult.filter(
            (surek) => surek.id === parseInt(id)
        )
        : [];
    // console.log(getListPengajuanResult);

    //Zoom
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    return (
        <main>
            <div className="container mx-auto p-8">
                <div className="flex items-center">
                    {whoAmIResult.role === "admin" ? (
                        <button
                            className="btn bg-empat hover:bg-tiga text-white rounded-lg"
                        >
                            <a href="/surek s">Kembali</a>
                        </button>
                    ) : whoAmIResult.role === "wali" ? (
                        <button className="btn bg-empat hover:bg-tiga text-white rounded-lg">
                            <a href="/dashboard-wali">Kembali</a>
                        </button>
                    ) : (
                        <button className="btn bg-empat hover:bg-tiga text-white rounded-lg">
                            <a href="/history-sureks">Kembali</a>
                        </button>
                    )}

                    <h1 className="text-lg font-semibold mx-auto">Detail Data Pemohon Surat</h1>
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
                                        <td className="py-2 font-semibold">Alamat</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.alamat}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Telepon</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.telepon}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Nama Surat</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.nama_surat}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Keterangan Lain</td>
                                        <td>:</td>
                                        <td className="pl-4">{surek.keterangan_lain}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-semibold">Foto Dokumen</td>
                                        <td>:</td>
                                        <td className="pl-4">
                                            <ImageViewer imageUrl={surek.image_kk} />
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

export default DetailPengajuan;
