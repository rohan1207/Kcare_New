import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-stone-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<Technology />} />
         
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
