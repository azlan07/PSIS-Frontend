import { FaMoneyCheckDollar } from "react-icons/fa6";

const TransparansiAnggaran = () => {
    return (
        <div className="my-20 py-5">
            <h1 className="text-4xl font-semibold text-center mb-10">Transparansi Nagari</h1>
            <div className="flex justify-center">
                <a href="/transparansi-user" className="card bg-kosong hover:bg-satu transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Berbagai transparansi Nagari perTahun</h2>
                        <FaMoneyCheckDollar className="text-9xl"/>
                        <p className="text-lg">Lihat dan Awasi pengelolaan Nagari per-tahun</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default TransparansiAnggaran;