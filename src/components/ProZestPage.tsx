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
  Shovel,
  Apple,
} from "lucide-react";
import { smoothScrollToSection } from "../utils/scrollHelpers";

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
        "Sulfur provides optimal pH conditions for potato development",
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
      color: "bg-green-100 text-green-800",
    },
    {
      type: "Powder",
      applications: [
        { rate: "3.25 kg per tonne of seed", notes: "At planting application" },
      ],
      color: "bg-green-200 text-green-900",
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
      url: "https://ilex-envirosciences.com/wp-content/uploads/2021/07/ProZeSt-1606i.pdf",
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
      "Sulfur (25-30%) for soil pH optimization",
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
        title: "Sulfur Environment",
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
        <div className="absolute inset-0 bg-[#ececec]/50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-[#6abf4b]/10 text-[#6abf4b] hover:bg-[#6abf4b]/20 text-lg px-4 py-2">
                Potato Specialist Nutrition at Planting
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6abf4b] to-[#5aa338] bg-clip-text text-transparent">
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
                  Application Guidlines
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
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=400&fit=crop"
                  alt="ProZest Product - Potato Field"
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
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">
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

                    <div className="p-4 bg-green-100 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">
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

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Application Benefits
                      </h4>
                      <ul className="text-green-700 text-sm space-y-1">
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

            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=400&fit=crop"
                alt="Healthy Potato Crop"
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
                        className={`${formulation.color} text-xl px-4 py-2`}
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
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shovel className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">
                      Application Method
                    </h3>
                    <p className="text-green-700">
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
        className="py-20 px-4 bg-white/50"
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
                  <div className="text-center p-6 bg-green-50 rounded-lg">
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
                  <div className="text-center p-6 bg-green-100 rounded-lg">
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
                  Contact us for more information about ProZest
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
