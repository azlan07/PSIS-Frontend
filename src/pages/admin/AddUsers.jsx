import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addListUsers } from "../../actions/userActions";
import Swal from 'sweetalert2';

import { NavbarAdmin } from "../../componentsAdmin";

const AddUsers = () => {

    const [formData, setFormData] = useState({
        nik: '',
        password: '',
        name: '',
        kelamin: '',
    });

    const { addUsersError, addUsersResult } = useSelector((state) => state.usersReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { nik, password, name, kelamin } = formData;

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(addListUsers(formData));
        setFormData({
            nik: '',
            password: '',
            name: '',
            kelamin: '',
        });
    }

    useEffect(() => {
        if (addUsersResult) {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil...',
                text: 'Penambahan User berhasil!',
            });
            navigate("/users");
        }
    }, [addUsersResult]);

    return (
        <>
            <NavbarAdmin />
            <main className="mx-auto ml-32 mt-20">
                <div className="max-w-xl mx-auto mt-5 bg-satu rounded-lg shadow-md p-6 ">
                    <h2 className="text-xl font-semibold">Form Add Users</h2>
                    <h2 className="text-sm font-semibold mb-2">(Menambahkan user sesuai identitas KTP)</h2>
                    <hr />
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex items-center justify-center">
                        {/* Form input*/}
                        <div className="w-1/2">
                            <div className="mb-2">
                                <label htmlFor="Nik" className="block text-gray-700 font-medium mb-2">Nik</label>
                                <input type="number" id="nik" name="nik" className="input input-bordered input-accent w-full" placeholder="NIK" required onChange={handleChange} value={nik} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <input type="password" id="password" name="password" className="input input-bordered input-accent w-full" placeholder="Masukan password" required onChange={handleChange} value={password} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                <input type="text" id="name" name="name" className="input input-bordered input-accent w-full" placeholder="Masukan nama lengkap" required onChange={handleChange} value={name} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="kelamin" className="block text-gray-700 font-medium mb-2">Jenis Kelamin</label>
                                <select id="kelamin" name="kelamin" className="select select-accent w-full max-w-xs" required onChange={handleChange}>
                                    <option disabled selected value="">Silahkan pilih</option>
                                    <option value="laki-laki">laki-laki</option>
                                    <option value="perempuan">perempuan</option>
                                </select>
                            </div>
                            <button type="submit" className="mt-3 btn bg-empat hover:bg-lima text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out">daftar</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default AddUsers;
