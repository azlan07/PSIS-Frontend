import { useRef, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getListFeedback, editListFeedback } from "../../actions/feedbackActions";
import { NavbarAdmin } from '../../componentsAdmin';
import Swal from 'sweetalert2';

const Penduduks = () => {

    const {id} = useParams();
    const [data, setData] = useState({});
    const { getListFeedbackResult } = useSelector((state) => state.feedbackReducer);
    const { whoAmIResult } = useSelector((state) => state.authReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getListFeedback());
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

    const filteredSurek = Array.isArray(getListFeedbackResult)
        ? getListFeedbackResult.filter(
            (feedback) => feedback.id === parseInt(id)
        )
        : [];
    console.log(getListFeedbackResult);

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
                dispatch(editListFeedback(id, data));
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
                {filteredSurek && filteredSurek.map((feedback) => (
                    <div key={feedback.id} className="p-6 rounded-lg">
                        <div className="bg-kosong p-6 rounded-lg">
                            <form onSubmit={handleSubmit}>
                                <label className="py-2 font-semibold">
                                    Nama
                                </label>
                                <input type="text" id="nama" name="nama" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" onChange={handleChange} defaultValue={feedback.nama} />
                                <label className="py-2 font-semibold">
                                    Telepon
                                </label>
                                <input type="text" id="telepon" name="telepon" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" onChange={handleChange} defaultValue={feedback.telepon} />
                                <label className="py-2 font-semibold">
                                    Pesan
                                </label>
                                <textarea type="text" id="pesan" name="pesan" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" onChange={handleChange} defaultValue={feedback.pesan} />
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
