import { HiSpeakerphone, HiDocumentText, HiExclamation } from "react-icons/hi";

const FiturUtama = () => {
    return (
        <div className="my-10 py-5 flex flex-wrap justify-center">
            <div className="card bg-dua shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                <figure className="px-10 pt-10">
                    <HiDocumentText style={{ fontSize: '100px' }} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">E - Surek</h2>
                    <p>Pengurusan Surat secara online</p>
                </div>
            </div>
            <div className="card bg-dua shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                <figure className="px-10 pt-10">
                    <HiExclamation style={{ fontSize: '100px' }} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">E - Lapor</h2>
                    <p>Masyarakat dapat melaporkan kejanggalan, peristiwa, dan kritik</p>
                </div>
            </div>
            <div className="card bg-dua shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                <figure className="px-10 pt-10">
                    <HiSpeakerphone style={{ fontSize: '100px' }} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">E - Kaba</h2>
                    <p>Perantara Informasi dari Balai Desa untuk Masyarakat</p>
                </div>
            </div>
        </div>


    );
}

export default FiturUtama;