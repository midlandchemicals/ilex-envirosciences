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
  Candy
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function BeetRaiserPage({ onSubmit }: ContactFormProps) {
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
      icon: <Candy className="h-8 w-8 text-red-600" />,
      title: "Sugar Beet Specialist",
      description: "Specifically formulated to meet the unique nutritional demands of sugar beet crops"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Enhanced Sugar Content",
      description: "Promotes sugar accumulation and quality for premium processing yields"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Critical Growth Stage Support",
      description: "Optimized nutrition during key developmental periods for maximum impact"
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-600" />,
      title: "Improved Root Development",
      description: "Enhances root size, quality, and sugar accumulation throughout the growing season"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Proven Performance",
      description: "Field-tested formulation delivering consistent results across UK sugar beet conditions"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-600" />,
      title: "Stress Tolerance",
      description: "Improves plant ability to cope with environmental and physiological stresses"
    }
  ];

  const applicationStages = [
    {
      stage: "Establishment",
      timing: "4-6 true leaves",
      rate: "2-3 l/ha",
      notes: "Critical for strong early development and root establishment",
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-green-600" />
    },
    {
      stage: "Canopy Development",
      timing: "8-12 leaves",
      rate: "2-3 l/ha", 
      notes: "Support rapid canopy growth and leaf area expansion",
      color: "bg-blue-100 text-blue-800",
      icon: <Leaf className="h-5 w-5 text-blue-600" />
    },
    {
      stage: "Root Bulking",
      timing: "Canopy closure to root growth",
      rate: "2-3 l/ha",
      notes: "Optimize root size development and sugar accumulation",
      color: "bg-orange-100 text-orange-800",
      icon: <Package className="h-5 w-5 text-orange-600" />
    },
    {
      stage: "Sugar Accumulation",
      timing: "Root bulking to harvest",
      rate: "2-3 l/ha",
      notes: "Enhance sugar content and processing quality",
      color: "bg-red-100 text-red-800",
      icon: <Candy className="h-5 w-5 text-red-600" />
    }
  ];

  const analysisData = {
    "Nitrogen (N)": "10.0",
    "Phosphorus (P2O5)": "20.0",
    "Potassium (K2O)": "16.0", 
    "Magnesium (MgO)": "4.0",
    "Sulphur (SO3)": "8.0",
    "Boron (B)": "0.8",
    "Manganese (Mn)": "1.5",
    "Sodium (Na)": "2.0"
  };

  const pdfLinks = [
    {
      title: "Beet Raiser™ Leaflet",
      description: "Complete product information and application guidelines for sugar beet"
    },
    {
      title: "Sugar Beet Nutrition Guide",
      description: "Comprehensive guide to sugar beet nutritional requirements"
    },
    {
      title: "Compatibility Chart", 
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Beet Raiser™",
    productDescription: "A specialist foliar nutrition solution specifically formulated for sugar beet. Designed to support critical growth stages from establishment through to harvest, delivering the precise nutrients needed for maximum sugar content and processing quality.",
    keyFeatures: [
      "Sugar beet specialist formulation",
      "Multi-stage application program",
      "Enhanced sugar accumulation support", 
      "Root quality optimization",
      "Critical growth stage nutrition",
      "Proven UK field performance"
    ],
    targetCrops: [
      {
        name: "Sugar Beet",
        image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced root development",
          "Improved sugar content",
          "Better processing quality",
          "Increased marketable yield"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Sugar Formation",
        description: "Specialized nutrients support sugar synthesis and accumulation in roots",
        icon: <Candy className="h-6 w-6 text-red-600" />
      },
      {
        title: "Root Quality",
        description: "Enhances root size, uniformity, and processing characteristics", 
        icon: <Package className="h-6 w-6 text-orange-600" />
      },
      {
        title: "Growth Optimization",
        description: "Balanced nutrition for each critical sugar beet growth stage",
        icon: <Activity className="h-6 w-6 text-green-600" />
      },
      {
        title: "Stress Mitigation",
        description: "Helps plants overcome environmental and physiological challenges",
        icon: <Shield className="h-6 w-6 text-blue-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200 text-lg px-4 py-2">
                Specialist Sugar Beet Nutrition
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                Beet Raiser™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A specialist foliar nutrition solution specifically formulated for sugar beet. Designed to support 
                critical growth stages from establishment through to harvest, delivering the precise nutrients 
                needed for maximum sugar content and processing quality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enhanced with essential macro and micronutrients tailored to sugar beet requirements, 
                Beet Raiser™ delivers targeted nutrition when your crop needs it most for optimal sugar yields.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
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
                  src="https://images.unsplash.com/photo-1592921870789-04563d55041c?w=600&h=400&fit=crop"
                  alt="Beet Raiser Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-red-400 to-green-400 rounded-2xl opacity-20" />
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
              Discover why Beet Raiser™ delivers superior nutrition specifically for sugar beet
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
      <AnalysisPieChart analysis={analysisData} title="Beet Raiser™ Nutrient Analysis" />

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
              Strategic nutrition program for sugar beet growth stages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applicationStages.map((stage, index) => (
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
                      {stage.icon}
                      <CardTitle className="text-xl">{stage.stage}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{stage.timing}</span>
                          <Badge className={`${stage.color} text-sm px-2 py-1`}>
                            {stage.rate}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{stage.notes}</p>
                      </div>
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
                      Apply in 200-400 l/ha of water ensuring good coverage. Time applications to coincide 
                      with active growth periods for maximum uptake efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Sugar Beet Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-red-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Sugar Beet Specialist Technology</h2>
            <p className="text-xl text-gray-600">
              Understanding the science behind sugar beet nutrition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Candy className="h-8 w-8 text-red-600" />
                    <h3 className="text-2xl font-semibold">Sugar Beet-Optimized Formula</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Package className="h-6 w-6 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Root Development</h4>
                        <p className="text-gray-600">
                          Specialized nutrition supports root bulking and sugar accumulation 
                          for maximum processing quality.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Candy className="h-6 w-6 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Sugar Formation</h4>
                        <p className="text-gray-600">
                          Balanced nutrition enhances photosynthesis and sugar translocation 
                          to roots for optimal sugar content.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Growth Optimization</h4>
                        <p className="text-gray-600">
                          Strategic timing ensures nutrients are available during critical 
                          growth phases for maximum impact.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Processing Quality</h4>
                      <p className="text-red-700">
                        Enhanced with sodium and other key nutrients to optimize sugar beet 
                        processing characteristics and sugar extraction efficiency.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592921870789-04563d55041c?w=600&h=400&fit=crop"
                alt="Sugar Beet Crop Development"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
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
              Convenient sizes for all sugar beet growing operations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-red-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-red-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Perfect for sugar beet specialist nutrition programs</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-red-50 to-green-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale sugar beet production</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Beet Raiser™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-red-600 to-green-600 text-white"
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
                  Contact us for more information about Beet Raiser™
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
                    className="w-full bg-white text-red-600 hover:bg-gray-100"
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