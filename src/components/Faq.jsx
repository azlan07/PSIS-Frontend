const Faq = () => {
    return (
        <div className="flex mx-5 my-5 py-5">
            <div className="w-2/3">
                <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                <p className="text-2x1 mt-5">Sistem Informasi Pelayanan Publik DESA</p>
            </div>
            <div className="w-2/3">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Apa itu Sistem Informasi Pelayanan Publik DESA?
                    </div>
                    <div className="collapse-content">
                        <p>Sistem Informasi Pelayanan Publik Desa adalah sebuah platform atau sistem yang dirancang untuk menyediakan pelayanan publik yang cepat, efisien, dan transparan kepada masyarakat di tingkat desa. Tujuan dari sistem ini adalah untuk mempermudah akses masyarakat terhadap layanan publik, seperti pengajuan permohonan, pengaduan, atau mendapatkan informasi terkini secara online.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mt-5">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Apa saja syarat untuk pengurusan SKCK?
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>Foto KTP asli</li>
                            <li>Foto KK asli</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mt-5">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Apa saja syarat untuk pengurusan SKTM?
                    </div>
                    <div className="collapse-content">
                        <ul>
                            <li>Foto KTP asli</li>
                            <li>Foto KK asli</li>
                            <li>Foto Rumah tampak Depan</li>
                            <li>Foto Rumah tampak Samping</li>
                            <li>Foto Rumah tampak Belakang</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Faq;