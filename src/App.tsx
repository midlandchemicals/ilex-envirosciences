import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Link, useParams } from "react-router-dom";
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

import type { MenuItem } from "./types/index";
import { Button } from "./components/ui/button";

const productRanges = [
  {
    title: "The Ilex Phosphite Range",
    link: "phosphite-range",
    products: [
      { product: "Crop Rooter® Plus", link: "crop-rooter-plus" },
      { product: "PK MAXX™ +", link: "pk-maxx" },
      { product: "OilSeed Raiser™", link: "oilseed-raiser" },
      { product: "CaPITAL™", link: "capital" },
      { product: "Tensile™", link: "tensile" },
      { product: "Beet Raiser™", link: "beet-raiser" },
      { product: "Maniphos™", link: "maniphos" },
      { product: "PK VEG™", link: "pk-veg" },
    ],
  },
  {
    title: "The Ilex Foliar Nutrient Range",
    link: "foliar-range",
    products: [
      { product: "Mn SUPER™", link: "mn-super" },
      { product: "Mag Plus™", link: "mag-plus" },
      { product: "ful-oN™", link: "ful-on" },
      { product: "Mn-Cu Plus™", link: "mn-cu-plus" },
      { product: "Foliar Boost™", link: "foliar-boost" },
      { product: "Cu-Zin™", link: "cu-zin" },
      { product: "Pro-K™", link: "pro-k" },
      { product: "Pro-Sul™", link: "pro-sul" },
    ],
  },
  {
    title: "Calcium Supplements",
    link: "calcium-range",
    products: [
      { product: "Pro-Cal™", link: "pro-cal" },
      { product: "Advocate™", link: "advocate" },
      { product: "CaPITAL™", link: "capital" },
    ],
  },
  {
    title: "Biostimulants",
    link: "biostimulants",
    products: [
      { product: "Stimplex®", link: "stimplex" },
      { product: "Toggle®", link: "toggle" },
    ],
  },
  {
    title: "Seed Treatments",
    link: "seed-treatments",
    products: [
      { product: "Start-uP® MAXX", link: "start-up-maxx" },
      { product: "Start-uP®", link: "start-up" },
      { product: "ProZest™", link: "prozest" },
      { product: "Man-uP™", link: "man-up" },
    ],
  },
  {
    title: "The Ilex Organic Range",
    link: "organic-range",
    products: [
      { product: "Complete™ (6-2-4)", link: "complete-6-2-4" },
      {
        product: "Complete Hi-Fruit™ (4-2-6)",
        link: "complete-hi-fruit-4-2-6",
      },
      { product: "K-Max™ (3-1-8)", link: "k-max-3-1-8" },
      { product: "N-Max™ (7-2-2)", link: "n-max-7-2-2" },
      { product: "Ultimate Gold™ (8-7-7)", link: "ultimate-gold-8-7-7" },
    ],
  },
];

function StaticPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const commonClasses =
    "min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4";
  return (
    <div className={commonClasses}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

function About() {
  return (
    <StaticPage title="About Ilex EnviroSciences">
      <div>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
          Leading the way in agricultural innovation and foliar nutrition
          solutions since our founding. We are committed to providing farmers
          with the most effective and sustainable crop nutrition products.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              to: "/how-to-buy",
              title: "How to Buy",
              description:
                "Find authorized distributors and purchase our products nationwide.",
            },
            {
              to: "/contact",
              title: "Contact Us",
              description:
                "Get in touch with our agricultural experts for personalized advice.",
            },
            {
              to: "/regulatory",
              title: "Regulatory & Industry Partnerships",
              description:
                "Our commitment to safety, quality, and industry leadership.",
            },
            {
              to: "/product-guide",
              title: "Product Guide",
              description:
                "Comprehensive guide to our foliar nutrition solutions.",
            },
            {
              to: "/testimonials",
              title: "Testimonials",
              description:
                "Hear from farmers who trust our products for their crops.",
            },
            {
              to: "/media",
              title: "Media & Press Releases",
              description:
                "Latest news and press releases from Ilex EnviroSciences.",
            },
          ].map(({ to, title, description }) => (
            <Link
              key={to}
              to={to}
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left group"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To deliver innovative, science-based foliar nutrition solutions that
            enhance crop performance, improve agricultural sustainability, and
            support farmers in achieving their yield and quality goals.
          </p>
        </div>
      </div>
    </StaticPage>
  );
}

function Contact() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    alert("Thank you for your enquiry! We will get back to you soon.");
  };

  return (
    <StaticPage title="Contact Us">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Get in touch with our agricultural experts for personalized advice and
          support.
        </p>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Get In Touch
            </h2>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Address</h3>
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
                <p className="text-gray-600">office@ilex-envirosciences.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday–Friday: 09:00–17:00</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Send us a Message
            </h2>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                required
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
    </StaticPage>
  );
}

