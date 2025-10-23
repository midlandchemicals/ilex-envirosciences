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
import { PDFLinks } from "./PDFLinks";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
import { smoothScrollToSection } from "../utils/scrollHelpers";
import {
  Droplets,
  Zap,
  Shield,
  Beaker,
  Target,
  Clock,
  Package,
  Phone,
  Mail,
  FlaskConical,
  MapPin,
  CheckCircle,
  ArrowRight,
  Award,
  Droplet,
  HardDrive,
  FileText,
  Calculator,
  FlaskRound as Ph,
} from "lucide-react";

import DostronImg from "/assets/Dostron.png";
import ModiphyXtraImage from "/assets/product images/Water Conditioner/ModipHy Xtra.jpg";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function ModipHyXtraPage({ onSubmit }: ContactFormProps) {
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
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Optimised pH Levels",
      description:
        "Lowers pH of spray solutions to maintain activity and maximise uptake in the plant",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Hard Water Neutralisation",
      description:
        "Sequester and neutralise calcium, magnesium and bicarbonate ions to counter hard water effects",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Product Stability",
      description:
        "Prevents hydrolysis and chemical breakdown of pesticides, reducing up to 50% activity loss",
    },
    {
      icon: <Beaker className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improved Coverage and Uptake",
      description:
        "Optimises leaf coverage and nutrient/pesticide mobility for consistent performance",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Broad Compatibility",
      description:
        "Widely compatible with most agrochemicals and foliar nutrients across various conditions",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Versatile Application",
      description:
        "Suitable for a wide range of spraying conditions and crop situations",
    },
  ];

  const pdfLinks = [
    {
      title: "ModipHy Xtra™ Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Modi-pHy-Xtra-1606-ii.pdf", // Placeholder; replace with actual URL
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Technical information about phosphite mode of action",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/phosphites-1701-iv.pdf",
    },

    {
      title: "ModipHy Xtra™ Case Study",
      description: "Real-world performance examples and results",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Case-Study-ModipHy-Xtra.pdf", // Placeholder; replace with actual URL
    },
    {
      title: "Application Rate Calculator",
      description: "Tool for calculating precise application rates",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/ModipHy-Xtra-Calculator-1707-ii.pdf", // Placeholder; replace with actual URL
    },
    {
      title: "Dosatron® Information Sheet",
      description: "Details on Dosatron integration and usage",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Dosetron.pdf", // Placeholder; replace with actual URL
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // Showcase data adapted for ModipHy Xtra
  const showcaseData = {
    productName: "ModipHy Xtra™",
    productDescription:
      "An advanced water conditioner designed to optimise pH levels in the tank, maintaining activity and maximising the uptake and performance of spray solutions in the plant. Formulated to counter the effects of hard water and high pH by maximising product stability in the tank and mobility in the plant.",
    keyFeatures: [
      "Combination of inorganic and organic acids for pH optimisation",
      "Sequester hard water ions (calcium, magnesium, bicarbonate)",
      "Buffering agents to stabilise against alkaline degradation",
      "Prevents up to 50% loss in pesticide activity from hydrolysis",
      "Improves coverage, uptake and consistent performance",
      "Broad compatibility with agrochemicals and nutrients",
    ],
    targetApplications: [
      {
        name: "Hard Water Areas",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        benefits: [
          "Neutralises calcium and magnesium ions",
          "Prevents ion interference with actives",
          "Optimises spray solution efficacy",
          "Reduces degradation risks",
        ],
      },
      {
        name: "High pH Conditions",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        benefits: [
          "Lowers pH for stable formulations",
          "Enhances pesticide mobility",
          "Maximises plant uptake",
          "Ensures consistent results",
        ],
      },
      {
        name: "Tank Mix Applications",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        benefits: [
          "Broad agrochemical compatibility",
          "Stabilises mixed solutions",
          "Improves leaf coverage",
          "Versatile for various crops",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "pH Optimisation",
        description:
          "Lowers pH to prevent hydrolysis and maintain active ingredient integrity",
        icon: <FlaskConical className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Ion Sequestration",
        description:
          "Neutralises hard water ions to minimise interference and enhance efficacy",
        icon: <Droplets className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Buffering Stability",
        description:
          "Stabilises spray solutions against pH fluctuations and degradation",
        icon: <Shield className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Enhanced Uptake",
        description:
          "Improves mobility and absorption in the plant for optimal performance",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
    ],
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50">
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
                Advanced Water Conditioner for Optimal Spray Performance
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                ModipHy <span className="text-[#0cc0df]">X</span>
                tra™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A high-performance water conditioner formulated to counter the
                effects of hard water and high pH levels by maximising product
                stability in the tank and mobility in the plant.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Adding ModipHy Xtra to your spray solution optimises pH levels
                and improves coverage and leaf uptake, giving a more consistent
                product performance over a broad range of spraying conditions
                and crop situations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-modiphy")
                  }
                >
                  Application Guidelines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg cursor-pointer border-[#6abf4b] text-[#6abf4b] px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-modiphy")
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
                    src={ModiphyXtraImage}
                    alt="ModipHy Xtra Water Conditioner"
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
                Premium Water Conditioner
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Benefits Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how ModipHy Xtra enhances spray solution performance
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

      {/* ModipHy Xtra in Action Section */}
      <motion.section
        className="py-20 px-4 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">ModipHy Xtra in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ModipHy Xtra works in real-world applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.youtube.com/embed/4v_OH6hMx6Q"
                title="ModipHy Xtra Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.youtube.com/embed/XvUxYHDHK30"
                title="ModipHy Xtra Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Water Conditioning Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Water Conditioning Technology
            </h2>
            <p className="text-xl text-gray-600">
              Countering hard water effects for maximum spray efficacy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Droplet className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Advanced pH and Ion Management
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Ph className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">pH Optimisation</h4>
                        <p className="text-gray-600">
                          Combination of inorganic and organic acids lowers pH,
                          preventing degradation of susceptible active
                          ingredients.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Ion Sequestration
                        </h4>
                        <p className="text-gray-600">
                          Neutralises calcium, magnesium and bicarbonate to
                          minimise interference with pesticide efficacy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Solution Stability
                        </h4>
                        <p className="text-gray-600">
                          Buffering agents stabilise against alkaline
                          hydrolysis, ensuring up to 50% better activity
                          retention.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Enhanced Performance
                      </h4>
                      <p className="text-green-700">
                        Improves coverage, uptake and consistency across diverse
                        conditions, compatible with most agrochemicals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <motion.div
              className="relative w-full max-w-lg mx-auto group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#6abf4b]/20 bg-white p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-[#6abf4b]/30">
                <div className="relative h-120 w-full">
                  <ImageWithFallback
                    src={ModiphyXtraImage}
                    alt="Spray Solution Optimisation"
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
                Advanced Formulation
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
        <div id="application-guidelines-modiphy" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Integrate ModipHy Xtra for reliable performance in any condition
            </p>
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
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Usage Recommendations
                    </h3>
                    <p className="text-green-700 mb-4">
                      Add ModipHy Xtra to the spray tank first to condition the
                      water, then incorporate other products. Use the
                      Application Rate Calculator for precise dosing based on
                      water hardness.
                    </p>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-green-700">
                        Compatible with most foliar programs
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Calculator className="h-4 w-4 text-green-600" />
                      <span className="text-green-700">
                        Tailor rates to local water quality
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Dosatron Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <ImageWithFallback
                    src={DostronImg}
                    alt="Dosatron Device"
                    className="w-full h-64 object-contain rounded-xl shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <HardDrive className="h-8 w-8 text-green-600" />
                      <h3 className="text-2xl font-semibold text-green-800">
                        Dosatron® Integration
                      </h3>
                    </div>
                    <p className="text-green-700 mb-6">
                      The Dosatron is a perfect companion, using water flow as
                      power to inject precise amounts of ModipHy Xtra directly
                      into the supply line.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-700">
                          Proportional dosing regardless of flow variations
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-700">
                          Automated mixing for consistent conditioning
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-700">
                          Easy installation in water lines
                        </span>
                      </div>
                    </div>
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
              Flexible options for all scale operations
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
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      10L
                    </Badge>
                    <p className="text-gray-600">
                      Ideal for small-scale and trial applications
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      200L
                    </Badge>
                    <p className="text-gray-600">
                      Suitable for medium operations and regular use
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Efficient for large-scale conditioning programs
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
        id="technical-resources-modiphy"
        productName="ModipHy Xtra™"
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
                  Contact us for more information about ModipHy Xtra™
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
