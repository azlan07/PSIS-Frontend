import ImageEkaba from "../../public/images/Ekaba.svg"
import { FaArrowRight } from "react-icons/fa";

const Ekaba = () => {
    return (
        <>
            <div className="my-20 py-5 " id="e-kaba">
                <section className="flex justify-center items-center">
                    <div className="flex flex-wrap">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                            <div className="text-center md:text-right ml-16">
                                <h2 className="text-3xl font-bold">E - Kaba</h2>
                                <p className="mt-4">
                                    Layanan yang memungkinkan masyarakat untuk memperoleh informasi dan berita dari nagari secara online.
                                </p>
                                <a href="/ekaba-dashboard" className="btn bg-empat hover:bg-dua text-white mt-4 transition duration-300 ease-in-out">Lihat Informasi</a>
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

export default Ekaba;