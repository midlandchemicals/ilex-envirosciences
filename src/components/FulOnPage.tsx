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
  TreePine,
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function FulOnPage({ onSubmit }: ContactFormProps) {
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
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Efficient Foliar Nutrition",
      description:
        "Highly concentrated nitrogen solution for maximum nutrient delivery efficiency",
    },
    {
      icon: <TreePine className="h-8 w-8 text-[#6abf4b]" />,
      title: "Fulvic Acid Boost",
      description:
        "Natural fulvic acid enhances nutrient uptake and plant metabolism",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Effective at Low Application Rates",
      description:
        "High concentration allows for cost-effective low-rate applications",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Dissolves Completely",
      description:
        "Formulated for complete tank dissolution with no residue or blockages",
    },
    {
      icon: <Activity className="h-8 w-8 text-[#6abf4b]" />,
      title: "Protein Enhancement",
      description:
        "Special application for milling wheats to enhance grain protein content",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Multi-Crop Benefits",
      description:
        "Improves quality and yields in wheats, potatoes, and oilseed rape",
    },
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      stages: [
        {
          stage: "G.S. 23-30",
          rate: "5-10 l/ha",
          notes: "Early growth support",
        },
        { stage: "G.S. 39-45", rate: "5-10 l/ha", notes: "Stem elongation" },
        { stage: "G.S. 50-59", rate: "5-10 l/ha", notes: "Flowering stage" },
      ],
      color: "bg-[#d3eac7] text-[#5aa338]",
      icon: <Wheat className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Milling Wheat",
      stages: [
        {
          stage: "G.S. 69-71",
          rate: "20 l/ha",
          notes: "Grain protein enhancement",
        },
      ],
      color: "bg-[#ececec] text-[#5aa338]",
      icon: <Award className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Potatoes",
      stages: [
        {
          stage: "Early bulking",
          rate: "5-10 l/ha",
          notes: "Tuber development",
        },
        {
          stage: "During bulking",
          rate: "5-10 l/ha",
          notes: "Aid photosynthesis",
        },
      ],
      color: "bg-[#f1f8ec] text-[#6abf4b]",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Oilseed Rape",
      stages: [
        {
          stage: "At/prior to rapid growth",
          rate: "5-10 l/ha",
          notes: "Growth support",
        },
        {
          stage: "Pre-flowering",
          rate: "3-5 l/ha",
          notes: "Quality enhancement",
        },
      ],
      color: "bg-[#ececec] text-[#5aa338]",
      icon: <Flower className="h-5 w-5 text-[#6abf4b]" />,
    },
  ];

  const analysisData = {
    "Total Nitrogen (N)": "28",
    "Potassium (K2O)": "2.0",
    "Fulvic Acid": "2.5",
  };

  const pdfLinks = [
    {
      title: "ful-oN Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/03/ful-oN-0323i.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "ful-oN™",
    productDescription:
      "A highly concentrated solution of nitrogen, potassium with fulvic acid specially formulated as a foliar feed to improve plant nutrition status at key stages of crop development. Contains nitrogen and potassium in different forms to ensure both rapid plant availability together with a more extended supply of nutrition. The fulvic acid is a naturally occurring material with a specific structure, derived from humified, carbon-rich organic matter, purified to maximize biological activity.",
    keyFeatures: [
      "28% total nitrogen with 50% minimum polymethylene urea",
      "2.5% fulvic acid from humified organic matter",
      "Dual nitrogen forms for immediate and extended nutrition",
      "Complete tank dissolution with no residue",
      "Special protein enhancement applications",
      "Effective at low application rates",
    ],
    targetCrops: [
      {
        name: "Milling Wheat",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced grain protein content",
          "Improved milling quality",
          "Better baking characteristics",
          "Premium market specifications",
        ],
      },
      {
        name: "Feed Wheat",
        image:
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
        benefits: [
          "Increased yield potential",
          "Better grain fill",
          "Improved protein levels",
          "Enhanced feed value",
        ],
      },
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced photosynthesis",
          "Better tuber development",
          "Improved quality characteristics",
          "Increased marketable yield",
        ],
      },
      {
        name: "Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced oil content",
          "Better seed development",
          "Improved quality parameters",
          "Increased yield potential",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Polymethylene Urea Technology",
        description:
          "Minimum 50% of nitrogen in controlled-release polymethylene urea form",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Fulvic Acid Enhancement",
        description:
          "Natural fulvic acid boosts nutrient uptake and plant metabolism",
        icon: <TreePine className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Dual Nitrogen System",
        description:
          "Combines rapid and extended nitrogen release for sustained nutrition",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Protein Enhancement",
        description:
          "Specialized applications for grain protein improvement in wheat",
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
                Nitrogen + Potassium + Fulvic Acid Technology
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                ful-o
                <span className="text-[#ff3131]">N</span>™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A highly concentrated solution of nitrogen, potassium with
                fulvic acid specially formulated as a foliar feed to improve
                plant nutrition status at key stages of crop development.
                Contains nitrogen and potassium in different forms to ensure
                both rapid plant availability together with extended nutrition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The fulvic acid is a naturally occurring material with a
                specific structure, derived from humified, carbon-rich organic
                matter, purified to maximize biological activity and enhance
                nutrient uptake.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-white text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-fullOn")
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
                    smoothScrollToSection("technical-resources-fullOn")
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
                    src="/assets/product images/Foliar/FullOn.jpg"
                    alt="Ful-On Product"
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
                Fulvic Enhanced
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
              Discover why ful-oN™ delivers superior nitrogen nutrition with
              fulvic acid enhancement
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
        title="ful-oN™ Composition Analysis"
      />

      {/* Fulvic Acid Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Fulvic Acid Technology</h2>
            <p className="text-xl text-gray-600">
              Understanding the science behind enhanced nutrient uptake
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TreePine className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Natural Fulvic Acid Enhancement
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <FlaskConical className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Organic Matter Origin
                        </h4>
                        <p className="text-gray-600">
                          Derived from humified, carbon-rich organic matter and
                          purified to maximize biological activity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Enhanced Uptake</h4>
                        <p className="text-gray-600">
                          Fulvic acid acts as a natural chelator, improving
                          nutrient availability and plant uptake efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Metabolic Boost</h4>
                        <p className="text-gray-600">
                          Stimulates plant metabolism and enzyme activity for
                          enhanced growth and development.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#d3eac7] rounded-lg p-4">
                      <h4 className="font-semibold text-[#5aa338] mb-2">
                        Polymethylene Urea
                      </h4>
                      <p className="text-[#6abf4b]">
                        Minimum 50% of nitrogen in controlled-release
                        polymethylene urea form for extended nutrition supply.
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
                    src="/assets/product images/Foliar/FullOn.jpg"
                    alt="Healthy Cereal Crop"
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
                Advanced Technology
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div id="application-guidelines-fullOn" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Strategic nitrogen and fulvic acid nutrition for key crops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cropApplications.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      {crop.icon}
                      <CardTitle className="text-xl">{crop.crop}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {crop.stages.map((stage, stageIndex) => (
                        <div
                          key={stageIndex}
                          className="p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              {stage.stage}
                            </span>
                            <Badge className={`bg-[#6abf4b] text-sm px-2 py-1`}>
                              {stage.rate}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{stage.notes}</p>
                        </div>
                      ))}
                    </div>
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
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Protein Enhancement
                    </h3>
                    <p className="text-gray-700">
                      For milling wheat protein enhancement, apply 20 l/ha at
                      G.S. 69-71 (end of flowering to medium milk stage) to
                      achieve premium protein specifications.
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
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Space-efficient packaging for maximum field coverage
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-green-600" />
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
                    <p className="text-gray-600 mb-2">
                      Compact pack for easy handling
                    </p>
                    <p className="text-sm text-gray-500">
                      Up to 4ha coverage at standard rate
                    </p>
                  </div>
                  <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600 mb-2">
                      Bulk solution for large operations
                    </p>
                    <p className="text-sm text-gray-500">
                      Up to 200ha coverage at standard rate
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
        id="technical-resources-fullOn"
        productName="ful-oN™"
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
                  Contact us for more information about ful-oN™
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
