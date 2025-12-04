import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePageNew";
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
import { ModipHyXtraPage } from "./components/ModifyXtra";
import { MenuItem } from "./types";
import { Analytics } from "@vercel/analytics/react";

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
  "foliar-nutrients": {
    title: "The Ilex Foliar Nutrient Range",
    link: "foliar-nutrients",
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
  "water-conditioners": {
    title: "Water Conditioners",
    link: "water-conditioners",
    products: [{ product: "Modiphy Xtra", link: "modiphy-xtra" }],
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
      case "modiphy-xtra":
        return <ModipHyXtraPage onSubmit={handleFormSubmit} />;
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

// Terms and Conditions Modal Component
function TermsConditionsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-10 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#6abf4b] text-white px-8 py-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Terms and Conditions</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 cursor-pointer rounded-full p-2 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 max-h-[calc(90vh-100px)] pb-20 text-gray-700 leading-relaxed">
          <p className="mb-4">
            The term 'Ilex EnviroSciences' or 'us' or 'we' refers to the owner
            of the website Ilex EnviroSciences Ltd whose registered office is
            Ilex EnviroSciences Limited, 13a Brindley Close, Holly Lane Ind Est,
            Atherstone, Warwickshire, CV9 2QZ, United Kingdom. We are registered
            in England under company number 4991822. The term 'you' refers to
            the user or viewer of our website.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Changes to these terms
          </h3>
          <p className="mb-4">
            We may revise these Terms of Use at any time by amending this page.
            Please check this page from time to time to take notice of any
            changes we make.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Site Content
          </h3>
          <p className="mb-4">
            The content on our site is provided for general information only. It
            is not intended to amount to advice on which you should rely. Your
            use of any information or materials on this website is entirely at
            your own risk, for which we shall not be liable. You must obtain
            professional or specialist advice before taking, or refraining from,
            any action on the basis of the content on our site. It shall be your
            own responsibility to ensure that any products, services or
            information available through this website meet your specific
            requirements.
          </p>
          <p className="mb-4">
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </p>
          <p className="mb-4">
            The content of the site is subject to change without notice.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Site Access
          </h3>
          <p className="mb-4">
            Every effort is made to keep the website up and running smoothly.
            However, we take no responsibility for, and will not be liable for,
            the website being temporarily unavailable due to technical issues
            beyond our control.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Password protected content
          </h3>
          <p className="mb-4">
            If you are provided with or you choose a user identification code,
            password or any other piece of information as part of our security
            procedures, you must treat such information as confidential and not
            disclose it to any third party.
          </p>
          <p className="mb-4">
            We have the right to disable any user identification code or
            password, whether chosen by you or allocated by us, at any time, if
            in our reasonable opinion you have failed to comply with any of the
            provisions of these terms of use.
          </p>
          <p className="mb-4">
            If you know or suspect that anyone other than you knows your user
            identification code or password, you must promptly notify us by
            contacting{" "}
            <a
              href="mailto:ilexsales@ilex-envirosciences.com

"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ilexsales@ilex-envirosciences.com
            </a>
            .
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Legal and copyright
          </h3>
          <p className="mb-4">
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance and graphics. Reproduction is prohibited other than
            in accordance with the copyright notice, which forms part of these
            terms and conditions.
          </p>
          <p className="mb-4">
            All trademarks reproduced in this website, which are not the
            property of, or licensed to the operator, are acknowledged on the
            website.
          </p>
          <p className="mb-4">
            You must not modify the paper or digital copies of any materials you
            have printed off or downloaded in any way.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Limitation of our liability
          </h3>
          <p className="mb-4">
            The information contained within this website is, to the best of our
            knowledge, correct and is presented in good faith but no warranty,
            expressed or implied is given.
          </p>
          <p className="mb-4">
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Viruses and unauthorised use
          </h3>
          <p className="mb-4">
            We do not guarantee that our site will be secure or free from bugs
            or viruses.
          </p>
          <p className="mb-4">
            You are responsible for configuring your information technology,
            computer programmes and platform in order to access our site. You
            should use your own virus protection software.
          </p>
          <p className="mb-4">
            You must not misuse our site by knowingly introducing viruses,
            trojans, worms, logic bombs or other material which is malicious or
            technologically harmful. You must not attempt to gain unauthorised
            access to our site, the server on which our site is stored or any
            server, computer or database connected to our site.
          </p>
          <p className="mb-4">
            Unauthorised use of this website may give rise to a claim for
            damages and/or be a criminal offence.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Third party links
          </h3>
          <p className="mb-4">
            This website may include links to other websites. These links are
            provided for your convenience to provide further information. They
            do not signify that we endorse the website(s). We have no
            responsibility for the content of the linked website(s).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Special Offers & Promotions
          </h3>
          <p className="mb-4">
            Special offers are subject to availability and we reserve the right
            to change, cancel or amend these promotions without notice.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Applicable law
          </h3>
          <p className="mb-4">
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of England, Northern Ireland,
            Scotland and Wales.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Trademarks
          </h3>
          <p className="mb-4">
            Crop Rooter® and Start-uP® are UK registered trademarks of Ilex
            EnviroSciences Ltd.
          </p>
          <p className="mb-4">
            Ilex EnviroSciences® and all of its product names are registered
            trademarks of Ilex EnviroSciences Ltd.
          </p>
          <p className="mb-4">
            Stimplex® and toggle® are trademarks of Acadian Plant Health Ltd.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Contact
          </h3>
          <p className="mb-4">
            To contact us, please email{" "}
            <a
              href="mailto:ilexsales@ilex-envirosciences.com

"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ilexsales@ilex-envirosciences.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

// Privacy Policy Modal Component
function PrivacyPolicyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 top-10 z-50  flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl  shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#6abf4b] text-white px-8 py-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 cursor-pointer rounded-full p-2 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 max-h-[calc(90vh-100px)] pb-20 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Ilex EnviroSciences Ltd ("We") are committed to protecting and
            respecting your privacy.
          </p>
          <p className="mb-4">
            This policy sets out the basis on which any personal data we collect
            from you, or that you provide to us, will be processed by us. Please
            read the following carefully to understand our views and practices
            regarding your personal data and how we will treat it. By providing
            personal data to us, you are accepting and consenting to the
            practices described in this policy.
          </p>
          <p className="mb-6">
            For the purpose of the General Data Protection Regulation 2018 (the
            Act), the data controller is Ilex EnviroSciences Limited, 13a
            Brindley Close, Holly Lane Ind Est, Atherstone, Warwickshire, CV9
            2QZ, United Kingdom.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Information we may collect from you
          </h3>
          <p className="mb-4">
            We may collect and process the following data about you:
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            Information you give us
          </h4>
          <p className="mb-4">
            This may arise from you filling in enquiry forms at an exhibition or
            by corresponding with us by phone, e-mail or otherwise and includes
            information you provide when you complete an account application
            form, when you change/update your personal details, contact
            preferences etc. The information you give us may include your name,
            address, e-mail address and phone number and financial information.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            Information we collect about you
          </h4>
          <p className="mb-2">
            When you contact us to enquire about a product or when you place an
            order, we automatically collect the following information:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Contact details i.e.- name, email address, telephone number</li>
            <li>Information about your enquiry or order</li>
            <li>
              Details of your delivery address or the address of your customer
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Uses made of the information
          </h3>
          <p className="mb-2">
            We use information held about you in the following ways:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>To administer your account</li>
            <li>
              Providing always that you have given to us the necessary consent,
              to provide you with information about other goods and services we
              offer that are similar to those that you have already purchased or
              enquired about
            </li>
            <li>To notify you about changes to our products and services</li>
            <li>In-house research and statistical analysis</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Electronic Data Capture
          </h3>
          <p className="mb-4">
            Our website and its owners take a proactive approach to user privacy
            and ensure the necessary steps are taken to protect the privacy of
            its users throughout their visiting experience. This website
            complies with all UK national laws and requirements for user
            privacy.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Use of Cookies
          </h3>
          <p className="mb-4">
            Our website uses cookies to better the users' experience while
            visiting the website. Where applicable, this website uses a cookie
            control system allowing the user on their first visit to the website
            to allow or disallow the use of cookies on their computer/device.
            This complies with recent legislation requirements for websites to
            obtain explicit consent from users before leaving behind or reading
            files such as cookies on a user's computer/device.
          </p>
          <p className="mb-4">
            Cookies are small files saved to the user's computer's hard drive
            that track, save and store information about the user's interactions
            and usage of the website. This allows the website, through its
            server, to provide users with a tailored experience within this
            website. Users are advised that if they wish to deny the use and
            saving of cookies from this website on to their computer's hard
            drive, they should take necessary steps within their web browser's
            security settings to block all cookies from this website and its
            external serving vendors.
          </p>
          <p className="mb-4">
            This website uses tracking software to monitor its visitors to
            better understand how they use it. This software is provided by
            Google Analytics which uses cookies to track visitor usage. The
            software will save a cookie to your computer's hard drive in order
            to track and monitor your engagement and usage of the website, but
            will not store, save or collect personal information. You can read
            Google's privacy policy here for further information Google Privacy
            Policy.
          </p>
          <p className="mb-4">
            Other cookies may be stored to your computer's hard drive by
            external vendors when this website uses referral programs, sponsored
            links or adverts. Such cookies are used for conversion and referral
            tracking and typically expire after 30 days, though some may take
            longer. No personal information is stored, saved or collected.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Contact & Communication
          </h3>
          <p className="mb-4">
            Users contacting Ilex EnviroSciences Ltd website and/or its owners
            do so at their own discretion and provide any such personal details
            requested at their own risk. Your personal information is kept
            private and stored securely until a time it is no longer required,
            or a request for deletion is initiated as detailed in the General
            Data Protection Policy 2018. Every effort has been made to ensure a
            safe and secure form to email submission process, but we advise
            users using such forms to email processes that they do so at their
            own risk.
          </p>
          <p className="mb-4">
            This website and its owners use any information submitted to provide
            you with further information about the products/services they offer
            or to assist you in answering any questions or queries you may have
            submitted. This includes using your details to subscribe you to any
            email newsletter program the website operates but only if this was
            made clear to you and your express permission was granted when
            submitting any form to email process. Or whereby you, the consumer,
            have previously purchased from or enquired about purchasing from the
            company a product or service that the email newsletter relates to.
            This is by no means an entire list of your user rights in regard to
            receiving email marketing material. Your details are not passed on
            to any third parties.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Email Newsletter
          </h3>
          <p className="mb-4">
            This website operates an email newsletter program, used to inform
            subscribers about products and services supplied by this website.
            Users can subscribe through an online automated process should they
            wish to do so but do so at their own discretion. Some subscriptions
            may be manually processed through prior written agreement with the
            user.
          </p>
          <p className="mb-4">
            Subscriptions are taken in compliance with UK Spam Laws detailed in
            the Privacy and Electronic Communications Regulations 2003. All
            personal details relating to subscriptions are held securely and in
            accordance with the General Data Protection Policy 2018. No personal
            details are passed on to third parties nor shared with
            companies/people outside of the company or those that operate this
            website. Under the General Data Protection Policy 2018 you may
            request a copy of personal information held about you by Ilex
            EnviroSciences Ltd.
          </p>
          <p className="mb-4">
            If you would like a copy of the information held on you, please
            write to the business address at the bottom of this policy.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Email marketing campaigns
          </h3>
          <p className="mb-4">
            Email marketing campaigns published by this website or its owners
            may contain tracking facilities within the actual email. Subscriber
            activity is tracked and stored in a database for future analysis and
            evaluation. Such tracked activity may include; the opening of
            emails, forwarding of emails, the clicking of links within the email
            content, times, dates and frequency of activity. This information is
            used to refine future email campaigns and supply the user with more
            relevant content based around their activity.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            External Links
          </h3>
          <p className="mb-4">
            Although this website only looks to include quality, safe and
            relevant external links, users are advised to adopt a policy of
            caution before clicking any external web links mentioned throughout
            our website. The owners of this website cannot guarantee or verify
            the contents of any externally linked website despite their best
            efforts. Users should therefore note they click on external links at
            their own risk and this website and its owners cannot be held liable
            for any damages or implications caused by visiting any external
            links mentioned.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Adverts and Sponsored Links
          </h3>
          <p className="mb-4">
            Our website may contain sponsored links and adverts. These will
            typically be served through our advertising partners; who may have
            detailed privacy policies relating directly to the adverts they
            serve. Clicking on any such adverts will send you to the
            advertiser's website through a referral program which may use
            cookies and will track the number of referrals sent from this
            website. Users should therefore note they click on sponsored
            external links at their own risk and this website and its owners
            cannot be held liable for any damages or implications caused by
            visiting any external links mentioned.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Social Media
          </h3>
          <p className="mb-4">
            Communication, engagement and actions taken through external social
            media platforms that this website and its owners participate on are
            subject to the terms and conditions as well as the privacy policies
            held with each social media platform respectively. Users are advised
            to use social media platforms wisely and communicate/engage upon
            them with due care and caution in regard to their own privacy and
            personal details. This website nor its owners will ever ask for
            personal or sensitive information through social media platforms and
            encourage users wishing to discuss sensitive details to contact them
            through primary communication channels such as by telephone or
            email.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Shortened Links in Social Media
          </h3>
          <p className="mb-4">
            This website and its owners through their social media platform
            accounts may share web links to relevant web pages. By default some
            social media platforms shorten lengthy URLs. Users are advised to
            take caution and good judgement before clicking any shortened URLs
            published on social media platforms by this website and its owners.
            Despite the best efforts to ensure only genuine URLs are published,
            many social media platforms are prone to spam and hacking and
            therefore this website and its owners cannot be held liable for any
            damages or implications caused by visiting any shortened links.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            Contact Details
          </h3>
          <p className="mb-4">
            Specific information relating to the General Data Protection
            Regulation 2018, Privacy and Electronic Communications Regulations
            2003, or any general enquiry can be requested in writing, to:
          </p>
          <p className="font-semibold">
            Ilex EnviroSciences Limited, 13a Brindley Close, Holly Lane Ind Est,
            Atherstone, Warwickshire, CV9 2QZ, United Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
}

// Main App component with routing
export default function App() {
  const location = useLocation();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  // Smooth scroll to sections on home page
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Analytics></Analytics>
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

      <footer className="py-10 px-5 bg-[#ececec] text-[#555]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo */}
          <div>
            <img
              src="/assets/ilexlogonobg.png"
              alt="Ilex Logo"
              className="max-w-[140px] h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Center: Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-[#555] font-medium hover:text-black hover:-translate-y-0.5 transition-all duration-200"
            >
              Home
            </Link>
            {location.pathname === "/" && (
              <>
                <button
                  onClick={() => scrollToSection("brands")}
                  className="text-[#555] cursor-pointer font-medium hover:text-black hover:-translate-y-0.5 transition-all duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-[#555] cursor-pointer font-medium hover:text-black hover:-translate-y-0.5 transition-all duration-200"
                >
                  Products
                </button>
              </>
            )}

            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-[#555] cursor-pointer font-medium hover:text-black hover:-translate-y-0.5 transition-all duration-200"
            >
              Privacy policy
            </button>
            <button
              onClick={() => setIsTermsModalOpen(true)}
              className="text-[#555] cursor-pointer font-medium hover:text-black hover:-translate-y-0.5 transition-all duration-200"
            >
              Terms & Conditions
            </button>
          </nav>

          {/* Right: Partner Logo */}
          <div>
            <a
              href="https://www.midlandchem.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/midchemnobg.png"
                alt="Midland Chem Logo"
                className="max-w-[140px] h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-[#888] text-sm mt-8">
          <p>
            Company Registration Number: 04991822
            <br />
            V.A.T Registration Number: 829 4192 07
          </p>
          <p className="mt-2 font-bold">
            © {new Date().getFullYear()} Ilex EnviroSciences Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Terms and Conditions Modal */}
      <TermsConditionsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  );
}
