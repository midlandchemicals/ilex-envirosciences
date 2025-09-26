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
  Recycle,
  Microscope,
  Coffee,
  Factory,
  GraduationCap,
  Star,
  Crown,
  Cherry
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function CompleteHiFruitPage({ onSubmit }: ContactFormProps) {
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
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      title: "Organic Certification",
      description: "Certified by Organic Farmers & Growers (UK2) and The Soil Association for organic systems"
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Easy-to-Use Liquid Formulation",
      description: "Free-flowing liquid with high water solubility and minimal sedimentation"
    },
    {
      icon: <Recycle className="h-8 w-8 text-purple-600" />,
      title: "Sustainable Plant Sources",
      description: "Derived from cane sugar molasses and sustainable sources of plant material"
    },
    {
      icon: <Crown className="h-8 w-8 text-orange-600" />,
      title: "Higher Potassium Content",
      description: "Enhanced potassium for situations with restricted crop maturity or fruit development"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Balanced Nutrient Combination",
      description: "Encourages strong and healthy growth in all fruiting and flowering plants"
    },
    {
      icon: <Coffee className="h-8 w-8 text-yellow-600" />,
      title: "Enhanced Nutrient Absorption",
      description: "Carbohydrates and sugars fuel beneficial microbes and fungi for better uptake"
    }
  ];

  const analysisData = {
    "Nitrogen (N)": "4.5",
    "Phosphorus (P2O5)": "2.0", 
    "Potassium (K2O)": "6.1",
    "Calcium (CaO)": "0.6",
    "Sulphur (SO3)": "0.5",
    "Magnesium (MgO)": "0.5"
  };

  const pdfLinks = [
    {
      title: "Complete Hi-Fruit (4-2-6) Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Complete Hi-Fruit (4-2-6)",
    productDescription: "Offers higher potassium content for situations where restricted crop maturity or fruit development reduces yield potential. A free-flowing liquid with high water solubility and minimal sedimentation, used to boost plant health in outdoor vegetable and fruit crops under restricted soil fertility or poor weather, and in protected crops with increased potassium needs. Derived from cane sugar molasses and sustainable plant material, it includes carbohydrates and sugars to fuel beneficial microbes and fungi for better nutrient absorption.",
    keyFeatures: [
      "Higher potassium content (6.1% K2O) for enhanced fruit development",
      "Free-flowing liquid with high water solubility",
      "Minimal sedimentation for reliable application",
      "Derived from sustainable cane sugar molasses and plant material",
      "Includes carbohydrates and sugars for microbial enhancement",
      "Complete mineral package with calcium, magnesium, and sulphur",
      "Organic certification from Soil Association and Organic Farmers & Growers"
    ],
    targetCrops: [
      {
        name: "Fruit Crops",
        image: "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced fruit development",
          "Improved fruit quality and size",
          "Better sugar content",
          "Extended storage life"
        ]
      },
      {
        name: "Outdoor Vegetables",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Overcomes restricted soil fertility",
          "Resilience in poor weather",
          "Enhanced crop maturity",
          "Improved yield potential"
        ]
      },
      {
        name: "Protected Crops",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
        benefits: [
          "Meets increased potassium needs",
          "Enhanced productivity",
          "Better environmental adaptation",
          "Improved crop uniformity"
        ]
      },
      {
        name: "Flowering Plants",
        image: "https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced flowering performance",
          "Improved bloom quality",
          "Extended flowering period",
          "Better overall plant health"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Higher Potassium Formulation",
        description: "6.1% K2O provides enhanced potassium for situations with restricted crop maturity or fruit development",
        icon: <Crown className="h-6 w-6 text-orange-600" />
      },
      {
        title: "Sustainable Plant Sources",
        description: "Derived from cane sugar molasses and sustainable plant material for environmental responsibility",
        icon: <Recycle className="h-6 w-6 text-green-600" />
      },
      {
        title: "Microbial Enhancement",
        description: "Carbohydrates and sugars provide fuel for beneficial microbes and fungi improving nutrient uptake",
        icon: <Microscope className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Complete Mineral Package",
        description: "Balanced nutrients with enhanced calcium and magnesium for comprehensive plant nutrition",
        icon: <Atom className="h-6 w-6 text-purple-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 text-lg px-4 py-2">
                Higher Potassium 4-2-6 Formulation for Enhanced Fruit Development
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Complete Hi-Fruit (4-2-6)
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Offers higher potassium content for situations where restricted crop maturity or fruit development 
                reduces yield potential. A free-flowing liquid with high water solubility and minimal sedimentation, 
                used to boost plant health in outdoor vegetable and fruit crops under restricted soil fertility or 
                poor weather, and in protected crops with increased potassium needs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Derived from cane sugar molasses and sustainable plant material, it includes carbohydrates and 
                sugars to fuel beneficial microbes and fungi for better nutrient absorption. Certified organic 
                and environmentally responsible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
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
                  src="https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=600&h=400&fit=crop"
                  alt="Complete Hi-Fruit - Enhanced Fruit Development"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl opacity-20" />
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
              Discover why Complete Hi-Fruit (4-2-6) is the premium choice for enhanced fruit development
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
      <AnalysisPieChart analysis={analysisData} title="Complete Hi-Fruit (4-2-6) Nutrient Analysis" />

      {/* Enhanced Potassium Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-orange-50 to-red-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Enhanced Potassium Technology</h2>
            <p className="text-xl text-gray-600">
              Higher potassium formulation for superior fruit development and crop maturity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="h-8 w-8 text-orange-600" />
                    <h3 className="text-2xl font-semibold">Higher Potassium Formulation</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">6.1% Potassium (K2O)</h4>
                      <p className="text-orange-700 text-sm">
                        Enhanced potassium content for situations with restricted crop maturity or fruit development
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">4.5% Nitrogen (N)</h4>
                      <p className="text-blue-700 text-sm">
                        Balanced nitrogen for healthy vegetative growth and fruit development
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">2.0% Phosphorus (P2O5)</h4>
                      <p className="text-green-700 text-sm">
                        Essential for energy transfer, root development, and flowering processes
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Complete Mineral Enhancement</h4>
                      <p className="text-orange-700 text-sm">
                        Enhanced calcium (0.6%), magnesium (0.5%), and sulphur (0.5%) for 
                        comprehensive fruit and flowering plant nutrition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1464822759356-8d6106e78f86?w=600&h=400&fit=crop"
                alt="Enhanced Fruit Development"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Application Methods Section */}
      <motion.section 
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Methods</h2>
            <p className="text-xl text-gray-600">
              Versatile application for both foliar spray and fertigation systems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-orange-50 border border-orange-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets className="h-8 w-8 text-orange-600" />
                  <h3 className="text-2xl font-semibold text-orange-800">Foliar Application</h3>
                </div>
                <p className="text-orange-700 mb-6">
                  Apply as a foliar spray for direct nutrient uptake through the leaves. 
                  The free-flowing liquid with high water solubility ensures reliable application 
                  with minimal sedimentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-orange-700">High water solubility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-orange-700">Minimal sedimentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-orange-700">Rapid nutrient uptake</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="h-8 w-8 text-red-600" />
                  <h3 className="text-2xl font-semibold text-red-800">Fertigation</h3>
                </div>
                <p className="text-red-700 mb-6">
                  Apply through fertigation systems for root zone nutrition. Particularly effective 
                  for protected crops with increased potassium needs and situations with restricted 
                  soil fertility.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-red-700">Enhanced microbial activity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-red-700">Improved nutrient absorption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-red-700">Root zone development</span>
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
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-orange-800">Ideal Applications</h3>
                    <p className="text-orange-700">
                      Perfect for outdoor vegetable and fruit crops under restricted soil fertility or poor weather conditions, 
                      and in protected crops where increased potassium needs arise due to intensive growing conditions. 
                      The higher potassium content specifically addresses situations where restricted crop maturity 
                      or fruit development reduces yield potential.
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
        className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Pack Sizes Available</h2>
            <p className="text-xl text-gray-600">
              Enhanced fruit development nutrition for all growing systems
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-orange-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                    <p className="text-gray-600">Perfect for specialized fruit and vegetable nutrition programs</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale fruit and vegetable production</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Complete Hi-Fruit (4-2-6)" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white"
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
                  Contact us for more information about Complete Hi-Fruit (4-2-6)
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
                    className="w-full bg-white text-orange-600 hover:bg-gray-100"
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