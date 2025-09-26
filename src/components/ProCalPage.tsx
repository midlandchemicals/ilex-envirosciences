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
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Nutrient Delivery System",
      description:
        "Maximises calcium uptake through advanced formulation technology",
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Promotes Root Growth & Plant Health",
      description:
        "Strong root system development leading to healthier crops throughout growth cycle",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "Improves Appearance & Marketability",
      description:
        "Enhanced color, appearance and overall crop quality for better market value",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Increases Storage Quality",
      description:
        "Better storage characteristics extending shelf life and reducing post-harvest losses",
    },
    {
      icon: <Droplets className="h-8 w-8 text-cyan-600" />,
      title: "Easy to Use Liquid",
      description:
        "Good tank mix compatibility with convenient liquid formulation",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
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
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Carrots",
      rate: "5.0-10.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 14-21 day intervals up to strawing",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Alliums",
      rate: "5.0-8.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Lettuce / Leafy Salads",
      rate: "3.0-6.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 10-14 day intervals up to harvest",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      name: "Potatoes",
      rate: "5.0 l/ha",
      timing:
        "Apply from start of tuber bulking. Repeat @ 5.0 l/ha during tuber bulking",
      color: "bg-amber-100 text-amber-800",
    },
    {
      name: "Cereals",
      rate: "5.0-10.0 l/ha",
      timing:
        "Apply at growth Stages (Zadoks) 23-30, 39-45 and 50-59. For milling wheat: additional 30-50 l/ha at GS 69-75",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "Oilseed Rape",
      rate: "5.0-10.0 l/ha",
      timing: "Apply at or just prior to rapid growth",
      color: "bg-blue-100 text-blue-800",
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
        icon: <Zap className="h-6 w-6 text-blue-600" />,
      },
      {
        title: "Plant-Available Calcium",
        description:
          "Highly bioavailable calcium form for enhanced cell wall strength and fruit quality",
        icon: <Target className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Essential Micronutrients",
        description:
          "Complete micronutrient package supports enzyme functions and plant metabolism",
        icon: <Beaker className="h-6 w-6 text-purple-600" />,
      },
      {
        title: "Root Development",
        description:
          "Promotes strong root system establishment for improved nutrient and water uptake",
        icon: <Sprout className="h-6 w-6 text-orange-600" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-4 py-2">
                Advanced Foliar Nutrition with Stabilised Nitrogen & Calcium
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Pro-Cal™
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
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-procal")
                  }
                >
                  Application Guidlines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg cursor-pointer px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-procal")
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
                  alt="Pro-Cal Product - Healthy Vegetables"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl opacity-20" />
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
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
                    <FlaskConical className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold">
                      Advanced Formulation
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Stabilised Nitrogen
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Enhanced Uptake
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Plant-Available Calcium
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Optimised Form
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Essential Micronutrients
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Complete Package
                      </Badge>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Crop Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">
                            Strong root system development
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">
                            Enhanced crop appearance & color
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
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

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                alt="Horticultural Science"
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
                      <Badge className={crop.color}>{crop.rate}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
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
            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      Application Method
                    </h3>
                    <p className="text-blue-700">
                      Pro-Cal is best applied as a foliar spray at water rates
                      of between 200-600 l/ha depending on the crop type, stage
                      of growth and amount of leaf area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sun className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-amber-800">
                      Important Safety Note
                    </h3>
                    <p className="text-amber-700">
                      To avoid possible scorch do not apply in strong sunlight.
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
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Professional horticultural nutrition solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Sizes
                  </h3>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                  <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">
                    20L
                  </Badge>
                  <p className="text-gray-600">
                    Professional foliar nutrition for horticultural and
                    vegetable crops
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
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
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white"
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
                    className="w-full bg-white text-blue-600 hover:bg-gray-100"
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
