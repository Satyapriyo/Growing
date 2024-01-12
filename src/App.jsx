import "./App.css";
import Home from "./pages/Home";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const ref = useRef();
  const options = {
    smooth: true,
  };
  return (
    <LocomotiveScrollProvider containerRef={ref} options={options}>
      <main data-scroll-container ref={ref} className="m-0 bg-emerald-400 p-0">
        <Navbar />
        <Home />
        <Services />
        <Contact />
        <Location />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
