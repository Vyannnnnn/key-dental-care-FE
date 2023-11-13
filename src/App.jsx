import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layanan from "./pages/layanan";
import Blog from "./pages/blog";
import Kontak from "./pages/kontak";
import Tentang_kami from "./pages/tentang_kami";
import Login from "./pages/login";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/tentang_kami" element={<Tentang_kami />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
