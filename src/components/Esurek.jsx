import ImageEsurek from "../../public/images/Esurek.svg"
import { FaArrowRight } from "react-icons/fa";

const Esurek = () => {
    return (
        <>
            <div className="my-20 py-5 bg-kosong" id="e-surek">
                <section className="flex justify-center items-center">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 p-5">
                            <img className="w-4/5 h-auto mx-auto" src={ImageEsurek} alt="Gambar" />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold">E - Surek</h2>
                                <p className="mt-4">
                                    Layanan yang memungkinkan masyarakat untuk mengajukan permohonan pembuatan surat secara online.
                                </p>
                                <a href="/form-pengajuan" className="btn bg-empat hover:bg-dua text-white mt-4 transition duration-300 ease-in-out">Urus Surat</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Esurek;