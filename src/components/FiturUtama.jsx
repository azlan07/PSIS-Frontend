import { HiSpeakerphone, HiDocumentText, HiExclamation } from "react-icons/hi";

const FiturUtama = () => {
    return (
        <div className="my-20 py-5">
            <h1 className="text-4xl text- text-center mb-10">Fitur Utama</h1>
            <div className="flex flex-wrap justify-center">
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0 " onClick={() => window.my_modal_1.showModal()}>
                    <figure className="px-10 pt-10">
                        <HiDocumentText style={{ fontSize: '100px' }} />
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
                                SKTM
                            </li>
                            <li>
                                SKTM
                            </li>
                            <li>
                                SKTM
                            </li>
                            <li>
                                SKTM
                            </li>
                        </p>
                        <div className="modal-action">
                            <button className="btn bg-satu">Close</button>
                        </div>
                    </form>
                </dialog>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <figure className="px-10 pt-10">
                        <HiExclamation style={{ fontSize: '100px' }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">E - Lapor</h2>
                        <p>Masyarakat dapat melaporkan kejanggalan, peristiwa, dan kritik</p>
                    </div>
                </div>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <figure className="px-10 pt-10">
                        <HiSpeakerphone style={{ fontSize: '100px' }} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">E - Kaba</h2>
                        <p>Perantara Informasi dari Balai Desa untuk Masyarakat</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FiturUtama;