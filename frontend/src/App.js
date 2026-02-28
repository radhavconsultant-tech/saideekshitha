import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ICUAmbulancePage from "./pages/ICUAmbulancePage";
import VentilatorAmbulancePage from "./pages/VentilatorAmbulancePage";
import OxygenAmbulancePage from "./pages/OxygenAmbulancePage";
import DeadBodyFreezerBoxPage from "./pages/DeadBodyFreezerBoxPage";
import LocationPage from "./pages/LocationPage";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/ambulance-services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Service Pages */}
            <Route path="/icu-ambulance-hyderabad" element={<ICUAmbulancePage />} />
            <Route path="/ventilator-ambulance-hyderabad" element={<VentilatorAmbulancePage />} />
            <Route path="/oxygen-ambulance-hyderabad" element={<OxygenAmbulancePage />} />
            <Route path="/dead-body-freezer-box-hyderabad" element={<DeadBodyFreezerBoxPage />} />
            
            {/* Location Pages */}
            <Route path="/ambulance-service-kukatpally" element={<LocationPage />} />
            <Route path="/ambulance-service-gachibowli" element={<LocationPage />} />
            <Route path="/ambulance-service-madhapur" element={<LocationPage />} />
            <Route path="/ambulance-service-lb-nagar" element={<LocationPage />} />
            <Route path="/ambulance-service-secunderabad" element={<LocationPage />} />
            <Route path="/ambulance-service-uppal" element={<LocationPage />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </div>
  );
}

export default App;
