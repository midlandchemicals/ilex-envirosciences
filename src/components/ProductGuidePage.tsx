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
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  Search,
  Grid3X3,
  List,
  ArrowRight,
  ExternalLink,
  Maximize,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Share2,
  Printer,
  Bookmark,
  Clock,
  Users,
  Target,
  Leaf,
  Beaker,
  Droplets,
  Sprout,
  Shield,
  Award,
  Calendar,
  MapPin,
  Info,
  CheckCircle,
  Star,
} from "lucide-react";

export function ProductGuidePage() {
  const [pdfViewMode, setPdfViewMode] = useState<"embedded" | "fullscreen">(
    "embedded"
  );
  const [showPreview, setShowPreview] = useState(true);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const productCategories = [
    {
      title: "Phosphite Range",
      description:
        "Advanced phosphite-based biostimulants for enhanced plant health",
      pages: "Pages 4-12",
      productCount: 8,
      icon: <Beaker className="h-6 w-6 text-blue-600" />,
      color: "blue",
    },
    {
      title: "Foliar Nutrients",
      description:
        "Complete foliar nutrition solutions for optimal crop performance",
      pages: "Pages 13-22",
      productCount: 12,
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      color: "green",
    },
    {
      title: "Calcium Supplements",
      description: "Specialized calcium formulations for cell wall strength",
      pages: "Pages 23-26",
      productCount: 4,
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      color: "purple",
    },
    {
      title: "Biostimulants",
      description:
        "Natural plant growth enhancers and stress tolerance solutions",
      pages: "Pages 27-30",
      productCount: 5,
      icon: <Sprout className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
    },
    {
      title: "Seed Treatments",
      description:
        "Early-stage nutrition and protection for optimal germination",
      pages: "Pages 31-33",
      productCount: 3,
      icon: <Target className="h-6 w-6 text-orange-600" />,
      color: "orange",
    },
    {
      title: "Water Conditioners",
      description: "pH adjustment and water quality optimization solutions",
      pages: "Pages 34-36",
      productCount: 2,
      icon: <Droplets className="h-6 w-6 text-cyan-600" />,
      color: "cyan",
    },
  ];

  const guideFeatures = [
    {
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      title: "Complete Product Specifications",
      description:
        "Detailed technical data, application rates, and mixing instructions",
    },
    {
      icon: <Target className="h-5 w-5 text-green-600" />,
      title: "Crop-Specific Guidelines",
      description:
        "Tailored recommendations for different crop types and growth stages",
    },
    {
      icon: <Beaker className="h-5 w-5 text-purple-600" />,
      title: "Scientific Research Data",
      description:
        "Field trial results and efficacy studies supporting product claims",
    },
    {
      icon: <Shield className="h-5 w-5 text-orange-600" />,
      title: "Safety & Handling",
      description:
        "Comprehensive safety data sheets and proper handling procedures",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Product Guide 2024
              </h1>
            </div>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive 36-page guide featuring detailed specifications,
              application guidelines, and technical data for our complete range
              of foliar nutrition and biostimulant products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-base">
                36 Pages
              </Badge>
              <Badge className="bg-green-600 text-white px-4 py-2 text-base">
                34+ Products
              </Badge>
              <Badge className="bg-purple-600 text-white px-4 py-2 text-base">
                6 Categories
              </Badge>
              <Badge className="bg-orange-600 text-white px-4 py-2 text-base">
                Updated 2024
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                // Trigger PDF download
                const link = document.createElement("a");
                link.href = "#"; // Replace with actual PDF URL
                link.download = "Ilex-EnviroSciences-Product-Guide-2024.pdf";
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowPreview(!showPreview)}
            >
              <Eye className="mr-2 h-5 w-5" />
              {showPreview ? "Hide Preview" : "Show Preview"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                setPdfViewMode(
                  pdfViewMode === "embedded" ? "fullscreen" : "embedded"
                )
              }
            >
              <Maximize className="mr-2 h-5 w-5" />
              {pdfViewMode === "embedded" ? "Fullscreen" : "Embedded"} View
            </Button>
            <Button variant="outline" size="lg">
              <Printer className="mr-2 h-5 w-5" />
              Print Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      {showPreview && (
        <section className="py-16 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Product Categories
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                Our comprehensive product guide covers six main categories of
                agricultural solutions, each designed to address specific crop
                nutrition and protection needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-${category.color}-500`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        {category.icon}
                        <div>
                          <CardTitle className="text-lg">
                            {category.title}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {category.productCount} Products
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {category.pages}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guide Features */}
      {showPreview && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                What's Inside
              </h2>
              <p className="text-lg text-gray-600 text-center">
                Comprehensive information designed to help you make informed
                decisions about crop nutrition
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guideFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PDF Viewer Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Product Guide Viewer
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Browse the complete product guide online or download for offline
              reference
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* PDF Toolbar */}
            <div className="bg-gray-100 px-6 py-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="font-semibold text-gray-900">
                  Ilex EnviroSciences Product Guide 2024
                </h3>
                <Badge variant="outline">36 Pages</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm text-gray-600 px-2">100%</span>
                <Button variant="ghost" size="sm">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button variant="ghost" size="sm">
                  <RotateCw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="relative">
              {pdfViewMode === "embedded" ? (
                <div className="h-[800px] bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for PDF embed */}
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      PDF Viewer
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md">
                      The PDF viewer would be embedded here. You can replace
                      this with an actual PDF URL or use a PDF viewing library
                      like react-pdf.
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500">
                        To embed the actual PDF, use:
                      </p>
                      <code className="block bg-gray-100 p-3 rounded text-sm text-left">
                        &lt;iframe src="path/to/product-guide.pdf" width="100%"
                        height="800px"&gt;&lt;/iframe&gt;
                      </code>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[600px] bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Maximize className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Fullscreen Mode
                    </h3>
                    <p className="text-gray-600">
                      PDF would open in fullscreen mode
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* PDF Navigation */}
            <div className="bg-gray-100 px-6 py-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  Previous Page
                </Button>
                <span className="text-sm text-gray-600">Page 1 of 36</span>
                <Button variant="outline" size="sm">
                  Next Page
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Document Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Publication Date
                    </h3>
                    <p className="text-gray-600">January 2024 Edition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Target Audience
                    </h3>
                    <p className="text-gray-600">
                      Agricultural professionals, distributors, and farmers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      File Details
                    </h3>
                    <p className="text-gray-600">
                      PDF Format • 36 Pages • 8.5MB
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Certifications
                    </h3>
                    <p className="text-gray-600">
                      All products comply with EU and UK regulations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-200">
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Need Assistance?
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our technical team is available to help you choose the right
                    products for your specific crop requirements and growing
                    conditions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-gray-700">
                        Market Rasen, Lincolnshire
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-gray-700">
                        Monday–Friday: 09:00–17:00
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1">
                      Contact Technical Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Download the complete product guide or contact our team for
              personalized recommendations tailored to your specific crop
              nutrition needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Complete Guide
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
