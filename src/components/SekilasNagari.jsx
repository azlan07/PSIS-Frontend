import ImgUser from "../../public/images/User.svg"

const SekilasNagari = () => {
    return (
        <div className="my-20 py-5">
            <section className="flex justify-center items-center">
                <div className="w-full md:w-1/2 p-5 flex flex-col items-center">
                    <img className="w-3/5 h-auto mx-auto" src={ImgUser} alt="Gambar" />
                    <p className="text-2xl font-mono">Irama Yandi S.Ap</p>
                    <p className="text-2xl font-semibold">Wali Nagari</p>
                </div>
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-semibold">Sekilas Nagari Sumanik</h2>
                        <p className="mt-4 font-mono">
                            Sumanik merupakan salah satu nagari yang termasuk ke dalam wilayah kecamatan Salimpaung, Kabupaten Tanah Datar, Provinsi Sumatera Barat, Indonesia. Nagari ini berjarak sekitar 10 Km dari pusat kota Batusangkar, ibu kota dari kabupaten Tanah Datar.
                            <br />
                            Dalam Tambo, nagari ini dahulunya dikenal juga sebagai tempat kedudukan dari salah seorang dari Basa Ampek Balai (Empat Menteri Utama) yaitu yang dikenal dengan sebutan Makhudum di Sumanik.
                        </p>
                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <div className="card-body items-center text-center">
                        <img className="w-3/5 h-auto mx-auto" src={ImgUser} alt="Gambar" />
                        <p className="text-2xl font-mono">Leo Rivaldi S.Hi</p>
                        <p className="text-2xl font-semibold">Sekretaris Nagari</p>
                    </div>
                </div>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <div className="card-body items-center text-center">
                        <img className="w-3/5 h-auto mx-auto" src={ImgUser} alt="Gambar" />
                        <p className="text-2xl font-mono">Bujang</p>
                        <p className="text-2xl font-semibold">Kepala Bidang ..</p>
                    </div>
                </div>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <div className="card-body items-center text-center">
                        <img className="w-3/5 h-auto mx-auto" src={ImgUser} alt="Gambar" />
                        <p className="text-2xl font-mono">Bujang</p>
                        <p className="text-2xl font-semibold">Kepala Bidang ..</p>
                    </div>
                </div>
                <div className="card bg-dua hover:bg-tiga transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-xl w-full sm:w-80 mx-5 mb-5 sm:mb-0">
                    <div className="card-body items-center text-center">
                        <img className="w-3/5 h-auto mx-auto" src={ImgUser} alt="Gambar" />
                        <p className="text-2xl font-mono">Bujang</p>
                        <p className="text-2xl font-semibold">Kepala Bidang ..</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SekilasNagari;