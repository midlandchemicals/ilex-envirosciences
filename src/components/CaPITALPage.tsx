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
let capitalImage = "";
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
} from "lucide-react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function CaPITALPage({ onSubmit }: ContactFormProps) {
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
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Root Development",
      description:
        "The provision of optimum levels of Calcium are important for root development, maintaining plant health and strengthening cell walls for improved quality and shelf life",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Plant Health",
      description:
        "Maintains overall plant health through superior calcium nutrition and phosphite technology",
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-600" />,
      title: "Strengthens Cell Walls",
      description:
        "Calcium strengthens cell walls for improved crop quality and extended shelf life",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Fast-Acting Nutrition",
      description:
        "Formulated for rapid absorption and maximum availability at key growth stages",
    },
    {
      icon: <Target className="h-8 w-8 text-cyan-600" />,
      title: "Vegetable & Salad Specialist",
      description:
        "Specifically formulated for vegetable and salad crops with proven phosphite technology",
    },
    {
      icon: <Atom className="h-8 w-8 text-green-500" />,
      title: "Enhanced Formulation",
      description:
        "Contains high levels of soluble calcium with key nutrients boron and zinc",
    },
  ];

  const crops = [
    {
      name: "Potatoes",
      rate: "2.0 l/ha",
      timing:
        "Apply at start of tuber bulking. Repeat @ 2.0 l/ha during tuber bulking",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Roots",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply @ 4-6 true leaves. Repeat every 14-21 days depending on growing season",
      color: "bg-amber-100 text-amber-800",
    },
    {
      name: "Brassicas*",
      rate: "2.0-3.0 l/ha",
      timing:
        "Apply from 4-6 true leaves. Repeat at 10-14 day intervals as required",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Alliums*",
      rate: "2.0-3.0 l/ha",
      timing: "Apply from 3-4 true leaves. Repeat at 14-21 day intervals",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const analysisData = {
    "Nitrogen (ureic N)": "4",
    "Phosphorus Pentoxide (P₂O₅)": "30",
    "Potassium (K₂O)": "8",
    "Calcium (as CaO)": "6.6",
    "Boron (B)": "0.8",
    "Zinc (Zn)": "2.4",
  };

  const pdfLinks = [
    {
      title: "CaPITAL™ Leaflet",
      description: "Complete product information and application guidelines",
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Technical information about phosphite mode of action",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "CaPITAL™",
    productImage: capitalImage,
    productDescription:
      "A highly effective foliar treatment specifically formulated for vegetable and salad crops, using proven phosphite technology to optimize healthy plant growth through superior nutrition. Contains high levels of soluble calcium together with boron and zinc, important for root development, maintaining plant health, and strengthening cell walls for improved quality and shelf life.",
    keyFeatures: [
      "Proven phosphite technology for superior nutrition",
      "High levels of soluble calcium for cell wall strength",
      "Contains key nutrients boron and zinc",
      "Fast-acting formulation for maximum availability",
      "Specifically designed for vegetable and salad crops",
      "Improves quality and extends shelf life",
    ],
    targetCrops: [
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tuber quality and structure",
          "Improved skin set and storage life",
          "Better calcium content in tubers",
          "Reduced susceptibility to physiological disorders",
        ],
      },
      {
        name: "Brassicas",
        image:
          "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger head formation and structure",
          "Improved shelf life and storage quality",
          "Enhanced resistance to tip burn",
          "Better overall crop quality",
        ],
      },
      {
        name: "Leafy Salads",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        benefits: [
          "Improved leaf structure and crispness",
          "Extended shelf life and freshness",
          "Enhanced nutritional quality",
          "Reduced post-harvest deterioration",
        ],
      },
      {
        name: "Root Vegetables",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root development",
          "Improved storage quality",
          "Enhanced nutrient density",
          "Better resistance to storage rots",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Phosphite Technology",
        description:
          "Advanced phosphite formulation provides immediate plant availability and systemic movement",
        icon: <Atom className="h-6 w-6 text-blue-600" />,
      },
      {
        title: "Calcium Fortification",
        description:
          "High levels of soluble calcium strengthen cell walls and improve structural integrity",
        icon: <Shield className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Micronutrient Complex",
        description:
          "Boron and zinc work synergistically with calcium for optimal plant metabolism",
        icon: <Zap className="h-6 w-6 text-purple-600" />,
      },
      {
        title: "Quality Enhancement",
        description:
          "Improves crop quality, shelf life, and post-harvest performance",
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
                Proven Phosphite Technology for Vegetables & Salads
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CaPITAL™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                With Ilex's proven phosphite technology to optimise healthy
                plant growth through superior nutrition, CaPITAL is a highly
                effective foliar treatment specifically formulated for vegetable
                and salad crops.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CaPITAL is a new generation phosphite, containing high levels of
                soluble calcium together with the key nutrients, boron and zinc.
                The provision of optimum levels of calcium are important for
                root development, maintaining plant health and strengthening
                cell walls for improved quality and shelf life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                >
                  Get Product Info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Technical Data
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
                <img
                  src={capitalImage}
                  alt="CaPITAL Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      <ProductShowcase {...showcaseData} />

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
              Discover why CaPITAL™ delivers superior performance for vegetable
              and salad crops
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
        title="CaPITAL™ Nutrient Analysis"
      />

      {/* Technical Analysis Section */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Technical Analysis</h2>
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FlaskConical className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold">
                        Primary Nutrients
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Phosphorus Pentoxide (P₂O₅)
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="text-lg px-3 py-1"
                          >
                            30% w/v
                          </Badge>
                          <Badge variant="outline">300 g/l</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Potassium (K₂O)</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="px-3 py-1">
                            8% w/v
                          </Badge>
                          <Badge variant="outline">80 g/l</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Calcium (as CaO)</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="px-3 py-1">
                            6.6% w/v
                          </Badge>
                          <Badge variant="outline">66 g/l</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Atom className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">
                        Key Micronutrients
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <p className="text-xl font-semibold text-green-600 mb-1">
                          2.4%
                        </p>
                        <p className="text-sm text-gray-600">Zinc (Zn)</p>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <p className="text-xl font-semibold text-blue-600 mb-1">
                          0.8%
                        </p>
                        <p className="text-sm text-gray-600">Boron (B)</p>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <p className="text-xl font-semibold text-purple-600 mb-1">
                          4%
                        </p>
                        <p className="text-sm text-gray-600">Nitrogen (N)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Package className="h-6 w-6 text-purple-600" />
                      <h3 className="text-xl font-semibold">
                        Pack Sizes Available
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        2 × 10L
                      </Badge>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        1000L IBC
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <img
                src={capitalImage}
                alt="CaPITAL Product"
                className="w-full h-auto max-h-96 object-contain rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Application Rates & Timings
            </h2>
            <p className="text-xl text-gray-600">
              Optimized application guidelines for vegetable and salad crops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {crops.map((crop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{crop.name}</CardTitle>
                      <Badge className={crop.color}>{crop.rate}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
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
            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      Application Method
                    </h3>
                    <p className="text-blue-700">
                      CaPITAL is best applied as a foliar spray at water rates
                      of between 200-600 l/ha depending on the crop type and
                      stage of growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sprout className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Propagated Plants
                    </h3>
                    <p className="text-green-700">
                      *Propagated plants will benefit from an application of
                      CaPITAL via irrigation techniques at a rate of 3-4 mls per
                      litre of water ideally just prior to planting out.
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
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose CaPITAL™?</h2>
            <p className="text-xl text-gray-600">
              The science behind superior vegetable and salad crop nutrition
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                    <h3 className="text-xl font-semibold">Root Development</h3>
                  </div>
                  <p className="text-gray-600">
                    Optimum calcium levels promote strong, healthy root systems
                    that support vigorous plant growth and nutrient uptake.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-semibold">Plant Health</h3>
                  </div>
                  <p className="text-gray-600">
                    Maintains overall plant health through proven phosphite
                    technology and superior calcium nutrition.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <FlaskConical className="h-16 w-16 text-green-600 mx-auto mb-2" />
                    <p className="text-xl font-semibold text-gray-800">
                      Proven
                    </p>
                    <p className="text-lg text-gray-600">Technology</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="h-8 w-8 text-purple-600" />
                    <h3 className="text-xl font-semibold">
                      Cell Wall Strength
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Strengthens cell walls for improved crop quality, better
                    storage characteristics, and extended shelf life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-orange-600" />
                    <h3 className="text-xl font-semibold">Fast-Acting</h3>
                  </div>
                  <p className="text-gray-600">
                    Formulated for rapid absorption and maximum nutrient
                    availability at critical growth stages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="CaPITAL™" links={pdfLinks} />

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
                  Contact us for more information about CaPITAL™
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
