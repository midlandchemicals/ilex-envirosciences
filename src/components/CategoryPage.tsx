import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
import { MenuItem, PageType, Product } from "../types";

interface CategoryPageProps {
  category: MenuItem;
  onPageChange: (page: PageType, item?: MenuItem, product?: Product) => void;
}

// --- Full Product Lists per Category ---
// [This object is correct and has the descriptions]
const categories = {
  "phosphite-range": {
    link: "phosphite-range",
    menu_item: "The Ilex Phosphite Range",
    products: [
      { product: "Crop Rooter® Plus", description: "The next generation NPK phosphite, formulated with 19 amino acids to target root development and stimulate healthy plant growth." },
      { product: "PK MAXX™ +", description: "A powerful multi-nutrient phosphite crop nutrient formulated to boost root and shoot development and stimulate healthy growth." },
      { product: "OilSeed Raiser™", description: "Oilseed Raiser™ is a nutritional supplement with phosphite- powered delivery designed to encourage oilseed rape crops to reach their full potential." },
      { product: "Tensile™", description: "Combining silicon and potassium with phosphite P and seaweed-derived natural biostimulants, formulated to improve crop strength, quality and shelf life." },
      { product: "Beet Raiser™", description: "Formulated to boost root development, nutrient uptake and stress resistance, Beet Raiser helps sugar beet crops achieve their full potential." },
      { product: "Maniphos™", description: "Maniphos™ helps to prevent Manganese and Sulphur deficiencies. The zero nitrogen formulation makes it an ideal option for peas and beans." },
      { product: "PK VEG™", description: "Specifically formulated together with potassium to promote strong root development and maintain healthy plant growth in vegetable and salad crops."},
    ],
  },
  "foliar-nutrients": {
    link: "foliar-nutrients",
    menu_item: "The Ilex Foliar Nutrients Range",
    products: [
      { product: "Mn SUPER™", description: "" },
      { product: "Mag Plus™", description: "" },
      { product: "ful-oN™", description: "" },
      { product: "Mn-Cu Plus™", description: "" },
      { product: "Foliar Boost™", description: "" },
      { product: "Cu-Zin™", description: "" },
      { product: "Pro-K™", description: "" },
      { product: "Pro-Sul™", description: "" },
    ],
  },
  "calcium-range": {
    link: "calcium-range",
    menu_item: "The Ilex Calcium Supplement Range",
    products: [
      { product: "Pro-Cal™", description: "" },
      { product: "Advocate™", description: "" },
      { product: "CaPITAL™", description: "" },
    ],
  },
  "biostimulants": {
    link: "biostimulants",
    menu_item: "The Ilex Biostimulant Range",
    products: [
      { product: "Stimplex®", description: "" },
      { product: "Toggle®", description: "" },
    ],
  },
  "seed-treatments": {
    link: "seed-treatments",
    menu_item: "The Ilex Seed Treatment Range",
    products: [
      { product: "Start-uP® MAXX", description: "" },
      { product: "Start-uP®", description: "" },
      { product: "ProZest™", description: "" },
      { product: "Man-uP™", description: "" },
    ],
  },
  "water-conditioners": {
    link: "water-conditioners",
    menu_item: "The Ilex Water Conditioner Range",
    products: [
      { product: "Modiphy Xtra", description: "" },
    ],
  },
  "organic-range": {
    link: "organic-range",
    menu_item: "The Ilex Organic Fertiliser Range",
    products: [
      { product: "Complete™ (6-2-4)", description: "" },
      { product: "Complete Hi-Fruit™ (4-2-6)", description: "" },
      { product: "K-Max™ (3-1-8)", description: "" },
      { product: "N-Max™ (7-2-2)", description: "" },
      { product: "Ultimate Gold™ (8-7-7)", description: "" },
    ],
  },
};

