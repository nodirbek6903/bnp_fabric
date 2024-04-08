import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Collection from "./components/Collection/Collection";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CollectionData from "./Data/ProductData";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="containers">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/shop" element={<Collection  />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/product/:name"
          element={<ProductDetails data={CollectionData} />}
        />
        <Route
          path="/product-category/:collectionName"
          element={<ProductCategory data={CollectionData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
