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
  Crown
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function ProKPage({ onSubmit }: ContactFormProps) {
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
      icon: <Crown className="h-8 w-8 text-purple-600" />,
      title: "High Potassium Concentration",
      description: "Concentrated potassium source for maximum efficiency and rapid plant response"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Quality Enhancement",
      description: "Improves crop quality, color, flavor, and storage characteristics"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Rapid Uptake",
      description: "Foliar application ensures immediate potassium availability during critical periods"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Enhanced Stress Tolerance",
      description: "Improves plant resistance to drought, frost, and disease stress"
    },
    {
      icon: <Activity className="h-8 w-8 text-cyan-600" />,
      title: "Metabolic Optimization",
      description: "Supports enzyme function, photosynthesis, and protein synthesis"
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Broad Crop Application",
      description: "Effective across arable and horticultural crops throughout growing season"
    }
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      stages: [
        { stage: "Tillering to stem extension", rate: "4-6 l/ha", notes: "Early growth support" },
        { stage: "Grain filling", rate: "4-6 l/ha", notes: "Quality improvement" }
      ],
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />
    },
    {
      crop: "Oilseed Rape",
      stages: [
        { stage: "Stem extension", rate: "5-7 l/ha", notes: "Pre-flowering boost" },
        { stage: "Pod filling", rate: "5-7 l/ha", notes: "Oil quality enhancement" }
      ],
      color: "bg-blue-100 text-blue-800",
      icon: <Flower className="h-5 w-5 text-blue-600" />
    },
    {
      crop: "Sugar Beet",
      stages: [
        { stage: "Canopy development", rate: "4-6 l/ha", notes: "Growth optimization" },
        { stage: "Sugar accumulation", rate: "4-6 l/ha", notes: "Quality enhancement" }
      ],
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Potatoes",
      stages: [
        { stage: "Tuber initiation", rate: "4-6 l/ha", notes: "Development support" },
        { stage: "Tuber bulking", rate: "4-6 l/ha", notes: "Quality enhancement" }
      ],
      color: "bg-orange-100 text-orange-800",
      icon: <Leaf className="h-5 w-5 text-orange-600" />
    }
  ];

  const analysisData = {
    "Potassium Oxide (K2O)": "30.0",
    "Nitrogen (N)": "8.0",
    "Magnesium (MgO)": "2.0",
    "Sulphur (SO3)": "3.0"
  };

  const pdfLinks = [
    {
      title: "Pro-K Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Potassium Benefits Guide",
      description: "Understanding the role of potassium in crop quality and yield"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Pro-K™",
    productDescription: "A premium potassium-focused foliar feed designed to maximize crop quality and yield potential. With 30% K2O content, Pro-K™ provides concentrated potassium nutrition when crops need it most. Enhances quality characteristics, improves stress tolerance, and optimizes metabolic processes for superior crop performance.",
    keyFeatures: [
      "High concentration potassium (30% K2O)",
      "Quality-focused formulation",
      "Enhanced stress tolerance properties",
      "Rapid foliar uptake technology",
      "Compatible with other nutrients",
      "Broad spectrum crop application"
    ],
    targetCrops: [
      {
        name: "Cereals",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced grain quality",
          "Improved protein content",
          "Better disease resistance",
          "Increased yield stability"
        ]
      },
      {
        name: "Oilseed Rape",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced oil quality",
          "Improved seed development",
          "Better winter survival",
          "Increased oil content"
        ]
      },
      {
        name: "Sugar Beet",
        image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced sugar content",
          "Improved root quality",
          "Better storage characteristics",
          "Increased processing quality"
        ]
      },
      {
        name: "Potatoes",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced tuber quality",
          "Improved processing characteristics",
          "Better storage properties",
          "Reduced defects"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Quality Enhancement",
        description: "Potassium directly improves crop quality, color, flavor, and storage characteristics",
        icon: <Crown className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Enzyme Activation",
        description: "Essential for over 60 enzyme systems involved in plant metabolism",
        icon: <Activity className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Osmotic Regulation",
        description: "Controls water balance and helps plants cope with stress conditions",
        icon: <Shield className="h-6 w-6 text-green-600" />
      },
      {
        title: "Photosynthesis Support",
        description: "Optimizes photosynthetic processes and sugar translocation",
        icon: <Zap className="h-6 w-6 text-orange-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-lg px-4 py-2">
                Premium Potassium-Focused Foliar Feed
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Pro-K™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A premium potassium-focused foliar feed designed to maximize crop quality and yield potential. 
                With 30% K2O content, Pro-K™ provides concentrated potassium nutrition when crops need it most.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enhances quality characteristics, improves stress tolerance, and optimizes metabolic processes 
                for superior crop performance across a wide range of agricultural applications.
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
                  alt="Pro-K Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl opacity-20" />
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
              Discover why Pro-K™ delivers superior potassium nutrition for enhanced crop quality
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
      <AnalysisPieChart analysis={analysisData} title="Pro-K™ Nutrient Analysis" />

      {/* Potassium Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Potassium Technology</h2>
            <p className="text-xl text-gray-600">
              Understanding the critical role of potassium in crop performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="h-8 w-8 text-purple-600" />
                    <h3 className="text-2xl font-semibold">Premium Potassium Nutrition</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Target className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Quality Enhancement</h4>
                        <p className="text-gray-600">
                          30% K2O concentration directly improves crop quality, color, flavor, 
                          and storage characteristics.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Enzyme Systems</h4>
                        <p className="text-gray-600">
                          Essential for over 60 enzyme systems involved in photosynthesis, 
                          protein synthesis, and carbohydrate metabolism.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Stress Tolerance</h4>
                        <p className="text-gray-600">
                          Improves plant resistance to drought, frost, and disease by 
                          optimizing osmotic regulation and cell strength.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Foliar Advantage</h4>
                      <p className="text-purple-700">
                        Foliar application bypasses soil fixation, ensuring immediate 
                        potassium availability during critical growth periods.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                alt="High Quality Crop Development"
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
              Strategic potassium nutrition for quality-focused crop production
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
            <Card className="bg-purple-50 border border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Droplets className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-800">Application Method</h3>
                    <p className="text-purple-700">
                      Apply in 200-400 l/ha of water for optimal coverage. Timing is critical - 
                      apply during periods of active growth for maximum quality benefits.
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Convenient sizes for quality-focused crop production
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
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Perfect for quality enhancement programs and targeted applications</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale quality improvement programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Pro-K™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
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
                  Contact us for more information about Pro-K™
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