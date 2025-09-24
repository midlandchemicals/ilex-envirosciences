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
  Sprout,
  Shield,
  Heart,
  Activity,
  Sparkles,
  TreePine,
  Apple,
  Wheat,
  Flower2,
  Factory,
  GraduationCap,
  Star,
  Crown,
  Cherry,
  Flame,
  Bolt,
  Gauge,
  Coffee
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function NMaxPage({ onSubmit }: ContactFormProps) {
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
      icon: <Flame className="h-8 w-8 text-green-600" />,
      title: "Highest Analysis Organically Sourced Nitrogen",
      description: "Offers the highest analysis of organically sourced nitrogen in liquid form (7.0% N)"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safe & Effective from Approved Sources",
      description: "Derived from approved molasses and plant protein sources for organic fertilization"
    },
    {
      icon: <Droplets className="h-8 w-8 text-purple-600" />,
      title: "Easy-to-Use Liquid Formulation",
      description: "Formulated as an easy-to-use liquid for convenient and efficient application"
    },
    {
      icon: <Bolt className="h-8 w-8 text-orange-600" />,
      title: "Immediate & Lasting Boost",
      description: "Provides immediate and lasting boost to both protected and outdoor crops"
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Maximizes Green Leaf Area",
      description: "Maximizes green leaf area and enhances vigorous vegetative growth"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Balanced Nutrient Combination",
      description: "Contains balanced nutrients to encourage strong and healthy growth in majority of crops"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      title: "Fully Approved for Organic Systems",
      description: "Certified by the Soil Association for use in organic cropping systems in the UK"
    }
  ];

  const analysisData = {
    "Nitrogen (N)": "7.0",
    "Phosphorus (P2O5)": "2.0", 
    "Potassium (K2O)": "2.0",
    "Calcium (CaO)": "0.3",
    "Sulphur (SO3)": "0.5",
    "Magnesium (MgO)": "0.1"
  };

  const pdfLinks = [
    {
      title: "N-Max (7-2-2) Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "N-Max (7-2-2)",
    productDescription: "Offers the highest analysis of organically sourced nitrogen in liquid form. Provides an immediate and lasting boost to both protected and outdoor crops by maximizing green leaf area and enhancing vegetative growth. Derived from approved molasses and plant protein sources, it is a safe and effective nutrient solution for organic cropping systems.",
    keyFeatures: [
      "Highest analysis of organically sourced nitrogen (7.0% N)",
      "Provides immediate and lasting nutrient boost",
      "Maximizes green leaf area development",  
      "Enhances vigorous vegetative growth",
      "Derived from approved molasses and plant protein sources",
      "Safe and effective for organic cropping systems",
      "Certified by Soil Association for organic use in the UK"
    ],
    targetCrops: [
      {
        name: "Protected Crops",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Immediate nitrogen boost",
          "Enhanced leaf development",
          "Vigorous vegetative growth", 
          "Improved crop uniformity"
        ]
      },
      {
        name: "Outdoor Crops",
        image: "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Lasting growth enhancement",
          "Maximized green leaf area",
          "Improved crop potential",
          "Enhanced crop resilience"
        ]
      },
      {
        name: "Leafy Vegetables",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        benefits: [
          "Exceptional leaf development",
          "Enhanced green coloration",
          "Improved nutritional content",
          "Superior market quality"
        ]
      },
      {
        name: "General Crops",
        image: "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Strong vegetative growth",
          "Enhanced crop vigor",
          "Improved plant health",
          "Better yield potential"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Approved Organic Sources",
        description: "Derived from approved molasses and plant protein sources for safe organic nutrition",
        icon: <Leaf className="h-6 w-6 text-green-600" />
      },
      {
        title: "Highest Nitrogen Analysis", 
        description: "7.0% N - the highest analysis of organically sourced nitrogen in liquid form",
        icon: <Flame className="h-6 w-6 text-orange-600" />
      },
      {
        title: "Immediate & Lasting Effect",
        description: "Provides both immediate boost and lasting enhancement to crop growth and development",
        icon: <Bolt className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Organic Certification",
        description: "Fully approved and certified for use in organic cropping systems by the Soil Association",
        icon: <Award className="h-6 w-6 text-indigo-600" />
      }
    ]
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
                Highest Analysis Organically Sourced Nitrogen in Liquid Form
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                N-Max (7-2-2)
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Offers the highest analysis of organically sourced nitrogen in liquid form. Provides an immediate 
                and lasting boost to both protected and outdoor crops by maximizing green leaf area and enhancing 
                vegetative growth. Perfect for crops requiring vigorous nitrogen nutrition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from approved molasses and plant protein sources, it is a safe and effective nutrient solution 
                for organic cropping systems. Fully approved and certified for use in organic cropping systems in the UK 
                by the Soil Association.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  Get Product Info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Organic Certificate
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
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                  alt="N-Max - Maximum Nitrogen for Vegetative Growth"
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
              Discover why N-Max (7-2-2) delivers the highest nitrogen nutrition for organic systems
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
      <AnalysisPieChart analysis={analysisData} title="N-Max (7-2-2) Maximum Nitrogen Analysis" />

      {/* Maximum Nitrogen Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Maximum Nitrogen Technology</h2>
            <p className="text-xl text-gray-600">
              Highest analysis organically sourced nitrogen for exceptional vegetative growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Flame className="h-8 w-8 text-green-600" />
                    <h3 className="text-2xl font-semibold">Maximum Nitrogen Analysis</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">7.0% Nitrogen (N)</h4>
                      <p className="text-green-700 text-sm">
                        Highest analysis of organically sourced nitrogen in liquid form for maximum vegetative growth
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">2.0% Phosphorus (P2O5)</h4>
                      <p className="text-blue-700 text-sm">
                        Essential phosphorus for energy transfer and root development support
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">2.0% Potassium (K2O)</h4>
                      <p className="text-purple-700 text-sm">
                        Balanced potassium for overall plant health and stress tolerance
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Approved Organic Sources</h4>
                      <p className="text-green-700 text-sm">
                        Derived from approved molasses and plant protein sources with trace elements including 
                        calcium (0.3%), sulphur (0.5%), and magnesium (0.1%) for comprehensive nutrition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                alt="Maximum Vegetative Growth"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Application Benefits Section */}
      <motion.section 
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Benefits</h2>
            <p className="text-xl text-gray-600">
              Immediate and lasting boost for both protected and outdoor crop systems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-semibold text-green-800">Foliar Application</h3>
                </div>
                <p className="text-green-700 mb-6">
                  Apply as a foliar spray for immediate nitrogen uptake. The liquid formulation ensures 
                  rapid absorption and immediate boost to green leaf area development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">Immediate nitrogen boost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">Rapid leaf area development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">Enhanced green coloration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-blue-800">Fertigation</h3>
                </div>
                <p className="text-blue-700 mb-6">
                  Apply through fertigation systems for sustained root zone nutrition. Provides lasting 
                  growth enhancement for both protected and outdoor crop systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700">Sustained root zone nutrition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700">Lasting growth enhancement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700">Improved crop uniformity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">Maximum Green Leaf Area Development</h3>
                    <p className="text-green-700">
                      N-Max maximizes green leaf area and enhances vegetative growth through the highest analysis 
                      of organically sourced nitrogen. Provides immediate and lasting boost to crop potential 
                      in both protected and outdoor systems while maintaining full organic certification compliance.
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Maximum nitrogen nutrition for organic cropping systems
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
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Perfect for specialized organic nitrogen nutrition programs</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale organic production systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="N-Max (7-2-2)" links={pdfLinks} />

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
                  Contact us for more information about N-Max (7-2-2)
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