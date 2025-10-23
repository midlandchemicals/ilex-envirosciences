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
  Sun,
  Waves,
  Wheat,
  Flower,
  Gem,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function TensilePage({ onSubmit }: ContactFormProps) {
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
      icon: <Gem className="h-8 w-8 text-[#6abf4b]" />,
      title: "Silicon Cell Wall Protection",
      description:
        "Silicon deposited in cell walls forms a protective layer reducing transpiration through outer cells",
    },
    {
      icon: <Sun className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Heat Stress Tolerance",
      description:
        "Plants wilt less and are more tolerant of heat stress with improved leaf presentation to light",
    },
    {
      icon: <Sprout className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improved Stem Strength",
      description:
        "Increased strength in cell walls improves leaf presentation to light and enhances stem strength",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Nutrient Uptake",
      description:
        "Soluble silicon enhances nutrient uptake and can increase chlorophyll concentration",
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#6abf4b]" />,
      title: "Thicker, Darker Leaves",
      description:
        "Leaves can be thicker and darker green compared to those grown without soluble silicon",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Mechanical Barrier",
      description:
        "Epidermal cell walls containing silicon deposits act as a mechanical barrier to fungi and insects",
    },
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      rate: "1.25-2.5 l/ha",
      timing: "Apply at GS (Zadoks) 21-23. Repeat at G.S. 30-33",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Oilseed Rape",
      rate: "1.25-3.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Flower className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Lettuce & Leafy Salads",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply from 10-14 days post planting. Repeat at 10-14 day intervals",
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Cucurbits",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at 4-6 true leaves. Repeat at 10-14 day intervals",
      color: "bg-orange-100 text-orange-800",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Brassicas",
      rate: "1.5-3.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-blue-100 text-blue-800",
      icon: <Leaf className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Root Crops",
      rate: "1.5-3.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-purple-100 text-purple-800",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Peas & Beans",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at 6-8 true leaves. Repeat at 10-14 day intervals",
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      crop: "Alliums",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-indigo-100 text-indigo-800",
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
  ];

  const analysisData = {
    "Silicon (SiO2)": "8",
    "Potassium Oxide (K2O)": "8",
    "Phosphorus Pentoxide (P2O5)": "2",
    "Bio-active agents": "2",
  };

  const pdfLinks = [
    {
      title: "Tensile Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/TenSile-1606-i.pdf",
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
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Tensile",
    productDescription:
      "A highly efficient liquid nutrient combining silicon and potassium with phosphite P and seaweed-derived natural biostimulants, formulated to improve crop strength, quality, and shelf life. Contains a soluble form of potassium silicate to strengthen stem and leaf tissue for healthier, more robust arable, vegetable, and salad crops.",
    keyFeatures: [
      "Soluble potassium silicate for enhanced plant strength",
      "Phosphite P for rapid uptake and systemic movement",
      "Seaweed-derived natural biostimulants from Ascophyllum Nodosum",
      "Silicon deposition in cell walls for protection",
      "Enhanced heat stress tolerance and reduced transpiration",
      "Mechanical barrier against fungi and insects",
    ],
    targetCrops: [
      {
        name: "Cereals",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Stronger stems reduce lodging risk",
          "Enhanced grain fill and quality",
          "Better heat stress tolerance",
          "Improved disease resistance",
        ],
      },
      {
        name: "Leafy Salads",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        benefits: [
          "Thicker, darker green leaves",
          "Extended shelf life",
          "Better presentation and quality",
          "Enhanced nutritional content",
        ],
      },
      {
        name: "Vegetable Crops",
        image:
          "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Improved crop strength and structure",
          "Enhanced storage quality",
          "Better disease resistance",
          "Increased market value",
        ],
      },
      {
        name: "Root Crops",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root development",
          "Enhanced storage characteristics",
          "Better resistance to stress",
          "Improved quality and yield",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Silicon Technology",
        description:
          "Soluble silicon increases deposited in cell walls, forming a protective layer that strengthens plants",
        icon: <Gem className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Phosphite Action",
        description:
          "Rapid uptake and systemic movement of phosphite P enhances plant nutrition and defense",
        icon: <Zap className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Seaweed Biostimulants",
        description:
          "Natural compounds from Ascophyllum Nodosum enhance plant metabolism and stress tolerance",
        icon: <Waves className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Enhanced Photosynthesis",
        description:
          "Improved leaf presentation to light and increased chlorophyll concentration boost photosynthesis",
        icon: <Sun className="h-6 w-6 text-[#6abf4b]" />,
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
                Silicon + Potassium + Phosphite P + Seaweed Biostimulants
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Ten
                <span className="text-[#ff5757]">si</span>
                le™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A highly efficient liquid nutrient combining silicon and
                potassium with phosphite P and seaweed-derived natural
                biostimulants, formulated to improve crop strength, quality, and
                shelf life. Contains a soluble form of potassium silicate to
                strengthen stem and leaf tissue.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Increases silicon deposited in cell walls, forming a protective
                layer that reduces transpiration, enhances heat stress
                tolerance, improves leaf presentation to light, enhances stem
                strength, boosts nutrient uptake, and acts as a mechanical
                barrier to fungi and insects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-white text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-tensilepage")
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
                    smoothScrollToSection("technical-resources-tensilepage")
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
                    src="/assets/product images/Phosphite/TenSile.jpg"
                    alt="Tensile Product"
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
                Strength & Protection
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      {/* <ProductShowcase {...showcaseData} /> */}

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
              Discover how Tensile's silicon technology delivers superior crop
              strength and quality
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
        title="Tensile Composition Analysis"
      />

      {/* Silicon Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Silicon Technology Explained
            </h2>
            <p className="text-xl text-gray-600">
              Understanding how silicon strengthens plants and enhances
              performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Gem className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      How Silicon Works
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Cell Wall Strengthening
                        </h4>
                        <p className="text-gray-600">
                          Silicon is deposited in cell walls, forming a
                          protective silica layer that strengthens the entire
                          plant structure.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Reduced Transpiration
                        </h4>
                        <p className="text-gray-600">
                          The silica layer reduces water loss through
                          transpiration, helping plants cope with water stress
                          and heat.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Sun className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Enhanced Light Utilization
                        </h4>
                        <p className="text-gray-600">
                          Stronger stems and improved leaf angle optimize light
                          interception and photosynthetic efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-[#6abf4b] mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">
                          Natural Defense Barrier
                        </h4>
                        <p className="text-gray-600">
                          Silicon deposits create a mechanical barrier that
                          deters insect feeding and reduces fungal penetration.
                        </p>
                      </div>
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
                    src="/assets/product images/Phosphite/TenSile.jpg"
                    alt="Tensile Silicon Technology"
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
                Advanced Silicon Formulation
              </motion.div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-[#6abf4b]" />
                  <h3 className="text-2xl font-semibold">
                    Available Pack Sizes
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      2 × 10L
                    </Badge>
                    <p className="text-gray-600">
                      Ideal for targeted applications and smaller operations
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective for large-scale farming operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
          id="application-guidelines-tensilepage"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Flexible application programs for various crop types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cropApplications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      {app.icon}
                      <CardTitle className="text-lg">{app.crop}</CardTitle>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                      <Badge className={`bg-[#6abf4b] text-sm px-3 py-1`}>
                        {app.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      {app.timing}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Application Method
                    </h3>
                    <p className="text-gray-700">
                      Best applied as a foliar spray at water rates of 200-600
                      l/ha depending on crop type and growth stage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sprout className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Propagated Plants
                    </h3>
                    <p className="text-gray-700">
                      Apply at 3-4 ml per litre of water via irrigation
                      techniques just prior to planting out.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Benefit Highlight Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Tensile™?</h2>
            <p className="text-xl text-gray-600">
              The science behind superior crop strength and protection
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Gem className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">
                      Cell Wall Protection
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Silicon deposits form a protective layer in cell walls,
                    reducing transpiration and enhancing structural integrity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">
                      Heat Stress Tolerance
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Improves plant resilience to high temperatures and water
                    stress through better water retention and leaf orientation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-[#ececec] rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <Gem className="h-16 w-16 text-[#6abf4b] mx-auto mb-2" />
                    <p className="text-xl font-semibold text-gray-800">
                      Silicon
                    </p>
                    <p className="text-lg text-gray-600">Technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">
                      Mechanical Barrier
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Creates a natural defense against pests and diseases by
                    reinforcing epidermal cell walls.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-xl font-semibold">
                      Nutrient Enhancement
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Boosts uptake of essential nutrients and increases
                    chlorophyll for improved photosynthesis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks
        id="technical-resources-tensilepage"
        productName="Tensile"
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
                  Contact us for more information about Tensile
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
