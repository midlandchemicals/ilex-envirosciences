import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ProductShowcase } from './ProductShowcase';
import { PDFLinks } from './PDFLinks';
import { AnalysisPieChart } from './AnalysisPieChart';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
  Rocket
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function FoliarBoostPage({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const benefits = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Complete Multi-Nutrient Solution",
      description: "Comprehensive nutrition package delivering multiple essential nutrients in one application"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Rapid Plant Response",
      description: "Quick-acting formulation provides immediate nutrient availability for rapid plant uptake"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Broad Spectrum Application",
      description: "Suitable for wide range of arable and horticultural crops throughout growing season"
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-600" />,
      title: "Enhanced Crop Performance",
      description: "Optimizes plant metabolism and photosynthesis for improved yield and quality"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-600" />,
      title: "Stress Resilience",
      description: "Improves plant tolerance to environmental and physiological stress conditions"
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Cost-Effective Nutrition",
      description: "Multiple nutrients delivered efficiently in single application reducing labor costs"
    }
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      stages: [
        { stage: "Tillering stage", rate: "3-5 l/ha", notes: "Early season boost" },
        { stage: "Stem extension", rate: "3-5 l/ha", notes: "Growth optimization" },
        { stage: "Grain filling", rate: "3-5 l/ha", notes: "Quality enhancement" }
      ],
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />
    },
    {
      crop: "Oilseed Rape",
      stages: [
        { stage: "Rosette stage", rate: "4-6 l/ha", notes: "Early development" },
        { stage: "Stem extension", rate: "4-6 l/ha", notes: "Pre-flowering support" }
      ],
      color: "bg-blue-100 text-blue-800",
      icon: <Flower className="h-5 w-5 text-blue-600" />
    },
    {
      crop: "Sugar Beet",
      stages: [
        { stage: "6-8 true leaves", rate: "3-5 l/ha", notes: "Establishment boost" },
        { stage: "Canopy closure", rate: "3-5 l/ha", notes: "Growth optimization" }
      ],
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Potatoes",
      stages: [
        { stage: "Tuber initiation", rate: "3-5 l/ha", notes: "Development support" },
        { stage: "Tuber bulking", rate: "3-5 l/ha", notes: "Yield optimization" }
      ],
      color: "bg-orange-100 text-orange-800",
      icon: <Leaf className="h-5 w-5 text-orange-600" />
    }
  ];

  const analysisData = {
    "Nitrogen (N)": "12.0",
    "Phosphorus (P2O5)": "8.0",
    "Potassium (K2O)": "10.0",
    "Magnesium (MgO)": "3.0",
    "Sulphur (SO3)": "5.0",
    "Boron (B)": "0.3",
    "Manganese (Mn)": "1.5",
    "Zinc (Zn)": "1.0"
  };

  const pdfLinks = [
    {
      title: "Foliar Boost Leaflet",
      description: "Complete product information and comprehensive application guidelines"
    },
    {
      title: "Multi-Nutrient Benefits Guide",
      description: "Understanding the benefits of complete foliar nutrition"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Foliar Boost™",
    productDescription: "A comprehensive multi-nutrient foliar solution designed to provide complete nutritional support across a wide range of crops. Combines major nutrients (N, P, K) with essential secondary nutrients and micronutrients to deliver optimal plant nutrition. Formulated for rapid uptake and immediate plant response during critical growth stages.",
    keyFeatures: [
      "Complete multi-nutrient formulation",
      "Major nutrients: 12% N, 8% P2O5, 10% K2O",
      "Essential micronutrients: Mg, S, B, Mn, Zn",
      "Rapid uptake and immediate response",
      "Broad spectrum crop compatibility",
      "Single application convenience"
    ],
    targetCrops: [
      {
        name: "Cereals",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tillering and growth",
          "Improved grain development",
          "Better stress tolerance",
          "Increased yield potential"
        ]
      },
      {
        name: "Oilseed Rape",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced vegetative growth",
          "Improved flowering",
          "Better oil content",
          "Increased seed yield"
        ]
      },
      {
        name: "Sugar Beet",
        image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf development",
          "Improved root growth",
          "Better sugar accumulation",
          "Increased overall yield"
        ]
      },
      {
        name: "Potatoes",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tuber development",
          "Improved quality characteristics",
          "Better stress resistance",
          "Increased marketable yield"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Complete Nutrition",
        description: "All essential macro and micronutrients in balanced formulation",
        icon: <Rocket className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Synergistic Action",
        description: "Nutrients work together to optimize plant metabolism and growth",
        icon: <Activity className="h-6 w-6 text-green-600" />
      },
      {
        title: "Rapid Availability",
        description: "Foliar application ensures immediate nutrient availability",
        icon: <Zap className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Stress Mitigation",
        description: "Helps plants overcome nutritional and environmental stress",
        icon: <Shield className="h-6 w-6 text-orange-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-4 py-2">
                Complete Multi-Nutrient Foliar Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Foliar Boost™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A comprehensive multi-nutrient foliar solution designed to provide complete nutritional support 
                across a wide range of crops. Combines major nutrients (N, P, K) with essential secondary 
                nutrients and micronutrients to deliver optimal plant nutrition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Formulated for rapid uptake and immediate plant response during critical growth stages, 
                Foliar Boost™ delivers comprehensive nutrition in a single, convenient application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  Get Product Info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Application Guide
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
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                  alt="Foliar Boost Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl opacity-20" />
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
              Discover why Foliar Boost™ delivers comprehensive nutrition for optimal crop performance
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
      <AnalysisPieChart analysis={analysisData} title="Foliar Boost™ Complete Nutrient Analysis" />

      {/* Multi-Nutrient Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Multi-Nutrient Technology</h2>
            <p className="text-xl text-gray-600">
              Understanding the comprehensive nutrition approach
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Rocket className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold">Complete Nutrition Package</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <FlaskConical className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Major Nutrients</h4>
                        <p className="text-gray-600">
                          12% Nitrogen, 8% P2O5, and 10% K2O provide essential macronutrient 
                          foundation for plant growth and development.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Atom className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Secondary Nutrients</h4>
                        <p className="text-gray-600">
                          Magnesium and sulfur support enzyme function, chlorophyll synthesis, 
                          and protein formation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Micronutrients</h4>
                        <p className="text-gray-600">
                          Boron, manganese, and zinc ensure optimal enzyme function and 
                          prevent micronutrient deficiencies.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Synergistic Formula</h4>
                      <p className="text-blue-700">
                        All nutrients work together to optimize plant metabolism, stress 
                        tolerance, and overall crop performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                alt="Healthy Crop Development"
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Comprehensive nutrition for all major crop types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                      <CardTitle className="text-xl">{crop.crop}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {crop.stages.map((stage, stageIndex) => (
                        <div key={stageIndex} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                            <Badge className={`${crop.color} text-sm px-2 py-1`}>
                              {stage.rate}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{stage.notes}</p>
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
                  <Droplets className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">Application Method</h3>
                    <p className="text-green-700">
                      Apply in 200-400 l/ha of water. Ensure thorough coverage for optimal uptake. 
                      Can be repeated throughout the growing season as required.
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
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Convenient sizes for all farming operations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Perfect for comprehensive nutrition programs and multi-application schedules</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale complete nutrition programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Foliar Boost™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white"
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
                  Contact us for more information about Foliar Boost™
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
                    className="w-full bg-white text-blue-600 hover:bg-gray-100"
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