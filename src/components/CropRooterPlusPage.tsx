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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
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
  Database,
  Star,
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function CropRooterPlusPage({ onSubmit }: ContactFormProps) {
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
      title: "Stimulates Early Rooting",
      description:
        "Promotes early root development for healthy plant establishment and development",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Foliar Nutrient + Biostimulant",
      description:
        "Combines foliar nutrient and biostimulant advantages in one application",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Winter Stress Resistance",
      description:
        "Potassium helps reduce environmental stresses during winter dormancy and frost damage",
    },
    {
      icon: <Database className="h-8 w-8 text-[#6abf4b]" />,
      title: "Proven Independent Results",
      description:
        "Backed by extensive independent trial data showing consistent performance",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Tank-Mix Compatibility",
      description:
        "Extensive tank-mix compatibility with flexible application timings",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Concentrated Formula",
      description:
        "Formulated as a true solution with targeted, low application rates",
    },
  ];

  const applicationRates = [
    {
      type: "High Frequency Program",
      rate: "4 × 0.5 l/ha",
      timing: "G.S.14-16 repeated @ T0, T1 & T2",
      description: "For maximum root stimulation and establishment",
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      type: "Standard Program",
      rate: "2 × 1.0 l/ha",
      timing: "G.S.14-16 and @ T2",
      description: "Balanced approach for consistent performance",
      color: "bg-green-100 text-green-800",
      icon: <Target className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      type: "Stress Recovery",
      rate: "Up to 2.0 l/ha",
      timing: "As required for stressed/late crops",
      description: "Higher rates for challenging conditions",
      color: "bg-green-100 text-green-800",
      icon: <Shield className="h-5 w-5 text-[#6abf4b]" />,
    },
  ];

  const analysisData = {
    "Amino acids": "10",
    "Phosphorus (P2O5)": "28",
    "Potassium (as K2SO)": "8",
    "Nitrogen (N)": "4",
  };

  const pdfLinks = [
    {
      title: "Crop Rooter® Plus Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2024/11/Crop-Rooter%C2%AE-Plus-Trials-1124-i.pdf",
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
    {
      title: "Crop Rooter® NIAB Trial Data",
      description: "Independent NIAB TAG trial results and analysis",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Crop-RooterPlus-NIAB-TAG-Spring-2019.pdf",
    },
    {
      title: "Crop Rooter® Velcourt Trial Data",
      description: "Comprehensive Velcourt field trial results",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2022/04/Crop-Rooter%C2%AE-Plus-Velcourt-2020-2021.pdf",
    },
  ];

  // Trial data for charts
  const northamptonshireData = [
    { treatment: "SFP", yield: 9.5, increase: 0 },
    { treatment: "3x0.5L", yield: 10.5, increase: 10.5 },
    { treatment: "3x1L", yield: 10.5, increase: 10.5 },
    { treatment: "2x1L", yield: 10.0, increase: 5.3 },
    { treatment: "4x0.5L", yield: 10.0, increase: 5.3 },
    { treatment: "1x0.5L", yield: 10.0, increase: 5.3 },
  ];

  const lincolnshireData = [
    { treatment: "SFP", yield: 12.0, increase: 0 },
    { treatment: "2x0.5L", yield: 13.0, increase: 8.3 },
    { treatment: "2x1L", yield: 13.0, increase: 8.3 },
    { treatment: "2x2L", yield: 14.0, increase: 16.7 },
    { treatment: "4x0.5L", yield: 13.0, increase: 8.3 },
    { treatment: "4x1L", yield: 14.0, increase: 16.7 },
    { treatment: "4x2L", yield: 14.0, increase: 16.7 },
  ];

  // Spring Barley Trials 2023 data (full set of 24 yield responses)
  // Sorted in ascending order by response, with id reassigned sequentially 1..24
  const springBarleyData = [
    { id: 1, response: -0.32 },
    { id: 2, response: -0.22 },
    { id: 3, response: -0.17 },
    { id: 4, response: -0.12 },
    { id: 5, response: -0.07 },
    { id: 6, response: -0.05 },
    { id: 7, response: -0.03 },
    { id: 8, response: 0.0 },
    { id: 9, response: 0.03 },
    { id: 10, response: 0.05 },
    { id: 11, response: 0.06 },
    { id: 12, response: 0.07 },
    { id: 13, response: 0.08 },
    { id: 14, response: 0.09 },
    { id: 15, response: 0.1 },
    { id: 16, response: 0.11 },
    { id: 17, response: 0.12 },
    { id: 18, response: 0.13 },
    { id: 19, response: 0.14 },
    { id: 20, response: 0.15 },
    { id: 21, response: 0.17 },
    { id: 22, response: 0.22 },
    { id: 23, response: 0.27 },
    { id: 24, response: 0.41 },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Crop Rooter® Plus",
    productDescription:
      "The next generation crop biostimulant, offering a highly concentrated NPK foliar feed formulated with 19 plant-derived amino acids to promote root development and healthy plant growth in a range of arable crops.",
    keyFeatures: [
      "Up to 4.48% yield increase based on independent trials",
      "19 plant-derived amino acids for enhanced biostimulation",
      "Optimizes nutrient uptake and improves establishment",
      "Flexible application timings with extensive compatibility",
      "Formulated as a true solution for easy mixing",
      "Minimal environmental impact with targeted application rates",
    ],
    targetCrops: [
      {
        name: "Winter Wheat",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced establishment and tillering",
          "Improved winter hardiness and frost resistance",
          "Better grain fill and quality",
          "Up to 15% yield response achievable",
        ],
      },
      {
        name: "Spring Barley",
        image:
          "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&h=300&fit=crop",
        benefits: [
          "17% average increase in root length",
          "4.48% yield increase in trials",
          "Enhanced grain weight and quality",
          "Improved establishment vigor",
        ],
      },
      {
        name: "Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root system development",
          "Enhanced autumn establishment",
          "Better spring recovery and growth",
          "Improved stress tolerance",
        ],
      },
      {
        name: "Cereals General",
        image:
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
        benefits: [
          "Early rooting stimulation",
          "Enhanced nutrient uptake efficiency",
          "Better resistance to environmental stress",
          "Consistent performance across soil types",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Amino Acid Complex",
        description:
          "19 plant-derived amino acids provide building blocks for protein synthesis and enzyme function",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Root Development",
        description:
          "Stimulates early rooting for improved establishment and nutrient uptake capacity",
        icon: <Sprout className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Biostimulant Action",
        description:
          "Combines nutritional and biostimulant effects for enhanced plant performance",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Stress Tolerance",
        description:
          "Potassium content helps plants resist frost damage and environmental stresses",
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
        <div className="absolute inset-0 bg-[#ececec]/50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20 text-lg px-4 py-2">
                Next Generation Crop Biostimulant with 19 Amino Acids
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6abf4b] to-[#5aa338] bg-clip-text text-transparent">
                Crop Rooter® Plus
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Crop Rooter® Plus optimises nutrient uptake, improves
                establishment and delivers up to 4.48% yield increase based on
                independent trials. It is the next generation crop biostimulant,
                offering a highly concentrated NPK foliar feed formulated with
                19 plant-derived amino acids.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Proven to stimulate early rooting, improving yield and quality.
                It gives farmers and independent agronomists a flexible, easy to
                use product with minimal impact on the environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection(
                      "application-guidelines-croproooterplus"
                    )
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
                    smoothScrollToSection("technical-resources-croproooterplus")
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
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                  alt="Crop Rooter Plus Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#6abf4b]/20 rounded-2xl" />
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
              Discover why Crop Rooter® Plus delivers superior biostimulant
              performance for arable crops
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
        title="Crop Rooter® Plus Composition Analysis"
      />

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div
          id="application-guidelines-croproooterplus"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Flexible application programs for cereals - choose the program
              that suits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {applicationRates.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      {rate.icon}
                      <CardTitle className="text-lg">{rate.type}</CardTitle>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg mb-4">
                      <Badge className={`${rate.color} text-xl px-4 py-2 mb-2`}>
                        {rate.rate}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-2">
                        {rate.timing}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {rate.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Application Notes
                    </h3>
                    <p className="text-green-700">
                      Crop Rooter® Plus is formulated as a totally water-soluble
                      liquid and can be readily incorporated into most commonly
                      applied tank mixes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              Extensive independent testing proving consistent performance
              across multiple sites and conditions
            </p>
          </div>

          {/* NIAB TAG Trials */}
          <div className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-[#6abf4b]" />
                  <CardTitle className="text-2xl">
                    NIAB TAG Independent Trials
                  </CardTitle>
                </div>
                <CardDescription>
                  Spring Barley (variety TGR Planet) performance evaluation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        17%
                      </div>
                      <p className="text-lg text-green-800">
                        Average Root Length Increase
                      </p>
                      <p className="text-sm text-green-700 mt-2">
                        At 1.5 l/ha @ G.S. 19 BBCH
                      </p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        4.48%
                      </div>
                      <p className="text-lg text-green-800">
                        Overall Yield Increase
                      </p>
                      <p className="text-sm text-green-700 mt-2">
                        With follow-up applications
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        1.5 l/ha at G.S. 19 BBCH for root development
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        Further applications at 30-31 BBCH and 40 BBCH
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        Increased specific grain weight
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">
                        More developed rooting structure for optimized uptake
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Velcourt Trial Results */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                Velcourt Research & Development Trials
              </h3>
              <p className="text-lg text-gray-600">
                Replicated field trials across multiple UK locations and winter
                wheat varieties
              </p>
            </div>

            {/* Northamptonshire Trial */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">
                  Northamptonshire (Winter Wheat var. Crusoe) - 2021
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={northamptonshireData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="treatment" />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name) => [
                          name === "yield" ? `${value} t/ha` : `+${value}%`,
                          name === "yield" ? "Yield" : "Increase",
                        ]}
                      />
                      <Bar dataKey="yield" fill="#6abf4b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  Consistent yield improvements across all treatment programs,
                  with up to 1 t/ha increase
                </p>
              </CardContent>
            </Card>

            {/* Lincolnshire Trial */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">
                  Lincolnshire (Winter Wheat var. SISKIN) - 2020
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={lincolnshireData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="treatment" />
                      <YAxis />
                      <Tooltip
                        formatter={(value, name) => [
                          name === "yield" ? `${value} t/ha` : `+${value}%`,
                          name === "yield" ? "Yield" : "Increase",
                        ]}
                      />
                      <Bar dataKey="yield" fill="#6abf4b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  Higher baseline yields with consistent 1-2 t/ha improvements
                  across all programs
                </p>
              </CardContent>
            </Card>

            {/* Statistical Confidence */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-4">
                    15%
                  </div>
                  <p className="text-xl text-green-800 mb-4">
                    Maximum Yield Response Achievable
                  </p>
                  <p className="text-gray-700 mb-6">
                    With an additional four years of independent trial data
                    compiled from three geographically diverse sites
                  </p>
                  <div className="bg-white/80 rounded-lg p-6">
                    <blockquote className="text-lg italic text-gray-800">
                      "With 95% statistical confidence, the treatment programmes
                      with applications of Crop Rooter Plus® increased yield
                      over the control."
                    </blockquote>
                    <p className="text-sm text-gray-600 mt-2">
                      — Nick Anderson, Technical Director, Velcourt Ltd
                      <br />
                      Based on over 70 individual dose rates & timings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spring Barley Trials 2023 */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">
                  Spring Barley Trials 2023 - Velcourt
                </CardTitle>
                <CardDescription>
                  Four geographically diverse sites using 1L and/or 2L at GS13
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={springBarleyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="id"
                          label={{
                            value: "Site",
                            position: "insideBottom",
                            offset: -5,
                          }}
                        />
                        <YAxis domain={["auto", "auto"]} />
                        <Tooltip
                          formatter={(value) => [
                            `${value} t/ha`,
                            "Yield Response",
                          ]}
                        />
                        <Bar dataKey="response" fill="#6abf4b" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        0.152 t/ha
                      </div>
                      <p className="text-green-800">Average Yield Response</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">
                          10 statistically significant yield increases
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">
                          Four geographically diverse sites
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">
                          Application rates of 1L and/or 2L at GS13
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-croproooterplus"
        productName="Crop Rooter® Plus"
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
                  Contact us for more information about Crop Rooter® Plus
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
