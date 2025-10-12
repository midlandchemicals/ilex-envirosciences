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
  Sprout,
  Shield,
  Activity,
  Sparkles,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function MagPlusPage({ onSubmit }: ContactFormProps) {
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
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "High Concentrated Fast-Acting",
      description:
        "Eliminates time-consuming and bulky procedures involving bags of powdered product",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Low Application Rates",
      description:
        "Superior performance even at low rates, reducing transport needs around the farm",
    },
    {
      icon: <Beaker className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Formulation",
      description:
        "Soluble Magnesium with Nitrogen for superior performance and plant uptake",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Deficiency Prevention & Correction",
      description:
        "Effective for both prevention and correction of magnesium deficiency in crops",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      title: "New Generation Technology",
      description:
        "Part of Ilex's innovative new generation of foliar nutrients",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Superior Performance",
      description:
        "Demonstrates enhanced results even at reduced application rates",
    },
  ];

  const crops = [
    {
      name: "Cereals",
      rate: "2.0 – 4.0 l/ha",
      timing:
        "Apply from Zadoks G.S. 23. To assist grain fill and quality repeat at flag leaf stage G.S. 39-41",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Oilseed Rape",
      rate: "2.0 – 4.0 l/ha",
      timing:
        "Apply from 6-8 leaves to pre-flowering. Repeat during periods of rapid growth",
      color: "bg-green-50 text-green-800",
    },
    {
      name: "Potatoes",
      rate: "3.0 – 5.0 l/ha",
      timing:
        "Apply at start of tuber bulking. Repeat @ 3.0 – 5.0 l/ha during tuber bulking",
      color: "bg-green-200 text-green-900",
    },
    {
      name: "Brassicas / Field Vegetables",
      rate: "3.0 – 5.0 l/ha",
      timing: "Apply from 6-8 true leaves. Repeat at 14-21 day intervals",
      color: "bg-green-100 text-green-800",
    },
  ];

  const analysisData = {
    "Magnesium (MgO)": "13",
    "Nitrogen (N)": "9",
  };

  const pdfLinks = [
    {
      title: "Mag Plus™ Leaflet",
      description: "Complete product information and technical specifications",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Mag-Plus-1606-i.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Mag Plus™",
    productDescription:
      "Historically the prevention and correction of magnesium deficiency has involved time-consuming and bulky procedures involving bags of powdered product. To provide farmers with an effective alternative, Ilex have introduced the high concentration liquid Mag Plus as part of their new generation of foliar nutrients. Due to its enhanced formulation of soluble Magnesium with Nitrogen, Mag Plus is able to demonstrate superior performance even at low rates of application.",
    keyFeatures: [
      "High concentration liquid formulation (13% MgO)",
      "Enhanced with nitrogen (9% N) for superior uptake",
      "Low application rates reduce transport requirements",
      "Fast-acting liquid eliminates powder handling",
      "Prevents and corrects magnesium deficiency",
      "Part of Ilex's new generation foliar nutrients",
    ],
    targetCrops: [
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced grain fill and quality",
          "Improved photosynthesis efficiency",
          "Better stress tolerance",
          "Increased yield potential",
        ],
      },
      {
        name: "Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced flowering development",
          "Improved oil content",
          "Better winter hardiness",
          "Increased pod fill",
        ],
      },
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tuber development",
          "Improved skin quality",
          "Better storage characteristics",
          "Increased marketable yield",
        ],
      },
      {
        name: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf color and quality",
          "Improved photosynthetic efficiency",
          "Better stress tolerance",
          "Increased nutritional value",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Magnesium Functions",
        description:
          "Essential for chlorophyll formation and photosynthesis, enzyme activation, and carbohydrate metabolism",
        icon: <Leaf className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Nitrogen Enhancement",
        description:
          "Nitrogen inclusion improves magnesium uptake and translocation within the plant",
        icon: <Zap className="h-6 w-6 text-blue-600" />,
      },
      {
        title: "Liquid Technology",
        description:
          "High concentration liquid formulation ensures rapid absorption and distribution",
        icon: <Droplets className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Deficiency Correction",
        description:
          "Rapidly corrects magnesium deficiency symptoms while preventing future occurrences",
        icon: <Target className="h-6 w-6 text-green-600" />,
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
              <Badge className="mb-4 bg-[#d4edc9] text-gray-900 hover:bg-[#bfe3a1] text-lg px-4 py-2">
                High Concentrated Fast-Acting Magnesium Liquid
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Mag Plus™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Historically the prevention and correction of magnesium
                deficiency has involved time-consuming and bulky procedures
                involving bags of powdered product. More recently basic liquid
                products have appeared on the market however these still require
                high dose rates and therefore the need to transport large
                volumes of product around the farm.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To provide farmers with an effective alternative Ilex have
                introduced the high concentration liquid Mag Plus as part of
                their new generation of foliar nutrients. Due to its enhanced
                formulation of soluble Magnesium with Nitrogen, Mag Plus is able
                to demonstrate superior performance even at low rates of
                application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-white text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-magplus")
                  }
                >
                  Application Guidlines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#6abf4b] text-[#6abf4b] hover:bg-[#eaf5e5] text-lg cursor-pointer px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("technical-resources-magplus")
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
                  alt="Mag Plus Product"
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
              Discover why Mag Plus™ is the preferred choice for modern
              agriculture
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
        title="Mag Plus™ Nutrient Analysis"
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
              Advanced Magnesium Technology
            </h2>
            <p className="text-xl text-gray-600">
              Enhanced formulation for superior magnesium nutrition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FlaskConical className="h-8 w-8 text-green-600" />
                    <h3 className="text-2xl font-semibold">
                      Chemical Composition
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Magnesium (MgO)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="text-lg px-3 py-1"
                        >
                          13% w/v
                        </Badge>
                        <Badge variant="outline">130 g/l</Badge>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Nitrogen (N)
                      </span>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="text-lg px-3 py-1"
                        >
                          9% w/v
                        </Badge>
                        <Badge variant="outline">90 g/l</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-green-50 to-white rounded-lg">
                        <p className="text-2xl font-bold text-green-600 mb-1">
                          13%
                        </p>
                        <p className="text-sm text-gray-600">
                          High Magnesium Content
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-white to-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600 mb-1">
                          9%
                        </p>
                        <p className="text-sm text-gray-600">
                          Enhanced with Nitrogen
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Enhanced Performance
                      </h4>
                      <p className="text-green-700 text-sm">
                        Soluble magnesium with nitrogen for superior plant
                        uptake and performance, demonstrating enhanced results
                        even at reduced application rates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop"
                alt="Agricultural Science - Magnesium Research"
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
        <div id="application-guidelines-magplus" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Apply Mag Plus for the prevention and correction of magnesium
              deficiency as follows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {crops.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{crop.name}</CardTitle>
                      <Badge className={crop.color}>{crop.rate}</Badge>
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
            className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-800">
                  Important Note
                </h3>
                <p className="text-green-700">
                  In the case of severe magnesium deficiency, repeat
                  applications are recommended for all crops until symptoms are
                  corrected.
                </p>
              </div>
            </div>
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
              Convenient packaging for all farming operations
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      2 × 10L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for smaller operations and diverse crop
                      applications
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-white to-green-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale agricultural
                      operations
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
        id="technical-resources-magplus"
        productName="Mag Plus™"
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
                  Contact us for more information about Mag Plus™
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
