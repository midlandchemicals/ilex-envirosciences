import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { ScrollToTopInstant } from "./components/ScrollToTop";
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
import { MenuItem } from "./types";

// Product data organized by category
const categoryData = {
  "phosphite-range": {
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
  "foliar-range": {
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
  "calcium-range": {
    title: "Calcium Supplements",
    link: "calcium-range",
    products: [
      { product: "Pro-Cal™", link: "pro-cal" },
      { product: "Advocate™", link: "advocate" },
      { product: "CaPITAL™", link: "capital" },
    ],
  },
  biostimulants: {
    title: "Biostimulants",
    link: "biostimulants",
    products: [
      { product: "Stimplex®", link: "stimplex" },
      { product: "Toggle®", link: "toggle" },
    ],
  },
  "seed-treatments": {
    title: "Seed Treatments",
    link: "seed-treatments",
    products: [
      { product: "Start-uP® MAXX", link: "start-up-maxx" },
      { product: "Start-uP®", link: "start-up" },
      { product: "ProZest™", link: "prozest" },
      { product: "Man-uP™", link: "man-up" },
    ],
  },
  "organic-range": {
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
};

// Category Route Component
function CategoryRoute() {
  const { category } = useParams();
  const navigate = useNavigate();

  if (!category || !categoryData[category as keyof typeof categoryData]) {
    navigate("/");
    return null;
  }

  const categoryInfo = categoryData[category as keyof typeof categoryData];
  const categoryMenuItem: MenuItem = {
    menu_item: categoryInfo.title,
    link: categoryInfo.link,
    products: categoryInfo.products,
  };

  return (
    <CategoryPage
      category={categoryMenuItem}
      onPageChange={(page, item, product) => {
        if (page === "product" && product) {
          navigate(`/products/${category}/${product.link}`);
        } else if (page === "home") {
          navigate("/");
        } else {
          navigate(`/${page}`);
        }
      }}
    />
  );
}

// Product Route Component
function ProductRoute() {
  const { category, productName } = useParams();
  const navigate = useNavigate();

  if (
    !category ||
    !productName ||
    !categoryData[category as keyof typeof categoryData]
  ) {
    navigate("/");
    return null;
  }

  const categoryInfo = categoryData[category as keyof typeof categoryData];
  const product = categoryInfo.products.find((p) => p.link === productName);

  if (!product) {
    navigate(`/products/${category}`);
    return null;
  }

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
  };

  // Render specific product page based on product link
  const renderProductPage = () => {
    switch (product.link) {
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
        // Generic product page for other products
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {product.product}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Detailed information for {product.product} is coming soon.
                Please contact our experts for technical specifications and
                application guidelines.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
              >
                Contact for More Information
              </button>
            </div>
          </div>
        );
    }
  };

  return renderProductPage();
}

// Static Page Component
function StaticPage({ pageType }: { pageType: string }) {
  const navigate = useNavigate();

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
                Leading the way in agricultural innovation and foliar nutrition
                solutions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver innovative, science-based foliar nutrition solutions
                that enhance crop performance.
              </p>
            </div>
          </div>
        </div>
      );

    case "contact":
      return (
        <div className={commonClasses}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8 text-gray-900">
              Contact Us
            </h1>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get in touch with our agricultural experts for personalized
                advice and support.
              </p>
              <div className="text-lg">
                <p className="text-gray-600">Phone: +44 (0) 1673 885175</p>
                <p className="text-gray-600">
                  Email: office@ilex-envirosciences.com
                </p>
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
              <p className="text-xl text-gray-600 leading-relaxed">
                Purchase our products through authorized distributors and
                agricultural suppliers nationwide.
              </p>
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
              This page is currently under development. Please check back soon!
            </p>
          </div>
        </div>
      );
  }
}

// Main App component with routing
export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll to top on route change */}
      <ScrollToTopInstant />

      <Navigation />

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Category routes */}
          <Route path="/products/:category" element={<CategoryRoute />} />

          {/* Product routes */}
          <Route
            path="/products/:category/:productName"
            element={<ProductRoute />}
          />

          {/* Static page routes */}
          <Route path="/about" element={<StaticPage pageType="about" />} />
          <Route path="/contact" element={<StaticPage pageType="contact" />} />
          <Route
            path="/how-to-buy"
            element={<StaticPage pageType="how-to-buy" />}
          />
          <Route
            path="/regulatory"
            element={<StaticPage pageType="regulatory" />}
          />
          <Route
            path="/product-guide"
            element={<StaticPage pageType="product-guide" />}
          />
          <Route
            path="/testimonials"
            element={<StaticPage pageType="testimonials" />}
          />
          <Route path="/media" element={<StaticPage pageType="media" />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<StaticPage pageType="not-found" />} />
        </Routes>
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
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
