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
  Star,
  Activity
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function MnSuperPage({ onSubmit }: ContactFormProps) {
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
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Quick-Acting Nutrient Supply",
      description: "Rapid uptake and immediate plant response to correct manganese deficiencies"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "High Concentration of Manganese",
      description: "25% manganese content provides maximum nutrition density for efficient application"
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Effective at Low Application Rates",
      description: "5 litres at maintenance rate treats up to 10ha, minimizing storage and packaging waste"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Multi-Nutrient Enhancement",
      description: "Helps increase the levels of magnesium and zinc in the plant alongside manganese"
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-cyan-600" />,
      title: "Easy Tank Mix Integration",
      description: "Formulated to disperse and dissolve quickly for easy use in tank mixes"
    },
    {
      icon: <Package className="h-8 w-8 text-red-600" />,
      title: "Space-Efficient Storage",
      description: "Compact 5L packs minimize storage requirements while maximizing field coverage"
    }
  ];

  const applicationRates = [
    {
      type: "Maintenance Rate",
      rate: "0.50-0.75 l/ha",
      description: "For preventing manganese deficiencies in healthy crops",
      coverage: "Up to 10ha per 5L pack",
      color: "bg-green-100 text-green-800",
      icon: <Shield className="h-5 w-5 text-green-600" />
    },
    {
      type: "Deficiency Rate",
      rate: "0.75-1.50 l/ha",
      description: "For correcting existing manganese deficiencies",
      coverage: "3.3-6.7ha per 5L pack",
      color: "bg-orange-100 text-orange-800",
      icon: <Zap className="h-5 w-5 text-orange-600" />
    }
  ];

  const analysisData = {
    "Manganese (Mn)": "25",
    "Sulphur (SO3)": "15",
    "Nitrogen (N)": "9",
    "Magnesium (MgO)": "3.3",
    "Zinc (Zn)": "1"
  };

  const pdfLinks = [
    {
      title: "Mn SUPER Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Mn SUPER™",
    productDescription: "The most recent introduction from Ilex EnviroSciences Ltd. Provides a uniquely effective treatment for manganese deficiency issues, whilst providing a range of additional crop benefits from its next-generation formula of foliar nutrients. Combines soluble manganese, magnesium, and zinc with nitrogen and sulphur for excellent performance even at low rates of application.",
    keyFeatures: [
      "25% manganese content - highest concentration available",
      "Next-generation formula with multi-nutrient complex",
      "Quick-acting nutrient supply for immediate response",
      "Combines Mn, Mg, Zn, N, and S in one application",
      "5L treats up to 10ha at maintenance rate",
      "Minimizes storage space and packaging waste"
    ],
    targetCrops: [
      {
        name: "Cereals",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced photosynthesis efficiency",
          "Improved grain development",
          "Better enzyme function",
          "Increased chlorophyll production"
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
          "Improved shelf life",
          "Reduced susceptibility to disorders"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Manganese Enzyme Systems",
        description: "Essential for photosynthesis, respiration, and antioxidant enzyme function",
        icon: <Atom className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Multi-Nutrient Synergy",
        description: "Combines Mn, Mg, Zn, N, and S for comprehensive plant nutrition",
        icon: <Activity className="h-6 w-6 text-blue-600" />
      },
      {
        title: "High Concentration Formula",
        description: "25% manganese provides maximum efficiency at minimal application rates",
        icon: <Star className="h-6 w-6 text-orange-600" />
      },
      {
        title: "Rapid Plant Uptake",
        description: "Quick-acting formulation ensures immediate correction of deficiency symptoms",
        icon: <Zap className="h-6 w-6 text-green-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-orange-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 text-lg px-4 py-2">
                Next-Generation High Concentration Manganese
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                Mn SUPER™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                The most recent introduction from Ilex EnviroSciences Ltd. Provides a uniquely effective treatment 
                for manganese deficiency issues, whilst providing a range of additional crop benefits from its 
                next-generation formula of foliar nutrients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Combines soluble manganese, magnesium, and zinc with nitrogen and sulphur for excellent performance 
                even at low rates of application. 5 litres treats up to 10ha at maintenance rate, minimizing storage 
                space and reducing packaging waste.
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
                  alt="Mn SUPER Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-400 to-orange-400 rounded-2xl opacity-20" />
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
              Discover why Mn SUPER™ delivers the most effective manganese nutrition available
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
      <AnalysisPieChart analysis={analysisData} title="Mn SUPER™ Multi-Nutrient Analysis" />

      {/* High Concentration Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-orange-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Next-Generation Technology</h2>
            <p className="text-xl text-gray-600">
              Understanding the advanced formulation behind Mn SUPER™
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="h-8 w-8 text-purple-600" />
                    <h3 className="text-2xl font-semibold">25% Manganese Concentration</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Atom className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Maximum Efficiency</h4>
                        <p className="text-gray-600">
                          Highest manganese concentration available ensures maximum nutrient 
                          delivery with minimal application volume.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Multi-Nutrient Complex</h4>
                        <p className="text-gray-600">
                          Combines manganese with magnesium, zinc, nitrogen, and sulfur for 
                          comprehensive plant nutrition.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Rapid Plant Response</h4>
                        <p className="text-gray-600">
                          Quick-acting formulation provides immediate correction of manganese 
                          deficiency symptoms.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Economy & Efficiency</h4>
                      <p className="text-purple-700">
                        5L treats up to 10ha at maintenance rate, minimizing storage 
                        requirements and packaging waste.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
                alt="Healthy Arable Crops"
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
            <h2 className="text-4xl font-bold mb-6">Application Rates & Coverage</h2>
            <p className="text-xl text-gray-600">
              Efficient manganese nutrition for all arable crops
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {applicationRates.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      {rate.icon}
                      <CardTitle className="text-xl">{rate.type}</CardTitle>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg mb-4">
                      <Badge className={`${rate.color} text-2xl px-4 py-2 mb-2`}>
                        {rate.rate}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-2">{rate.coverage}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{rate.description}</p>
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
                    <h3 className="text-lg font-semibold mb-2 text-red-800">Severe Deficiency Treatment</h3>
                    <p className="text-red-700">
                      In case of severe deficiencies, repeat applications at the 1 l/ha rate until 
                      symptoms are corrected. Monitor plant response and adjust timing accordingly.
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
        className="py-20 px-4 bg-gradient-to-r from-orange-50 to-purple-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Space-efficient packaging for maximum field coverage
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
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">2 × 5L</Badge>
                    <p className="text-gray-600 mb-2">Compact twin pack for easy handling</p>
                    <p className="text-sm text-gray-500">Up to 20ha coverage at maintenance rate</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">600L IBC</Badge>
                    <p className="text-gray-600 mb-2">Bulk solution for large operations</p>
                    <p className="text-sm text-gray-500">Up to 1200ha coverage at maintenance rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Mn SUPER™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-600 to-orange-600 text-white"
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
                  Contact us for more information about Mn SUPER™
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