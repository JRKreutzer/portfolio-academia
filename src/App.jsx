import { BrowserRouter, Route, Router } from "react-router-dom";
import About from "./pages/about"
import Contact from "./pages/contact"
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Plans from "./pages/plans";
import Trainers from "./pages/trainers";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <About />
      <Contact />
      <Gallery />
      <Home />
      <NotFound />
      <Plans />
      <Trainers />
      </BrowserRouter>
    </div>
  )
}

export default App