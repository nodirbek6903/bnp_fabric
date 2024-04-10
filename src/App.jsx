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
import { ToastContainer } from "react-toastify";
import { FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <ToastContainer />
      <div className="containers">
        <a
          href="https://t.me/Nodirbek_6903"
          target="_blank"
          className="fixed-telegram"
        >
          <div className="tg-text">{t("nav-item4")}</div>
          <span className="tg-icon">
            <FaTelegram className="telegram" />
          </span>
        </a>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/shop" element={<Collection />} />
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
    </>
  );
}

export default App;
