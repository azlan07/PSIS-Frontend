import Peoples from "../../public/images/peoples.png"

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-satu">
      <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Peoples} className="max-w-2x1 rounded-lg w-full 2x1:mt-0 mt-10" alt="Gambar"/>
          <div className="text-left">
            <h1 className="text-5xl font-bold">"Selamat Datang" di <br />
              Sistem Informasi Pelayanan Publik - DESA</h1>
            <p className="py-6">Kami hadir untuk memberikan pelayanan publik yang cepat, efisien, dan transparan. Dapatkan akses mudah, pengajuan permohonan online, dan informasi terkini melalui layanan kami. Bergabunglah dengan kami sekarang!</p>
            <a href="/login">
              <button className="btn bg-empat hover:bg-tiga text-white">Mulai Layanan</button>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Hero;