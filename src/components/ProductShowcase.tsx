import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
import {
  Leaf,
  Zap,
  Target,
  Beaker,
  Droplets,
  ChevronRight,
  Play,
  BarChart3,
  Atom,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Package,
} from "lucide-react";

interface ProductShowcaseProps {
  productName: string;
  productImage?: string;
  productDescription: string;
  keyFeatures: string[];
  targetCrops: Array<{
    name: string;
    image: string;
    benefits: string[];
  }>;
  scientificBenefits: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

export function ProductShowcase({
  productName,
  productImage,
  productDescription,
  keyFeatures,
  targetCrops,
  scientificBenefits,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState("results");
  const [selectedCrop, setSelectedCrop] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Molecular structure animation data
  const molecularAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1, delay: 0.5 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-6">Product Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the science and application behind {productName}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="results" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Results
            </TabsTrigger>
            <TabsTrigger value="science" className="flex items-center gap-2">
              <Atom className="h-4 w-4" />
              Science
            </TabsTrigger>
            <TabsTrigger
              value="application"
              className="flex items-center gap-2"
            >
              <Target className="h-4 w-4" />
              Application
            </TabsTrigger>
          </TabsList>

          <TabsContent value="product">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="relative">
                      {productImage ? (
                        <img
                          src={productImage}
                          alt={productName}
                          className="w-full h-96 object-contain"
                        />
                      ) : (
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop"
                          alt={productName}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                      )}

                      {/* Floating badges */}
                      <div className="absolute top-4 right-4 space-y-2">
                        <Badge className="bg-green-500 text-white shadow-lg">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Premium Quality
                        </Badge>
                        <Badge className="bg-blue-500 text-white shadow-lg">
                          <Zap className="h-3 w-3 mr-1" />
                          Fast Acting
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {productName}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {productDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {keyFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    View Technical Specs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="science">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Atom className="h-8 w-8 text-blue-600" />
                      Molecular Action
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      {/* Animated molecular diagram */}
                      <motion.div
                        className="w-full h-80 flex items-center justify-center"
                        {...molecularAnimation}
                      >
                        <svg viewBox="0 0 300 200" className="w-full h-full">
                          {/* Plant cell */}
                          <motion.circle
                            cx="150"
                            cy="100"
                            r="80"
                            fill="rgba(34, 197, 94, 0.1)"
                            stroke="rgb(34, 197, 94)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                          />

                          {/* Nutrient molecules */}
                          {[...Array(8)].map((_, i) => (
                            <motion.circle
                              key={i}
                              cx={150 + Math.cos((i * Math.PI) / 4) * 40}
                              cy={100 + Math.sin((i * Math.PI) / 4) * 40}
                              r="6"
                              fill="rgb(59, 130, 246)"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.2, duration: 0.5 }}
                            />
                          ))}

                          {/* Arrows showing nutrient uptake */}
                          {[...Array(4)].map((_, i) => (
                            <motion.line
                              key={i}
                              x1={150 + Math.cos((i * Math.PI) / 2) * 120}
                              y1={100 + Math.sin((i * Math.PI) / 2) * 120}
                              x2={150 + Math.cos((i * Math.PI) / 2) * 90}
                              y2={100 + Math.sin((i * Math.PI) / 2) * 90}
                              stroke="rgb(16, 185, 129)"
                              strokeWidth="2"
                              markerEnd="url(#arrowhead)"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 1 + i * 0.3, duration: 0.8 }}
                            />
                          ))}

                          <defs>
                            <marker
                              id="arrowhead"
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="rgb(16, 185, 129)"
                              />
                            </marker>
                          </defs>
                        </svg>
                      </motion.div>

                      <div className="text-center mt-4">
                        <p className="text-gray-600">
                          Advanced nutrient delivery system ensures rapid
                          cellular uptake
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {scientificBenefits.map((benefit, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="application">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Target Crops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {targetCrops.map((crop, index) => (
                        <Button
                          key={index}
                          variant={
                            selectedCrop === index ? "default" : "outline"
                          }
                          className="w-full justify-start"
                          onClick={() => setSelectedCrop(index)}
                        >
                          <Leaf className="h-4 w-4 mr-2" />
                          {crop.name}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCrop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <ImageWithFallback
                              src={targetCrops[selectedCrop]?.image}
                              alt={targetCrops[selectedCrop]?.name}
                              className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-4">
                              {targetCrops[selectedCrop]?.name}
                            </h3>
                            <div className="space-y-3">
                              {targetCrops[selectedCrop]?.benefits.map(
                                (benefit, index) => (
                                  <div
                                    key={index}
                                    className="flex items-start gap-3"
                                  >
                                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">
                                      {benefit}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      +42%
                    </div>
                    <p className="text-green-800 font-medium mb-2">
                      Yield Increase
                    </p>
                    <p className="text-sm text-green-700">
                      Maximum recorded improvement
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      98%
                    </div>
                    <p className="text-blue-800 font-medium mb-2">
                      Crop Quality
                    </p>
                    <p className="text-sm text-blue-700">
                      Premium grade classification
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      4x
                    </div>
                    <p className="text-purple-800 font-medium mb-2">
                      Faster Uptake
                    </p>
                    <p className="text-sm text-purple-700">
                      Compared to standard products
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Field Trial Comparison
                    </h3>
                    <p className="text-gray-600">
                      Independent trials across multiple soil types and growing
                      conditions
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="bg-gray-200 rounded-lg p-6 mb-4">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=300&h=200&fit=crop"
                          alt="Untreated crop"
                          className="w-full h-32 object-cover rounded"
                        />
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        Control Group
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Standard fertilizer program
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-green-100 rounded-lg p-6 mb-4">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop"
                          alt="Treated crop"
                          className="w-full h-32 object-cover rounded"
                        />
                      </div>
                      <Badge className="mb-2 bg-green-600">
                        {productName} Treated
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Enhanced growth and vigor
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
