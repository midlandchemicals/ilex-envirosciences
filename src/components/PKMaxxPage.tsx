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
  BarChart3,
  Sprout,
  Shield,
  Droplet,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";
import Form from "./Form";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function PKMaxxPage({ onSubmit }: ContactFormProps) {
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
      icon: <TrendingUp className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improves Quality and Yield",
      description:
        "Proven results in improving both crop quality and overall yield performance",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Wide Range of Crops",
      description:
        "Effective on a wide range of field and vegetable crops for versatile application",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Maximises Phosphorus Availability",
      description:
        "Combines phosphate and phosphite forms for rapid and efficient delivery",
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#6abf4b]" />,
      title: "Promotes Root Development",
      description:
        "Stimulates healthy root development for stronger, more resilient plants",
    },
    {
      icon: <Package className="h-8 w-8 text-[#6abf4b]" />,
      title: "All-in-One Nutrient Package",
      description:
        "Multi-nutrient formulation combining phosphorus with key micronutrients",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Rapid Delivery & Tank Compatible",
      description:
        "Fast-acting formula that's easy to use and highly compatible in tank mixes",
    },
  ];

  const crops = [
    {
      name: "Potatoes",
      rate: "2.0 l/ha",
      timing:
        "Apply at start of tuber bulking. Repeat during tuber bulking. *For increased tuber number, first application at tuber initiation",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Cereals",
      rate: "0.5-1.5 l/ha",
      timing:
        "Apply to improve crop establishment (Zadoks G.S. 16-23). Repeat at start of rapid growth (G.S. 30-33) and start of booting (G.S. 39-45)",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Oilseed Rape",
      rate: "1.0-2.0 l/ha",
      timing:
        "Apply from 6-8 true leaves. Repeat just prior to and during rapid growth",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Alliums",
      rate: "2.0-3.0 l/ha",
      timing: "Apply from 3-4 true leaves. Repeat at 14-21 day intervals",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Asparagus",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply to fern when sufficient foliage present. Repeat at 21-28 day intervals as required",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Brassicas",
      rate: "1.5-3.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 14-21 day intervals as required",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Lettuce/Leafy Salads",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply from 10-14 days post planting. Repeat at 10-14 day intervals as required",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Roots",
      rate: "1.5-2.5 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 14-21 day intervals depending on growing season",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Sugar Beet",
      rate: "1.5-3.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 14-21 day intervals as required",
      color: "bg-green-100 text-green-800",
    },
  ];

  const analysisData = {
    "Phosphorus Pentoxide (P₂O₅)": "31",
    "Nitrogen (N)": "2.6",
    "Potassium (K₂O)": "6.5",
    "Sulphur (SO₃)": "4.5",
    "Magnesium (MgO)": "1.0",
    "Manganese (Mn)": "1.0",
    "Zinc (Zn)": "0.75",
    "Copper (Cu)": "0.31",
    "Boron (B)": null,
    "Iron (Fe)": null,
    "Molybdenum (Mo)": null,
  };

  const pdfLinks = [
    {
      title: "PK MAXX + Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/2.%20PK%20MAXX%E2%84%A2%20%2B/PK%20MAXX%20%2B%20Leaflet.pdf",
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Technical information about phosphite mode of action",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/2.%20PK%20MAXX%E2%84%A2%20%2B/Phosphite%20Action%20Information%20Sheet.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/2.%20PK%20MAXX%E2%84%A2%20%2B/Compatibility%20Chart.pdf",
    },
    {
      title: "Potato Field Trial Data",
      description: "Independent trial results showing yield improvements",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/2.%20PK%20MAXX%E2%84%A2%20%2B/Potato%20Field%20Trial%20Data.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "PK MAXX™ +",
    productDescription:
      "A unique multi-nutrient formulation which combines phosphorus with key micronutrients to promote root development and boost healthy plant growth in a wide range of field and vegetable crops.",
    keyFeatures: [
      "Combines phosphate and phosphite forms for rapid delivery",
      "Multi-nutrient formulation with key micronutrients",
      "Promotes healthy root development",
      "Improves crop quality and yield",
      "Highly compatible in tank mixes",
      "Effective across diverse crop types",
    ],
    targetCrops: [
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Increased tuber bulking and development",
          "14-42% yield increases recorded in trials",
          "Enhanced tuber quality and storage life",
          "Improved resistance to stress conditions",
        ],
      },
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced crop establishment",
          "Improved grain fill and quality",
          "Stronger root system development",
          "Better nutrient uptake efficiency",
        ],
      },
      {
        name: "Brassicas",
        image:
          "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf development",
          "Improved head formation",
          "Better disease resistance",
          "Extended harvest window",
        ],
      },
      {
        name: "Leafy Vegetables",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        benefits: [
          "Faster growth rates",
          "Improved leaf color and texture",
          "Extended shelf life",
          "Higher nutritional content",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Dual Phosphorus System",
        description:
          "Combines phosphate and phosphite forms for immediate and sustained phosphorus availability",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Enhanced Uptake",
        description:
          "Specially formulated for rapid foliar absorption and translocation within the plant",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Root Development",
        description:
          "Stimulates root growth and branching for improved nutrient and water uptake",
        icon: <Sprout className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Stress Tolerance",
        description:
          "Enhances plant resistance to environmental stresses and disease pressure",
        icon: <Shield className="h-6 w-6 text-[#6abf4b]" />,
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
                Unique Multi-Nutrient Formulation
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r text-black bg-clip-text ">
                PK MAXX™ <span className="text-[#38c7cf]">+</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Phosphorus is key to crop performance as it provides the energy
                source for those chemical processes in the plant which lead to
                growth and yield. PK MAXX+ combines phosphorus in both the
                phosphate and phosphite forms to provide rapid and efficient
                delivery at critical growth periods.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A unique multi-nutrient formulation which combines phosphorus
                with key micronutrients to promote root development and boost
                healthy plant growth in a wide range of field and vegetable
                crops.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-pkmax")
                  }
                >
                  Application Guidelines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[#6abf4b] cursor-pointer px-8 py-4 border-[#6abf4b] hover:bg-[#6abf4b]/10"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-pkmax")
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
                    src="/assets/product images/Phosphite/PKmaxx.jpg"
                    alt="PK MAXX Plus Product"
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
                Multi-Nutrient Boost
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
              Discover why PK MAXX™ + delivers superior performance across
              diverse crop types
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
        title="PK MAXX™ + Nutrient Analysis"
      />

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div id="application-guidelines-pkmax" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive application guidelines for optimal crop performance
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
            className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <Droplets className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-800">
                  Application Method
                </h3>
                <p className="text-green-700">
                  PK MAXX+ is best applied as a foliar spray at water rates of
                  200-600 l/ha depending on the crop type and stage of growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Independent Trials Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Independent Trials</h2>
            <p className="text-xl text-gray-600">
              Proven performance backed by rigorous field testing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-[#6abf4b]" />
                    <CardTitle className="text-2xl">
                      Potato Trial Results
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        14-42%
                      </div>
                      <p className="text-lg text-green-800">Yield Increase</p>
                      <p className="text-sm text-green-700 mt-2">
                        Across all soil types
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">
                          Four potato varieties tested
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">
                          Conducted in Cambridgeshire
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">
                          Two 2.0 l/ha applications
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">
                          Applied at early tuber bulking and 14-21 days later
                        </span>
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
                    src="/assets/product images/Phosphite/PKmaxx.jpg"
                    alt="Potato Yield Enhancement"
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
                Field Proven
              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-6 mt-16">
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Consistent Performance
                    </h3>
                    <p className="text-green-700">
                      Adding PK MAXX+ has shown consistent performance in a
                      variety of UK trials across different crop types and
                      growing conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <FlaskConical className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Comprehensive Data
                    </h3>
                    <p className="text-green-700">
                      For comprehensive and detailed trial results on all our
                      products, please contact your local Ilex EnviroSciences
                      representative.
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
        id="technical-resources-pkmax"
        productName="PK MAXX™ +"
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
                      Ilex EnviroSciences Ltd <br /> 13a Brindley Close, Holly
                      Lane Industrial Estate, Atherstone, Warwickshire CV9 2QZ,
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <p>+44 1827722911</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <p>ilexsales@ilex-envirosciences.com</p>
                </div>

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
