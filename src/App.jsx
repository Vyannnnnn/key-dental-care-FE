import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layanan from "./pages/layanan";
import Footer from "./pages/footer";
import Tentang_kami from "./pages/tentang_kami";
import Login from "./pages/login";
import Navbar from "./pages/navbar";
import NotFound from "./pages/404";
import Testimonial from "./pages/testimonial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/tentang_kami" element={<Tentang_kami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
