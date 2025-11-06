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
  Wheat,
  Flower,
  Activity,
  Sunrise,
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
      icon: <Sunrise className="h-8 w-8 text-[#6abf4b]" />,
      title: "Oilseed Rape Specialist",
      description:
        "Specifically formulated to meet the unique nutritional demands of oilseed rape crops",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Oil Content",
      description:
        "Promotes oil synthesis and quality for premium marketable yields",
    },
    {
      icon: <Target className="h-8 w-8 text-[#6abf4b]" />,
      title: "Critical Growth Stage Support",
      description:
        "Optimised nutrition during key developmental periods for maximum impact",
    },
    {
      icon: <Activity className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improved Winter Hardiness",
      description:
        "Enhances plant resilience and survival through challenging winter conditions",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6abf4b]" />,
      title: "Proven Performance",
      description:
        "Field-tested formulation delivering consistent results across UK conditions",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
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
      icon: <Sprout className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      stage: "Spring Recovery",
      timing: "Green area index 0.5-1.0",
      rate: "2-3 l/ha",
      notes: "Support rapid spring growth and stem extension",
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      stage: "Pre-Flowering",
      timing: "Bud visible to yellow bud",
      rate: "2-3 l/ha",
      notes: "Optimise flower development and pod set",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Flower className="h-5 w-5 text-[#6abf4b]" />,
    },
    {
      stage: "Pod Fill",
      timing: "Early pod development",
      rate: "2-3 l/ha",
      notes: "Enhance seed development and oil content",
      color: "bg-blue-100 text-blue-800",
      icon: <Package className="h-5 w-5 text-[#6abf4b]" />,
    },
  ];

  const analysisData = {
    "Nitrogen (N)": "8.0",
    "Phosphorus (P₂O₅)": "24.0",
    "Potassium (K₂O)": "14.0",
    "Magnesium (MgO)": "3.0",
    "Sulphur (SO₃)": "6.0",
    "Boron (B)": "0.5",
    "Manganese (Mn)": "1.2",
  };

  const pdfLinks = [
    {
      title: "OilSeed Raiser™ Leaflet",
      description:
        "Complete product information and application guidelines for oilseed rape",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/3.%20OilSeed%20Raiser%E2%84%A2/OilSeed%20Raiser%E2%84%A2%20Leaflet.pdf",
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Comprehensive guide to phosphite action information sheet",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/3.%20OilSeed%20Raiser%E2%84%A2/Phosphite%20Action%20Information%20Sheet.pdf",
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/3.%20OilSeed%20Raiser%E2%84%A2/Compatibility%20Chart.pdf",
    },
    {
      title: "YEN Trial Data",
      description: "Tank mixing compatibility with other agricultural products",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/3.%20OilSeed%20Raiser%E2%84%A2/YEN%20Trial%20Data.pdf",
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
      "Critical growth stage optimisation",
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
          "Optimised oil quality",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Oil Synthesis",
        description:
          "Specialised nutrients support oil formation and quality development",
        icon: <Sunrise className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Winter Hardiness",
        description:
          "Strengthens plant resilience for better winter survival rates",
        icon: <Shield className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Growth Optimisation",
        description: "Balanced nutrition for each critical growth stage",
        icon: <Activity className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Stress Mitigation",
        description:
          "Helps plants overcome environmental and physiological challenges",
        icon: <Award className="h-6 w-6 text-[#6abf4b]" />,
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
                Specialist Oilseed Rape Nutrition
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="text-[#007a3f]">O</span>
                il
                <span className="text-[#007a3f]">S</span>
                eed <span className="text-[#007a3f]">R</span>
                aiser™
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
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
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
                    src="/assets/product images/Phosphite/OilSeed Raiser.jpg"
                    alt="OilSeed Raiser Product"
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
                Oilseed Rape Specialist
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {applicationStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        {stage.icon}
                        <CardTitle className="text-xl">{stage.stage}</CardTitle>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                        <Badge className={`bg-[#6abf4b] text-sm px-3 py-1`}>
                          {stage.rate}
                        </Badge>
                        <p className="text-xs text-gray-600 mt-1">
                          {stage.timing}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{stage.notes}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                    src="/assets/product images/Phosphite/OilSeed Raiser.jpg"
                    alt="Oilseed Rape Growth Stages"
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
                Growth Stage Support
              </motion.div>
            </motion.div>
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
        className="py-20 px-4 bg-[#ececec]"
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
                      20L
                    </Badge>
                    <p className="text-gray-600">
                      Perfect for oilseed rape specialist nutrition programs
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
                  href="mailto:ilexsales@ilex-envirosciences.com?subject=Ilex%20Website%20Enquiry"
                  className="flex items-center gap-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                >
                  <Mail className="h-6 w-6" />
                  <p>ilexsales@ilex-envirosciences.com</p>
                </a>

                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6" />
                  <p>Monday–Friday: 09:00–17:00</p>
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
