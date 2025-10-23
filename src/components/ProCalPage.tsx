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
  Sun,
  Shield,
  Sparkles,
  TrendingUp,
  Heart,
  Award,
  Sprout,
  Activity,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function ProCalPage({ onSubmit }: ContactFormProps) {
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
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Nutrient Delivery System",
      description:
        "Maximises calcium uptake through advanced formulation technology",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Promotes Root Growth & Plant Health",
      description:
        "Strong root system development leading to healthier crops throughout growth cycle",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improves Appearance & Marketability",
      description:
        "Enhanced color, appearance and overall crop quality for better market value",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Increases Storage Quality",
      description:
        "Better storage characteristics extending shelf life and reducing post-harvest losses",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Easy to Use Liquid",
      description:
        "Good tank mix compatibility with convenient liquid formulation",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Advanced Formulation",
      description:
        "Stabilised nitrogen with plant-available calcium and essential micronutrients",
    },
  ];

  const crops = [
    {
      name: "Brassicas",
      rate: "5.0-10.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 14-21 day intervals up to harvest",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
    {
      name: "Carrots",
      rate: "5.0-10.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 14-21 day intervals up to strawing",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
    {
      name: "Alliums",
      rate: "5.0-8.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
    {
      name: "Lettuce / Leafy Salads",
      rate: "3.0-6.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 10-14 day intervals up to harvest",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
    {
      name: "Potatoes",
      rate: "5.0 l/ha",
      timing:
        "Apply from start of tuber bulking. Repeat @ 5.0 l/ha during tuber bulking",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
    {
      name: "Cereals",
      rate: "5.0-10.0 l/ha",
      timing:
        "Apply at growth Stages (Zadoks) 23-30, 39-45 and 50-59. For milling wheat: additional 30-50 l/ha at GS 69-75",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
    {
      name: "Oilseed Rape",
      rate: "5.0-10.0 l/ha",
      timing: "Apply at or just prior to rapid growth",
      color: "bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20",
    },
  ];

  const analysisData = {
    "Nitrogen (Stabilised)": "12",
    "Calcium (Plant-Available)": "8",
    "Essential Micronutrients": "2",
  };

  const pdfLinks = [
    {
      title: "Pro-Cal™ Leaflet",
      description: "Complete product information and technical specifications",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Pro-Cal-Veg-1606-i.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Pro-Cal™",
    productDescription:
      "Pro-Cal™ is a new form of foliar nutrient combining stabilised nitrogen with plant-available calcium, together with essential micronutrients. Pro-Cal™ can be used to benefit a wide range of horticultural and vegetable crops. Timed applications at important growth stages will promote an initial strong root system before helping maintain the healthy development of the crop through to harvest.",
    keyFeatures: [
      "Advanced stabilised nitrogen formulation",
      "Plant-available calcium for enhanced uptake",
      "Essential micronutrients for complete nutrition",
      "Promotes strong root system development",
      "Improves crop appearance and marketability",
      "Enhanced storage quality characteristics",
    ],
    targetCrops: [
      {
        name: "Brassicas",
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced root development",
          "Improved color and appearance",
          "Better storage quality",
          "Increased marketability",
        ],
      },
      {
        name: "Root Vegetables",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Strong taproot development",
          "Enhanced skin quality",
          "Better storage characteristics",
          "Improved market presentation",
        ],
      },
      {
        name: "Leafy Salads",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf quality",
          "Improved color retention",
          "Better nutritional content",
          "Extended shelf life",
        ],
      },
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root systems",
          "Enhanced grain development",
          "Improved protein content",
          "Better lodging resistance",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Stabilised Nitrogen",
        description:
          "Advanced nitrogen formulation provides sustained nutrient release for optimal plant uptake",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Plant-Available Calcium",
        description:
          "Highly bioavailable calcium form for enhanced cell wall strength and fruit quality",
        icon: <Target className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Essential Micronutrients",
        description:
          "Complete micronutrient package supports enzyme functions and plant metabolism",
        icon: <Beaker className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Root Development",
        description:
          "Promotes strong root system establishment for improved nutrient and water uptake",
        icon: <Sprout className="h-6 w-6 text-[#6abf4b]" />,
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
                Advanced Foliar Nutrition with Stabilised Nitrogen & Calcium
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Pro-
                <span className="text-[#ffbd59]">Ca</span>
                l™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Pro-Cal™ is a new form of foliar nutrient combining stabilised
                nitrogen with plant-available calcium, together with essential
                micronutrients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Pro-Cal™ can be used to benefit a wide range of horticultural
                and vegetable crops. Timed applications at important growth
                stages will promote an initial strong root system before helping
                maintain the healthy development of the crop through to harvest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-white text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-procal")
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
                    smoothScrollToSection("technical-resources-procal")
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
                    src="/assets/product images/Calcium Supplements/ProCal.jpg"
                    alt="Pro-Cal Product - Healthy Vegetables"
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
                Calcium Specialist
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
              Discover why Pro-Cal™ is the optimal choice for horticultural and
              vegetable crop nutrition
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
        title="Pro-Cal™ Advanced Formulation Analysis"
      />

      {/* Technical Analysis Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Advanced Formulation Technology
            </h2>
            <p className="text-xl text-gray-600">
              Stabilised nitrogen with plant-available calcium and essential
              micronutrients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FlaskConical className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Advanced Formulation
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-white/70 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Stabilised Nitrogen
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Enhanced Uptake
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white/70 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Plant-Available Calcium
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Optimised Form
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-white/70 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Essential Micronutrients
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Complete Package
                      </Badge>
                    </div>

                    <div className="bg-white/70 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Crop Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                          <span className="text-sm text-gray-700">
                            Strong root system development
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                          <span className="text-sm text-gray-700">
                            Enhanced crop appearance & color
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                          <span className="text-sm text-gray-700">
                            Improved storage quality
                          </span>
                        </div>
                      </div>
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
                    src="/assets/product images/Calcium Supplements/ProCal.jpg"
                    alt="Horticultural Science"
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
                Advanced Formulation
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
                      20L
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
        <div id="application-guidelines-procal" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Tailored application guidelines for horticultural and vegetable
              crops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <Badge className="text-sm bg-[#6abf4b] ">
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
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
                      Pro-Cal is best applied as a foliar spray at water rates
                      of between 200-600 l/ha depending on the crop type, stage
                      of growth and amount of leaf area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sun className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Important Safety Note
                    </h3>
                    <p className="text-gray-700">
                      To avoid possible scorch do not apply in strong sunlight.
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
        id="technical-resources-procal"
        productName="Pro-Cal™"
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
                      Ilex EnviroSciences Ltd <br /> 13a brindley Close, Holly
                      Lane Industrial Estate, Atherstone, Warwickshire
                       CV9 2QZ, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <p>+44 1827722911</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <p>sales@ilex-envirosciences.com</p>
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
                  Contact us for more information about Pro-Cal™
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
