import { Hero, Navbar, Footer, FiturUtama, Esurek, MapsNagari, Faq, Ekaba, Elapor, JumlahPenduduk, TransparansiAnggaran, SekilasNagari, PemilihBaru, SurveyKepuasan} from "../../components"

const LandingPage = () => {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <FiturUtama/>
            <Esurek/>
            <Ekaba/>
            <Elapor/>
            <TransparansiAnggaran/>
            <JumlahPenduduk/>
            <PemilihBaru/>
            <SurveyKepuasan/>
            <SekilasNagari/>
            <MapsNagari/>
            <Faq/>
            <Footer/>        
        </>
     );
}
 
export default LandingPage;