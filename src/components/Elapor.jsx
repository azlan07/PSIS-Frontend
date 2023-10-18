import { useDispatch, useSelector } from "react-redux";
import ImageElapor from "../../public/images/Elapor.svg"
import { FaArrowRight } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const Elapor = () => {
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
                                <h2 className="text-3xl font-bold">E - Lapor</h2>
                                <p className="mt-4">
                                    Layanan yang memungkinkan masyarakat untuk memberikan laporan kepada nagari surat secara online.
                                </p>
                                <a onClick={() => window.lapor.showModal()} className="btn bg-empat hover:bg-dua text-white mt-4 transition duration-300 ease-in-out">Buat Laporan</a>
                            </div>
                        </div>
                    </div>
                    <dialog id="lapor" className="modal">
                        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-bold text-lg">Pilihan Identitas</h3>
                                <div className="modal-action">
                                    <button className="btn bg-dua hover:bg-satu"> <FaArrowRight/>Close</button>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center">
                                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0" id="esurek">
                                    <img className="w-2/5 mx-auto" src={ImageElapor} alt="Gambar" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl text-center text-white">Anonim</div>
                                        <div className="font-bold text-sm mb-2 text-center text-white">(Data Pelapor tidak akan ditampilkan)</div>
                                    </div>
                                    <div className="flex justify-center px-5 py-5">
                                        <a href="/form-elapor/1" className="bg-empat hover:bg-dua text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out w-full">
                                            <h4 className="text-center mx-auto text-3xl">
                                                <FaEyeSlash/>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0" id="esurek">
                                    <img className="w-2/5 mx-auto" src={ImageElapor} alt="Gambar" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl text-center text-white uppercase">{whoAmIResult.name}</div>
                                        <div className="font-bold text-sm mb-2 text-center text-white">(Data Pelapor berdasarkan akun)</div>
                                    </div>
                                    <div className="flex justify-center px-5 py-5">
                                        <a href="/form-elapor/2" className="bg-empat hover:bg-dua text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out w-full">
                                            <h4 className="text-center mx-auto text-3xl">
                                                <FaEye/>
                                            </h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </section>
            </div>
        </>
    );
}

export default Elapor;