import React from "react";
import { useNavigate } from "react-router-dom";
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
  FlaskConical,
  Zap,
  Target,
  Heart,
} from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();

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

  const productRanges = [
    {
      title: "Phosphite Range",
      description:
        "Advanced phosphite-based nutrients for enhanced plant health and disease resistance",
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      link: "phosphite-range",
      gradient: "from-blue-500 to-purple-600",
      productCount: 8,
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
      productCount: 8,
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
      productCount: 3,
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
      productCount: 2,
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
      productCount: 4,
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
      productCount: 5,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
  ];

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

  const handleExploreRange = (categoryLink: string) => {
    navigate(`/products/${categoryLink}`);
  };

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
                onClick={() => navigate("/contact")}
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
                      className="w-full cursor-pointer group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300"
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
              onClick={() => navigate("/contact")}
            >
              Contact Our Experts
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
              onClick={() => navigate("/how-to-buy")}
            >
              How to Buy
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
