import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetail from "./pages/HotelDetail";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/khach-san" element={<HotelList />} />
                <Route path="/khach-san/:id" element={<HotelDetail />} />
                <Route path="/lien-he" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}
