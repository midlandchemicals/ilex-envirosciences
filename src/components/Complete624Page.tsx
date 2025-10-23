import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

import { PDFLinks } from "./PDFLinks";
import { AnalysisPieChart } from "./AnalysisPieChart";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
import { smoothScrollToSection } from "../utils/scrollHelpers";
import {
  Leaf,
  Zap,
  Target,
  Beaker,
  Droplets,
  Clock,
  Package,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  FlaskConical,
  Atom,
  TrendingUp,
  Award,
  Sprout,
  Shield,
  Heart,
  Activity,
  Sparkles,
  TreePine,
  Apple,
  Wheat,
  Flower2,
  Recycle,
  Microscope,
  Coffee,
  Factory,
  GraduationCap,
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function Complete624Page({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
  };

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

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Safe & Effective Nutrient Solution",
      description:
        "Formulated as an easy-to-use liquid that is safe for all plants and growing systems",
    },
    {
      icon: <Recycle className="h-8 w-8 text-[#6abf4b]" />,
      title: "Derived from Sustainable Sources",
      description:
        "Made from cane sugar molasses and sustainable plant material for environmental responsibility",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Balanced Combination of Nutrients",
      description:
        "Encourages strong and healthy growth in all fruiting and flowering plants",
    },
    {
      icon: <Atom className="h-8 w-8 text-[#6abf4b]" />,
      title: "Complete Mineral Package",
      description:
        "Includes calcium, magnesium, and trace elements to provide comprehensive plant nutrition",
    },
    {
      icon: <Coffee className="h-8 w-8 text-[#6abf4b]" />,
      title: "Natural High-Carbon Source",
      description:
        "Carbohydrates and sugars provide fuel for beneficial microbes and fungi",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Nutrient Absorption",
      description:
        "Beneficial microbes and fungi improve nutrient uptake and soil health",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Organic Certification",
      description:
        "Certified by Organic Farmers & Growers (UK2) and Soil Association",
    },
  ];

  const analysisData = {
    "Nitrogen (N)": "6.2",
    "Phosphorus (P2O5)": "2.0",
    "Potassium (K2O)": "4.2",
    "Calcium (CaO)": "0.4",
    "Sulphur (SO3)": "0.5",
    "Magnesium (MgO)": "0.2",
  };

  const pdfLinks = [
    {
      title: "Complete (6-2-4) Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Organic-Umbrella-1606i.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Complete (6-2-4)",
    productDescription:
      "A versatile nutrient blend ideal for boosting growth of green tissue and roots, and enhancing overall plant health. Provides a free-flowing liquid that disperses easily in water with minimal mixing. Commonly used to enhance initial growth of transplants, leafy salad crops, and protected crops. Derived from cane sugar molasses and sustainable plant material, it includes carbohydrates and sugars to fuel beneficial microbes and fungi for better nutrient absorption.",
    keyFeatures: [
      "Versatile 6-2-4 nutrient blend for comprehensive plant nutrition",
      "Ideal for boosting green tissue and root growth",
      "Free-flowing liquid that disperses easily in water",
      "Derived from sustainable cane sugar molasses and plant material",
      "Includes carbohydrates and sugars for microbial activity",
      "Complete mineral package with calcium, magnesium, and trace elements",
      "Certified organic by Soil Association and Organic Farmers & Growers",
    ],
    targetCrops: [
      {
        name: "Transplants",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced initial growth",
          "Strong root establishment",
          "Reduced transplant shock",
          "Improved survival rates",
        ],
      },
      {
        name: "Leafy Salads",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        benefits: [
          "Vigorous leaf development",
          "Enhanced green coloration",
          "Improved nutritional content",
          "Better marketability",
        ],
      },
      {
        name: "Protected Crops",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Accelerated growth rates",
          "Enhanced productivity",
          "Better environmental adaptation",
          "Improved crop uniformity",
        ],
      },
      {
        name: "Fruiting & Flowering Plants",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Strong vegetative growth",
          "Enhanced flowering",
          "Improved fruit development",
          "Better overall plant health",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Sustainable Plant Material",
        description:
          "Derived from cane sugar molasses and sustainable sources for environmental responsibility",
        icon: <Recycle className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Microbial Fuel Source",
        description:
          "Carbohydrates and sugars provide natural high-carbon fuel for beneficial soil microbes",
        icon: <Microscope className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Complete Mineral Package",
        description:
          "Balanced nutrients including calcium, magnesium, and trace elements for comprehensive nutrition",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Enhanced Absorption",
        description:
          "Beneficial microbes and fungi improve nutrient uptake and soil biological activity",
        icon: <TrendingUp className="h-6 w-6 text-[#6abf4b]" />,
      },
    ],
  };

  return (
    <div className="min-h-screen mt-10 bg-[#ececec]">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[#6abf4b]/20" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20 text-lg px-4 py-2">
                Versatile 6-2-4 Nutrient Blend from Sustainable Sources
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-black">
                Complete (6-2-4)
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A versatile nutrient blend ideal for boosting growth of green
                tissue and roots, and enhancing overall plant health. Provides a
                free-flowing liquid that disperses easily in water with minimal
                mixing. Commonly used to enhance initial growth of transplants,
                leafy salad crops, and protected crops.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from cane sugar molasses and sustainable plant material,
                it includes carbohydrates and sugars to fuel beneficial microbes
                and fungi for better nutrient absorption. Certified organic and
                environmentally responsible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-complete624")
                  }
                >
                  Application Guidelines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg cursor-pointer px-8 py-4 border-[#6abf4b] text-[#6abf4b] hover:bg-[#6abf4b]/10"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-complete624")
                  }
                >
                  View Technical Resources
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full max-w-lg mx-auto group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#6abf4b]/20 bg-white p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-[#6abf4b]/30">
                <div className="relative aspect-square w-full">
                  <ImageWithFallback
                    src="/assets/product images/Organic/Complete 6-2-4.jpg"
                    alt="Complete 6-2-4 - Versatile Plant Nutrition"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Decorative border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[#6abf4b]/20" />

                {/* Corner accents */}
                <div className="absolute -left-0.5 -top-0.5 h-6 w-0.5 bg-[#6abf4b] transition-all duration-300 group-hover:h-8" />
                <div className="absolute -left-0.5 -top-0.5 h-0.5 w-6 bg-[#6abf4b] transition-all duration-300 group-hover:w-8" />
                <div className="absolute -right-0.5 -bottom-0.5 h-6 w-0.5 bg-[#6abf4b] transition-all duration-300 group-hover:h-8" />
                <div className="absolute -right-0.5 -bottom-0.5 h-0.5 w-6 bg-[#6abf4b] transition-all duration-300 group-hover:w-8" />
              </div>

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#6abf4b] shadow-md"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Sustainable Nutrition
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      {/* <ProductShowcase {...showcaseData} /> */}

      {/* Key Benefits Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Complete (6-6-4) is the versatile choice for
              sustainable plant nutrition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mb-4">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Analysis Pie Chart */}
      <AnalysisPieChart
        analysis={analysisData}
        title="Complete (6-2-4) Nutrient Analysis"
      />

      {/* Sustainable Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Sustainable Plant Nutrition
            </h2>
            <p className="text-xl text-gray-600">
              Derived from cane sugar molasses and sustainable plant sources
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Recycle className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Sustainable Formulation
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        6.2% Nitrogen (N)
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Essential for vigorous green tissue development and
                        overall plant growth
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        2.0% Phosphorus (P2O5)
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Critical for root development, flowering, and energy
                        transfer processes
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        4.2% Potassium (K2O)
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Essential for plant health, disease resistance, and
                        quality improvement
                      </p>
                    </div>

                    <div className="bg-[#6abf4b]/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Complete Mineral Package
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Includes calcium (0.4%), magnesium (0.2%), sulphur
                        (0.5%), and trace elements for comprehensive plant
                        nutrition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <motion.div
              className="relative w-full max-w-lg mx-auto group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#6abf4b]/20 bg-white p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-[#6abf4b]/30">
                <div className="relative aspect-square w-full">
                  <ImageWithFallback
                    src="/assets/product images/Organic/Complete 6-2-4.jpg"
                    alt="Sustainable Plant Nutrition"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Decorative border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[#6abf4b]/20" />

                {/* Corner accents */}
                <div className="absolute -left-0.5 -top-0.5 h-6 w-0.5 bg-[#6abf4b] transition-all duration-300 group-hover:h-8" />
                <div className="absolute -left-0.5 -top-0.5 h-0.5 w-6 bg-[#6abf4b] transition-all duration-300 group-hover:w-8" />
                <div className="absolute -right-0.5 -bottom-0.5 h-6 w-0.5 bg-[#6abf4b] transition-all duration-300 group-hover:h-8" />
                <div className="absolute -right-0.5 -bottom-0.5 h-0.5 w-6 bg-[#6abf4b] transition-all duration-300 group-hover:w-8" />
              </div>

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#6abf4b] shadow-md"
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Organic Certified
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Application Method Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div
          id="application-guidelines-complete624"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Methods</h2>
            <p className="text-xl text-gray-600">
              Versatile application for foliar spray and fertigation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold text-[#6abf4b]">
                    Foliar Application
                  </h3>
                </div>
                <p className="text-[#6abf4b] mb-6">
                  Apply as a foliar spray for direct nutrient uptake through the
                  leaves. The free-flowing liquid disperses easily in water with
                  minimal mixing required.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Quick nutrient uptake
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Easy mixing and application
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Immediate plant response
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold text-[#6abf4b]">
                    Fertigation
                  </h3>
                </div>
                <p className="text-[#6abf4b] mb-6">
                  Apply through fertigation systems for root zone nutrition and
                  microbial enhancement. Carbohydrates and sugars fuel
                  beneficial soil microbes and fungi.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Enhanced soil biology
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Improved nutrient absorption
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Root zone development
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Coffee className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Microbial Enhancement
                    </h3>
                    <p className="text-[#6abf4b]">
                      The carbohydrates and sugars from cane sugar molasses
                      provide a natural high-carbon source of fuel for
                      beneficial microbes and fungi, enhancing nutrient
                      absorption and improving soil biological activity for
                      better plant health.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Pack Sizes Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Sustainable nutrient solution for all growing systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Sizes
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      20L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for smaller operations and diverse crop
                      applications
                    </p>
                  </div>
                  <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale growing operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-complete624"
        productName="Complete (6-2-4)"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-[#6abf4b] to-[#5aa338] text-white"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6" />
                  <div className="max-w-80">
                    <p>
                      Ilex EnviroSciences Ltd <br /> 13a Brindely Close, Holly
                      Lane Industrial Estate, Atherstone, Warwickshire Market
                      Rasen CV9 2QZ, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <p>+44 1827722911</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <p>sales@ilexenvirosciences.com</p>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6" />
                  <p>Monday–Friday: 09:00–17:00</p>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Product Enquiry</CardTitle>
                <CardDescription className="text-white/80">
                  Contact us for more information about Complete (6-2-4)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  />
                  <Textarea
                    name="message"
                    placeholder="Comment or Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-[#6abf4b] hover:bg-gray-100"
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
