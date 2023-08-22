import { useDispatch, useSelector } from "react-redux";
import ImageElapor from "../../public/images/Elapor.svg"
import { FaArrowRight } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const PemilihBaru = () => {
    const { whoAmIResult } = useSelector((state) => state.authReducer);
    return (
        <>
            <div className="my-20 py-5 bg-kosong" id="e-lapor">
                <section className="flex justify-center items-center">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 p-5">
                            <img className="w-4/5 h-auto mx-auto" src={ImageElapor} alt="Gambar" />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                            <div className="text-center md:text-left">
                                <p className="badge p-4 text-lg font-semibold">New</p>
                                <h2 className="text-3xl font-bold">Pendaftaran Pemilih Baru</h2>
                                <p className="mt-4">
                                    Layanan yang memungkinkan masyarakat yang baru berumur 17 tahun untuk mendaftar menjadi pemilih baru di PEMILU 2024.
                                </p>
                                <a href="/form-pemilih-baru" className="btn bg-empat hover:bg-dua text-white mt-4 transition duration-300 ease-in-out">Daftar</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default PemilihBaru;