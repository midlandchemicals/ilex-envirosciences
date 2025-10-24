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
import { Separator } from "./ui/separator";
import { ProductShowcase } from "./ProductShowcase";
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
  Factory,
  GraduationCap,
  Star,
  Crown,
  Cherry,
  Gem,
  Trophy,
  Flame,
} from "lucide-react";
import Form from "./Form";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function KMaxPage({ onSubmit }: ContactFormProps) {
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
      icon: <Crown className="h-8 w-8 text-[#6abf4b]" />,
      title: "Highest Analysis Organically Sourced Potassium",
      description:
        "Offers the highest analysis of organically sourced potassium in liquid form (8.2% K₂O)",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Safe & Effective Plant Protein Source",
      description:
        "Derived from plant protein sources for safe and effective organic fertilization",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Easy-to-Use Liquid Formulation",
      description:
        "Formulated as an easy-to-use liquid for convenient application",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Balanced Nutrient Combination",
      description:
        "Contains balanced nutrients to encourage strong and healthy growth in fruiting and flowering plants",
    },
    {
      icon: <Cherry className="h-8 w-8 text-[#6abf4b]" />,
      title: "Stimulates Reproductive Growth",
      description:
        "Particularly important for stimulating reproductive growth and promoting fruit development",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Fully Approved for Organic Systems",
      description:
        "Certified by the Soil Association for use in organic cropping systems in the UK",
    },
  ];

  const analysisData = {
    "Nitrogen (N)": "3.8",
    "Phosphorus (P₂O₅)": "1.6",
    "Potassium (K₂O)": "8.2",
    "Sodium (Na₂O)": "0.3",
    "Calcium (CaO)": "0.3",
    "Sulphur (SO₃)": "1.2",
    "Magnesium (MgO)": "0.1",
  };

  const pdfLinks = [
    {
      title: "K-Max (3-1-8) Leaflet",
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
    productName: "K-Max (3-1-8)",
    productDescription:
      "Offers the highest analysis of organically sourced potassium in liquid form. Improves crop potential in both protected and outdoor crops by supplying key nutrients at crucial stages of growth. Particularly important for stimulating reproductive growth and promoting fruit development. Derived from plant protein sources, it is a safe and effective fertilizer for organic cropping systems.",
    keyFeatures: [
      "Highest analysis of organically sourced potassium (8.2% K₂O)",
      "Derived from plant protein sources for organic systems",
      "Particularly effective for stimulating reproductive growth",
      "Promotes exceptional fruit development",
      "Safe and effective liquid formulation",
      "Supplies key nutrients at crucial growth stages",
      "Certified by Soil Association for organic cropping systems",
    ],
    targetCrops: [
      {
        name: "Protected Crops",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced reproductive growth",
          "Improved fruit development",
          "Optimal nutrient timing",
          "Increased yield potential",
        ],
      },
      {
        name: "Outdoor Crops",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Superior fruit quality",
          "Enhanced crop potential",
          "Optimal potassium nutrition",
          "Improved marketability",
        ],
      },
      {
        name: "Fruiting Plants",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Stimulated reproductive growth",
          "Enhanced fruit development",
          "Improved fruit size and quality",
          "Extended fruiting period",
        ],
      },
      {
        name: "Flowering Plants",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced flowering performance",
          "Improved bloom quality",
          "Better color development",
          "Extended flowering season",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Plant Protein Source",
        description:
          "Derived from plant protein sources providing safe and effective organic nutrition",
        icon: <Leaf className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Highest Potassium Analysis",
        description:
          "8.2% K₂O - the highest analysis of organically sourced potassium in liquid form",
        icon: <Crown className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Reproductive Growth Stimulation",
        description:
          "Particularly important for stimulating reproductive growth and promoting fruit development",
        icon: <Cherry className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Organic Certification",
        description:
          "Fully approved and certified for use in organic cropping systems by the Soil Association",
        icon: <Award className="h-6 w-6 text-[#6abf4b]" />,
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
                Highest Analysis Organically Sourced Potassium in Liquid Form
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-black">
                K-Max (3-1-8)
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Offers the highest analysis of organically sourced potassium in
                liquid form. Improves crop potential in both protected and
                outdoor crops by supplying key nutrients at crucial stages of
                growth. Particularly important for stimulating reproductive
                growth and promoting fruit development.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from plant protein sources, it is a safe and effective
                fertilizer for organic cropping systems. Fully approved and
                certified for use in organic cropping systems in the UK by the
                Soil Association.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-kmaxpage")
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
                    smoothScrollToSection("technical-resources-kmaxpage")
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
                    src="/assets/product images/Organic/K-Max.jpg"
                    alt="K-Max - Maximum Potassium for Fruit Development"
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
                Organic Potassium Specialist
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
              Discover why K-Max (3-1-8) delivers the highest potassium
              nutrition for organic systems
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
        title="K-Max (3-1-8) Maximum Potassium Analysis"
      />

      {/* Maximum Potassium Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Maximum Potassium Technology
            </h2>
            <p className="text-xl text-gray-600">
              Highest analysis organically sourced potassium for exceptional
              fruit development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Gem className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Maximum Potassium Analysis
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        8.2% Potassium (K₂O)
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Highest analysis of organically sourced potassium in
                        liquid form
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        3.8% Nitrogen (N)
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Balanced nitrogen from plant protein sources for healthy
                        growth
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        1.6% Phosphorus (P₂O₅)
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Essential phosphorus for energy transfer and
                        reproductive development
                      </p>
                    </div>

                    <div className="bg-[#6abf4b]/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Plant Protein Source
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Derived from plant protein sources with complete trace
                        elements including sulphur (1.2%), calcium (0.3%), and
                        magnesium (0.1%) for comprehensive nutrition.
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
                    src="/assets/product images/Organic/K-Max.jpg"
                    alt="Maximum Fruit Development"
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
                Highest Organic Potassium
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Application Benefits Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div id="application-guidelines-kmaxpage" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Benefits</h2>
            <p className="text-xl text-gray-600">
              Optimal nutrition for both protected and outdoor crop systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold text-[#000000]">
                    Foliar Application
                  </h3>
                </div>
                <p className="text-[#000000] mb-6">
                  Apply as a foliar spray for direct nutrient uptake. The liquid
                  formulation ensures rapid absorption and immediate
                  availability of nutrients during crucial growth stages.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Rapid nutrient uptake
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Easy liquid application
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Immediate nutrient availability
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold text-[#000000]">
                    Fertigation
                  </h3>
                </div>
                <p className="text-[#000000] mb-6">
                  Apply through fertigation systems for root zone nutrition.
                  Particularly effective for supplying key nutrients at crucial
                  stages of growth in both protected and outdoor crops.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">Root zone nutrition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Optimal timing delivery
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Enhanced crop potential
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
                  <Cherry className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#000000]">
                      Reproductive Growth & Fruit Development
                    </h3>
                    <p className="text-[#000000]">
                      K-Max is particularly important for stimulating
                      reproductive growth and promoting fruit development. The
                      highest analysis of organically sourced potassium provides
                      optimal nutrition at crucial stages of growth, improving
                      crop potential in both protected and outdoor crop systems
                      while maintaining full organic certification compliance.
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
              Maximum potassium nutrition for organic cropping systems
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
                      Perfect for specialised organic fruit and reproductive
                      growth programs
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
                      Cost-effective solution for large-scale organic production
                      systems
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
        id="technical-resources-kmaxpage"
        productName="K-Max (3-1-8)"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        id="contact-us"
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
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ilex+EnviroSciences+Ltd+13a+Brindley+Close+Holly+Lane+Industrial+Estate+Atherstone+Warwickshire+CV9+2QZ+United+Kingdom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200 transition-colors cursor-pointer underline decoration-1 underline-offset-2"
                    >
                      <p>
                        Ilex EnviroSciences Ltd <br /> 13a Brindley Close, Holly
                        Lane Industrial Estate, Atherstone, Warwickshire CV9
                        2QZ, United Kingdom
                      </p>
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+441827722911"
                  className="flex items-center gap-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <Phone className="h-6 w-6" />
                  <p>+44 1827 722911</p>
                </a>

                <a
                  href="mailto:ilexsales@ilex-envirosciences.com?subject=Ilex%20Website%20Enquiry"
                  className="flex items-center gap-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <Mail className="h-6 w-6" />
                  <p>ilexsales@ilex-envirosciences.com</p>
                </a>

                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6" />
                  <p>Monday–Friday: 09:00–17:00</p>
                </div>
              </div>
            </div>

            <Form></Form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
