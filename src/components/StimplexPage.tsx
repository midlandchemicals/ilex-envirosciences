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
  Heart,
  Activity,
  Sparkles,
  Waves,
  Sun,
  TreePine,
  Apple,
  Wheat,
  Flower2,
  GraduationCap,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function StimplexPage({ onSubmit }: ContactFormProps) {
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
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      title: "Enhances Root Growth & Early Development",
      description:
        "Promotes strong root system development and accelerated early plant growth",
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-600" />,
      title: "Increases Photosynthesis & Nutrient Usage",
      description:
        "Optimizes photosynthetic efficiency and enhances nutrient uptake and utilization",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Promotes Overall Plant Health",
      description:
        "Comprehensive plant health enhancement through natural biostimulation",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Maximises Environmental Stress Resistance",
      description:
        "Natural defense mechanisms against drought, heat, and other environmental stresses",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Improves Quality & Yield",
      description:
        "Enhanced crop quality characteristics and increased yield potential",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Highest Quality Standards",
      description:
        "Premium product quality and consistency from North Atlantic Ascophyllum nodosum",
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Approved for Organic Growing",
      description:
        "Certified for use in organic growing systems and sustainable agriculture",
    },
  ];

  const cropApplications = [
    {
      crop: "Brassicas",
      rate: "2.5-3.5 l/ha",
      timing:
        "Apply at 2-4 true leaf stage. Repeat at 14-21 day intervals. Final application 4-7 days prior to harvest.",
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-green-600" />,
    },
    {
      crop: "Lettuce & Leafy Salads",
      rate: "2.0-3.5 l/ha",
      timing:
        "Apply at 2-4 true leaf stage. Repeat at 10-14 day intervals. Final application 3-5 days prior to harvest.",
      color: "bg-emerald-100 text-emerald-800",
      icon: <Flower2 className="h-5 w-5 text-emerald-600" />,
    },
    {
      crop: "Potatoes",
      rate: "2.5-3.5 l/ha",
      timing:
        "Apply at early tuber bulking stages. Repeat at 14-21 day intervals.",
      color: "bg-amber-100 text-amber-800",
      icon: <Apple className="h-5 w-5 text-amber-600" />,
    },
    {
      crop: "Root Crops",
      rate: "2.5-3.5 l/ha",
      timing:
        "Apply at 2-3 weeks after emergence. Repeat at 14-21 days depending on growing season.",
      color: "bg-orange-100 text-orange-800",
      icon: <Sprout className="h-5 w-5 text-orange-600" />,
    },
    {
      crop: "Alliums",
      rate: "2.0-3.5 l/ha",
      timing:
        "Apply at 2-3 weeks after emergence. Repeat at 14-21 day intervals.",
      color: "bg-purple-100 text-purple-800",
      icon: <Target className="h-5 w-5 text-purple-600" />,
    },
    {
      crop: "Asparagus",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply to fern when sufficient foliage present. Repeat at 21-28 day intervals as required.",
      color: "bg-teal-100 text-teal-800",
      icon: <TreePine className="h-5 w-5 text-teal-600" />,
    },
    {
      crop: "Strawberries",
      rate: "1.5-2.5 l/ha",
      timing:
        "Apply 10 to 14 days after emergence. Repeat at early flowering then at 2-3 weeks intervals.",
      color: "bg-red-100 text-red-800",
      icon: <Heart className="h-5 w-5 text-red-600" />,
    },
    {
      crop: "Protected Edibles",
      rate: "2-4 ml/litre",
      timing: "Apply via drench or fertigation every 10 to 21 days.",
      color: "bg-blue-100 text-blue-800",
      icon: <Shield className="h-5 w-5 text-blue-600" />,
    },
    {
      crop: "Protected Ornamentals",
      rate: "1-2 ml/litre",
      timing: "Apply via drench or fertigation every 7 to 10 days.",
      color: "bg-pink-100 text-pink-800",
      icon: <Sparkles className="h-5 w-5 text-pink-600" />,
    },
    {
      crop: "Cereals",
      rate: "1.0-3.0 l/ha",
      timing:
        "Seed treatment: 2.0-3.0 l/tonne. Foliar: Early tillering, stem elongation, and flag leaf stages.",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />,
    },
  ];

  const pdfLinks = [
    {
      title: "Stimplex Plus Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2022/04/Stimplex_2203_vii.pdf",
    },
    {
      title: "Stimplex Action",
      description: "Mode of action and scientific background",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Stimplex-Action-i.pdf",
    },
    {
      title: "Stimplex Arcadian Brochure",
      description: "Comprehensive product brochure with case studies",
      url: "https://flipflashpages.uniflip.com/3/100974/1096744/pub/html5.html#page/1",
    },
    {
      title: "Case Study: Bell Brothers Nurseries Ltd",
      description: "Real-world application results and testimonials",
      url: "https://ilex-envirosciences.com/stimplex/_wp_link_placeholder",
    },
    {
      title: "Organic Farmers and Growers Certificate",
      description: "Official organic certification documentation",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2022/02/OFG.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other products",
      url: "https://ilex-envirosciences.com/stimplex/_wp_link_placeholder",
    },
    {
      title: "Stimplex Field Guide",
      description: "Practical field application guide",
      url: "https://interactivepdf.uniflip.com/2/100974/1088169/pub/html5.html#page/1",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Stimplex",
    productDescription:
      "A concentrated liquid biostimulant containing key natural compounds and nutrients to enhance root growth, early plant development, photosynthesis, and nutrient usage, promoting overall plant health. Maximizes natural plant resistance to environmental stresses and improves quality and yield. Derived from pure sources of North Atlantic Ascophyllum nodosum using a uniquely benign extraction process that guarantees maximum performance and consistency.",
    keyFeatures: [
      "Concentrated liquid biostimulant from North Atlantic seaweed",
      "Enhances root growth and early plant development",
      "Increases photosynthesis and nutrient usage efficiency",
      "Maximizes natural plant resistance to environmental stress",
      "Approved for use in organic growing systems",
      "Suitable for conventional and organic-grown crops",
      "Uniquely benign extraction process for maximum consistency",
    ],
    targetCrops: [
      {
        name: "Leafy Vegetables",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf development",
          "Improved stress tolerance",
          "Better nutritional quality",
          "Extended shelf life",
        ],
      },
      {
        name: "Root Vegetables",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root development",
          "Enhanced tuber quality",
          "Better storage characteristics",
          "Improved market presentation",
        ],
      },
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced root establishment",
          "Improved tillering",
          "Better grain development",
          "Increased stress tolerance",
        ],
      },
      {
        name: "Protected Crops",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Accelerated growth",
          "Enhanced productivity",
          "Better environmental adaptation",
          "Improved crop quality",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "North Atlantic Ascophyllum nodosum",
        description:
          "Premium seaweed source provides naturally balanced compounds for optimal plant biostimulation",
        icon: <Waves className="h-6 w-6 text-blue-600" />,
      },
      {
        title: "Benign Extraction Process",
        description:
          "Uniquely gentle extraction method preserves bioactive compounds for maximum efficacy",
        icon: <Beaker className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Natural Stress Resistance",
        description:
          "Enhances plants' natural defense mechanisms against environmental stresses",
        icon: <Shield className="h-6 w-6 text-purple-600" />,
      },
      {
        title: "Organic Certification",
        description:
          "Certified by Soil Association and Organic Farmers & Growers for organic systems",
        icon: <Award className="h-6 w-6 text-orange-600" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-lg px-4 py-2">
                Premium North Atlantic Seaweed Biostimulant
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Stimplex
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A concentrated liquid biostimulant containing key natural
                compounds and nutrients to enhance root growth, early plant
                development, photosynthesis, and nutrient usage, promoting
                overall plant health. Maximizes natural plant resistance to
                environmental stresses and improves quality and yield.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from pure sources of North Atlantic Ascophyllum nodosum
                using a uniquely benign extraction process that guarantees
                maximum performance and consistency. Suitable for a wide range
                of conventional and organic-grown arable, horticultural, and
                ornamental crops.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 cursor-pointer hover:bg-green-700 text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-stimplexpage")
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
                    smoothScrollToSection("technical-resources-stimplexpage")
                  }
                >
                  View Field Guide
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
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                  alt="Stimplex - Premium Seaweed Biostimulant"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl opacity-20" />
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
              Discover why Stimplex is the premium choice for natural crop
              biostimulation
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

      {/* Seaweed Technology Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              North Atlantic Seaweed Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Premium Ascophyllum nodosum with uniquely benign extraction
              process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Waves className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold">
                      Premium Seaweed Source
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        North Atlantic Ascophyllum nodosum
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Sourced from pristine North Atlantic waters, providing
                        the highest quality bioactive compounds
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Benign Extraction Process
                      </h4>
                      <p className="text-green-700 text-sm">
                        Uniquely gentle extraction method preserves maximum
                        bioactivity and consistency
                      </p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        Organic Certification
                      </h4>
                      <p className="text-orange-700 text-sm">
                        Certified by the Soil Association and licensed by
                        Organic Farmers & Growers
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Natural Compounds
                      </h4>
                      <p className="text-green-700 text-sm">
                        Contains naturally balanced plant nutrients, vitamins,
                        and bioactive compounds for comprehensive plant health
                        enhancement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                alt="North Atlantic Seaweed Harvesting"
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
        <div
          id="application-guidelines-stimplexpage"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Comprehensive crop-specific rates and timings for optimal
              biostimulation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                      <CardTitle className="text-lg">{crop.crop}</CardTitle>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                      <Badge className={`${crop.color} text-lg px-3 py-1 mb-2`}>
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
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
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Application Method
                    </h3>
                    <p className="text-green-700">
                      Recommended for application as a foliar spray at water
                      rates of 200-600 l/ha depending on the crop type and stage
                      of growth. Can also be applied through fertigation systems
                      for protected crops.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      Organic Certification
                    </h3>
                    <p className="text-blue-700">
                      Certified by the Soil Association and licensed by Organic
                      Farmers & Growers (UK2). Approved for use in organic
                      growing systems and sustainable agriculture practices.
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Premium biostimulant for all crop types and growing systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Size
                  </h3>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">
                    2 × 10L
                  </Badge>
                  <p className="text-gray-600">
                    Premium biostimulant suitable for all conventional and
                    organic crops
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-stimplexpage"
        productName="Stimplex"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white"
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
                  Contact us for more information about Stimplex
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
                    className="w-full bg-white text-green-600 hover:bg-gray-100"
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
