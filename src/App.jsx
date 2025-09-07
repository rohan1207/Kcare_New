import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ContactUs from "./pages/ContactUs";
import BookAppointment from "./pages/BookAppointment";

import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-stone-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<AboutUs />} />
         
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
