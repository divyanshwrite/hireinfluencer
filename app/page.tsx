import BtnCta from "./Component/BTNCTA/BtnCta";
import CTA from "./Component/CTA/CTA";
import Featured from "./Component/Featured/Featured";
import Footer from "./Component/Footer/Footer";
import HeroSection from "./Component/HeroSection/HeroSection";
import Navbar from "./Component/Navbar/Navbar";


export default function Home() {
  return (
    <div className="w-full">
      <Navbar/>
      <HeroSection/>
      <Featured/>
      <CTA/>
      <BtnCta/>
      <Footer/>
    </div>
  );
}
