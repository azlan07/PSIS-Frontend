import ImageEkaba from "../../public/images/Ekaba.svg"
import { FaArrowRight } from "react-icons/fa";

const SurveyKepuasan = () => {
    return (
        <>
            <div className="my-20 py-5 " id="e-kaba">
                <section className="flex justify-center items-center">
                    <div className="flex flex-wrap">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                            <div className="text-center md:text-right ml-16">
                            <p className="badge p-4 text-lg font-semibold bg-kosong">New</p>
                                <h2 className="text-3xl font-bold">Survey Kepuasan</h2>
                                <p className="mt-4 justify-center">
                                    Layanan yang memungkinkan masyarakat untuk memberikan survey secara online berdasarkan pelayanan yang diterima dari kantor wali nagari.
                                </p>
                                <a href="/form-survey" className="btn bg-empat hover:bg-dua text-white mt-4 transition duration-300 ease-in-out">Berikan Survey</a>
                            </div>
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 p-5">
                            <img className="w-4/5 h-auto mx-auto" src={ImageEkaba} alt="Gambar" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SurveyKepuasan;