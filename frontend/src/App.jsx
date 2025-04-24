import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import PricingPlans from "./components/PricingPlans";
import FloorPlan from "./components/FloorPlan";
import Amenities from "./components/Amenities";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen pt-20">
        <Hero />


        <section id="overview" className="py-2">
          <Overview />
        </section>

        <section id="pricing" className="py-2">
          <PricingPlans />
        </section>

        <section id="floorplan" className="py-2">
          <FloorPlan />
        </section>

        <section id="amenities" className="py-2">
          <Amenities />
        </section>

        <section id="location-contact" className="container mx-auto px-6 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Location />
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;

