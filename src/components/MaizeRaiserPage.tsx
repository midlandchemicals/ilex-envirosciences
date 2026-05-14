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
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
import { PDFLinks } from "./PDFLinks";
import { AnalysisPieChart } from "./AnalysisPieChart";
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
  Sprout,
  TrendingUp,
  Shield,
  Activity,
  Award,
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

export function MaizeRaiserPage({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      title: "Rapid Foliar Uptake",
      description:
        "Nutrients are absorbed rapidly, bypassing soil limitations. Delivers highly plant-available phosphate for immediate plant use.",
    },
    {
      icon: <Sprout className="h-8 w-8 text-[#6abf4b]" />,
      title: "Vigorous Establishment",
      description:
        "Supports strong root development, canopy formation, and overall crop vigour during critical early growth stages.",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Balanced Nutrient Package",
      description:
        "Contains essential Potassium, Magnesium, Calcium, and Zinc to support plant structure and photosynthesis.",
    },
    {
      icon: <Beaker className="h-8 w-8 text-[#6abf4b]" />,
      title: "Excellent Tank-Mix Flexibility",
      description:
        "Fully water-soluble true solution with rapid dispersion. Compatible with most crop protection programmes.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#6abf4b]" />,
      title: "Higher Yield Potential",
      description:
        "Maintains crop vigour and yield potential even during cold conditions and nutrient lock-up situations.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Stress Tolerance",
      description:
        "Helps crops handle environmental stress, improving energy transfer and cellular integrity.",
    },
  ];

  const crops = [
    {
      name: "Maize",
      rate: "3.0 – 5.0 l/ha",
      timing:
        "Apply from 6-leaf stage onwards and during rapid vegetative growth",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Cereals",
      rate: "2.0 – 4.0 l/ha",
      timing:
        "Apply at GS 23–30, GS 39–45, and GS 50–59 (Zadoks Growth Stage Scale)",
      color: "bg-green-50 text-green-800",
    },
  ];

  const analysisData = {
    "Phosphorus Pentoxide (P₂O₅)": "40.0",
    "Potassium Oxide (K₂O)": "8.0",
    "Magnesium Oxide (MgO)": "6.0",
    "Zinc (Zn)": "4.0",
    "Calcium Oxide (CaO)": "1.2",
  };

  const pdfLinks = [
    {
      title: "Maize Raiser™ Leaflet",
      description: "Complete product information and technical specifications",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/Maize-raiser.pdf",
    },
  ];

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
                High-Strength Liquid Foliar Fertiliser
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Maize Raiser
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A concentrated liquid foliar fertiliser designed mainly for
                Maize and Cereals. It provides rapid nutrient availability to
                support strong crop establishment, vigorous early growth, better
                crop performance, and higher yield potential.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Maize Raiser supplies highly plant-available phosphate along
                with Potassium, Magnesium, Calcium, and Zinc. The formulation is
                intended to support crops during critical early growth stages,
                bypassing soil limitations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-white text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-maizeraiser")
                  }
                >
                  Application Guidelines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg cursor-pointer px-8 py-4 border-[#6abf4b] text-[#6abf4b] hover:bg-[#6abf4b]/10 bg-white"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-maizeraiser")
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
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#6abf4b]/20 bg-white p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-[#6abf4b]/30">
                <div className="relative aspect-square w-full flex justify-center items-center p-8">
                  <ImageWithFallback
                    src="/assets/product images/Foliar/maize-raiser.jpg?v=1"
                    alt="Maize Raiser Logo"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[#6abf4b]/20" />

                <div className="absolute -left-0.5 -top-0.5 h-6 w-0.5 bg-[#6abf4b] transition-all duration-300 group-hover:h-8" />
                <div className="absolute -left-0.5 -top-0.5 h-0.5 w-6 bg-[#6abf4b] transition-all duration-300 group-hover:w-8" />
                <div className="absolute -right-0.5 -bottom-0.5 h-6 w-0.5 bg-[#6abf4b] transition-all duration-300 group-hover:h-8" />
                <div className="absolute -right-0.5 -bottom-0.5 h-0.5 w-6 bg-[#6abf4b] transition-all duration-300 group-hover:w-8" />
              </div>

              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[#6abf4b] shadow-md"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Cereal & Maize Specialist
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Discover why Maize Raiser is the optimal choice for vigorous crop
              establishment
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
        title="Maize Raiser Nutrient Analysis"
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
              Advanced Nutrient Formulation
            </h2>
            <p className="text-xl text-gray-600">
              A balanced nutrient package tailored for critical growth stages
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FlaskConical className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Composition Breakdown
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Phosphorus Pentoxide (P₂O₅)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">40.0%</Badge>
                        <Badge variant="outline">400 g/l</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Potassium Oxide (K₂O)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">8.0%</Badge>
                        <Badge variant="outline">80 g/l</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Magnesium Oxide (MgO)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">6.0%</Badge>
                        <Badge variant="outline">60 g/l</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Zinc (Zn)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">4.0%</Badge>
                        <Badge variant="outline">40 g/l</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Calcium Oxide (CaO)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">1.2%</Badge>
                        <Badge variant="outline">12 g/l</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[#6abf4b] mb-2 flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    P₂O₅ (Phosphorus Pentoxide)
                  </h4>
                  <p className="text-gray-600">
                    Critical during early plant development for energy transfer
                    and root growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[#6abf4b] mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    K₂O (Potassium Oxide)
                  </h4>
                  <p className="text-gray-600">
                    Helps crops handle environmental stress by supporting water
                    regulation and stress tolerance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[#6abf4b] mb-2 flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    MgO (Magnesium Oxide)
                  </h4>
                  <p className="text-gray-600">
                    Essential for green leaf function, supporting chlorophyll
                    production and photosynthesis.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[#6abf4b] mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    CaO & Zn (Calcium Oxide & Zinc)
                  </h4>
                  <p className="text-gray-600">
                    Calcium supports cell strength and structural integrity,
                    while Zinc acts as a growth hormone for healthy plant growth
                    and canopy development.
                  </p>
                </CardContent>
              </Card>
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
        <div
          id="application-guidelines-maizeraiser"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Apply Maize Raiser for optimal crop performance and establishment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {crops.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{crop.name}</CardTitle>
                      <Badge className="bg-[#6abf4b] text-sm">
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{crop.timing}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Droplets className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-700">
                    Water Rates
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Best applied at 150–400 L/ha depending on crop type, growth
                    stage, and leaf area amount.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-[#6abf4b] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                    Best Practices
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Apply during early morning or evening to maximize foliar
                    absorption. Avoid applying during high crop stress or very
                    warm conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="flex items-start gap-3">
                <Beaker className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-amber-700">
                    Mixing Instructions
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Can be added at any stage. Disperses rapidly with agitation.
                    Avoid mixing with acidic spray solutions.
                  </p>
                </div>
              </div>
            </div>
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
                      2 × 10L
                    </Badge>
                    <p className="text-gray-600 mb-2">
                      Compact twin pack for easy handling
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-maizeraiser"
        productName="Maize Raiser™"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        id="contact-us"
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
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ilex+EnviroSciences+Ltd+13a+Brindley+Close+Holly+Lane+Industrial+Estate+Atherstone+Warwickshire+CV9+2QZ+United+Kingdom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200 transition-colors cursor-pointer underline decoration-1 underline-offset-2"
                    >
                      <p>
                        Ilex EnviroSciences Ltd <br /> 13a Brindley Close, Holly
                        Lane Industrial Estate, Atherstone, Warwickshire CV9
                        2QZ, United Kingdom
                      </p>
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+441827722911"
                  className="flex items-center gap-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <Phone className="h-6 w-6" />
                  <p>+44 1827 722911</p>
                </a>

                <a
                  href="mailto:sales@ilex-envirosciences.com?subject=Ilex%20Website%20Enquiry"
                  className="flex items-center gap-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <Mail className="h-6 w-6" />
                  <p>sales@ilex-envirosciences.com</p>
                </a>

                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6" />
                  <p>Monday–Friday: 09:00–17:00</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    Produced in the UK by Midland Chemicals Ltd.

                    As a primary manufacturer we are seeking to forge new partnerships throughout the agicultural and horticultural industries and would welcome all enquiries from within the UK and overseas.
                  </p>
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
