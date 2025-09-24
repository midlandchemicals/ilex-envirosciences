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
  Sparkles
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function CuZinPage({ onSubmit }: ContactFormProps) {
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
      icon: <Timer className="h-8 w-8 text-green-600" />,
      title: "Extended Nutrient Supply",
      description: "Maintains increased levels of copper and zinc in the plant for extended periods of growth, maximizing pollen production and enhancing grain-fill"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "High Concentration Formula",
      description: "High concentration of copper (12% w/v) with zinc (36% w/v) for maximum efficiency and performance"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Effective at Low Application Rates",
      description: "Delivers superior results at low application rates, reducing costs and handling while maintaining effectiveness"
    },
    {
      icon: <Droplets className="h-8 w-8 text-cyan-600" />,
      title: "Disperses Quickly in Tank",
      description: "Specially formulated to disperse quickly in the spray tank for easy application and uniform distribution"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Rainfast on Leaf Surface",
      description: "Trials have shown that the formulation is rainfast on the leaf surface soon after application"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Extensively Compatibility Tested",
      description: "Extensively tested with a wide range of pesticides and found physically compatible with the vast majority of approved agrochemicals"
    }
  ];

  const applicationRates = [
    {
      type: "Maintenance Rate",
      rate: "0.50 – 0.75 l/ha",
      description: "For preventing copper and zinc deficiencies in healthy crops",
      color: "bg-green-100 text-green-800",
      icon: <Shield className="h-5 w-5 text-green-600" />
    },
    {
      type: "Deficiency Rate", 
      rate: "1.00 – 1.50 l/ha",
      description: "For correcting existing copper and zinc deficiencies",
      color: "bg-orange-100 text-orange-800",
      icon: <Zap className="h-5 w-5 text-orange-600" />
    }
  ];

  const analysisData = {
    "Copper (Cu)": "12",
    "Zinc (Zn)": "36"
  };

  const pdfLinks = [
    {
      title: "Cu-Zin Plus™ Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other agricultural products"
    }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Cu-Zin™",
    productDescription: "As well as preventing deficiencies, Cu-Zin has been manufactured to maintain increased levels of copper and zinc in the plant for extended periods of growth, thus maximising pollen production, and in the case of cereals, enhancing grain-fill.",
    keyFeatures: [
      "Extended nutrient supply maintaining increased levels for extended periods",
      "High concentration of copper (12%) with zinc (36%)",
      "Effective at low application rates",
      "Maintains increased levels of copper and zinc in the plant",
      "Disperses quickly in the tank for easy application",
      "Rainfast formulation proven in trials"
    ],
    targetCrops: [
      {
        name: "Cereals",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced grain-fill and quality",
          "Maximized pollen production",
          "Improved nutrient utilization",
          "Better stress tolerance during flowering"
        ]
      },
      {
        name: "Oilseed Rape",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        benefits: [
          "Improved pod fill and seed development",
          "Enhanced flowering and pollination",
          "Better oil content and quality",
          "Increased resistance to environmental stress"
        ]
      },
      {
        name: "Legumes",
        image: "https://images.unsplash.com/photo-1589927986089-35812388d1b4?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced nodulation and nitrogen fixation",
          "Improved pod development",
          "Better protein synthesis",
          "Increased yield potential"
        ]
      },
      {
        name: "Root Crops",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Improved root development and structure",
          "Enhanced storage quality",
          "Better disease resistance",
          "Increased nutrient density"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Copper Enzyme Function",
        description: "Copper is essential for enzyme systems involved in photosynthesis and lignin formation",
        icon: <Atom className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Zinc Metabolism",
        description: "Zinc is crucial for protein synthesis, growth regulators, and reproductive development",
        icon: <Zap className="h-6 w-6 text-green-600" />
      },
      {
        title: "Extended Availability",
        description: "Formulated for sustained release and extended nutrient availability in plant tissues",
        icon: <Timer className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Compatibility Tested",
        description: "Extensively tested with pesticides and found compatible with the vast majority of agrochemicals",
        icon: <Shield className="h-6 w-6 text-orange-600" />
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
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200 text-lg px-4 py-2">
                High Concentration Copper & Zinc Micronutrients
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Cu-Zin™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                As well as preventing deficiencies, Cu-Zin has been manufactured to maintain increased levels 
                of copper and zinc in the plant for extended periods of growth, thus maximising pollen production, 
                and in the case of cereals, enhancing grain-fill.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cu-Zin has been extensively tested with a wide range of pesticides and found to be physically 
                compatible with the vast majority of all approved agrochemical products and is specially formulated 
                to disperse quickly in the spray tank. Trials have shown that the formulation used in Cu-Zin ensures 
                it is rainfast on the leaf surface soon after application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                  Get Product Info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Compatibility Chart
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
                  alt="Cu-Zin Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-orange-400 to-blue-400 rounded-2xl opacity-20" />
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
              Discover why Cu-Zin™ delivers superior micronutrient performance for arable crops
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
      <AnalysisPieChart analysis={analysisData} title="Cu-Zin™ Micronutrient Analysis" />

      {/* Technical Analysis Section */}
      <motion.section 
        className="py-20 px-4 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Technical Analysis</h2>
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-r from-orange-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FlaskConical className="h-6 w-6 text-orange-600" />
                      <h3 className="text-xl font-semibold">Micronutrient Composition</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Zinc (Zn)</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-lg px-3 py-1">36% w/v</Badge>
                          <Badge variant="outline">360 g/l</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Copper (Cu)</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-lg px-3 py-1">12% w/v</Badge>
                          <Badge variant="outline">120 g/l</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Atom className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold">High Concentration Formula</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Specially formulated for maximum nutrient density and extended plant availability
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <p className="text-2xl font-bold text-orange-600 mb-1">36%</p>
                        <p className="text-sm text-gray-600">Zinc Content</p>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600 mb-1">12%</p>
                        <p className="text-sm text-gray-600">Copper Content</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Package className="h-6 w-6 text-purple-600" />
                      <h3 className="text-xl font-semibold">Pack Sizes Available</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">2 × 5L</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Cu-Zin Product"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Application Guidelines */}
      <motion.section 
        className="py-20 px-4"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Application Rates & Timings</h2>
            <p className="text-xl text-gray-600">
              For arable crops - prevent and correct zinc and copper deficiencies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Badge className={`${rate.color} text-2xl px-4 py-2 mb-2`}>
                        {rate.rate}
                      </Badge>
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
                      In the case of severe zinc and copper deficiencies, repeat applications at the 1 l/ha rate 
                      are recommended until symptoms are corrected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Compatibility Highlight Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Compatibility</h2>
            <p className="text-xl text-gray-600">
              Extensively tested for reliable tank mixing performance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-semibold">Wide Compatibility</h3>
                  </div>
                  <p className="text-gray-600">
                    Extensively tested with a wide range of pesticides and found physically 
                    compatible with the vast majority of approved agrochemicals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="h-8 w-8 text-cyan-600" />
                    <h3 className="text-xl font-semibold">Quick Dispersion</h3>
                  </div>
                  <p className="text-gray-600">
                    Specially formulated to disperse quickly in the spray tank, 
                    ensuring easy mixing and uniform application.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center">
                    <FlaskConical className="h-16 w-16 text-orange-600 mx-auto mb-2" />
                    <p className="text-xl font-semibold text-gray-800">Extensively</p>
                    <p className="text-lg text-gray-600">Tested</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-8 w-8 text-green-600" />
                    <h3 className="text-xl font-semibold">Rainfast Formula</h3>
                  </div>
                  <p className="text-gray-600">
                    Trials have shown that the formulation is rainfast on the leaf surface 
                    soon after application, ensuring reliable performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Timer className="h-8 w-8 text-purple-600" />
                    <h3 className="text-xl font-semibold">Extended Nutrition</h3>
                  </div>
                  <p className="text-gray-600">
                    Maintains increased levels of copper and zinc in plants for extended 
                    periods, maximizing nutritional benefits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Cu-Zin™" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white"
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
                  Contact us for more information about Cu-Zin™
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