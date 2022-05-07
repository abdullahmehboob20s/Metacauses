import Contact from "layouts/Contact";
import Donation from "layouts/Donation";
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
      <div className="mb-100px">
        <Social />
      </div>
      <div className="mb-100px">
        <Faq />
      </div>
      <div className="mb-100px">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
