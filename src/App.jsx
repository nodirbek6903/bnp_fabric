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
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <div className="containers">
      <Navbar changeLanguage={changeLanguage} language={language} />
      <Routes>
        <Route path="/" element={<Main language={language} />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/shop" element={<Collection language={language} />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/product/:name"
          element={<ProductDetails language={language} data={CollectionData} />}
        />
        <Route
          path="/product-category/:collectionName"
          element={<ProductCategory language={language} data={CollectionData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
