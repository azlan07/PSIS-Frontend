import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListKaba } from "../../../actions/kabaActions";

const DetailKaba = () => {

    const { id } = useParams();
    const { getListKabaResult } = useSelector((state) => state.kabaReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListKaba());
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    const filteredKaba = Array.isArray(getListKabaResult)
        ? getListKabaResult.filter(
            (kaba) => kaba.id === parseInt(id)
        )
        : [];
    console.log(filteredKaba);

    return (
        <>
            <main>
                <div className="container mx-auto p-8">
                    <div className="flex items-center bg-kosong p-3 rounded-md">
                        {whoAmIResult.role === "admin" ? (
                            // Jika user adalah admin, tambahkan pengalihan langsung menggunakan navigate
                            <button
                                className="btn bg-empat hover:bg-tiga text-white rounded-lg"
                            >
                                <a href="/kabas">Kembali</a>
                            </button>
                        ) : (
                            // Jika user adalah user, gunakan Link untuk mengarahkan ke /history-sureks
                            <button className="btn bg-empat hover:bg-tiga text-white rounded-lg">
                                <a href="/ekaba-dashboard">Kembali</a>
                            </button>
                        )}
                        <h1 className="ml-5 text-5xl font-semibold">E-Kaba</h1>
                    </div>


                    {filteredKaba.map((kaba) => (
                        <div key={kaba.id} className="bg-white p-6 rounded-lg">
                            <div className="p-6 rounded-lg">
                                <table className="table mx-auto">
                                    <tbody>
                                        <tr className='border-none'>
                                            <td className="font-semibold text-4xl text-center">{kaba.judul}</td>
                                        </tr>
                                        <tr className='border-none'>
                                            <td className="font-mono text-sm text-center">Dipublish oleh: {kaba.pembuat}, dengan sumber dari: {kaba.sumber}</td>
                                        </tr>
                                        <tr className='border-none'>
                                            <td className="text-center">{kaba.tanggal.slice(0, 10)}</td>
                                        </tr>
                                        <tr className='border-none'>
                                            <td><img className='mx-auto' src={kaba.image} alt="image" /><p className='text-center'>Sumber foto: Admin</p></td>
                                        </tr>
                                        <tr className='border-none'>
                                            <td className="text-lg font-serif text-justify">SUMANIK - {kaba.isi}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default DetailKaba;