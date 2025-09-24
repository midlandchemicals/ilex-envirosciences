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
  Combine
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function ManiphosPage({ onSubmit }: ContactFormProps) {
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
      icon: <Combine className="h-8 w-8 text-purple-600" />,
      title: "Manganese with Phosphite Technology",
      description: "Combines essential manganese micronutrient with proven phosphite delivery system"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Rapid Deficiency Correction",
      description: "Quick-acting formulation provides immediate response to manganese deficiency symptoms"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Enzyme Function",
      description: "Supports critical enzyme systems for photosynthesis and plant metabolism"
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-600" />,
      title: "Photosynthesis Support",
      description: "Essential for chlorophyll synthesis and oxygen evolution in photosystem II"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-600" />,
      title: "Tank Mix Compatible",
      description: "Easily integrated with other foliar treatments and crop protection products"
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Broad Crop Application",
      description: "Effective across a wide range of arable and horticultural crops"
    }
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      stages: [
        { stage: "Tillering to stem extension", rate: "1.5-2.5 l/ha", notes: "Early season support" },
        { stage: "Flag leaf emergence", rate: "1.5-2.5 l/ha", notes: "Critical growth phase" }
      ],
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />
    },
    {
      crop: "Oilseed Rape",
      stages: [
        { stage: "Rosette to stem extension", rate: "2.0-3.0 l/ha", notes: "Early development" },
        { stage: "Bud formation", rate: "2.0-3.0 l/ha", notes: "Pre-flowering support" }
      ],
      color: "bg-blue-100 text-blue-800",
      icon: <Flower className="h-5 w-5 text-blue-600" />
    },
    {
      crop: "Sugar Beet",
      stages: [
        { stage: "6-8 true leaves", rate: "2.0-3.0 l/ha", notes: "Establishment phase" },
        { stage: "Canopy development", rate: "2.0-3.0 l/ha", notes: "Growth optimization" }
      ],
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Vegetables",
      stages: [
        { stage: "Early development", rate: "2.0-3.0 l/ha", notes: "Establishment support" },
        { stage: "Pre-harvest", rate: "2.0-3.0 l/ha", notes: "Quality enhancement" }
      ],
      color: "bg-orange-100 text-orange-800",
      icon: <Leaf className="h-5 w-5 text-orange-600" />
    }
  ];

  const analysisData = {
    "Manganese (Mn)": "10.0",
    "Phosphorus (P2O5)": "25.0",
    "Potassium (K2O)": "12.0",
    "Nitrogen (N)": "5.0",
    "Magnesium (MgO)": "2.0"
  };

  const pdfLinks = [
    {
      title: "Maniphos™ Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Manganese Deficiency Guide",
      description: "Visual guide to identifying manganese deficiency symptoms"
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
    productName: "Maniphos™",
    productDescription: "A specialized manganese treatment enhanced with proven phosphite technology. Designed to prevent and correct manganese deficiencies while supporting critical enzyme functions and optimizing photosynthesis. The phosphite delivery system ensures rapid uptake and immediate plant response when deficiency symptoms appear.",
    keyFeatures: [
      "Manganese with phosphite technology",
      "10% manganese content for rapid correction",
      "Enhanced with phosphorus, potassium, and nitrogen",
      "Rapid deficiency correction capability",
      "Supports photosynthesis and enzyme function",
      "Broad spectrum crop compatibility"
    ],
    targetCrops: [
      {
        name: "Cereals",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced photosynthesis efficiency",
          "Improved grain development",
          "Better enzyme activation",
          "Increased stress tolerance"
        ]
      },
      {
        name: "Oilseed Rape",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Improved oil synthesis",
          "Enhanced seed development",
          "Better winter survival",
          "Increased antioxidant activity"
        ]
      },
      {
        name: "Sugar Beet",
        image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced sugar accumulation",
          "Improved root development",
          "Better stress tolerance",
          "Increased photosynthetic rate"
        ]
      },
      {
        name: "Vegetables",
        image: "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Better quality and appearance",
          "Enhanced nutritional content",
          "Improved enzyme function",
          "Reduced susceptibility to disorders"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Manganese Functions",
        description: "Essential for photosynthesis, respiration, and antioxidant enzyme systems",
        icon: <Activity className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Phosphite Delivery",
        description: "Rapid uptake and systemic movement ensures immediate manganese availability",
        icon: <Zap className="h-6 w-6 text-green-600" />
      },
      {
        title: "Enzyme Activation",
        description: "Critical for over 30 enzyme systems involved in plant metabolism",
        icon: <Atom className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Chlorophyll Synthesis",
        description: "Essential for chlorophyll formation and photosystem II function",
        icon: <Leaf className="h-6 w-6 text-orange-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-lg px-4 py-2">
                Manganese with Phosphite Technology
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Maniphos™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A specialized manganese treatment enhanced with proven phosphite technology. Designed to prevent 
                and correct manganese deficiencies while supporting critical enzyme functions and optimizing 
                photosynthesis for enhanced crop performance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The phosphite delivery system ensures rapid uptake and immediate plant response when deficiency 
                symptoms appear, delivering targeted manganese nutrition when your crop needs it most.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
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
                  alt="Maniphos Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-400 to-green-400 rounded-2xl opacity-20" />
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
              Discover why Maniphos™ delivers superior manganese nutrition with phosphite technology
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
      <AnalysisPieChart analysis={analysisData} title="Maniphos™ Nutrient Analysis" />

      {/* Manganese Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Manganese Technology</h2>
            <p className="text-xl text-gray-600">
              Understanding the critical role of manganese in crop performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Combine className="h-8 w-8 text-purple-600" />
                    <h3 className="text-2xl font-semibold">Manganese with Phosphite Power</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Photosynthesis Enhancement</h4>
                        <p className="text-gray-600">
                          Essential for oxygen evolution in photosystem II and chlorophyll 
                          synthesis for optimal photosynthetic efficiency.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Atom className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Enzyme Activation</h4>
                        <p className="text-gray-600">
                          Critical for over 30 enzyme systems involved in respiration, 
                          metabolism, and antioxidant defense mechanisms.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Phosphite Delivery</h4>
                        <p className="text-gray-600">
                          Rapid uptake and systemic movement ensures immediate manganese 
                          availability where it's needed most.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Enhanced Formula</h4>
                      <p className="text-purple-700">
                        Includes phosphorus, potassium, and nitrogen to support optimal 
                        manganese utilization and plant function.
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
              Strategic manganese nutrition for all major crop types
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
            <Card className="bg-red-50 border border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-red-800">Deficiency Treatment</h3>
                    <p className="text-red-700">
                      For severe deficiencies, increase rate to 3-4 l/ha and repeat application 
                      after 2-3 weeks if symptoms persist.
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
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-purple-50"
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
                  <Package className="h-8 w-8 text-purple-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Ideal for targeted manganese applications and trial use</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale manganese nutrition programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Maniphos™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-600 to-green-600 text-white"
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
                  Contact us for more information about Maniphos™
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
                    className="w-full bg-white text-purple-600 hover:bg-gray-100"
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