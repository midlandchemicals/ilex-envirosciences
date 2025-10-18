import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
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

  const getCategoryIcon = (link: string) => {
    switch (link) {
      case "phosphite-range":
        return <Beaker className="h-12 w-12 text-blue-600" />;
      case "foliar-range":
        return <Sprout className="h-12 w-12 text-green-600" />;
      case "calcium-range":
        return <Shield className="h-12 w-12 text-orange-600" />;
      case "biostimulants":
        return <Leaf className="h-12 w-12 text-emerald-600" />;
      case "seed-treatments":
        return <Wheat className="h-12 w-12 text-amber-600" />;
      case "water-conditioners":
        return <Droplets className="h-12 w-12 text-cyan-600" />;
      case "organic-range":
        return <FlaskConical className="h-12 w-12 text-purple-600" />;
      default:
        return <Beaker className="h-12 w-12 text-blue-600" />;
    }
  };

  const getCategoryGradient = (link: string) => {
    switch (link) {
      case "phosphite-range":
        return "from-blue-50 via-white to-purple-50";
      case "foliar-range":
        return "from-green-50 via-white to-emerald-50";
      case "calcium-range":
        return "from-orange-50 via-white to-red-50";
      case "biostimulants":
        return "from-emerald-50 via-white to-teal-50";
      case "seed-treatments":
        return "from-amber-50 via-white to-yellow-50";
      case "water-conditioners":
        return "from-cyan-50 via-white to-blue-50";
      case "organic-range":
        return "from-purple-50 via-white to-pink-50";
      default:
        return "from-blue-50 via-white to-purple-50";
    }
  };

  const getCategoryDescription = (link: string) => {
    switch (link) {
      case "phosphite-range":
        return "Advanced phosphite-based nutrients that enhance plant health, improve disease resistance, and boost overall crop performance through superior nutrient uptake.";
      case "foliar-range":
        return "High-quality foliar nutrients designed for rapid absorption and maximum effectiveness, delivering essential micronutrients directly to plant leaves.";
      case "calcium-range":
        return "Essential calcium supplements that improve crop quality, enhance storage characteristics, and prevent calcium-related disorders in fruits and vegetables.";
      case "biostimulants":
        return "Natural biostimulants derived from seaweed extracts that enhance plant growth, improve stress tolerance, and optimize nutrient utilization.";
      case "seed-treatments":
        return "Specialized seed treatments that improve germination rates, enhance early plant vigor, and provide essential nutrients for optimal seedling development.";
      case "water-conditioners":
        return "Advanced water conditioning solutions that optimize spray water quality for maximum efficacy of foliar applications.";
      case "organic-range":
        return "Certified organic fertilizers that provide complete nutrition while maintaining organic certification and supporting sustainable farming practices.";
      default:
        return "Premium agricultural solutions designed to enhance crop performance and quality.";
    }
  };

  const getProductImage = (productName: string) => {
    // Return different images based on product type
    if (productName.toLowerCase().includes("cal")) {
      return "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop";
    } else if (productName.toLowerCase().includes("mag")) {
      return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop";
    } else if (
      productName.toLowerCase().includes("seed") ||
      productName.toLowerCase().includes("start")
    ) {
      return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop";
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Category Header */}
      <motion.header
        className="bg-gradient-to-r from-[#6abf4b] to-[#5aa338] py-12 px-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {category.menu_item.replace("The Ilex ", "")}
              </h1>
              <p className="text-white/90 max-w-3xl">
                {getCategoryDescription(category.link)}
              </p>
            </div>
            <Badge className="bg-white text-[#5aa338] hover:bg-white/90 text-base px-4 py-2">
              {category.products?.length || 0} Products
            </Badge>
          </div>
        </div>
      </motion.header>

      {/* Products Grid */}
      <motion.section
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
                className="group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col border border-gray-100 hover:border-[#6abf4b] transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                    <ImageWithFallback
                      src={getProductImage(product.product)}
                      alt={product.product}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-800">
                      {product.product}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Button
                      className="w-full bg-[#6abf4b] hover:bg-[#5aa338] text-white"
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
