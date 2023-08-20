import { useRef, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListPenduduk, getDetailListPenduduk, editListPenduduk } from "../../actions/pendudukActions";
import { NavbarAdmin } from '../../componentsAdmin';
import Swal from 'sweetalert2';

const Penduduks = () => {

    const id = "1";
    const [data, setData] = useState({});
    const { getListPendudukResult } = useSelector((state) => state.pendudukReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListPenduduk());
    }, [dispatch]);

    // console.log(getListSktmResult);
    // console.log(whoAmIResult);
    // console.log(id);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    console.log("data ", data);

    const filteredSurek = Array.isArray(getListPendudukResult)
        ? getListPendudukResult.filter(
            (surek) => surek.id === parseInt(id)
        )
        : [];
    // console.log(getListPendudukResult);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure want edit?",
            text: "File will be updated",
            icon: "info",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(editListPenduduk(id, data));
                Swal.fire("Poof! Data has been updated", {
                    icon: "success",
                });
                navigate("#");
            } else {
                Swal.fire("Data is safe");
            }
        });
    };

    return (
        <main>
            <NavbarAdmin />
            <div className="container mx-auto ml-32 p-24">
                <h1 className='text-center text-lg font-semibold'>Jumlah Penduduk Nagari Sumanik</h1>
                {filteredSurek.map((surek) => (
                    <div key={surek.id} className="p-6 rounded-lg">
                        <div className="bg-kosong p-6 rounded-lg">
                            <form onSubmit={handleSubmit}>
                                <label className="py-2 font-semibold">
                                    Laki-Laki
                                </label>
                                <input type="number" id="laki_laki" name="laki_laki" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" onChange={handleChange} defaultValue={surek.laki_laki} />
                                <label className="py-2 font-semibold">
                                    Perempuan
                                </label>
                                <input type="number" id="perempuan" name="perempuan" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" onChange={handleChange} defaultValue={surek.perempuan} />
                                <label className="py-2 font-semibold">
                                    Kepala Keluarga
                                </label>
                                <input type="number" id="kepala_keluarga" name="kepala_keluarga" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" onChange={handleChange} defaultValue={surek.kepala_keluarga} />
                                <button type="submit" className="btn bg-empat hover:bg-tiga text-white">
                                    Edit Data
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Penduduks;
