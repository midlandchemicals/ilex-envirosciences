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
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function CaPITALPage({ onSubmit }: ContactFormProps) {
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
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Root Development",
      description:
        "The provision of optimum levels of Calcium are important for root development, maintaining plant health and strengthening cell walls for improved quality and shelf life",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Plant Health",
      description:
        "Maintains overall plant health through superior calcium nutrition and phosphite technology",
    },
    {
      icon: <Layers className="h-8 w-8 text-[#6abf4b]" />,
      title: "Strengthens Cell Walls",
      description:
        "Calcium strengthens cell walls for improved crop quality and extended shelf life",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Fast-Acting Nutrition",
      description:
        "Formulated for rapid absorption and maximum availability at key growth stages",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Vegetable & Salad Specialist",
      description:
        "Specifically formulated for vegetable and salad crops with proven phosphite technology",
    },
    {
      icon: <Atom className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Formulation",
      description:
        "Contains high levels of soluble calcium with key nutrients boron and zinc",
    },
  ];

  const crops = [
    {
      name: "Potatoes",
      rate: "2.0 l/ha",
      timing:
        "Apply at start of tuber bulking. Repeat @ 2.0 l/ha during tuber bulking",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Roots",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply @ 4-6 true leaves. Repeat every 14-21 days depending on growing season",
      color: "bg-amber-100 text-amber-800",
    },
    {
      name: "Brassicas*",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 10-14 day intervals as required",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Alliums*",
      rate: "2.0-3.0 l/ha",
      timing: "Apply from 3-4 true leaves. Repeat at 14-21 day intervals",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const analysisData = {
    "Nitrogen (ureic N)": "4",
    "Phosphorus Pentoxide (P₂O₅)": "30",
    "Potassium (K₂O)": "8",
    "Calcium (as CaO)": "6.6",
    "Boron (B)": "0.8",
    "Zinc (Zn)": "2.4",
  };

  const pdfLinks = [
    {
      title: "CaPITAL™ Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Capital-1606-i.pdf",
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Technical information about phosphite mode of action",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/phosphites-1701-iv.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "CaPITAL™",
    productDescription:
      "A highly effective foliar treatment specifically formulated for vegetable and salad crops, using proven phosphite technology to optimize healthy plant growth through superior nutrition. Contains high levels of soluble calcium together with boron and zinc, important for root development, maintaining plant health, and strengthening cell walls for improved quality and shelf life.",
    keyFeatures: [
      "Proven phosphite technology for superior nutrition",
      "High levels of soluble calcium for cell wall strength",
      "Contains key nutrients boron and zinc",
      "Fast-acting formulation for maximum availability",
      "Specifically designed for vegetable and salad crops",
      "Improves quality and extends shelf life",
    ],
    targetCrops: [
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tuber quality and structure",
          "Improved skin set and storage life",
          "Better calcium content in tubers",
          "Reduced susceptibility to physiological disorders",
        ],
      },
      {
        name: "Brassicas",
        image:
          "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger head formation and structure",
          "Improved shelf life and storage quality",
          "Enhanced resistance to tip burn",
          "Better overall crop quality",
        ],
      },
      {
        name: "Leafy Salads",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        benefits: [
          "Improved leaf structure and crispness",
          "Extended shelf life and freshness",
          "Enhanced nutritional quality",
          "Reduced post-harvest deterioration",
        ],
      },
      {
        name: "Root Vegetables",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root development",
          "Improved storage quality",
          "Enhanced nutrient density",
          "Better resistance to storage rots",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Phosphite Technology",
        description:
          "Advanced phosphite formulation provides immediate plant availability and systemic movement",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Calcium Fortification",
        description:
          "High levels of soluble calcium strengthen cell walls and improve structural integrity",
        icon: <Shield className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Micronutrient Complex",
        description:
          "Boron and zinc work synergistically with calcium for optimal plant metabolism",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Quality Enhancement",
        description:
          "Improves crop quality, shelf life, and post-harvest performance",
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
                Proven Phosphite Technology for Vegetables & Salads
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="text-[#ffbd59]">Ca</span>
                PITAL™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                With Ilex's proven phosphite technology to optimise healthy
                plant growth through superior nutrition, CaPITAL is a highly
                effective foliar treatment specifically formulated for vegetable
                and salad crops.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CaPITAL is a new generation phosphite, containing high levels of
                soluble calcium together with the key nutrients, boron and zinc.
                The provision of optimum levels of calcium are important for
                root development, maintaining plant health and strengthening
                cell walls for improved quality and shelf life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-white text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-capital")
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
                    smoothScrollToSection("technical-resources-capital")
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
                    src="/assets/product images/Calcium Supplements/Capital.png"
                    alt="CaPITAL Product"
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
                Vegetable Specialist
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
              Discover why CaPITAL™ delivers superior performance for vegetable
              and salad crops
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
        title="CaPITAL™ Nutrient Analysis"
      />

      {/* Technical Analysis Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technical Analysis</h2>
            <p className="text-xl text-gray-600">
              Comprehensive nutrient profile for optimal crop nutrition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="h-8 w-8 text-[#6abf4b]" />
                    <CardTitle className="text-2xl">
                      Primary Nutrients
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Phosphorus Pentoxide (P₂O₅)
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#6abf4b]">
                          30% w/v
                        </div>
                        <div className="text-sm text-gray-600">300 g/l</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Potassium (K₂O)
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#6abf4b]">
                          8% w/v
                        </div>
                        <div className="text-sm text-gray-600">80 g/l</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Calcium (as CaO)
                      </span>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#6abf4b]">
                          6.6% w/v
                        </div>
                        <div className="text-sm text-gray-600">66 g/l</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mt-6">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Atom className="h-8 w-8 text-[#6abf4b]" />
                    <CardTitle className="text-2xl">
                      Key Micronutrients
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#6abf4b] mb-1">
                        2.4%
                      </div>
                      <p className="text-sm text-gray-600">Zinc (Zn)</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#6abf4b] mb-1">
                        0.8%
                      </div>
                      <p className="text-sm text-gray-600">Boron (B)</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#6abf4b] mb-1">
                        4%
                      </div>
                      <p className="text-sm text-gray-600">Nitrogen (N)</p>
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
                    src="/assets/product images/Calcium Supplements/Capital.png"
                    alt="CaPITAL Product"
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      2 × 10L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for precise application in smaller operations
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale operations
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
        <div id="application-guidelines-capital" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Optimized application guidelines for vegetable and salad crops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {crops.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <Badge className="bg-[#6abf4b] text-sm">
                        {crop.rate}
                      </Badge>
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
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Application Method
                    </h3>
                    <p className="text-gray-700">
                      CaPITAL is best applied as a foliar spray at water rates
                      of between 200-600 l/ha depending on the crop type and
                      stage of growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sprout className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Propagated Plants
                    </h3>
                    <p className="text-gray-700">
                      *Propagated plants will benefit from an application of
                      CaPITAL via irrigation techniques at a rate of 3-4 mls per
                      litre of water ideally just prior to planting out.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Benefit Highlight Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose CaPITAL™?</h2>
            <p className="text-xl text-gray-600">
              The science behind superior vegetable and salad crop nutrition
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">Root Development</h3>
                  </div>
                  <p className="text-gray-600">
                    Optimum calcium levels promote strong, healthy root systems
                    that support vigorous plant growth and nutrient uptake.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">Plant Health</h3>
                  </div>
                  <p className="text-gray-600">
                    Maintains overall plant health through proven phosphite
                    technology and superior calcium nutrition.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-[#ececec] rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <FlaskConical className="h-16 w-16 text-[#6abf4b] mx-auto mb-2" />
                    <p className="text-xl font-semibold text-gray-800">
                      Proven
                    </p>
                    <p className="text-lg text-gray-600">Technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">
                      Cell Wall Strength
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Strengthens cell walls for improved crop quality, better
                    storage characteristics, and extended shelf life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">Fast-Acting</h3>
                  </div>
                  <p className="text-gray-600">
                    Formulated for rapid absorption and maximum nutrient
                    availability at critical growth stages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-capital"
        productName="CaPITAL™"
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
                      Ilex EnviroSciences Ltd 13a Brindely Close , Holly Lane
                      Industrial Estate , Atherstone , Warwickshire Market Rasen
                      LN8 3RH
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
                  Contact us for more information about CaPITAL™
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
