import { Routes,Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Collection from './components/Collection/Collection';
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="containers">
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/shop" element={<Collection />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