function HowToBuy() {
  return (
    <StaticPage title="How to Buy">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Purchase our products through authorized distributors and agricultural
          suppliers nationwide.
        </p>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
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
    </StaticPage>
  );
}

function ComingSoon({ page }: { page: string }) {
  return (
    <StaticPage title={`${page} Coming Soon`}>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 leading-relaxed">
          This page is currently under development. Please check back soon!
        </p>
      </div>
    </StaticPage>
  );
}

function CategoryRouter() {
  const { categoryLink } = useParams<{ categoryLink: string }>();

  const range = productRanges.find((r) => r.link === categoryLink);

  if (!range) return <div>Category not found</div>;
  const category: MenuItem = {
    menu_item: range.title,
    link: range.link,
    products: range.products,
  };
  return <CategoryPage category={category} />;
}

function ProductRouter() {
  const { categoryLink, productLink } = useParams<{
    categoryLink: string;
    productLink: string;
  }>();
  const range = productRanges.find((r) => r.link === categoryLink);

  if (!range) return <div>Category not found</div>;

  const selectedProduct = range.products.find((p) => p.link === productLink);
  if (!selectedProduct) return <div>Product not found</div>;

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
  };

  switch (productLink) {
    case "mag-plus":
      return <MagPlusPage onSubmit={handleFormSubmit} />;
    case "pro-cal":
      return <ProCalPage onSubmit={handleFormSubmit} />;
    case "pk-maxx":
      return <PKMaxxPage onSubmit={handleFormSubmit} />;
    case "capital":
      return <CaPITALPage onSubmit={handleFormSubmit} />;
    case "cu-zin":
      return <CuZinPage onSubmit={handleFormSubmit} />;
    case "crop-rooter-plus":
      return <CropRooterPlusPage onSubmit={handleFormSubmit} />;
    case "oilseed-raiser":
      return <OilSeedRaiserPage onSubmit={handleFormSubmit} />;
    case "tensile":
      return <TensilePage onSubmit={handleFormSubmit} />;
    case "beet-raiser":
      return <BeetRaiserPage onSubmit={handleFormSubmit} />;
    case "maniphos":
      return <ManiphosPage onSubmit={handleFormSubmit} />;
    case "pro-sul":
      return <ProSulPage onSubmit={handleFormSubmit} />;
    case "mn-super":
      return <MnSuperPage onSubmit={handleFormSubmit} />;
    case "ful-on":
      return <FulOnPage onSubmit={handleFormSubmit} />;
    case "pk-veg":
      return <PKVEGPage onSubmit={handleFormSubmit} />;
    case "mn-cu-plus":
      return <MnCuPlusPage onSubmit={handleFormSubmit} />;
    case "foliar-boost":
      return <FoliarBoostPage onSubmit={handleFormSubmit} />;
    case "pro-k":
      return <ProKPage onSubmit={handleFormSubmit} />;
    case "start-up-maxx":
      return <StartUpMaxxPage onSubmit={handleFormSubmit} />;
    case "start-up":
      return <StartUpPage onSubmit={handleFormSubmit} />;
    case "prozest":
      return <ProZestPage onSubmit={handleFormSubmit} />;
    case "man-up":
      return <ManUpPage onSubmit={handleFormSubmit} />;
    case "complete-6-2-4":
      return <Complete624Page onSubmit={handleFormSubmit} />;
    case "complete-hi-fruit-4-2-6":
      return <CompleteHiFruitPage onSubmit={handleFormSubmit} />;
    case "advocate":
      return <AdvoCatePage onSubmit={handleFormSubmit} />;
    case "stimplex":
      return <StimplexPage onSubmit={handleFormSubmit} />;
    case "toggle":
      return <TogglePage onSubmit={handleFormSubmit} />;
    case "k-max-3-1-8":
      return <KMaxPage onSubmit={handleFormSubmit} />;
    case "n-max-7-2-2":
      return <NMaxPage onSubmit={handleFormSubmit} />;
    case "ultimate-gold-8-7-7":
      return <UltimateGoldPage onSubmit={handleFormSubmit} />;
    default:
      return (
        <StaticPage title={selectedProduct.product}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Detailed information for {selectedProduct.product} is coming soon.
              Please contact our experts for technical specifications and
              application guidelines.
            </p>
            <Button asChild>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
              >
                Contact for More Information
              </Link>
            </Button>
          </div>
        </StaticPage>
      );
  }
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/regulatory" element={<RegulatoryPage />} />
          <Route path="/product-guide" element={<ProductGuidePage />} />
          <Route
            path="/testimonials"
            element={<ComingSoon page="Testimonials" />}
          />
          <Route
            path="/media"
            element={<ComingSoon page="Media & Press Releases" />}
          />
          <Route path="/:categoryLink">
            <Route index element={<CategoryRouter />} />
            <Route path=":productLink" element={<ProductRouter />} />
          </Route>
        </Routes>
      </motion.main>
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
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
