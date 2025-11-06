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
  Shovel,
  Apple,
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

export function ProZestPage({ onSubmit }: ContactFormProps) {
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
      icon: <Zap className="h-8 w-8 text-[#6abf4b]" />,
      title: "Prevents Nutrition-Related Disorders",
      description:
        "Targeted nutrition prevents common potato deficiency problems and disorders",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improves Yield Potential",
      description:
        "Enhances overall yield through improved nutrient availability at planting",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#6abf4b]" />,
      title: "Enhanced Skin Finish",
      description:
        "Improves potato skin quality and appearance for better market value",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#6abf4b]" />,
      title: "Improved Storage Characteristics",
      description:
        "Calcium improves storage quality and reduces post-harvest losses",
    },
    {
      icon: <Atom className="h-8 w-8 text-[#6abf4b]" />,
      title: "Mildly Acidic Growing Environment",
      description:
        "Sulphur provides optimal pH conditions for potato development",
    },
    {
      icon: <Package className="h-8 w-8 text-[#6abf4b]" />,
      title: "Dual Formulation Options",
      description:
        "Available in both liquid and powder forms for application flexibility",
    },
  ];

  const formulations = [
    {
      type: "Liquid",
      applications: [
        {
          rate: "3 litres per tonne of seed",
          notes: "Direct seed application",
        },
        { rate: "9.0 l/ha at planting", notes: "Field application rate" },
      ],
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
    },
    {
      type: "Powder",
      applications: [
        { rate: "3.25 kg per tonne of seed", notes: "At planting application" },
      ],
      color: "bg-[#6abf4b]/10 text-[#6abf4b]",
    },
  ];

  const analysisData = {
    "Zinc (Zn) - Liquid": "25",
    "Sulphur (S) - Liquid": "25",
    "Calcium (Ca) - Liquid": "8",
    "Zinc (Zn) - Powder": "30",
    "Sulphur (S) - Powder": "30",
    "Calcium (Ca) - Powder": "10",
  };

  const pdfLinks = [
    {
      title: "ProZest Leaflet",
      description: "Complete product information and application guidelines",
      url: "https://vutnh4xhalqycq9w.public.blob.vercel-storage.com/24.%20ProZest/ProZeSt%20Leaflet.pdf",
    },
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "ProZest",
    productDescription:
      "A powder or liquid formulation of zinc, sulphur, and calcium for application to potatoes at planting to prevent and correct nutrition-related disorders and improve yield potential. Supplies key nutrients to improve skin finish and increase overall yields. Sulphur provides a mildly acidic growing environment, and calcium improves storage characteristics.",
    keyFeatures: [
      "Available in both liquid and powder formulations",
      "High zinc content (25-30%) for enzyme function",
      "Sulphur (25-30%) for soil pH optimisation",
      "Calcium (8-10%) for storage quality",
      "At-planting application for immediate availability",
      "Prevents nutrition-related disorders",
    ],
    targetCrops: [
      {
        name: "Potatoes",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced skin finish and quality",
          "Improved yield potential",
          "Better storage characteristics",
          "Reduced nutritional disorders",
        ],
      },
    ],
    scientificBenefits: [
      {
        title: "Zinc Functions",
        description:
          "Essential for enzyme systems, protein synthesis, and growth regulation",
        icon: <Atom className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Sulphur Environment",
        description:
          "Creates mildly acidic growing conditions optimal for potato development",
        icon: <Beaker className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "Calcium Enhancement",
        description: "Improves cell wall strength and storage characteristics",
        icon: <Shield className="h-6 w-6 text-[#6abf4b]" />,
      },
      {
        title: "At-Planting Application",
        description:
          "Immediate nutrient availability when potato plants need it most",
        icon: <Shovel className="h-6 w-6 text-[#6abf4b]" />,
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
                Potato Specialist Nutrition at Planting
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-black">
                ProZest
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A powder or liquid formulation of zinc, sulphur, and calcium for
                application to potatoes at planting to prevent and correct
                nutrition-related disorders and improve yield potential.
                Supplies key nutrients to improve skin finish and increase
                overall yields.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sulphur provides a mildly acidic growing environment, and
                calcium improves storage characteristics, making ProZest the
                ideal choice for comprehensive potato nutrition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#6abf4b] cursor-pointer hover:bg-[#5aa338] text-lg px-8 py-4"
                  onClick={() =>
                    smoothScrollToSection("application-guidelines-prozest")
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
                    smoothScrollToSection("technical-resources-prozest")
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
                    src="/assets/product images/Seed Treatments/ProZeSt.jpg"
                    alt="ProZest Product - Potato Field"
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
                Potato Nutrition Specialist
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
              Discover why ProZest delivers superior potato nutrition at
              planting
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
        title="ProZest Nutrient Analysis"
      />

      {/* Dual Formulation Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#ececec]"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Dual Formulation Technology
            </h2>
            <p className="text-xl text-gray-600">
              Choose between liquid and powder formulations for maximum
              flexibility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Package className="h-8 w-8 text-[#6abf4b]" />
                    <h3 className="text-2xl font-semibold">
                      Formulation Comparison
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-3">
                        Liquid Formulation
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Zinc (Zn)</span>
                          <Badge variant="secondary">25% w/v</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Sulphur (S)</span>
                          <Badge variant="secondary">25% w/v</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Calcium (Ca)</span>
                          <Badge variant="secondary">8% w/v</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#6abf4b]/10 rounded-lg">
                      <h4 className="font-semibold text-[#6abf4b] mb-3">
                        Powder Formulation
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Zinc (Zn)</span>
                          <Badge variant="secondary">30% w/w</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Sulphur (S)</span>
                          <Badge variant="secondary">30% w/w</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Calcium (Ca)</span>
                          <Badge variant="secondary">10% w/w</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#6abf4b]/10 rounded-lg p-4">
                      <h4 className="font-semibold text-[#6abf4b] mb-2">
                        Application Benefits
                      </h4>
                      <ul className="text-[#6abf4b] text-sm space-y-1">
                        <li>• Prevents zinc deficiency disorders</li>
                        <li>• Creates optimal soil pH conditions</li>
                        <li>• Enhances storage quality through calcium</li>
                        <li>• Improves skin finish and marketability</li>
                      </ul>
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
                    src="/assets/product images/Seed Treatments/ProZeSt.jpg"
                    alt="Healthy Potato Crop"
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
                Dual Formulation
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
        <div id="application-guidelines-prozest" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              At-planting application rates for both formulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formulations.map((formulation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="text-center mb-4">
                      <Badge
                        className={`${formulation.color} text-xl px-4 py-2 hover:bg-[#6abf4b]/20`}
                      >
                        {formulation.type} Formulation
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {formulation.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="font-semibold text-center mb-2">
                            {app.rate}
                          </div>
                          <p className="text-sm text-gray-600 text-center">
                            {app.notes}
                          </p>
                        </div>
                      ))}
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
            <Card className="bg-[#6abf4b]/10 border border-[#6abf4b]/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shovel className="h-6 w-6 text-[#6abf4b] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#6abf4b]">
                      Application Method
                    </h3>
                    <p className="text-[#6abf4b]">
                      Apply at planting directly to the seed or incorporate into
                      the planting furrow for immediate nutrient availability to
                      developing potato plants.
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
              Convenient packaging for potato planting operations
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
                      Liquid: 4 × 3L boxed
                    </Badge>
                    <p className="text-gray-600">
                      Convenient liquid formulation for easy application
                    </p>
                  </div>
                  <div className="text-center p-6 bg-[#6abf4b]/10 rounded-lg">
                    <Badge
                      variant="secondary"
                      className="text-xl px-4 py-2 mb-4"
                    >
                      Powder: 4 × 3.25kg boxed
                    </Badge>
                    <p className="text-gray-600">
                      Powder formulation for dry application at planting
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
        id="technical-resources-prozest"
        productName="ProZest"
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
