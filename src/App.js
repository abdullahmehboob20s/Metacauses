import Contact from "layouts/Contact";
import DonateWithoutNft from "layouts/DonateWithoutNft";
import Donation from "layouts/Donation";
import DonationTier from "layouts/DonationTier";
import Faq from "layouts/Faq";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import Social from "layouts/Social";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-100px">
        <Donation />
      </div>
      <div className="mb-100px" id="donate">
        <DonationTier />
      </div>
      <div className="mb-120px">
        <DonateWithoutNft />
      </div>
      <div className="mb-100px">
        <Social />
      </div>
      <div className="mb-100px">
        <Faq />
      </div>
      <div className="mb-100px" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
