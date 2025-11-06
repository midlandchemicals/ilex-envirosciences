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
import {
  Beaker,
  Sprout,
  Shield,
  Leaf,
  Wheat,
  Droplets,
  FlaskConical,
} from "lucide-react";
import { MenuItem, PageType, Product } from "../types";

interface CategoryPageProps {
  category: MenuItem;
  onPageChange: (page: PageType, item?: MenuItem, product?: Product) => void;
}

export function CategoryPage({ category, onPageChange }: CategoryPageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getCategoryDescription = (link: string) => {
    const normalizedLink = link.trim().toLowerCase();

    switch (normalizedLink) {
      case "phosphite-range":
        return [
          "Phosphite technology enhances foliar nutrition by improving nutrient uptake, stimulating root growth, and helping crops withstand stress from weather and nutrient imbalances.",
          <span key="p2">The <b>Ilex Phosphite Range</b> delivers essential nutrients quickly and effectively, consistently promoting strong root development.</span>,
          "Our advanced formulations combine phosphite technology with key nutrients for rapid, systemic absorption, boosting crop health, root growth, and nutrient-use efficiency for greater yield potential."
        ];

      case "foliar-nutrients":
        return [
          "Foliar nutrients target deficiencies efficiently, delivering essential elements in highly plant-available forms for rapid uptake and maximum effectiveness.",
          <span key="p2">The <b>Ilex Foliar Nutrients Range</b> is designed for easy application across a wide range of arable and horticultural crops, ensuring consistent growth and health.</span>,
          "Our advanced formulations enhance nutrient absorption, boost crop vigour, and improve overall yield potential through precise, systemic delivery."
        ];

      case "calcium-range":
        return [
          "Calcium supplements that enhance crop quality and strengthen plant structure for healthier, more resilient produce.",
          <span key="p2">The <b>Ilex Calcium Supplement Range</b> delivers essential calcium efficiently, supporting optimal fruit and vegetable development from flowering to harvest.</span>,
          "Our advanced formulations prevent calcium-related disorders, improve storage characteristics, and help maximise yield and crop value."
        ];

      case "biostimulants":
        return [
          "Natural biostimulants derived from seaweed extracts that enhance plant growth and improve stress tolerance.",
          <span key="p2">The <b>Ilex Biostimulant Range</b> provides essential compounds to support plant vigour and resilience across diverse crops.</span>,
          "Our advanced formulations optimise nutrient utilisation and strengthen crop performance for healthier, more productive plants."
        ];

      case "seed-treatments":
        return [
          "Specialised seed treatments that improve germination rates and support early plant development.",
          <span key="p2">The <b>Ilex Seed Treatment Range</b> delivers essential nutrients and protection for seedlings to ensure strong establishment.</span>,
          "These formulations enhance seedling vigour, optimise nutrient uptake, and increase overall crop potential from the very start."
        ];

      case "water-conditioners":
        return [
          "Advanced water conditioning solutions that optimise spray water quality for effective foliar applications.",
          <span key="p2">The <b>Ilex Water Conditioner Range</b> ensures uniform nutrient delivery and maximises the performance of foliar sprays.</span>,
          "Our formulations improve water efficiency, enhance nutrient absorption, and support consistent crop health and productivity."
        ];

      case "organic-range":
        return [
          "Certified organic fertilisers that provide complete nutrition while maintaining organic certification.",
          <span key="p2">The <b>Ilex Organic Fertiliser Range</b> supports sustainable farming practices and promotes healthy, productive crops.</span>,
          "These formulations optimise nutrient uptake, improve soil health, and contribute to long-term agricultural sustainability."
        ];

      default:
        return ["Premium agricultural solutions designed to enhance crop performance and quality."];
    }
  };

  const getProductImage = (productName: string) => {
    const productImageMap: { [key: string]: string } = {
      // Phosphite Range
      "Crop Rooter® Plus": "/assets/product images/Phosphite/Crop-Rooter-plus.jpg",
      "PK MAXX™ +": "/assets/product images/Phosphite/PKmaxx.jpg",
      "OilSeed Raiser™": "/assets/product images/Phosphite/OilSeed Raiser.jpg",
      "Tensile™": "/assets/product images/Phosphite/TenSile.jpg",
      "Beet Raiser™": "/assets/product images/Phosphite/Beet Raiser 2.jpg",
      "Maniphos™": "/assets/product images/Phosphite/Maniphos.jpg",
      "PK VEG™": "/assets/product images/Phosphite/PK VEG.jpg",

      // Foliar Nutrients
      "Mn SUPER™": "/assets/product images/Foliar/Mn Super 5L copy.jpg",
      "Mag Plus™": "/assets/product images/Foliar/Mag plus.jpg",
      "ful-oN™": "/assets/product images/Foliar/FullOn.jpg",
      "Mn-Cu Plus™": "/assets/product images/Foliar/MnCuPlus.jpg",
      "Foliar Boost™": "/assets/product images/Foliar/Foliar-Boost.jpg",
      "Cu-Zin™": "/assets/product images/Foliar/Cu-Zin.jpg",
      "Pro-K™": "/assets/product images/Foliar/ProK.png",
      "Pro-Sul™": "/assets/product images/Foliar/pro-sul.png",

      // Calcium Range
      "Pro-Cal™": "/assets/product images/Calcium Supplements/ProCal.jpg",
      "Advocate™": "/assets/product images/Calcium Supplements/Advocate.jpg",
      "CaPITAL™": "/assets/product images/Calcium Supplements/Capital.png",

      // Biostimulants
      "Stimplex®": "/assets/product images/Biostimulants/Stimplex.png",
      "Toggle®": "/assets/product images/Biostimulants/Toggle_tub.png",

      // Seed Treatments
      "Start-uP® MAXX": "/assets/product images/Seed Treatments/Start-uP MAXX.jpg",
      "Start-uP®": "/assets/product images/Seed Treatments/Start-uP.jpg",
      "ProZest™": "/assets/product images/Seed Treatments/ProZeSt.jpg",
      "Man-uP™": "/assets/product images/Seed Treatments/Man uP.jpg",

      // Water Conditioners
      "Modiphy Xtra": "/assets/product images/Water Conditioner/ModipHy Xtra.jpg",

      // Organic Range
      "Complete™ (6-2-4)": "/assets/product images/Organic/Complete 6-2-4.jpg",
      "Complete Hi-Fruit™ (4-2-6)": "/assets/product images/Organic/Complete Hi-Fruit.jpg",
      "K-Max™ (3-1-8)": "/assets/product images/Organic/K-Max.jpg",
      "N-Max™ (7-2-2)": "/assets/product images/Organic/N-Max.jpg",
      "Ultimate Gold™ (8-7-7)": "/assets/product images/Organic/Ultimate Gold.jpg",
    };

    return productImageMap[productName] || "/assets/product images/Phosphite/Maniphos.jpg";
  };

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

          {/* Dynamic paragraphs */}
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
            {category.products?.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group **cursor-pointer**" // Added cursor-pointer
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                **onClick={() => onPageChange("product", category, product)}** // Navigate on card click
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
                    <CardTitle className="text-lg text-gray-800">
                      {product.product}
                    </CardTitle>
                    {/* Description line */}
                    <p className="text-sm text-gray-600 mt-1">
                      {product.description || "No description available"}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Button
                      className="w-full cursor-pointer bg-[#6abf4b] hover:bg-[#5aa338] text-white"
                      onClick={(e) => {
                        **e.stopPropagation();** // Prevent card click handler from firing
                        onPageChange("product", category, product);
                      }}
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