import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about"
import Contact from "./pages/contact"
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Plans from "./pages/plans";
import Trainers from "./pages/trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="plans" element={<Plans />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App