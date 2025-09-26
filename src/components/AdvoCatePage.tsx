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
import { ImageWithFallback } from "./figma/ImageWithFallback";
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
  BarChart3,
  Sprout,
  Shield,
  Heart,
  Layers,
  Timer,
  Sparkles,
  Wheat,
  Flower,
  Activity,
  Apple,
  ShoppingCart,
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function AdvoCatePage({ onSubmit }: ContactFormProps) {
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
      icon: <Activity className="h-8 w-8 text-cyan-600" />,
      title: "Exceptional Calcium Mobility",
      description:
        "Advanced complexing technology ensures optimal calcium movement within the crop",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Corrects Physiological Disorders",
      description:
        "Effectively addresses calcium-related disorders in vegetables and fruits",
    },
    {
      icon: <Package className="h-8 w-8 text-purple-600" />,
      title: "Increases Storage Quality",
      description:
        "Enhanced storage characteristics and shelf life in vegetables",
    },
    {
      icon: <Sprout className="h-8 w-8 text-orange-600" />,
      title: "Promotes Root Development",
      description:
        "Timed applications at key growth stages enhance root system development",
    },
    {
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      title: "Unique Generation Formulation",
      description:
        "Calcium complexed with natural sugars, amino acids, and seaweed",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Complete Micronutrient Package",
      description:
        "Includes zinc, iron, molybdenum, and boron with 7.5% bio-active agents",
    },
  ];

  const cropApplications = [
    {
      crop: "Potatoes",
      rate: "1.0-2.0 l/ha",
      timing: "Start of tuber bulking & during tuber bulking",
      notes: "Critical for tuber development and quality",
      color: "bg-amber-100 text-amber-800",
      icon: <Apple className="h-5 w-5 text-amber-600" />,
    },
    {
      crop: "Root Crops",
      rate: "1.0-2.0 l/ha",
      timing: "From 4-6 true leaves, repeat at 14-21 day intervals",
      notes: "Enhanced root development and quality",
      color: "bg-orange-100 text-orange-800",
      icon: <Sprout className="h-5 w-5 text-orange-600" />,
    },
    {
      crop: "Lettuce & Leafy Salads",
      rate: "1.0-2.0 l/ha",
      timing: "From 10-14 days post planting, repeat at 10-14 day intervals",
      notes: "Improved leaf quality and storage",
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-green-600" />,
    },
    {
      crop: "Brassicas",
      rate: "1.0-2.0 l/ha",
      timing: "From 3-4 true leaves, repeat at 10-14 day intervals",
      notes: "Enhanced head development and quality",
      color: "bg-emerald-100 text-emerald-800",
      icon: <Flower className="h-5 w-5 text-emerald-600" />,
    },
    {
      crop: "Alliums",
      rate: "1.0-2.0 l/ha",
      timing: "From 3-4 true leaves, repeat at 14-21 day intervals",
      notes: "Improved bulb development and storage",
      color: "bg-purple-100 text-purple-800",
      icon: <Target className="h-5 w-5 text-purple-600" />,
    },
  ];

  const analysisData = {
    "Nitrogen (Nitrate N)": "3.6",
    "Calcium (as CaO)": "9.0",
    "Zinc (Zn)": "1.5",
    "Iron (Fe)": "0.18",
    "Molybdenum (Mo)": "0.10",
    "Boron (B)": "0.02",
    "Bio-active Agents": "7.5",
  };

  const pdfLinks = [
    {
      title: "AdvoCate Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Advocate-1606-ii.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "AdvoCate",
    productDescription:
      "A unique generation formulation of calcium, complexed with natural sugars, amino acids, and seaweed, providing exceptional calcium mobility within the crop. Recommended for correcting physiological disorders and increasing storage qualities in a wide variety of vegetables. The advanced complexing technology ensures optimal calcium uptake and translocation throughout the plant.",
    keyFeatures: [
      "9% calcium (as CaO) with exceptional mobility",
      "Complexed with natural sugars, amino acids & seaweed",
      "3.6% nitrate nitrogen for enhanced uptake",
      "Complete micronutrient package (Zn, Fe, Mo, B)",
      "7.5% bio-active agents for enhanced effectiveness",
      "Corrects physiological disorders effectively",
    ],
    targetCrops: [
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tuber development",
          "Improved skin quality",
          "Better storage characteristics",
          "Reduced physiological disorders",
        ],
      },
      {
        name: "Root Vegetables",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Strong root development",
          "Enhanced skin quality",
          "Improved storage life",
          "Better market presentation",
        ],
      },
      {
        name: "Leafy Salads",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf quality",
          "Improved storage qualities",
          "Better nutritional content",
          "Reduced tip burn",
        ],
      },
      {
        name: "Brassicas",
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        benefits: [
          "Improved head development",
          "Enhanced storage quality",
          "Better disease resistance",
          "Reduced calcium disorders",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Calcium Complexing Technology",
        description:
          "Advanced formulation with natural sugars, amino acids and seaweed for exceptional mobility",
        icon: <Activity className="h-6 w-6 text-cyan-600" />,
      },
      {
        title: "Physiological Disorder Prevention",
        description:
          "Targeted calcium delivery prevents and corrects calcium-related crop disorders",
        icon: <Shield className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Bio-Active Enhancement",
        description:
          "7.5% bio-active agents improve nutrient uptake and plant metabolism",
        icon: <Beaker className="h-6 w-6 text-purple-600" />,
      },
      {
        title: "Storage Quality Enhancement",
        description:
          "Improved calcium status enhances storage life and post-harvest quality",
        icon: <Package className="h-6 w-6 text-orange-600" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200 text-lg px-4 py-2">
                Advanced Calcium Complex with Natural Bio-Active Agents
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                AdvoCate
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A unique generation formulation of calcium, complexed with
                natural sugars, amino acids, and seaweed, providing exceptional
                calcium mobility within the crop. Recommended for correcting
                physiological disorders and increasing storage qualities in a
                wide variety of vegetables.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The advanced complexing technology ensures optimal calcium
                uptake and translocation throughout the plant, making it highly
                effective for preventing and correcting calcium-related
                disorders while enhancing overall crop quality and storage
                characteristics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-maniphos")
                  }
                >
                  Application Guidelines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg cursor-pointer px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-maniphos")
                  }
                >
                  View Technical Resources
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
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                  alt="AdvoCate Product - Premium Vegetables"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl opacity-20" />
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
              Discover why AdvoCate delivers exceptional calcium nutrition for
              vegetables
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
        title="AdvoCate Advanced Formulation Analysis"
      />

      {/* Calcium Technology Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-cyan-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Advanced Calcium Complexing Technology
            </h2>
            <p className="text-xl text-gray-600">
              Unique formulation with natural bio-active agents for exceptional
              calcium mobility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Activity className="h-8 w-8 text-cyan-600" />
                    <h3 className="text-2xl font-semibold">
                      Unique Generation Formulation
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-cyan-800 mb-2">
                        9% Calcium (as CaO)
                      </h4>
                      <p className="text-cyan-700 text-sm">
                        High concentration calcium complexed for exceptional
                        plant mobility
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        7.5% Bio-Active Agents
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Natural sugars, amino acids & seaweed for enhanced
                        uptake
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Beaker className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Complete Micronutrient Package
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Includes zinc (1.5%), iron (0.18%), molybdenum
                          (0.10%), and boron (0.02%) for comprehensive plant
                          nutrition.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-cyan-800 mb-2">
                        Advanced Complexing
                      </h4>
                      <p className="text-cyan-700 text-sm">
                        Natural complexing agents ensure exceptional calcium
                        mobility within the crop for optimal physiological
                        function and disorder prevention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=400&fit=crop"
                alt="Premium Vegetable Production"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div id="application-guidelines-advocate" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Crop-specific rates and timings for optimal calcium nutrition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <Badge className={`${crop.color} text-lg px-3 py-1 mb-2`}>
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{crop.timing}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-sm text-green-700">{crop.notes}</p>
                      </div>
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
            <Card className="bg-cyan-50 border border-cyan-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-cyan-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-cyan-800">
                      Application Method
                    </h3>
                    <p className="text-cyan-700 mb-4">
                      Best applied as a foliar spray at water rates of 200-600
                      l/ha depending on the crop type and stage of growth.
                      Propagated plants benefit from application via irrigation
                      techniques at a rate of 4-6 ml per litre of water, ideally
                      just prior to planting out.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      Key Growth Stages
                    </h3>
                    <p className="text-blue-700">
                      Timed applications at key growth stages will promote root
                      development and ensure optimal calcium status throughout
                      the crop development cycle, preventing physiological
                      disorders and enhancing storage quality.
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Professional calcium nutrition for vegetable production
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-cyan-600" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Sizes
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      2 × 10L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for specialized vegetable nutrition programs
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale vegetable
                      production
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
        id="technical-resources-advocate"
        productName="AdvoCate"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
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
                  <div>
                    <p>Ilex EnviroSciences Ltd</p>
                    <p>Willingham Hall, Willingham Road</p>
                    <p>Market Rasen LN8 3RH</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <p>+44 (0) 1673 885175</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <p>office@ilex-envirosciences.com</p>
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
                  Contact us for more information about AdvoCate
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
                    className="w-full bg-white text-cyan-600 hover:bg-gray-100"
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
