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
  Sun,
  Waves,
  Wheat,
  Flower,
  Gem
} from 'lucide-react';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string; message: string }) => void;
}

export function TensilePage({ onSubmit }: ContactFormProps) {
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
      icon: <Gem className="h-8 w-8 text-blue-600" />,
      title: "Silicon Cell Wall Protection",
      description: "Silicon deposited in cell walls forms a protective layer reducing transpiration through outer cells"
    },
    {
      icon: <Sun className="h-8 w-8 text-orange-600" />,
      title: "Enhanced Heat Stress Tolerance",
      description: "Plants wilt less and are more tolerant of heat stress with improved leaf presentation to light"
    },
    {
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      title: "Improved Stem Strength",
      description: "Increased strength in cell walls improves leaf presentation to light and enhances stem strength"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Enhanced Nutrient Uptake",
      description: "Soluble silicon enhances nutrient uptake and can increase chlorophyll concentration"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Thicker, Darker Leaves",
      description: "Leaves can be thicker and darker green compared to those grown without soluble silicon"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Mechanical Barrier",
      description: "Epidermal cell walls containing silicon deposits act as a mechanical barrier to fungi and insects"
    }
  ];

  const cropApplications = [
    {
      crop: "Cereals",
      rate: "1.25-2.5 l/ha",
      timing: "Apply at GS (Zadoks) 21-23. Repeat at G.S. 30-33",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Wheat className="h-5 w-5 text-yellow-600" />
    },
    {
      crop: "Oilseed Rape",
      rate: "1.25-3.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-yellow-100 text-yellow-800",
      icon: <Flower className="h-5 w-5 text-yellow-600" />
    },
    {
      crop: "Lettuce & Leafy Salads",
      rate: "2.0-3.0 l/ha",
      timing: "Apply from 10-14 days post planting. Repeat at 10-14 day intervals",
      color: "bg-green-100 text-green-800",
      icon: <Leaf className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Cucurbits",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at 4-6 true leaves. Repeat at 10-14 day intervals",
      color: "bg-orange-100 text-orange-800",
      icon: <Sprout className="h-5 w-5 text-orange-600" />
    },
    {
      crop: "Brassicas",
      rate: "1.5-3.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-blue-100 text-blue-800",
      icon: <Leaf className="h-5 w-5 text-blue-600" />
    },
    {
      crop: "Root Crops",
      rate: "1.5-3.0 l/ha",
      timing: "Apply from 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-purple-100 text-purple-800",
      icon: <Sprout className="h-5 w-5 text-purple-600" />
    },
    {
      crop: "Peas & Beans",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at 6-8 true leaves. Repeat at 10-14 day intervals",
      color: "bg-green-100 text-green-800",
      icon: <Sprout className="h-5 w-5 text-green-600" />
    },
    {
      crop: "Alliums",
      rate: "1.5-3.0 l/ha",
      timing: "Apply at 4-6 true leaves. Repeat at 14-21 day intervals",
      color: "bg-indigo-100 text-indigo-800",
      icon: <Sprout className="h-5 w-5 text-indigo-600" />
    }
  ];

  const analysisData = {
    "Silicon (SiO2)": "8",
    "Potassium Oxide (K2O)": "8",
    "Phosphorus Pentoxide (P2O5)": "2",
    "Bio-active agents": "2"
  };

  const pdfLinks = [
    {
      title: "Tensile Leaflet",
      description: "Complete product information and application guidelines"
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
    productName: "Tensile",
    productDescription: "A highly efficient liquid nutrient combining silicon and potassium with phosphite P and seaweed-derived natural biostimulants, formulated to improve crop strength, quality, and shelf life. Contains a soluble form of potassium silicate to strengthen stem and leaf tissue for healthier, more robust arable, vegetable, and salad crops.",
    keyFeatures: [
      "Soluble potassium silicate for enhanced plant strength",
      "Phosphite P for rapid uptake and systemic movement",
      "Seaweed-derived natural biostimulants from Ascophyllum Nodosum",
      "Silicon deposition in cell walls for protection",
      "Enhanced heat stress tolerance and reduced transpiration",
      "Mechanical barrier against fungi and insects"
    ],
    targetCrops: [
      {
        name: "Cereals",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
        benefits: [
          "Stronger stems reduce lodging risk",
          "Enhanced grain fill and quality",
          "Better heat stress tolerance",
          "Improved disease resistance"
        ]
      },
      {
        name: "Leafy Salads",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        benefits: [
          "Thicker, darker green leaves",
          "Extended shelf life",
          "Better presentation and quality",
          "Enhanced nutritional content"
        ]
      },
      {
        name: "Vegetable Crops",
        image: "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=300&fit=crop",
        benefits: [
          "Improved crop strength and structure",
          "Enhanced storage quality",
          "Better disease resistance",
          "Increased market value"
        ]
      },
      {
        name: "Root Crops",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
        benefits: [
          "Stronger root development",
          "Enhanced storage characteristics",
          "Better resistance to stress",
          "Improved quality and yield"
        ]
      }
    ],
    scientificBenefits: [
      {
        title: "Silicon Technology",
        description: "Soluble silicon increases deposited in cell walls, forming a protective layer that strengthens plants",
        icon: <Gem className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Phosphite Action",
        description: "Rapid uptake and systemic movement of phosphite P enhances plant nutrition and defense",
        icon: <Zap className="h-6 w-6 text-green-600" />
      },
      {
        title: "Seaweed Biostimulants",
        description: "Natural compounds from Ascophyllum Nodosum enhance plant metabolism and stress tolerance",
        icon: <Waves className="h-6 w-6 text-purple-600" />
      },
      {
        title: "Enhanced Photosynthesis",
        description: "Improved leaf presentation to light and increased chlorophyll concentration boost photosynthesis",
        icon: <Sun className="h-6 w-6 text-orange-600" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-4 py-2">
                Silicon + Potassium + Phosphite P + Seaweed Biostimulants
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Tensile™
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A highly efficient liquid nutrient combining silicon and potassium with phosphite P and seaweed-derived 
                natural biostimulants, formulated to improve crop strength, quality, and shelf life. Contains a soluble 
                form of potassium silicate to strengthen stem and leaf tissue.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Increases silicon deposited in cell walls, forming a protective layer that reduces transpiration, 
                enhances heat stress tolerance, improves leaf presentation to light, enhances stem strength, boosts 
                nutrient uptake, and acts as a mechanical barrier to fungi and insects.
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
                  alt="Tensile Product"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20" />
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
              Discover how Tensile's silicon technology delivers superior crop strength and quality
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
      <AnalysisPieChart analysis={analysisData} title="Tensile Composition Analysis" />

      {/* Silicon Technology Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Silicon Technology Explained</h2>
            <p className="text-xl text-gray-600">
              Understanding how silicon strengthens plants and enhances performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Gem className="h-8 w-8 text-blue-600" />
                    <h3 className="text-2xl font-semibold">How Silicon Works</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Cell Wall Strengthening</h4>
                        <p className="text-gray-600">
                          Silicon is deposited in cell walls, forming a protective silica layer that 
                          strengthens the entire plant structure.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Droplets className="h-6 w-6 text-cyan-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Reduced Transpiration</h4>
                        <p className="text-gray-600">
                          The silica layer reduces water loss through transpiration, helping plants 
                          cope with water stress and heat.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Sun className="h-6 w-6 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Enhanced Light Utilization</h4>
                        <p className="text-gray-600">
                          Stronger stems and improved leaf angle optimize light interception 
                          and photosynthetic efficiency.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Natural Defense Barrier</h4>
                        <p className="text-gray-600">
                          Silicon deposits create a mechanical barrier that deters insect feeding 
                          and reduces fungal penetration.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Tensile Silicon Technology"
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
            <h2 className="text-4xl font-bold mb-6">Application Rates & Timings</h2>
            <p className="text-xl text-gray-600">
              Flexible application programs for various crop types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cropApplications.map((app, index) => (
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
                      {app.icon}
                      <CardTitle className="text-lg">{app.crop}</CardTitle>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg mb-3">
                      <Badge className={`${app.color} text-lg px-3 py-1`}>
                        {app.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{app.timing}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 space-y-6 max-w-4xl mx-auto"
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
                      Best applied as a foliar spray at water rates of 200-600 l/ha depending on crop type and growth stage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sprout className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-orange-800">Propagated Plants</h3>
                    <p className="text-orange-700">
                      Apply at 3-4 ml per litre of water via irrigation techniques just prior to planting out.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Mixing Instructions */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-cyan-50 to-blue-50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Mixing Instructions & Compatibility</h2>
            <p className="text-xl text-gray-600">
              Important guidelines for optimal product performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <FlaskConical className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Mixing Instructions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">
                      Add to tank with a minimum of 50% of water volume present
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">
                      Maintain agitation during mixing and spraying
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <p className="text-gray-700">
                      Flush spraying equipment and lines with clean water before and after spraying
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                  <CardTitle className="text-xl">Compatibility Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 font-semibold mb-2">Best Applied as Single Product</p>
                    <p className="text-orange-700">
                      For optimal performance, Tensile is best applied as a single product.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800 font-semibold mb-2">Tank Mixing</p>
                    <p className="text-yellow-700">
                      If tank mixing, conduct a jar test with proposed co-products at required dilution rates.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-800 font-semibold mb-2">Important Warning</p>
                    <p className="text-red-700">
                      Alkaline in nature; do not mix with acidic fertilisers or chemicals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              Convenient sizes for all farm requirements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold">Available Pack Sizes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/60 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">2 × 10L</Badge>
                    <p className="text-gray-600">Perfect for smaller operations and trial applications</p>
                  </div>
                  <div className="text-center p-6 bg-white/60 rounded-lg">
                    <Badge variant="secondary" className="text-xl px-4 py-2 mb-4">1000L IBC</Badge>
                    <p className="text-gray-600">Cost-effective solution for large-scale operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* PDF Links Section */}
      <PDFLinks productName="Tensile" links={pdfLinks} />

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
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
                  Contact us for more information about Tensile
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