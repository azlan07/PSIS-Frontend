import { React, useState, useEffect } from "react";
import { whoAmI } from "../../actions/authActions";
import { getListUsers, editListUsers } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { Loading } from "../../components";
import { NavbarAdmin } from "../../componentsAdmin";

function EditUsers() {

    const { id } = useParams();
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    const { getListUsersResult, editListUsersResult } = useSelector((state) => state.usersReducer);

    const [data, setData] = useState({});
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (whoAmIResult) {
    //         setData(whoAmIResult);
    //     }
    // }, [whoAmIResult]);

    // const id = whoAmIResult.id
    // console.log(id);

    useEffect(() => {
        dispatch(getListUsers());
    }, [dispatch]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    console.log("data", data);

    const filtered = Array.isArray(getListUsersResult)
        ? getListUsersResult.filter(
            (users) => users.id === parseInt(id)
        )
        : [];
    console.log(filtered);

    // const handleSubmit = (e) => {
    //     setIsLoading(true);
    //     e.preventDefault();
    //     setIsLoading(true);

    //     const formData = new FormData();
    //     formData.append("nik", data.nik);
    //     formData.append("name", data.name);
    //     // formData.append("password", data.password);
    //     formData.append("kelamin", data.kelamin);
    //     formData.append("alamat", data.alamat);
    //     formData.append("telepon", data.telepon);
    //     if (image) {
    //         formData.append("image", image);
    //     } else {
    //         formData.append("image", data.image);
    //     }

    //     dispatch(editListUsers(id, formData));
    // };

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
                dispatch(editListUsers(id, data));
                Swal.fire("Poof! Data has been updated", {
                    icon: "success",
                });
                navigate("/users");
            } else {
                Swal.fire("Data is safe");
            }
        });
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarAdmin />
                    <main className="mx-auto ml-32 p-24">
                        <div className="max-w-full mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-semibold">Profil Pengguna</h2>
                            <h2 className="text-sm font-semibold mb-2">(Silahkan Lengkapi data sesuai Identitas Resmi)</h2>
                            <hr />
                            {filtered && filtered.map((users) => (
                                <form key={users.id} onSubmit={handleSubmit} encType="multipart/form-data" className="flex">
                                    {/* Form input*/}
                                    <div className="w-1/2 mr-4 mt-3">
                                        <div className="mb-2">
                                            <label htmlFor="Nik" className="block text-gray-700 font-medium mb-2">Nik</label>
                                            <input type="number" id="nik" name="nik" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue={users.nik} readOnly />
                                        </div>

                                        <div className="mb-2">
                                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                            <input type="password" id="password" name="password" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ubah Password disini!!"/>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                            <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue={users.name} readOnly />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="kelamin" className="block text-gray-700 font-medium mb-2">Jenis Kelamin</label>
                                            <input type="text" className="border border-gray-300 rounded-lg px-4 py-2 mb-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue={users.kelamin} readOnly />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">Alamat Lengkap</label>
                                            <input type="text" id="alamat" name="alamat" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan alamat lengkap" defaultValue={users.alamat} onChange={handleChange} />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="telepon" className="block text-gray-700 font-medium mb-2">Nomor WhatsApp aktif</label>
                                            <input type="text" id="telepon" name="telepon" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukan nomor WhatsApp aktif" defaultValue={users.telepon} onChange={handleChange} />
                                        </div>
                                        <button type="submit" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">{isLoading ? 'Loading...' : 'Simpan'}</button>
                                        <a href="/users" disabled={isLoading} className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">{isLoading ? 'Loading...' : 'Batal'}</a>
                                    </div>

                                    {/* Form Image */}
                                    <div className="w-1/2 mt-3 ml-3">
                                        <img src={users.image} alt="foto profile" width={130} className='mx-auto mb-5 w-40 h-40 rounded-full' />
                                        <h1 className="text-center text-lg font-semibold">Foto User</h1>
                                    </div>
                                </form>
                            ))}
                        </div>
                    </main>
                </div>
            )}
        </>
    );
}

export default EditUsers;
