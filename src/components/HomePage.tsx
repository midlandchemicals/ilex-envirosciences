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
  Zap,
  Target,
  Heart,
} from "lucide-react";
import { MenuItem, PageType } from "../types";

interface HomePageProps {
  onPageChange: (page: PageType, item?: MenuItem, product?: any) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
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

  // Verify category data structure on component mount
  React.useEffect(() => {
    const validateCategoryData = () => {
      const categoryKeys = [
        "phosphite-range",
        "foliar-range",
        "calcium-range",
        "biostimulants",
        "seed-treatments",
        "organic-range",
      ];
      const validationResults = categoryKeys.map((key) => {
        const category = categoryData[key as keyof typeof categoryData];
        return {
          category: key,
          valid: !!(
            category?.title &&
            category?.link &&
            category?.products?.length > 0
          ),
          productCount: category?.products?.length || 0,
        };
      });

      console.log("Category validation results:", validationResults);

      const invalidCategories = validationResults.filter(
        (result) => !result.valid
      );
      if (invalidCategories.length > 0) {
        console.error("Invalid category data found:", invalidCategories);
      }
    };

    validateCategoryData();
  }, []);

  // Complete product data organized by category
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

  // Helper function to safely get product count
  const getProductCount = (categoryKey: keyof typeof categoryData): number => {
    const category = categoryData[categoryKey];
    return category?.products?.length || 0;
  };

  const productRanges = [
    {
      title: "Phosphite Range",
      description:
        "Advanced phosphite-based nutrients for enhanced plant health and disease resistance",
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      link: "phosphite-range",
      gradient: "from-blue-500 to-purple-600",
      productCount: getProductCount("phosphite-range"),
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
    },
    {
      title: "Foliar Nutrient Range",
      description:
        "High-quality foliar nutrients for optimal crop nutrition and performance",
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      link: "foliar-range",
      gradient: "from-green-500 to-emerald-600",
      productCount: getProductCount("foliar-range"),
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    },
    {
      title: "Calcium Supplements",
      description:
        "Essential calcium products for improved crop quality and storage",
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      link: "calcium-range",
      gradient: "from-orange-500 to-red-500",
      productCount: getProductCount("calcium-range"),
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      title: "Biostimulants",
      description:
        "Natural biostimulants to enhance plant growth and stress tolerance",
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      link: "biostimulants",
      gradient: "from-emerald-500 to-teal-600",
      productCount: getProductCount("biostimulants"),
      image:
        "https://images.unsplash.com/photo-1609252847389-15ce22b37f65?w=400&h=300&fit=crop",
    },
    {
      title: "Seed Treatments",
      description:
        "Specialized treatments for superior seed germination and early growth",
      icon: <Wheat className="h-8 w-8 text-amber-600" />,
      link: "seed-treatments",
      gradient: "from-amber-500 to-yellow-600",
      productCount: getProductCount("seed-treatments"),
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    },
    {
      title: "Organic Range",
      description:
        "Certified organic products for sustainable agriculture practices",
      icon: <FlaskConical className="h-8 w-8 text-purple-600" />,
      link: "organic-range",
      gradient: "from-purple-500 to-pink-600",
      productCount: getProductCount("organic-range"),
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
  ];

  // Function to handle category navigation with validation
  const handleExploreRange = (categoryLink: string) => {
    // Validate that the category exists
    const category = categoryData[categoryLink as keyof typeof categoryData];

    if (!category) {
      console.error(`Category "${categoryLink}" not found`);
      return;
    }

    // Ensure all expected products are present
    if (!category.products || category.products.length === 0) {
      console.error(`No products found for category "${categoryLink}"`);
      return;
    }

    // Validate product structure
    const invalidProducts = category.products.filter(
      (product) => !product.product || !product.link
    );
    if (invalidProducts.length > 0) {
      console.error(
        `Invalid product data found in category "${categoryLink}":`,
        invalidProducts
      );
      return;
    }

    // Create the MenuItem object for the CategoryPage
    const categoryMenuItem: MenuItem = {
      menu_item: category.title,
      link: category.link,
      products: category.products,
    };

    // Navigate to the category page
    onPageChange(categoryLink as PageType, categoryMenuItem);

    // Log successful navigation for debugging
    console.log(
      `Successfully navigated to ${categoryLink} with ${category.products.length} products`
    );
  };

  const features = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Fast-Acting Formulations",
      description:
        "Our advanced formulations deliver nutrients quickly and efficiently to your crops",
    },
    {
      icon: <Target className="h-12 w-12 text-green-600" />,
      title: "Precision Agriculture",
      description:
        "Targeted solutions for specific crop needs and growth stages",
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: "Sustainable Solutions",
      description:
        "Environmentally responsible products that support long-term soil health",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 text-lg px-4 py-2">
              Leading Agricultural Innovation
            </Badge>
            <h1 className="text-5xl lg:text-7xl mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ilex EnviroSciences
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering foliar nutrition solutions that deliver superior crop
              performance, enhanced quality, and sustainable agricultural
              practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                onClick={() => handleExploreRange("phosphite-range")}
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => onPageChange("contact")}
              >
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Ranges Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-5xl mb-6">Our Product Ranges</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive nutrition solutions designed for every stage of crop
              development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productRanges.map((range, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm group overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={range.image}
                      alt={range.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${range.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90">
                        {range.productCount} Products
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      {range.icon}
                      <CardTitle className="text-2xl">{range.title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg min-h-24 text-gray-600 leading-relaxed">
                      {range.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Button
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300"
                      onClick={() => handleExploreRange(range.link)}
                    >
                      Explore Range
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-5xl mb-6">Why Choose Ilex?</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Decades of expertise in agricultural science and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-6">Ready to Transform Your Crops?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert advice on the best nutrition solutions for your specific
            needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => onPageChange("contact")}
            >
              Contact Our Experts
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
              onClick={() => onPageChange("how-to-buy")}
            >
              How to Buy
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