export function CategoryPage({ category, onPageChange }: CategoryPageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const getCategoryDescription = (link: string) => {
    // ... (this function is correct)
    const normalizedLink = link.trim().toLowerCase();
    switch (normalizedLink) {
      case "phosphite-range":
        return [
          "Phosphite technology enhances foliar nutrition by improving nutrient uptake, stimulating root growth, and helping crops withstand stress.",
          <span key="p2">The <b>Ilex Phosphite Range</b> delivers essential nutrients quickly and effectively.</span>,
          "Our formulations combine phosphite technology with key nutrients for rapid absorption, boosting crop health and nutrient-use efficiency."
        ];
      case "foliar-nutrients":
        return [
          "Foliar nutrients target deficiencies efficiently, delivering essential elements in plant-available forms for rapid uptake.",
          <span key="p2">The <b>Ilex Foliar Nutrients Range</b> is designed for easy application across many crops.</span>,
          "Advanced formulations enhance nutrient absorption, boost vigour, and improve overall yield potential."
        ];
      case "calcium-range":
        return [
          "Calcium supplements improve crop quality and strengthen plant structure.",
          <span key="p2">The <b>Ilex Calcium Supplement Range</b> supports fruit and vegetable development from flowering to harvest.</span>,
          "Formulations prevent calcium-related disorders and improve storage characteristics."
        ];
      case "biostimulants":
        return [
          "Natural biostimulants derived from seaweed extracts enhance plant growth and stress tolerance.",
          <span key="p2">The <b>Ilex Biostimulant Range</b> supports plant vigour and resilience across crops.</span>,
          "Formulations optimise nutrient utilisation and strengthen crop performance."
        ];
      case "seed-treatments":
        return [
          "Specialised seed treatments improve germination rates and early plant development.",
          <span key="p2">The <b>Ilex Seed Treatment Range</b> provides essential nutrients and protection for seedlings.</span>,
          "Formulations enhance seedling vigour, optimise nutrient uptake, and increase crop potential."
        ];
      case "water-conditioners":
        return [
          "Water conditioners optimise spray water quality for effective foliar applications.",
          <span key="p2">The <b>Ilex Water Conditioner Range</b> ensures uniform nutrient delivery and maximises foliar spray performance.</span>,
          "Formulations improve water efficiency and support consistent crop health."
        ];
      case "organic-range":
        return [
          "Certified organic fertilisers provide complete nutrition while maintaining organic certification.",
          <span key="p2">The <b>Ilex Organic Fertiliser Range</b> supports sustainable farming practices and healthy crops.</span>,
          "Formulations optimise nutrient uptake, improve soil health, and promote long-term sustainability."
        ];
      default:
        return ["Premium agricultural solutions designed to enhance crop performance and quality."];
    }
  };

  const getProductImage = (productName: string) => {
    // ... (this function is correct)
    const productImageMap: { [key: string]: string } = {
      "Crop Rooter® Plus": "/assets/product images/Phosphite/Crop-Rooter-plus.jpg",
      "PK MAXX™ +": "/assets/product images/Phosphite/PKmaxx.jpg",
      "OilSeed Raiser™": "/assets/product images/Phosphite/OilSeed Raiser.jpg",
      "Tensile™": "/assets/product images/Phosphite/TenSile.jpg",
      "Beet Raiser™": "/assets/product images/Phosphite/Beet Raiser 2.jpg",
      "Maniphos™": "/assets/product images/Phosphite/Maniphos.jpg",
      "PK VEG™": "/assets/product images/Phosphite/PK VEG.jpg",
      "Mn SUPER™": "/assets/product images/Foliar/Mn Super 5L copy.jpg",
      "Mag Plus™": "/assets/product images/Foliar/Mag plus.jpg",
      "ful-oN™": "/assets/product images/Foliar/FullOn.jpg",
      "Mn-Cu Plus™": "/assets/product images/Foliar/MnCuPlus.jpg",
      "Foliar Boost™": "/assets/product images/Foliar/Foliar-Boost.jpg",
      "Cu-Zin™": "/assets/product images/Foliar/Cu-Zin.jpg",
      "Pro-K™": "/assets/product images/Foliar/ProK.png",
      "Pro-Sul™": "/assets/product images/Foliar/pro-sul.png",
      "Pro-Cal™": "/assets/product images/Calcium Supplements/ProCal.jpg",
      "Advocate™": "/assets/product images/Calcium Supplements/Advocate.jpg",
      "CaPITAL™": "/assets/product images/Calcium Supplements/Capital.png",
      "Stimplex®": "/assets/product images/Biostimulants/Stimplex.png",
      "Toggle®": "/assets/product images/Biostimulants/Toggle_tub.png",
      "Start-uP® MAXX": "/assets/product images/Seed Treatments/Start-uP MAXX.jpg",
      "Start-uP®": "/assets/product images/Seed Treatments/Start-uP.jpg",
      "ProZest™": "/assets/product images/Seed Treatments/ProZeSt.jpg",
      "Man-uP™": "/assets/product images/Seed Treatments/Man uP.jpg",
      "Modiphy Xtra": "/assets/product images/Water Conditioner/ModipHy Xtra.jpg",
      "Complete™ (6-2-4)": "/assets/product images/Organic/Complete 6-2-4.jpg",
      "Complete Hi-Fruit™ (4-2-6)": "/assets/product images/Organic/Complete Hi-Fruit.jpg",
      "K-Max™ (3-1-8)": "/assets/product images/Organic/K-Max.jpg",
      "N-Max™ (7-2-2)": "/assets/product images/Organic/N-Max.jpg",
      "Ultimate Gold™ (8-7-7)": "/assets/product images/Organic/Ultimate Gold.jpg",
    };
    return productImageMap[productName] || "/assets/product images/Phosphite/Maniphos.jpg";
  };

  // --- FIX #1: Get the detailed data from the local 'categories' object ---
const categoryData = categories[category.link as keyof typeof categories];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Category Header */}
      <motion.header
        className="bg-[#c9dec2] py-16 px-4 flex items-center justify-center min-h-[40vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {category.menu_item.replace("The Ilex ", "")}
          </motion.h1>

          {getCategoryDescription(category.link).map((desc, idx) => (
            <motion.p
              key={idx}
              className="text-[#2e2e2e] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
            >
              {desc}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              className="bg-[#5bb33d] cursor-pointer text-xl hover:bg-[#4a9b32] text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:translate-y-[-2px] shadow-lg"
              onClick={() => {
                const productsSection = document.getElementById("products-section");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Products Grid */}
      <motion.section
        id="products-section"
        className="py-12 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* --- Products Mapping --- */}
            {categoryData.products?.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col border border-gray-100 hover:border-[#6abf4b] transition-all duration-300 overflow-hidden">
                  <div className="h-96 bg-gray-50 flex items-center justify-center p-4">
                    <ImageWithFallback
                      src={getProductImage(product.product)}
                      alt={product.product}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <CardHeader className="!pt-0">
                    {/* FIX: Using font-bold Tailwind class to style the product name */}
                    <CardTitle className="text-lg text-gray-800 **font-bold**">
                      {product.product}
                    </CardTitle>
                    
                    {/* Descriptions are rendered as plain text (no HTML) */}
                    <p className="text-sm text-gray-600 mt-1">
                      {product.description || "No description available"}
                    </p>
                    
                    {/* If you add HTML to descriptions later, use this instead:
                    <p
                      className="text-sm text-gray-600 mt-1"
                      dangerouslySetInnerHTML={{ __html: product.description || "No description available" }}
                    />
                    */}

                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Button
                      className="w-full cursor-pointer bg-[#6abf4b] hover:bg-[#5aa338] text-white"
                      onClick={() => onPageChange("product", category, product)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}