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
  Zap,
  Target,
  Droplets,
  Clock,
  Package,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Award,
  Sprout,
  Wheat,
  Flower,
  Activity,
  Snowflake,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function ManUpPage({ onSubmit }: ContactFormProps) {
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
      icon: <Activity className="h-8 w-8 text-[#6abf4b]" />,
      title: "High Levels of Manganese",
      description:
        "12.5% manganese content counters low availability for optimal enzyme function",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Essential Elements Readily Available",
      description:
        "Nutrients immediately available to germinating seed when needed most",
    },
    {
      icon: <Sprout className="h-8 w-8 text-[#6abf4b]" />,
      title: "Promotes Root and Shoot Development",
      description:
        "Enhanced early growth and establishment for stronger crop foundation",
    },
    {
      icon: <Snowflake className="h-8 w-8 text-[#6abf4b]" />,
      title: "Winter Hardiness Enhancement",
      description:
        "Promotes winter hardiness in autumn sown crops for better survival",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Increases Quality and Yield Potential",
      description: "Enhanced crop performance through improved nutrient status",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "True Solution Application",
      description:
        "Even application to seed with efficient coverage and quick drying",
    },
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      rate: "3.0 litres per tonne of seed",
      notes: "Enhanced establishment and winter hardiness",
      color: "bg-[#6abf4b]/10 text-[#000000]",
      icon: <Wheat className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Oilseed Rape",
      rate: "3.0 litres per tonne of seed",
      notes: "Improved winter survival and spring vigour",
      color: "bg-[#6abf4b]/10 text-[#000000]",
      icon: <Flower className="h-5 w-5 text-[#6abf4b]" />,
    },
  ];

  const analysisData = {
    "Manganese (Mn)": "12.5",
    "Nitrogen (Nitrate N)": "6.0",
  };

  const pdfLinks = [
    {
      title: "Man-uP Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/25.%20Man-uP/Man-uP%20Leaflet.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Man-uP",
    productDescription:
      "Provides a highly plant-available source of manganese to the germinating seed, combined with nitrate nitrogen, to protect cereals and oilseed rape from early deficiency problems. Ensures efficient nutrient delivery during critical early growth stages, with a proprietary blend of surfactants for excellent seed coverage and quick drying.",
    keyFeatures: [
      "12.5% manganese for maximum effectiveness",
      "6% nitrate nitrogen for immediate availability",
      "Proprietary surfactant blend for even coverage",
      "Quick drying formulation",
      "True solution for uniform application",
      "Maintains even seed flow in drill",
    ],
    targetCrops: [
      {
        name: "Wheat",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced winter hardiness",
          "Improved early establishment",
          "Better enzyme function",
          "Increased yield potential",
        ],
      },
      {
        name: "Barley",
        image:
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
        benefits: [
          "Strong early vigour",
          "Enhanced root development",
          "Better stress tolerance",
          "Improved grain quality",
        ],
      },
      {
        name: "Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced winter survival",
          "Improved spring vigour",
          "Better pod development",
          "Increased oil content",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Manganese Functions",
        description:
          "Essential for photosynthesis, enzyme activation, and chlorophyll synthesis",
        icon: <Activity className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Nitrate Nitrogen",
        description:
          "Immediately available nitrogen source for rapid early growth",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Winter Hardiness",
        description:
          "Enhanced cold tolerance and survival in autumn-sown crops",
        icon: <Snowflake className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Seed Flow Technology",
        description:
          "Maintains even seed flow in drilling equipment for uniform establishment",
        icon: <Target className="h-6 w-6 text-[#6abf4b]" />,
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
                Manganese Seed Treatment for Cereals & Oilseed Rape
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-black">
                Man-uP
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Provides a highly plant-available source of manganese to the
                germinating seed, combined with nitrate nitrogen, to protect
                cereals and oilseed rape from early deficiency problems. Ensures
                efficient nutrient delivery during critical early growth stages.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Features a proprietary blend of surfactants for excellent seed
                coverage and quick drying, maintaining even seed flow in the
                drill for uniform establishment and enhanced crop performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-manup")
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
                    smoothScrollToSection("technical-resources-manup")
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
                    src="/assets/product images/Seed Treatments/Man uP.jpg"
                    alt="Man-uP Product"
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
                Manganese Specialist
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
              Discover why Man-uP delivers superior manganese seed treatment
              performance
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
        title="Man-uP Nutrient Analysis"
      />

      {/* Manganese Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Manganese Seed Treatment Technology
            </h2>
            <p className="text-xl text-gray-600">
              Advanced formulation for critical early crop development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Activity className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Advanced Seed Treatment Formula
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-[#6abf4b]">
                          High Manganese Content
                        </h4>
                        <p className="text-gray-600">
                          12.5% manganese provides highly plant-available
                          nutrition to counter low soil availability during
                          critical germination phases.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-[#6abf4b]">
                          Nitrate Nitrogen
                        </h4>
                        <p className="text-gray-600">
                          6% nitrate nitrogen provides immediately available
                          nitrogen for rapid early growth and establishment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2 text-[#6abf4b]">
                          Surfactant Technology
                        </h4>
                        <p className="text-gray-600">
                          Proprietary surfactant blend ensures excellent seed
                          coverage, quick drying, and even seed flow in drilling
                          equipment.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#6abf4b]/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Winter Hardiness
                      </h4>
                      <p className="text-[#000000]">
                        Specially formulated to promote winter hardiness in
                        autumn-sown crops for enhanced survival and spring
                        vigour.
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
                    src="/assets/product images/Seed Treatments/Man uP.jpg"
                    alt="Healthy Winter Crop"
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
                Winter Hardiness
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
        <div id="application-guidelines-manup" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Seed treatment rates for cereals and oilseed rape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                      <Badge
                        className={`${crop.color} text-lg px-3 py-1 hover:bg-[#6abf4b]/20`}
                      >
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      {crop.notes}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 max-w-4xl mx-auto space-y-6"
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
                    <p className="text-[#000000]">
                      Apply directly to the seed or after pre-diluting with
                      water. Formulated as a totally water-soluble liquid.
                      Agitate prior to use and apply through existing seed
                      treatment equipment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Compatibility & Limits
                    </h3>
                    <p className="text-[#000000]">
                      Fully compatible with other commonly used seed treatments.
                      Clean equipment thoroughly with water after treatment. Do
                      not exceed 3.0 litres per tonne of seed.
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
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Professional manganese seed treatment
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
                <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                  <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">
                    20L
                  </Badge>
                  <p className="text-gray-600">
                    Professional manganese seed treatment for cereals and
                    oilseed rape
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-manup"
        productName="Man-uP"
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

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Product Enquiry</CardTitle>
                <CardDescription className="text-white/80">
                  Contact us for more information about Man-uP
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
