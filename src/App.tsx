import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { MagPlusPage } from "./components/MagPlusPage";
import { ProCalPage } from "./components/ProCalPage";
import { PKMaxxPage } from "./components/PKMaxxPage";
import { CaPITALPage } from "./components/CaPITALPage";
import { CuZinPage } from "./components/CuZinPage";
import { CropRooterPlusPage } from "./components/CropRooterPlusPage";
import { OilSeedRaiserPage } from "./components/OilSeedRaiserPage";
import { TensilePage } from "./components/TensilePage";
import { BeetRaiserPage } from "./components/BeetRaiserPage";
import { ManiphosPage } from "./components/ManiphosPage";
import { ProSulPage } from "./components/ProSulPage";
import { MnSuperPage } from "./components/MnSuperPage";
import { FulOnPage } from "./components/FulOnPage";
import { PKVEGPage } from "./components/PKVEGPage";
import { MnCuPlusPage } from "./components/MnCuPlusPage";
import { FoliarBoostPage } from "./components/FoliarBoostPage";
import { ProKPage } from "./components/ProKPage";
import { StartUpMaxxPage } from "./components/StartUpMaxxPage";
import { StartUpPage } from "./components/StartUpPage";
import { ProZestPage } from "./components/ProZestPage";
import { ManUpPage } from "./components/ManUpPage";
import { Complete624Page } from "./components/Complete624Page";
import { CompleteHiFruitPage } from "./components/CompleteHiFruitPage";
import { AdvoCatePage } from "./components/AdvoCatePage";
import { StimplexPage } from "./components/StimplexPage";
import { TogglePage } from "./components/TogglePage";
import { KMaxPage } from "./components/KMaxPage";
import { NMaxPage } from "./components/NMaxPage";
import { UltimateGoldPage } from "./components/UltimateGoldPage";
import { RegulatoryPage } from "./components/RegulatoryPage";
import { ProductGuidePage } from "./components/ProductGuidePage";
import { PageType, MenuItem, Product } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedCategory, setSelectedCategory] = useState<MenuItem | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageChange = (
    page: PageType,
    category?: MenuItem,
    product?: Product
  ) => {
    setCurrentPage(page);
    setSelectedCategory(category || null);
    setSelectedProduct(product || null);
    setMobileMenuOpen(false);

    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
  };

  const renderStaticPage = (pageType: PageType) => {
    const commonClasses =
      "min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4";

    switch (pageType) {
      case "about":
        return (
          <div className={commonClasses}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-8 text-gray-900">
                  About Ilex EnviroSciences
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Leading the way in agricultural innovation and foliar
                  nutrition solutions since our founding. We are committed to
                  providing farmers with the most effective and sustainable crop
                  nutrition products.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <button
                  onClick={() => handlePageChange("how-to-buy")}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    How to Buy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Find authorized distributors and purchase our products
                    nationwide.
                  </p>
                </button>

                <button
                  onClick={() => handlePageChange("contact")}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get in touch with our agricultural experts for personalized
                    advice.
                  </p>
                </button>

                <button
                  onClick={() => handlePageChange("regulatory")}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Regulatory & Industry Partnerships
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our commitment to safety, quality, and industry leadership.
                  </p>
                </button>

                <button
                  onClick={() => handlePageChange("product-guide")}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Product Guide
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive guide to our foliar nutrition solutions.
                  </p>
                </button>

                <button
                  onClick={() => handlePageChange("testimonials")}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Testimonials
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hear from farmers who trust our products for their crops.
                  </p>
                </button>

                <button
                  onClick={() => handlePageChange("media")}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Media & Press Releases
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Latest news and press releases from Ilex EnviroSciences.
                  </p>
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver innovative, science-based foliar nutrition
                  solutions that enhance crop performance, improve agricultural
                  sustainability, and support farmers in achieving their yield
                  and quality goals.
                </p>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className={commonClasses}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-8 text-gray-900">
                  Contact Us
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get in touch with our agricultural experts for personalized
                  advice and support.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                    Get In Touch
                  </h2>
                  <div className="space-y-4 text-lg">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ilex EnviroSciences Ltd
                        <br />
                        Willingham Hall, Willingham Road
                        <br />
                        Market Rasen LN8 3RH
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+44 (0) 1673 885175</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        office@ilex-envirosciences.com
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday–Friday: 09:00–17:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                    Send us a Message
                  </h2>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );

      case "regulatory":
        return <RegulatoryPage />;

      case "product-guide":
        return <ProductGuidePage />;

      case "how-to-buy":
        return (
          <div className={commonClasses}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-8 text-gray-900">
                How to Buy
              </h1>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Purchase our products through authorized distributors and
                  agricultural suppliers nationwide.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      Find a Distributor
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Contact us to locate your nearest authorized distributor.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      Direct Sales
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      For large volume orders, contact our sales team directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={commonClasses}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-8 text-gray-900">
                Page Coming Soon
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                This page is currently under development. Please check back
                soon!
              </p>
            </div>
          </div>
        );
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={handlePageChange} />;

      case "product":
        if (selectedProduct?.link === "mag-plus") {
          return <MagPlusPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "pro-cal") {
          return <ProCalPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "pk-maxx") {
          return <PKMaxxPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "capital") {
          return <CaPITALPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "cu-zin") {
          return <CuZinPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "crop-rooter-plus") {
          return <CropRooterPlusPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "oilseed-raiser") {
          return <OilSeedRaiserPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "tensile") {
          return <TensilePage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "beet-raiser") {
          return <BeetRaiserPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "maniphos") {
          return <ManiphosPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "pro-sul") {
          return <ProSulPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "mn-super") {
          return <MnSuperPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "ful-on") {
          return <FulOnPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "pk-veg") {
          return <PKVEGPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "mn-cu-plus") {
          return <MnCuPlusPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "foliar-boost") {
          return <FoliarBoostPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "pro-k") {
          return <ProKPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "start-up-maxx") {
          return <StartUpMaxxPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "start-up") {
          return <StartUpPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "prozest") {
          return <ProZestPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "man-up") {
          return <ManUpPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "complete-6-2-4") {
          return <Complete624Page onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "complete-hi-fruit-4-2-6") {
          return <CompleteHiFruitPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "advocate") {
          return <AdvoCatePage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "stimplex") {
          return <StimplexPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "toggle") {
          return <TogglePage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "k-max-3-1-8") {
          return <KMaxPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "n-max-7-2-2") {
          return <NMaxPage onSubmit={handleFormSubmit} />;
        } else if (selectedProduct?.link === "ultimate-gold-8-7-7") {
          return <UltimateGoldPage onSubmit={handleFormSubmit} />;
        } else {
          // Generic product page for other products
          return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {selectedProduct?.product}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Detailed information for {selectedProduct?.product} is coming
                  soon. Please contact our experts for technical specifications
                  and application guidelines.
                </p>
                <button
                  onClick={() => handlePageChange("contact")}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
                >
                  Contact for More Information
                </button>
              </div>
            </div>
          );
        }

      case "phosphite-range":
      case "foliar-range":
      case "calcium-range":
      case "biostimulants":
      case "seed-treatments":
      case "water-conditioners":
      case "organic-range":
        return selectedCategory ? (
          <CategoryPage
            category={selectedCategory}
            onPageChange={handlePageChange}
          />
        ) : null;

      default:
        return renderStaticPage(currentPage);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        currentPage={currentPage}
        onPageChange={handlePageChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <motion.main
        key={
          currentPage +
          (selectedProduct?.link || "") +
          (selectedCategory?.link || "")
        }
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderCurrentPage()}
      </motion.main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-4 text-sm">
              © TM ® 2024 - Ilex EnviroSciences and all of its trade and product
              names are property of Ilex EnviroSciences ltd
            </p>
            <p className="text-gray-400 mb-2 text-sm">
              Company Registration Number: 04991822 | V.A.T Registration Number:
              829 4192 07
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <button
                onClick={() => handlePageChange("about")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handlePageChange("about")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
