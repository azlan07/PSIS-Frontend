import React, { useState, useEffect } from 'react';
import ImageHero from "../../public/images/Hero.svg"

const Hero = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Token = localStorage.getItem('token');
  const Role = localStorage.getItem('role');

  useEffect(() => {
    setIsLoggedIn(!!Token);
  }, [Token]);

  return (
    <div className="hero min-h-screen bg-satu" id='home'>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={ImageHero} className="max-w-xl rounded-lg w-full 2x1:mt-0 mt-10" alt="Gambar" />
        <div className="text-left">
          <h1 className="text-5xl font-bold">
            Sistem Informasi Pelayanan Publik - NAGARI SUMANIK</h1>
          <p className="py-6 font-serif">Kami hadir untuk memberikan pelayanan publik yang Cepat, dan Efisien. Dapatkan akses mudah, pengajuan permohonan online, dan informasi terkini melalui layanan kami. Bergabunglah dengan kami sekarang!</p>
          {isLoggedIn ? (
            <></>
          ) : (<a href="/login">
            <button className="btn bg-empat hover:bg-tiga text-white">Mulai Layanan</button>
          </a>)}
        </div>
      </div>
    </div>
  );
}

export default Hero;