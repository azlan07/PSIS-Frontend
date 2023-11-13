import ImageEsurek from "../../public/images/Esurek.svg"
import ImageElapor from "../../public/images/Elapor.svg"
import ImageEkaba from "../../public/images/Ekaba.svg"
import { HiSpeakerphone, HiDocumentText, HiExclamation } from "react-icons/hi";

const FiturUtama = () => {
    return (
        <div className="my-20 py-5" id="fitur-utama">
            <h1 className="text-4xl font-semibold text-center mb-10">Fitur Utama</h1>
            <div className="flex flex-wrap justify-center">
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0" onClick={() => window.my_modal_1.showModal()}>
                    <figure className="px-10 pt-10">
                        <img src={ImageEsurek} alt="Esurek" />
                        {/* <HiDocumentText style={{ fontSize: '100px' }} /> */}
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">E - Surek</h2>
                        <p>Pengurusan Surat secara online</p>
                        <p className="font-semibold">Tekan untuk info lebih lengkap!!</p>
                    </div>
                </div>
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Berikut layanan E-Surek:</h3>
                        <p className="py-4">
                            <li>
                                Surat Keterangan Tidak Mampu
                            </li>
                            <li>
                                Surat Pengantar Perubahan KK
                            </li>
                            <li>
                                Surat Keterangan Domisili
                            </li>
                            <li>
                                Surat Keterangan Pindah/Datang
                            </li><li>
                                Surat Keterangan Kelahiran
                            </li>
                            <li>
                                Surat Keterangan Izin Hajatan
                            </li>
                        </p>
                        <div className="modal-action">
                            <button className="btn bg-dua hover:bg-satu"><a href="/form-pengajuan">Urus Surat</a></button>
                            <button className="btn bg-dua hover:bg-satu">Close</button>
                        </div>
                    </form>
                </dialog>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <a href="/ekaba-dashboard">
                        <figure className="px-10 pt-10">
                            <img src={ImageEkaba} alt="Ekaba" />
                            {/* <HiSpeakerphone style={{ fontSize: '100px' }} /> */}
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">E - Kaba</h2>
                            <p>Perantara Informasi dari Balai Desa untuk Masyarakat</p>
                        </div>
                    </a>
                </div>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0" onClick={() => window.lapor.showModal()}>
                    <figure className="px-10 pt-10">
                        <img src={ImageElapor} alt="Elapor" />
                        {/* <HiExclamation style={{ fontSize: '100px' }} /> */}
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">E - Lapor</h2>
                        <p>Masyarakat dapat melaporkan kejanggalan, peristiwa, dan kritik</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FiturUtama;