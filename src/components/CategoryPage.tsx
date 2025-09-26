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
    <div
      className={`min-h-screen bg-gradient-to-br ${getCategoryGradient(
        category.link
      )}`}
    >
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                {getCategoryIcon(category.link)}
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-4 py-2">
                  {category.products?.length || 0} Products Available
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {category.menu_item.replace("The Ilex ", "")}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {getCategoryDescription(category.link)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Technical Information
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop"
                  alt={category.menu_item}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section
        className="py-20 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl mb-6">Available Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of specialized products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.products?.map((product, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={getProductImage(product.product)}
                      alt={product.product}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg leading-tight">
                      {product.product}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <Button
                      className="w-full cursor-pointer group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300"
                      onClick={() => onPageChange("product", category, product)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Need Expert Advice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our agricultural specialists can help you choose the right products
            for your specific needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => onPageChange("contact")}
            >
              Contact Our Experts
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Technical Resources
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
