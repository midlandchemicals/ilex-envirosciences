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
  Flame,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function ProSulPage({ onSubmit }: ContactFormProps) {
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
      icon: <Flame className="h-8 w-8 text-yellow-600" />,
      title: "Premium Sulfur Nutrition",
      description:
        "Provides essential sulfur nutrition for protein synthesis and oil quality enhancement",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Rapid Plant Uptake",
      description:
        "Fast-acting formulation ensures immediate sulfur availability when crops need it most",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Protein & Oil Quality",
      description:
        "Essential for amino acid synthesis and oil quality improvement in oilseed crops",
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-600" />,
      title: "Enhanced Metabolism",
      description:
        "Supports chlorophyll formation and enzyme activation for optimal plant function",
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-600" />,
      title: "Stress Tolerance",
      description:
        "Improves plant ability to cope with environmental stresses and disease pressure",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Broad Crop Compatibility",
      description:
        "Effective across a wide range of crops including cereals, oilseeds, and vegetables",
    },
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      stages: [
        {
          stage: "Tillering to stem extension",
          rate: "2-3 l/ha",
          notes: "Early sulfur support",
        },
        {
          stage: "Flag leaf emergence",
          rate: "2-3 l/ha",
          notes: "Grain quality enhancement",
        },
      ],
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />,
    },
    {
      crop: "Oilseed Rape",
      stages: [
        {
          stage: "Rosette to stem extension",
          rate: "3-4 l/ha",
          notes: "Oil quality improvement",
        },
        {
          stage: "Pre-flowering",
          rate: "2-3 l/ha",
          notes: "Seed development support",
        },
      ],
      color: "bg-blue-100 text-blue-800",
      icon: <Flower className="h-5 w-5 text-blue-600" />,
    },
    {
      crop: "Vegetables",
      stages: [
        {
          stage: "Early development",
          rate: "2-3 l/ha",
          notes: "Quality enhancement",
        },
        {
          stage: "Pre-harvest",
          rate: "2-3 l/ha",
          notes: "Nutritional quality boost",
        },
      ],
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-green-600" />,
    },
    {
      crop: "Legumes",
      stages: [
        {
          stage: "Early flowering",
          rate: "2-3 l/ha",
          notes: "Protein synthesis support",
        },
        {
          stage: "Pod development",
          rate: "2-3 l/ha",
          notes: "Quality optimization",
        },
      ],
      color: "bg-purple-100 text-purple-800",
      icon: <Sprout className="h-5 w-5 text-purple-600" />,
    },
  ];

  const analysisData = {
    "Sulfur (S)": "30.0",
    "Nitrogen (N)": "5.0",
    "Potassium (K2O)": "8.0",
    "Magnesium (MgO)": "2.0",
  };

  const pdfLinks = [
    {
      title: "Pro-Sul™ Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/03/ILEX-Pro-Arable-1703iii.pdf",
    },

    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Pro-Sul™",
    productDescription:
      "A premium sulfur foliar fertilizer designed to prevent and correct sulfur deficiencies while supporting essential plant functions. Essential for protein synthesis, oil quality, and overall crop performance. Formulated for rapid uptake and immediate plant response.",
    keyFeatures: [
      "30% sulfur content for maximum effectiveness",
      "Enhanced with nitrogen, potassium, and magnesium",
      "Fast-acting formulation for immediate response",
      "Essential for protein synthesis and oil quality",
      "Supports chlorophyll formation and enzyme activation",
      "Broad spectrum crop compatibility",
    ],
    targetCrops: [
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced grain protein content",
          "Improved baking quality",
          "Better nitrogen utilization",
          "Increased resistance to lodging",
        ],
      },
      {
        name: "Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Improved oil content and quality",
          "Enhanced seed development",
          "Better glucosinolate balance",
          "Increased resistance to stress",
        ],
      },
      {
        name: "Legumes",
        image:
          "https://images.unsplash.com/photo-1589927986089-35812388d1b4?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced protein synthesis",
          "Improved nodulation efficiency",
          "Better amino acid profile",
          "Increased nutritional quality",
        ],
      },
      {
        name: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced nutritional content",
          "Improved flavor and quality",
          "Better storage characteristics",
          "Increased market value",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Protein Synthesis",
        description:
          "Essential for amino acid formation and protein quality in grains and seeds",
        icon: <Atom className="h-6 w-6 text-yellow-600" />,
      },
      {
        title: "Oil Quality Enhancement",
        description:
          "Critical for oil formation and quality characteristics in oilseed crops",
        icon: <Flame className="h-6 w-6 text-orange-600" />,
      },
      {
        title: "Enzyme Activation",
        description:
          "Required for numerous enzyme systems and metabolic processes",
        icon: <Zap className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Chlorophyll Formation",
        description:
          "Essential for chlorophyll synthesis and photosynthetic efficiency",
        icon: <Leaf className="h-6 w-6 text-blue-600" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-lg px-4 py-2">
                Premium Sulfur Nutrition Technology
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Pro-Sul™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A premium sulfur foliar fertilizer designed to prevent and
                correct sulfur deficiencies while supporting essential plant
                functions. Essential for protein synthesis, oil quality, and
                overall crop performance across a wide range of agricultural
                applications.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Formulated for rapid uptake and immediate plant response,
                Pro-Sul™ delivers critical sulfur nutrition when your crops need
                it most for optimal quality and yield development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-600 cursor-pointer hover:bg-yellow-700 text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-prosoul")
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
                    smoothScrollToSection("technical-resources-prosoul")
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
                  alt="Pro-Sul Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl opacity-20" />
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
              Discover why Pro-Sul™ delivers essential sulfur nutrition for
              superior crop quality
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
        title="Pro-Sul™ Nutrient Analysis"
      />

      {/* Sulfur Technology Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Sulfur Nutrition Technology
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the critical role of sulfur in crop quality and
              performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Flame className="h-8 w-8 text-yellow-600" />
                    <h3 className="text-2xl font-semibold">
                      Essential Sulfur Functions
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Atom className="h-6 w-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Protein Synthesis
                        </h4>
                        <p className="text-gray-600">
                          Essential for amino acid formation, particularly
                          cysteine and methionine, crucial for protein quality
                          in grains and seeds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Flame className="h-6 w-6 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Oil Quality Enhancement
                        </h4>
                        <p className="text-gray-600">
                          Critical for oil formation and quality characteristics
                          in oilseed crops, affecting both quantity and
                          nutritional value.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Enzyme Activation
                        </h4>
                        <p className="text-gray-600">
                          Required for numerous enzyme systems and metabolic
                          processes, including nitrogen metabolism and stress
                          resistance.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">
                        Enhanced Formula
                      </h4>
                      <p className="text-yellow-700">
                        Pro-Sul™ includes nitrogen, potassium, and magnesium to
                        support optimal sulfur utilization and plant function.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                alt="Healthy Crop Development"
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
        <div id="application-guidelines-prosoul" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Strategic sulfur nutrition for all major crop types
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
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
                            <Badge
                              className={`${crop.color} text-sm px-2 py-1`}
                            >
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
            <Card className="bg-orange-50 border border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-orange-800">
                      Deficiency Treatment
                    </h3>
                    <p className="text-orange-700">
                      For severe sulfur deficiencies, apply at the higher rate
                      and repeat after 2-3 weeks if symptoms persist. Monitor
                      plant response closely.
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
        className="py-20 px-4 bg-gradient-to-r from-orange-50 to-yellow-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Convenient sizes for all farming operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-yellow-600" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Sizes
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      20L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for sulfur nutrition programs and quality
                      enhancement
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale sulfur nutrition
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
        id="technical-resources-prosoul"
        productName="Pro-Sul™"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white"
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
                  Contact us for more information about Pro-Sul™
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
                    className="w-full bg-white text-yellow-600 hover:bg-gray-100"
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
