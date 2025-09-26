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
  Sunrise,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

export function OilSeedRaiserPage({ onSubmit }: ContactFormProps) {
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
      icon: <Sunrise className="h-8 w-8 text-yellow-600" />,
      title: "Oilseed Rape Specialist",
      description:
        "Specifically formulated to meet the unique nutritional demands of oilseed rape crops",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Oil Content",
      description:
        "Promotes oil synthesis and quality for premium marketable yields",
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Critical Growth Stage Support",
      description:
        "Optimized nutrition during key developmental periods for maximum impact",
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-600" />,
      title: "Improved Winter Hardiness",
      description:
        "Enhances plant resilience and survival through challenging winter conditions",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Proven Performance",
      description:
        "Field-tested formulation delivering consistent results across UK conditions",
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-600" />,
      title: "Stress Tolerance",
      description:
        "Improves plant ability to cope with environmental and physiological stresses",
    },
  ];

  const applicationStages = [
    {
      stage: "Autumn Establishment",
      timing: "4-6 leaf stage",
      rate: "2-3 l/ha",
      notes: "Critical for strong plant development before winter",
      color: "bg-orange-100 text-orange-800",
      icon: <Sprout className="h-5 w-5 text-orange-600" />,
    },
    {
      stage: "Spring Recovery",
      timing: "Green area index 0.5-1.0",
      rate: "2-3 l/ha",
      notes: "Support rapid spring growth and stem extension",
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-green-600" />,
    },
    {
      stage: "Pre-Flowering",
      timing: "Bud visible to yellow bud",
      rate: "2-3 l/ha",
      notes: "Optimize flower development and pod set",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Flower className="h-5 w-5 text-yellow-600" />,
    },
    {
      stage: "Pod Fill",
      timing: "Early pod development",
      rate: "2-3 l/ha",
      notes: "Enhance seed development and oil content",
      color: "bg-blue-100 text-blue-800",
      icon: <Package className="h-5 w-5 text-blue-600" />,
    },
  ];

  const analysisData = {
    "Nitrogen (N)": "8.0",
    "Phosphorus (P2O5)": "24.0",
    "Potassium (K2O)": "14.0",
    "Magnesium (MgO)": "3.0",
    "Sulphur (SO3)": "6.0",
    "Boron (B)": "0.5",
    "Manganese (Mn)": "1.2",
  };

  const pdfLinks = [
    {
      title: "OilSeed Raiser™ Leaflet",
      description:
        "Complete product information and application guidelines for oilseed rape",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/Oil-Seed-Raiser-2003-i.pdf",
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Comprehensive guide to phosphite action information sheet",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/phosphites-1701-iv.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2023/10/Compatibility-Chart-0923-ii.pdf",
    },
    {
      title: "YEN Trial Data",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/YEN-Trial-Update-July-17.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "OilSeed Raiser™",
    productDescription:
      "A specialist foliar nutrition solution specifically formulated for oilseed rape. Designed to support critical growth stages from autumn establishment through to harvest, delivering the precise nutrients needed for premium oil content and maximum yields.",
    keyFeatures: [
      "Oilseed rape specialist formulation",
      "Multi-stage application program",
      "Enhanced oil synthesis support",
      "Winter hardiness improvement",
      "Critical growth stage optimization",
      "Proven UK field performance",
    ],
    targetCrops: [
      {
        name: "Winter Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced autumn establishment",
          "Improved winter survival",
          "Better spring recovery",
          "Increased oil content and yield",
        ],
      },
      {
        name: "Spring Oilseed Rape",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Rapid establishment support",
          "Accelerated growth and development",
          "Enhanced flowering and pod set",
          "Optimized oil quality",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Oil Synthesis",
        description:
          "Specialized nutrients support oil formation and quality development",
        icon: <Sunrise className="h-6 w-6 text-yellow-600" />,
      },
      {
        title: "Winter Hardiness",
        description:
          "Strengthens plant resilience for better winter survival rates",
        icon: <Shield className="h-6 w-6 text-blue-600" />,
      },
      {
        title: "Growth Optimization",
        description: "Balanced nutrition for each critical growth stage",
        icon: <Activity className="h-6 w-6 text-green-600" />,
      },
      {
        title: "Stress Mitigation",
        description:
          "Helps plants overcome environmental and physiological challenges",
        icon: <Award className="h-6 w-6 text-purple-600" />,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-lg px-4 py-2">
                Specialist Oilseed Rape Nutrition
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
                OilSeed Raiser™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A specialist foliar nutrition solution specifically formulated
                for oilseed rape. Designed to support critical growth stages
                from autumn establishment through to harvest, delivering the
                precise nutrients needed for premium oil content and maximum
                yields.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enhanced with essential macro and micronutrients tailored to
                oilseed rape requirements, OilSeed Raiser™ delivers targeted
                nutrition when your crop needs it most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-600 cursor-pointer hover:bg-yellow-700 text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection(
                      "application-guidelines-oilseedraiser"
                    )
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
                    smoothScrollToSection("technical-resources-oilseedraiser")
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="OilSeed Raiser Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-blue-400 rounded-2xl opacity-20" />
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
              Discover why OilSeed Raiser™ delivers superior nutrition
              specifically for oilseed rape
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
        title="OilSeed Raiser™ Nutrient Analysis"
      />

      {/* Application Guidelines */}
      <motion.section
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div
          id="application-guidelines-oilseedraiser"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Strategic nutrition program for oilseed rape growth stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applicationStages.map((stage, index) => (
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
                      {stage.icon}
                      <CardTitle className="text-xl">{stage.stage}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {stage.timing}
                          </span>
                          <Badge className={`${stage.color} text-sm px-2 py-1`}>
                            {stage.rate}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{stage.notes}</p>
                      </div>
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
            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">
                      Application Method
                    </h3>
                    <p className="text-blue-700">
                      Apply in 200-400 l/ha of water ensuring good coverage.
                      Time applications to coincide with active growth periods
                      for maximum uptake efficiency.
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-yellow-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Convenient sizes for all oilseed rape growing operations
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
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      20L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for oilseed rape specialist nutrition programs
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      1000L IBC
                    </Badge>
                    <p className="text-gray-600">
                      Cost-effective solution for large-scale oilseed rape
                      production
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
        id="technical-resources-oilseedraiser"
        productName="OilSeed Raiser™"
        links={pdfLinks}
      />

      {/* Contact Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-blue-600 text-white"
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
                  Contact us for more information about OilSeed Raiser™
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
