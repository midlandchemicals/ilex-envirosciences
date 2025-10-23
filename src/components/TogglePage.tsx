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
  Waves,
  Sun,
  TreePine,
  Apple,
  Wheat,
  Flower2,
  Tractor,
  BarChart3,
  RefreshCw,
  Gauge,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function TogglePage({ onSubmit }: ContactFormProps) {
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
      icon: <Sprout className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhances Root Growth & Early Development",
      description:
        "Promotes strong root system establishment and accelerated early plant development",
    },
    {
      icon: <Sun className="h-8 w-8 text-[#6abf4b]" />,
      title: "Increases Photosynthesis & Nutrient Usage",
      description:
        "Optimizes photosynthetic efficiency and enhances nutrient uptake and utilization",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Promotes Overall Plant Health",
      description:
        "Comprehensive plant health enhancement through natural biostimulation",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Maximises Environmental Stress Resistance",
      description:
        "Natural defense mechanisms against drought, waterlogging, and environmental stresses",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improves Quality & Yield",
      description:
        "Enhanced crop quality characteristics and increased yield potential",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Highest Quality Standards",
      description:
        "Premium product quality and consistency from North Atlantic Ascophyllum nodosum",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-[#6abf4b]" />,
      title: "Excellent Curative Properties",
      description:
        "Outstanding recovery from injury or stressful conditions like drought or waterlogging",
    },
    {
      icon: <Gauge className="h-8 w-8 text-[#6abf4b]" />,
      title: "Preventative Treatment",
      description:
        "Routine use maintains superior crop health and alleviates physiological stress",
    },
  ];

  const cropApplications = [
    {
      crop: "Cereals - Tillering",
      rate: "1.5-3.0 l/ha",
      timing:
        "Apply during early tillering stage for enhanced root development and establishment",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <Wheat className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Cereals - Stem Elongation",
      rate: "1.5-3.0 l/ha",
      timing:
        "Apply during stem elongation to support rapid growth and stress tolerance",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <TrendingUp className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Cereals - Flag Leaf",
      rate: "1.5-3.0 l/ha",
      timing:
        "Apply at flag leaf stage to optimize grain development and quality",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <Leaf className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Oilseed Rape - 3 Weeks Post Emergence",
      rate: "1.5-3.0 l/ha",
      timing: "Apply 3 weeks after emergence for strong establishment",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Oilseed Rape - Stem Extension",
      rate: "1.5-3.0 l/ha",
      timing: "Apply during stem extension to support rapid growth phase",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <Activity className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Oilseed Rape - Pod Set",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at pod set stage for enhanced yield and oil quality",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <Target className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Peas & Beans",
      rate: "2.0-4.0 l/ha",
      timing:
        "Apply at 2-3 weeks post emergence. Repeat at 14-21 day intervals",
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
      icon: <Apple className="h-5 w-5 text-[#6abf4b]" />,
    },
  ];

  const analysisData = {
    "Organic Matter": "High",
    "Bioactive Compounds": "Balanced",
    "Stress Resistance": "Enhanced",
  };

  const pdfLinks = [
    {
      title: "Toggle Plus Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Toggle%C2%AE-2001-ii.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Toggle",
    productDescription:
      "A super-value concentrated liquid biostimulant specifically developed for broadfield crops. Enhances root growth, early plant development, photosynthesis, and nutrient usage to promote overall plant health. Maximizes natural plant resistance to environmental stresses to improve quality and yield. Should be used routinely as a preventative treatment to maintain superior crop health and alleviate symptoms of physiological and nutritional stress, with excellent curative properties for recovery from injury or stressful conditions like drought or waterlogging.",
    keyFeatures: [
      "Super-value concentrated liquid biostimulant for broadfield crops",
      "Enhances root growth and early plant development",
      "Increases photosynthesis and nutrient usage efficiency",
      "Maximizes natural plant resistance to environmental stress",
      "Excellent curative properties for stress recovery",
      "Routine preventative treatment for superior crop health",
      "Contains naturally balanced compounds from North Atlantic seaweed",
    ],
    targetCrops: [
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tillering and establishment",
          "Improved grain development",
          "Better stress tolerance",
          "Increased yield potential",
        ],
      },
      {
        name: "Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Strong early establishment",
          "Enhanced pod development",
          "Improved oil quality",
          "Better winter hardiness",
        ],
      },
      {
        name: "Peas & Beans",
        image:
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced nodulation",
          "Improved nitrogen fixation",
          "Better pod fill",
          "Increased protein content",
        ],
      },
      {
        name: "Broadfield Crops",
        image:
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
        benefits: [
          "Cost-effective treatment",
          "Broad spectrum application",
          "Enhanced stress resilience",
          "Improved crop uniformity",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Broadfield Crop Specialist",
        description:
          "Specifically formulated for large-scale arable crop production with cost-effective application rates",
        icon: <Tractor className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Preventative Treatment",
        description:
          "Routine application maintains superior crop health and prevents physiological stress",
        icon: <Shield className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Curative Properties",
        description:
          "Excellent recovery properties for crops stressed by drought, waterlogging, or injury",
        icon: <RefreshCw className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "North Atlantic Seaweed",
        description:
          "Contains naturally balanced nutrients and bioactive compounds from Ascophyllum nodosum",
        icon: <Waves className="h-6 w-6 text-[#6abf4b]" />,
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
                Super-Value Concentrated Biostimulant for Broadfield Crops
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.2] mb-6 bg-gradient-to-r  bg-clip-text text-black">
                Toggle
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A super-value concentrated liquid biostimulant specifically
                developed for broadfield crops. Enhances root growth, early
                plant development, photosynthesis, and nutrient usage to promote
                overall plant health. Maximizes natural plant resistance to
                environmental stresses to improve quality and yield.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Should be used routinely as a preventative treatment to maintain
                superior crop health and alleviate symptoms of physiological and
                nutritional stress, with excellent curative properties for
                recovery from injury or stressful conditions like drought or
                waterlogging.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-togglepage")
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
                    smoothScrollToSection("technical-resources-togglepage")
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
                    src="/assets/product images/Biostimulants/Toggle_tub.png"
                    alt="Toggle - Broadfield Crop Biostimulant"
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
                Broadfield Specialist
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
              Discover why Toggle is the super-value choice for broadfield crop
              biostimulation
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
        title="Toggle Biostimulant Composition"
      />

      {/* Broadfield Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Broadfield Crop Specialist
            </h2>
            <p className="text-xl text-gray-600">
              Super-value biostimulant specifically developed for large-scale
              arable production
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Tractor className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Broadfield Excellence
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Cost-Effective Application
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Super-value formulation designed for large-scale
                        broadfield crop production
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Easy-to-Use Liquid
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Free from solids with pH suited to efficient uptake and
                        maximum tank-mix compatibility
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Preventative & Curative
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Routine preventative treatment with excellent curative
                        properties for stress recovery
                      </p>
                    </div>

                    <div className="bg-[#6abf4b]/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Natural Compounds
                      </h4>
                      <p className="text-[#6abf4b] text-sm">
                        Contains naturally balanced plant nutrients, vitamins,
                        and active compounds derived from North Atlantic
                        Ascophyllum nodosum.
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
                    src="/assets/product images/Biostimulants/Toggle_tub.png"
                    alt="Broadfield Crop Production"
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
                Super-Value Formulation
              </motion.div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Sizes
                  </h3>
                </div>
                <div className="grid  gap-6">
                  <div className="text-center p-6 bg-gradient-to-br bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      2 × 10L
                    </Badge>
                    <p className="text-gray-600">
                      Ideal for targeted applications and smaller operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div
          id="application-guidelines-togglepage"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Stage-specific rates and timings for optimal broadfield crop
              performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cropApplications.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      {crop.icon}
                      <CardTitle className="text-lg">{crop.crop}</CardTitle>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                      <Badge
                        className={`${crop.color} text-lg px-3 py-1 mb-2 hover:bg-[#6abf4b]/20`}
                      >
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-[#6abf4b] mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{crop.timing}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Application Method
                    </h3>
                    <p className="text-gray-700">
                      Recommended for application as a foliar spray at water
                      rates of 100-300 l/ha depending on the crop and growth
                      stage. Formulated as an easy-to-use liquid free from
                      solids and with a pH suited to efficient crop uptake and
                      maximum tank-mix compatibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Preventative & Curative
                    </h3>
                    <p className="text-gray-700">
                      Use routinely as a preventative treatment to maintain
                      superior crop health. Excellent curative properties for
                      recovery from injury or stressful conditions such as
                      drought or waterlogging.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-togglepage"
        productName="Toggle"
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
                  Contact us for more information about Toggle
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
