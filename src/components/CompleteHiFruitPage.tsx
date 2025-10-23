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
  Sprout,
  Shield,
  Heart,
  Activity,
  Sparkles,
  TreePine,
  Apple,
  Wheat,
  Flower2,
  Recycle,
  Microscope,
  Coffee,
  Factory,
  GraduationCap,
  Star,
  Crown,
  Cherry,
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function CompleteHiFruitPage({ onSubmit }: ContactFormProps) {
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
      icon: <GraduationCap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Organic Certification",
      description:
        "Certified by Organic Farmers & Growers (UK2) and The Soil Association for organic systems",
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#6abf4b]" />,
      title: "Easy-to-Use Liquid Formulation",
      description:
        "Free-flowing liquid with high water solubility and minimal sedimentation",
    },
    {
      icon: <Recycle className="h-8 w-8 text-[#6abf4b]" />,
      title: "Sustainable Plant Sources",
      description:
        "Derived from cane sugar molasses and sustainable sources of plant material",
    },
    {
      icon: <Crown className="h-8 w-8 text-[#6abf4b]" />,
      title: "Higher Potassium Content",
      description:
        "Enhanced potassium for situations with restricted crop maturity or fruit development",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6abf4b]" />,
      title: "Balanced Nutrient Combination",
      description:
        "Encourages strong and healthy growth in all fruiting and flowering plants",
    },
    {
      icon: <Coffee className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Nutrient Absorption",
      description:
        "Carbohydrates and sugars fuel beneficial microbes and fungi for better uptake",
    },
  ];

  const analysisData = {
    "Nitrogen (N)": "4.5",
    "Phosphorus (P₂O₅)": "2.0",
    "Potassium (K₂O)": "6.1",
    "Calcium (CaO)": "0.6",
    "Sulphur (SO₃)": "0.5",
    "Magnesium (MgO)": "0.5",
  };

  const pdfLinks = [
    {
      title: "Complete Hi-Fruit (4-2-6) Leaflet",
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
    productName: "Complete Hi-Fruit (4-2-6)",
    productDescription:
      "Offers higher potassium content for situations where restricted crop maturity or fruit development reduces yield potential. A free-flowing liquid with high water solubility and minimal sedimentation, used to boost plant health in outdoor vegetable and fruit crops under restricted soil fertility or poor weather, and in protected crops with increased potassium needs. Derived from cane sugar molasses and sustainable plant material, it includes carbohydrates and sugars to fuel beneficial microbes and fungi for better nutrient absorption.",
    keyFeatures: [
      "Higher potassium content (6.1% K₂O) for enhanced fruit development",
      "Free-flowing liquid with high water solubility",
      "Minimal sedimentation for reliable application",
      "Derived from sustainable cane sugar molasses and plant material",
      "Includes carbohydrates and sugars for microbial enhancement",
      "Complete mineral package with calcium, magnesium, and sulphur",
      "Organic certification from Soil Association and Organic Farmers & Growers",
    ],
    targetCrops: [
      {
        name: "Fruit Crops",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced fruit development",
          "Improved fruit quality and size",
          "Better sugar content",
          "Extended storage life",
        ],
      },
      {
        name: "Outdoor Vegetables",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Overcomes restricted soil fertility",
          "Resilience in poor weather",
          "Enhanced crop maturity",
          "Improved yield potential",
        ],
      },
      {
        name: "Protected Crops",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Meets increased potassium needs",
          "Enhanced productivity",
          "Better environmental adaptation",
          "Improved crop uniformity",
        ],
      },
      {
        name: "Flowering Plants",
        image:
          "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced flowering performance",
          "Improved bloom quality",
          "Extended flowering period",
          "Better overall plant health",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Higher Potassium Formulation",
        description:
          "6.1% K₂O provides enhanced potassium for situations with restricted crop maturity or fruit development",
        icon: <Crown className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Sustainable Plant Sources",
        description:
          "Derived from cane sugar molasses and sustainable plant material for environmental responsibility",
        icon: <Recycle className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Microbial Enhancement",
        description:
          "Carbohydrates and sugars provide fuel for beneficial microbes and fungi improving nutrient uptake",
        icon: <Microscope className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Complete Mineral Package",
        description:
          "Balanced nutrients with enhanced calcium and magnesium for comprehensive plant nutrition",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
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
                Higher Potassium 4-2-6 Formulation for Enhanced Fruit
                Development
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-black">
                Complete Hi-Fruit (4-2-6)
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Offers higher potassium content for situations where restricted
                crop maturity or fruit development reduces yield potential. A
                free-flowing liquid with high water solubility and minimal
                sedimentation, used to boost plant health in outdoor vegetable
                and fruit crops under restricted soil fertility or poor weather,
                and in protected crops with increased potassium needs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from cane sugar molasses and sustainable plant material,
                it includes carbohydrates and sugars to fuel beneficial microbes
                and fungi for better nutrient absorption. Certified organic and
                environmentally responsible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection(
                      "application-guidelines-completeHifruit"
                    )
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
                    smoothScrollToSection("technical-resources-completeHifruit")
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
                    src="/assets/product images/Organic/Complete Hi-Fruit.jpg"
                    alt="Complete Hi-Fruit - Enhanced Fruit Development"
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
                Fruit Development Specialist
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
              Discover why Complete Hi-Fruit (4-2-6) is the premium choice for
              enhanced fruit development
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
        title="Complete Hi-Fruit (4-2-6) Nutrient Analysis"
      />

      {/* Enhanced Potassium Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Enhanced Potassium Technology
            </h2>
            <p className="text-xl text-gray-600">
              Higher potassium formulation for superior fruit development and
              crop maturity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Higher Potassium Formulation
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        6.1% Potassium (K₂O)
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Enhanced potassium content for situations with
                        restricted crop maturity or fruit development
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        4.5% Nitrogen (N)
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Balanced nitrogen for healthy vegetative growth and
                        fruit development
                      </p>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        2.0% Phosphorus (P₂O₅)
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Essential for energy transfer, root development, and
                        flowering processes
                      </p>
                    </div>

                    <div className="bg-[#6abf4b]/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Complete Mineral Enhancement
                      </h4>
                      <p className="text-[#000000] text-sm">
                        Enhanced calcium (0.6%), magnesium (0.5%), and sulphur
                        (0.5%) for comprehensive fruit and flowering plant
                        nutrition.
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
                    src="/assets/product images/Organic/Complete Hi-Fruit.jpg"
                    alt="Enhanced Fruit Development"
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
                Enhanced Potassium
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Application Methods Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div
          id="application-guidelines-completeHifruit"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Methods</h2>
            <p className="text-xl text-gray-600">
              Versatile application for both foliar spray and fertigation
              systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold text-[#000000]">
                    Foliar Application
                  </h3>
                </div>
                <p className="text-[#000000] mb-6">
                  Apply as a foliar spray for direct nutrient uptake through the
                  leaves. The free-flowing liquid with high water solubility
                  ensures reliable application with minimal sedimentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      High water solubility
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Minimal sedimentation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Rapid nutrient uptake
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold text-[#000000]">
                    Fertigation
                  </h3>
                </div>
                <p className="text-[#000000] mb-6">
                  Apply through fertigation systems for root zone nutrition.
                  Particularly effective for protected crops with increased
                  potassium needs and situations with restricted soil fertility.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Enhanced microbial activity
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Improved nutrient absorption
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6abf4b]" />
                    <span className="text-[#6abf4b]">
                      Root zone development
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
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#000000]">
                      Ideal Applications
                    </h3>
                    <p className="text-[#000000]">
                      Perfect for outdoor vegetable and fruit crops under
                      restricted soil fertility or poor weather conditions, and
                      in protected crops where increased potassium needs arise
                      due to intensive growing conditions. The higher potassium
                      content specifically addresses situations where restricted
                      crop maturity or fruit development reduces yield
                      potential.
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
              Enhanced fruit development nutrition for all growing systems
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
                  <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      20L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for specialised fruit and vegetable nutrition
                      programs
                    </p>
                  </div>
                  <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale fruit and
                      vegetable production
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
        id="technical-resources-completeHifruit"
        productName="Complete Hi-Fruit (4-2-6)"
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
                  <p>sales@ilex-envirosciences.com</p>
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
                  Contact us for more information about Complete Hi-Fruit
                  (4-2-6)
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
