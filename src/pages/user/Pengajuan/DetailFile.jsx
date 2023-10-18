import { useRef, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListUploadSurek } from "../../../actions/uploadSurekActions";
import { ImageViewer } from '../../../components';

const DetailFile = () => {
    const componentRef = useRef(null);

    const { id } = useParams();
    const { getListUploadSurekResult } = useSelector((state) => state.uploadSurekReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListUploadSurek());
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    const filteredSurek = Array.isArray(getListUploadSurekResult)
        ? getListUploadSurekResult.filter(
            (surek) => surek.surek_id === parseInt(id)
        )
        : [];
    // console.log(getListUploadSurekResult);

    return (
        <main>
            <div className="container mx-auto p-8">
                <div className="flex items-center">
                    {whoAmIResult.role === "admin" ? (
                        <button
                            className="btn bg-empat hover:bg-tiga text-white rounded-lg"
                        >
                            <a href="/sureks">Kembali</a>
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

                    <h1 className="text-lg font-semibold mx-auto">File Surat</h1>
                </div>

                {filteredSurek.map((surek) => (
                    <div key={surek.id} className="bg-white p-6 rounded-lg" ref={componentRef}>
                        <div className="p-6 rounded-lg">
                            <table className="table mx-auto">
                                <tbody>
                                    {/* <tr><a href={surek.file} target='_blank' className='btn bg-empat hover:bg-tiga text-white mb-2 mx-auto'>Download</a></tr> */}
                                    <tr>
                                        <object data={surek.file} type="application/pdf" width="100%" height="500px">
                                        </object>
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

export default DetailFile;
