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
  Apple
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function PKVEGPage({ onSubmit }: ContactFormProps) {
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
      icon: <Apple className="h-8 w-8 text-green-600" />,
      title: "Vegetable Specialist",
      description: "Specifically formulated for field vegetable crops with tailored nutrient ratios"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Concentrated Phosphite Solution",
      description: "High concentration phosphite for rapid uptake and immediate plant response"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Effective at Low Application Rates",
      description: "Concentrated formulation provides maximum nutrition efficiency with minimal volume"
    },
    {
      icon: <Atom className="h-8 w-8 text-orange-600" />,
      title: "Enhanced P & K Nutrition",
      description: "Optimal phosphorus and potassium balance for vegetable crop requirements"
    },
    {
      icon: <Activity className="h-8 w-8 text-cyan-600" />,
      title: "Improves Crop Quality",
      description: "Enhanced nutrient quality leads to better marketable yields and crop appearance"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Tank Mix Compatible",
      description: "Compatible with most agricultural products for flexible application programs"
    }
  ];

  const vegetableApplications = [
    {
      crop: "Brassicas",
      stages: [
        { stage: "4-6 true leaves", rate: "1.5-3.0 l/ha", notes: "Early establishment support" },
        { stage: "Pre-hearting", rate: "2.0-3.0 l/ha", notes: "Head development phase" }
      ],
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Root Vegetables",
      stages: [
        { stage: "Early growth", rate: "2.0-3.0 l/ha", notes: "Root development phase" },
        { stage: "Bulking stage", rate: "2.0-3.0 l/ha", notes: "Size and quality enhancement" }
      ],
      color: "bg-orange-100 text-orange-800",
      icon: <Sprout className="h-5 w-5 text-orange-600" />
    },
    {
      crop: "Salad Crops",
      stages: [
        { stage: "4-6 true leaves", rate: "1.5-2.5 l/ha", notes: "Leaf development support" },
        { stage: "Pre-harvest", rate: "1.5-2.5 l/ha", notes: "Quality enhancement" }
      ],
      color: "bg-blue-100 text-blue-800",
      icon: <Apple className="h-5 w-5 text-blue-600" />
    },
    {
      crop: "Fruiting Vegetables",
      stages: [
        { stage: "Pre-flowering", rate: "2.0-3.0 l/ha", notes: "Flower development" },
        { stage: "Fruit set", rate: "2.0-3.0 l/ha", notes: "Fruit quality enhancement" }
      ],
      color: "bg-purple-100 text-purple-800",
      icon: <Flower className="h-5 w-5 text-purple-600" />
    }
  ];

  const analysisData = {
    "Phosphorus Pentoxide (P2O5)": "20",
    "Potassium Oxide (K2O)": "16",
    "Magnesium (MgO)": "2.0",
    "Boron (B)": "0.5"
  };

  const pdfLinks = [
    {
      title: "PK VEG Leaflet",
      description: "Complete product information and application guidelines for vegetables"
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Technical information about phosphite mode of action"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "PK VEG™",
    productDescription: "A concentrated phosphite solution specifically formulated for field vegetable crops. Provides enhanced phosphorus and potassium nutrition using proven phosphite technology for rapid uptake and immediate plant response. The formulation is tailored to meet the specific nutritional requirements of vegetable crops during critical growth stages.",
    keyFeatures: [
      "Concentrated phosphite solution for vegetables",
      "20% P2O5 and 16% K2O for optimal nutrition",
      "Rapid uptake phosphite technology",
      "Specifically formulated for vegetable crop requirements",
      "Enhanced with magnesium and boron",
      "Low application rates for cost-effective nutrition"
    ],
    targetCrops: [
      {
        name: "Brassicas",
        image: "https://images.unsplash.com/photo-1590004845575-c7745b1faf0d?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced head development",
          "Improved leaf quality",
          "Better disease resistance",
          "Increased marketable yields"
        ]
      },
      {
        name: "Root Vegetables",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced root development",
          "Improved size and uniformity",
          "Better storage quality",
          "Increased nutritional content"
        ]
      },
      {
        name: "Salad Crops",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced leaf quality",
          "Improved shelf life",
          "Better appearance and texture",
          "Increased nutritional value"
        ]
      },
      {
        name: "Fruiting Vegetables",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced fruit development",
          "Improved fruit quality",
          "Better color and flavor",
          "Increased yield potential"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Phosphite Technology",
        description: "Rapid uptake and systemic movement for immediate plant response",
        icon: <Zap className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Vegetable-Specific Formula",
        description: "Tailored P:K ratio optimized for vegetable crop requirements",
        icon: <Apple className="h-6 w-6 text-green-600" />
      },
      {
        title: "Quality Enhancement",
        description: "Improves appearance, shelf life, and nutritional content of vegetables",
        icon: <Award className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Micronutrient Support",
        description: "Essential magnesium and boron for optimal enzyme function",
        icon: <Atom className="h-6 w-6 text-orange-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 text-lg px-4 py-2">
                Concentrated Phosphite Solution for Vegetables
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                PK VEG™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A concentrated phosphite solution specifically formulated for field vegetable crops. Provides enhanced 
                phosphorus and potassium nutrition using proven phosphite technology for rapid uptake and immediate plant response.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The formulation is tailored to meet the specific nutritional requirements of vegetable crops during 
                critical growth stages, delivering superior quality and marketable yields.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
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
                  src="https://images.unsplash.com/photo-1590004845575-c7745b1faf0d?w=600&h=400&fit=crop"
                  alt="PK VEG Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-green-400 to-purple-400 rounded-2xl opacity-20" />
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
              Discover why PK VEG™ delivers superior nutrition specifically designed for vegetable crops
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
      <AnalysisPieChart analysis={analysisData} title="PK VEG™ Nutrient Analysis" />

      {/* Vegetable Specialist Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-purple-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Vegetable Specialist Formulation</h2>
            <p className="text-xl text-gray-600">
              Understanding the science behind vegetable-specific nutrition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Apple className="h-8 w-8 text-green-600" />
                    <h3 className="text-2xl font-semibold">Vegetable-Optimized Formula</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Phosphite Technology</h4>
                        <p className="text-gray-600">
                          Advanced phosphite chemistry ensures rapid uptake and systemic movement 
                          for immediate plant response.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Target className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Optimized P:K Ratio</h4>
                        <p className="text-gray-600">
                          20:16 P:K ratio specifically formulated to meet the nutritional demands 
                          of vegetable crops during critical growth phases.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Quality Enhancement</h4>
                        <p className="text-gray-600">
                          Improves appearance, shelf life, nutritional content, and overall 
                          marketability of vegetable crops.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Micronutrient Support</h4>
                      <p className="text-green-700">
                        Enhanced with magnesium and boron for optimal enzyme function and 
                        cellular development in vegetables.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590004845575-c7745b1faf0d?w=600&h=400&fit=crop"
                alt="Fresh Vegetable Crops"
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
            <h2 className="text-4xl font-bold mb-6">Vegetable Application Guidelines</h2>
            <p className="text-xl text-gray-600">
              Strategic nutrition for all major vegetable crop types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {vegetableApplications.map((crop, index) => (
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
            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800">Application Method</h3>
                    <p className="text-blue-700">
                      Apply in 200-400 l/ha of water for optimal coverage. Ensure even distribution 
                      across the vegetable crop canopy for maximum uptake efficiency.
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
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Convenient sizes for all vegetable growing operations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-purple-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Perfect for market garden and commercial vegetable operations</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-purple-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale vegetable production</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="PK VEG™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-green-600 to-purple-600 text-white"
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
                  Contact us for more information about PK VEG™
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