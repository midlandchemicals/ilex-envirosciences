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
  GraduationCap
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function StartUpMaxxPage({ onSubmit }: ContactFormProps) {
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
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Phosphite P to Power Root Growth",
      description: "Advanced phosphite chemistry promotes rapid root establishment and development"
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "High Levels of Manganese",
      description: "Counters low manganese availability in soil for optimal early growth"
    },
    {
      icon: <Atom className="h-8 w-8 text-purple-600" />,
      title: "Amino Acids Supplement",
      description: "Essential amino acids supplement crop development during critical early stages"
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Trace Element Package",
      description: "Comprehensive trace elements readily available to germinating seed"
    },
    {
      icon: <Sprout className="h-8 w-8 text-cyan-600" />,
      title: "More Even Establishment",
      description: "Promotes uniform germination and establishment across the field"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Enhanced Nutrient Uptake",
      description: "Increased quality and yield potential through improved nutrient utilization"
    }
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      rate: "3.0 litres per tonne of seed",
      notes: "Autumn and spring sown wheat and barley",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />
    },
    {
      crop: "Peas",
      rate: "3.0 litres per tonne of seed",
      notes: "Enhanced establishment and early vigour",
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Beans",
      rate: "3.0 litres per tonne of seed",
      notes: "Improved nodulation and nitrogen fixation",
      color: "bg-purple-100 text-purple-800",
      icon: <Sprout className="h-5 w-5 text-purple-600" />
    }
  ];

  const analysisData = {
    "Phosphorus Pentoxide (P2O5)": "10.0",
    "Potassium Oxide (K2O)": "2.0",
    "Sulphur (SO3)": "18.5",
    "Manganese (Mn)": "12.0"
  };

  const pdfLinks = [
    {
      title: "Start-uP MAXX Leaflet",
      description: "Complete product information and application guidelines"
    },
    {
      title: "Phosphite Action Information Sheet",
      description: "Technical information about phosphite mode of action"
    },
    {
      title: "Compatibility Chart",
      description: "Tank mixing compatibility with other seed treatments"
    }
  ];

  // Trial data for performance graph
  const trialData = [
    { treatment: "Untreated", yield: 100 },
    { treatment: "Granular Starter Fert.", yield: 160 },
    { treatment: "Starter Fert. + Start-up MAXX", yield: 120 },
    { treatment: "Start-up MAXX", yield: 200 },
    { treatment: "Liquid Starter Fert.", yield: 50 }
  ];

  // ProductShowcase data
  const showcaseData = {
    productName: "Start-uP MAXX",
    productDescription: "An advanced seed treatment for early vigour, combining proven phosphite chemistry with bioactive agents and a manganese-rich nutrient package to promote rapid establishment and early vigour in autumn- and spring-sown wheat and barley. Ensures availability of essential nutrients for growth without delays from adverse spraying conditions.",
    keyFeatures: [
      "Proven phosphite chemistry for enhanced root growth",
      "High manganese content (12%) to counter soil deficiencies",
      "Essential amino acids for crop development support",
      "Comprehensive trace element package",
      "Bioactive agents from seaweed extracts",
      "Suitable for cereals, peas, and beans"
    ],
    targetCrops: [
      {
        name: "Wheat",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced early establishment",
          "Improved root development", 
          "Better stress tolerance",
          "Increased yield potential"
        ]
      },
      {
        name: "Barley",
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
        benefits: [
          "Rapid germination and emergence",
          "Strong root system development",
          "Enhanced nutrient uptake",
          "Improved establishment uniformity"
        ]
      },
      {
        name: "Peas",
        image: "https://images.unsplash.com/photo-1589927986089-35812388d1b4?w=400&h=300&fit=crop",
        benefits: [
          "Enhanced nodulation",
          "Improved nitrogen fixation",
          "Better early vigour",
          "Increased protein development"
        ]
      },
      {
        name: "Beans",
        image: "https://images.unsplash.com/photo-1575908539629-0445cf2a8db8?w=400&h=300&fit=crop",
        benefits: [
          "Strong establishment",
          "Enhanced root development",
          "Better stress tolerance",
          "Improved pod development"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Phosphite Technology",
        description: "Advanced phosphite chemistry provides immediate plant availability and systemic movement",
        icon: <Zap className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Manganese Enhancement",
        description: "High manganese levels counter soil deficiencies for optimal enzyme function",
        icon: <Activity className="h-6 w-6 text-green-600" />
      },
      {
        title: "Amino Acid Complex",
        description: "Essential amino acids from seaweed support protein synthesis and development",
        icon: <Atom className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Trace Element Package",
        description: "Comprehensive micronutrients readily available to germinating seeds",
        icon: <Target className="h-6 w-6 text-orange-600" />
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
                Advanced Seed Treatment with Phosphite Chemistry
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Start-uP MAXX
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                An advanced seed treatment for early vigour, combining proven phosphite chemistry with bioactive 
                agents and a manganese-rich nutrient package to promote rapid establishment and early vigour in 
                autumn- and spring-sown wheat and barley.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ensures availability of essential nutrients for growth without delays from adverse spraying 
                conditions, delivering superior establishment and enhanced crop performance from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  Get Product Info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Trial Results
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
                  alt="Start-uP MAXX Product"
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
              Discover why Start-uP MAXX delivers superior seed treatment performance
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
      <AnalysisPieChart analysis={analysisData} title="Start-uP MAXX Nutrient Analysis" />

      {/* Trial Results Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Independent Trial Results</h2>
            <p className="text-xl text-gray-600">
              Performance data from independent plot and field trials on peas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold">Trial Performance Results</h3>
                  </div>
                  <div className="space-y-4">
                    {trialData.map((result, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{result.treatment}</span>
                          <Badge variant="secondary" className="px-3 py-1">
                            {result.yield} T/Ha
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(result.yield / 200) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Findings</h4>
                    <p className="text-blue-700 text-sm">
                      Start-uP MAXX showed the highest performance in independent trials, 
                      delivering 200 T/Ha compared to untreated controls.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589927986089-35812388d1b4?w=600&h=400&fit=crop"
                alt="Trial Results - Healthy Crop Growth"
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
              Seed treatment rates and application methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                    <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                      <Badge className={`${crop.color} text-lg px-3 py-1`}>
                        {crop.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{crop.notes}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 max-w-4xl mx-auto space-y-6"
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
                      Apply directly to the seed or after pre-diluting with water. Formulated as a 
                      totally water-soluble liquid. Agitate prior to use and apply through existing 
                      seed treatment equipment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-green-800">Compatibility</h3>
                    <p className="text-green-700">
                      Fully compatible with other commonly used seed treatments. Clean equipment 
                      thoroughly with water after treatment. Do not exceed 3.0 litres per tonne of seed.
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
              Professional seed treatment solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                  <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">20L</Badge>
                  <p className="text-gray-600">Professional seed treatment solution for commercial applications</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Start-uP MAXX" links={pdfLinks} />

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
                  Contact us for more information about Start-uP MAXX
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