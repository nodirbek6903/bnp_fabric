import { Routes,Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Collection from './components/Collection/Collection';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/shop" element={<Collection />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
