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
  Heart,
  Activity,
  Sparkles,
  TreePine,
  Apple,
  Wheat,
  Flower2,
  Factory,
  GraduationCap,
  Star,
  Crown,
  Cherry,
  Gem,
  Trophy,
  Flame,
  Fish,
  Waves,
  Home,
  Microscope,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function UltimateGoldPage({ onSubmit }: ContactFormProps) {
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
      icon: <Fish className="h-8 w-8 text-[#6abf4b]" />,
      title: "Safe & Effective Fish Extract Source",
      description:
        "Derived from blended fish extracts providing complete organic nutrition in suspension form",
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#6abf4b]" />,
      title: "Very High Quality Suspension",
      description:
        "Premium suspension formulation specifically developed for protected cropping applications",
    },
    {
      icon: <Home className="h-8 w-8 text-[#6abf4b]" />,
      title: "Designed for Protected Cropping",
      description:
        "Specifically formulated for use in greenhouse and protected growing environments",
    },
    {
      icon: <Atom className="h-8 w-8 text-[#6abf4b]" />,
      title: "High Levels of Essential Micronutrients",
      description:
        "Contains very high levels of all essential micronutrients for comprehensive plant nutrition",
    },
    {
      icon: <Sprout className="h-8 w-8 text-[#6abf4b]" />,
      title: "Seedling & Plug Plant Applications",
      description:
        "Specifically recommended for seedling development and plug plant nutrition programs",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Balanced 8-7-7 Formulation",
      description:
        "Perfect balance of nitrogen, phosphorus, and potassium for vigorous early growth",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Fully Approved for Organic Systems",
      description:
        "Certified by the Soil Association for use in organic cropping systems in the UK",
    },
  ];

  const analysisData = {
    "Nitrogen (N)": "8.0",
    "Phosphorus (P2O5)": "7.0",
    "Potassium (K2O)": "7.0",
    "Calcium (CaO)": "0.3",
    "Sulphur (SO3)": "0.5",
    "Magnesium (MgO)": "0.1",
  };

  const pdfLinks = [
    {
      title: "Ultimate Gold (8-7-7) Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Organic-Umbrella-1606i.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Ultimate Gold (8-7-7)",
    productDescription:
      "A very high quality suspension of blended fish extracts, specifically for use in protected cropping situations. Contains very high levels of all essential micronutrients and is recommended for seedling and plug plant applications. Derived from organic sources, it is a safe and effective nutrient solution for organic cropping systems.",
    keyFeatures: [
      "Very high quality suspension of blended fish extracts",
      "Specifically designed for protected cropping applications",
      "Contains very high levels of essential micronutrients",
      "Perfect 8-7-7 balanced formulation for early growth",
      "Recommended for seedling and plug plant applications",
      "Derived from organic fish extract sources",
      "Certified by Soil Association for organic cropping systems",
    ],
    targetCrops: [
      {
        name: "Seedlings",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced early development",
          "Strong root establishment",
          "Improved survival rates",
          "Accelerated growth",
        ],
      },
      {
        name: "Plug Plants",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Superior plug quality",
          "Enhanced transplant success",
          "Uniform development",
          "Reduced transplant shock",
        ],
      },
      {
        name: "Protected Vegetables",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced greenhouse productivity",
          "Improved crop uniformity",
          "Better environmental adaptation",
          "Premium crop quality",
        ],
      },
      {
        name: "Protected Ornamentals",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Exceptional flowering performance",
          "Enhanced bloom quality",
          "Superior plant vigor",
          "Extended production cycles",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Blended Fish Extract Source",
        description:
          "High-quality suspension derived from blended fish extracts for complete organic nutrition",
        icon: <Fish className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Protected Cropping Specialist",
        description:
          "Specifically formulated for optimal performance in greenhouse and protected growing environments",
        icon: <Home className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "High Micronutrient Content",
        description:
          "Contains very high levels of all essential micronutrients for comprehensive plant development",
        icon: <Microscope className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Organic Certification",
        description:
          "Fully approved and certified for use in organic cropping systems by the Soil Association",
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
        <div className="absolute inset-0 bg-[#ececec]/50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20 text-lg px-4 py-2">
                Premium Fish Extract Suspension for Protected Cropping
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6abf4b] to-[#5aa338] bg-clip-text text-transparent">
                Ultimate Gold (8-7-7)
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A very high quality suspension of blended fish extracts,
                specifically for use in protected cropping situations. Contains
                very high levels of all essential micronutrients and is
                recommended for seedling and plug plant applications. The
                ultimate choice for premium protected crop nutrition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from organic sources, it is a safe and effective
                nutrient solution for organic cropping systems. Fully approved
                and certified for use in organic cropping systems in the UK by
                the Soil Association.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-ultimategold")
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
                    smoothScrollToSection("technical-resources-ultimategold")
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
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                  alt="Ultimate Gold - Premium Protected Cropping Nutrition"
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
              Discover why Ultimate Gold (8-7-7) is the premium choice for
              protected cropping systems
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
        title="Ultimate Gold (8-7-7) Premium Analysis"
      />

      {/* Premium Fish Extract Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Premium Fish Extract Technology
            </h2>
            <p className="text-xl text-gray-600">
              Very high quality suspension of blended fish extracts for
              protected cropping excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Premium 8-7-7 Formulation
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        8.0% Nitrogen (N)
                      </h4>
                      <p className="text-green-700 text-sm">
                        High nitrogen content from fish extracts for vigorous
                        early growth and development
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        7.0% Phosphorus (P2O5)
                      </h4>
                      <p className="text-green-700 text-sm">
                        Exceptional phosphorus levels for enhanced root
                        development and energy transfer
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        7.0% Potassium (K2O)
                      </h4>
                      <p className="text-green-700 text-sm">
                        High potassium content for superior plant health and
                        stress tolerance
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Essential Micronutrients
                      </h4>
                      <p className="text-green-700 text-sm">
                        Very high levels of all essential micronutrients from
                        fish extracts including calcium (0.3%), sulphur (0.5%),
                        and magnesium (0.1%) for comprehensive nutrition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                alt="Premium Protected Cropping"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Protected Cropping Applications Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div
          id="application-guidelines-ultimategold"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Protected Cropping Applications
            </h2>
            <p className="text-xl text-gray-600">
              Specialized applications for greenhouse and protected growing
              systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-800">
                    Foliar Application
                  </h3>
                </div>
                <p className="text-green-700 mb-6">
                  Apply as a foliar spray for immediate nutrient uptake. The
                  high-quality suspension ensures optimal absorption of
                  nutrients and micronutrients in protected environments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">
                      Premium fish extract nutrition
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">
                      High micronutrient availability
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">
                      Rapid seedling development
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-800">
                    Fertigation
                  </h3>
                </div>
                <p className="text-green-700 mb-6">
                  Apply through fertigation systems for comprehensive root zone
                  nutrition. Ideal for seedling and plug plant production in
                  controlled environments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">
                      Root zone micronutrient delivery
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">
                      Enhanced plug plant quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">
                      Improved transplant success
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Seedling & Plug Plant Specialist
                    </h3>
                    <p className="text-green-700">
                      Ultimate Gold is specifically recommended for seedling and
                      plug plant applications in protected cropping situations.
                      The very high quality suspension of blended fish extracts
                      provides essential micronutrients for superior early
                      development and enhanced transplant success rates.
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
              Premium fish extract nutrition for protected cropping systems
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
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      20L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for specialized seedling and plug plant production
                    </p>
                  </div>
                  <div className="text-center p-6 bg-green-100 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale protected cropping
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
        id="technical-resources-ultimategold"
        productName="Ultimate Gold (8-7-7)"
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
                  Contact us for more information about Ultimate Gold (8-7-7)
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
