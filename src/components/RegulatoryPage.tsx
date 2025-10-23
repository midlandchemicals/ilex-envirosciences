import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./FallbackImage/ImageWithFallback";
const ebicLogo = "";
const pbsgLogo = "";
import {
  Shield,
  Users,
  Globe,
  Award,
  Leaf,
  TrendingUp,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Microscope,
  BarChart3,
  BookOpen,
  Target,
  Zap,
  FlaskConical,
  Sprout,
  ArrowRight,
  Building,
  Scale,
  CheckCircle,
  Star,
  Eye,
  Calendar,
  Briefcase,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLinkIcon,
} from "lucide-react";

export function RegulatoryPage() {
  const [expandedArticles, setExpandedArticles] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleArticle = (articleId: string) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const industryNews = [
    {
      id: "phosphite-efficiency",
      title:
        "Phosphite plant biostimulants can contribute to improved nutrient use efficiency and drought tolerance",
      summary:
        "Recent scientific research has elucidated the mode of action of phosphite-based plant biostimulants and shown the value that these products can have for achieving the European Union's objectives of increasing nutrient use efficiency and climate-smart agriculture.",
      content:
        "In trials on wheat and oilseed, nitrogen use efficiency improved about 5.5%, yields were higher, and farm income increased 186 euros/hectare and 56 euros/ha respectively. Increased root mass also improved water use efficiency and tolerance of drought stress.",
      category: "Research",
      date: "2024",
      icon: <Microscope className="h-5 w-5 text-blue-600" />,
    },
    {
      id: "defra-consultation",
      title:
        "UK DEFRA consults EBIC on post-Brexit framework for plant biostimulants",
      summary:
        "Over the past few months, EBIC has had frequent exchanges with DEFRA regarding the future for plant biostimulants in the UK.",
      content:
        "DEFRA is keen to create an enabling framework for plant biostimulants in the UK and to ensure that its producers can export to the EU market. The UK government is also mindful that their farmers depend on products from the rest of Europe for their plant nutrition and soil fertility needs (e.g. up to 60% of mineral fertilizers used in the UK come from the EU), so they don't want to create non-tariff barriers to trade. EBIC welcomes the opportunity to support DEFRA in this initiative.",
      category: "Regulatory",
      date: "2024",
      icon: <Building className="h-5 w-5 text-green-600" />,
    },
    {
      id: "systems-thinking",
      title:
        "More systems thinking is needed to make food systems more sustainable, but plant biostimulants are an important new tool",
      summary:
        "Although helpful tools, no agtech innovation is a silver bullet, for ag sustainability. Perhaps the biggest innovation that is needed is for mindsets to change and for all actors to think more holistically.",
      content:
        "These were the conclusions drawn from three days of expert panel discussions, interactive Q&A sessions, keynote presentations, and participative sense-making exercises in EBIC and New Ag International's first Farm to Fork Europe virtual event, which took place from 22-24 June 2021. Despite that caveat, there was wide recognition that plant biostimulants provide farmers with exciting new tools to improve crop quality and yields, nutrient use efficiency, and crop tolerance to difficult and volatile growing conditions.",
      category: "Industry",
      date: "2021",
      icon: <Globe className="h-5 w-5 text-purple-600" />,
    },
    {
      id: "carbon-gain",
      title: "The impact of phosphite on carbon gain and plant physiology",
      summary:
        "The latest output from the University of Nottingham's research into phosphite as a biostimulant shows gains in a number of physiological processes.",
      content:
        "Field trials showed that a single phosphite application in Autumn resulted in an increase in NDVI (normalized difference vegetation index) and SIPI (structural independent pigment index). These measurements were taken using hyperspectral reflectance indices at the vegetative stage during the stem elongation. Studies have shown these parameters are positively correlated with nitrogen status in the soil.",
      category: "Research",
      date: "2023",
      icon: <BarChart3 className="h-5 w-5 text-orange-600" />,
    },
    {
      id: "eu-regulation",
      title: "EU Regulation Ensures that Biostimulants Are Safe and Effective",
      summary:
        "Plant biostimulants are a new category of crop inputs. Different European countries have used different names for them in national rules.",
      content:
        'To respond to growing farmer interest in having access to these new tools for improving nutrient use efficiency, helping plants tolerate abiotic stress (i.e. difficult growing conditions like extreme temperatures and drought or water logging, among others), and enhancing crop quality, European lawmakers included plant biostimulants in the new EU Fertilising Products Regulation (FPR) that went into force in July 2019. In total, the FPR counts 7 different "Product Function Categories (PFCs)", with plant biostimulants being PFC 6.',
      category: "Regulatory",
      date: "2019",
      icon: <Scale className="h-5 w-5 text-red-600" />,
    },
    {
      id: "crown-root-length",
      title: "Field trials show phosphite increases crown root length",
      summary:
        "Preliminary results from field experiments carried out by Omex Agriculture and the University of Nottingham demonstrate improvements in crown root length and canopy cover in wheat plants.",
      content:
        "The two field experiments, at Omex's trials site at Sleaford and at the University of Nottingham's Sutton Bonington campus, tested the growth of wheat plants (variety KWS Siskin) using a combination of foliar phosphite applications (early treatment; late treatment or both) and compared the results to untreated plants.",
      category: "Research",
      date: "2023",
      icon: <Sprout className="h-5 w-5 text-green-600" />,
    },
    {
      id: "climate-smart",
      title: "Plant biostimulants contribute to climate-smart agriculture",
      summary:
        "Plant biostimulants stimulate natural processes in plants to enhance nutrient uptake and efficiency, crop quality, and tolerance to abiotic stress.",
      content:
        "This ensures that plants have good baseline strength and health, making plants less vulnerable to stress, pests, and other threats, including climate shocks. Biostimulant products can help farmers adapt their agricultural systems to an increasingly volatile climate while enhancing food production sustainability, thereby contributing to a climate-smart farm model for the future, which is both resilient and flexible.",
      category: "Climate",
      date: "2023",
      icon: <Leaf className="h-5 w-5 text-teal-600" />,
    },
    {
      id: "nitrogen-savings",
      title:
        "Phosphite as a biostimulant saves up to 40kg per hectare of applied nitrogen",
      summary:
        "The economic case for the use of phosphite as a biostimulant has been clearly demonstrated using data from 178 individual trials undertaken in eight crops over the last four years.",
      content:
        "Foliar application in cereals delivered a yield uplift of 740kg/ha which is a 10:1 return on investment, whilst in oilseeds a yield increase of 470kg/ha translates to a 16:1 return.",
      category: "Economics",
      date: "2023",
      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Regulatory & Industry Partnerships
            </h1>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Ilex EnviroSciences is committed to supporting the safety and
              quality of our products together with independent qualified data
              to prove their value. Our membership of both EBIC & PBSG ensures
              our engagement with Regulators to defend and promote the value of
              Biostimulants.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Industry Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Partnerships
            </h2>
            <p className="text-lg text-gray-600">
              Our strategic partnerships ensure we remain at the forefront of
              regulatory developments and industry best practices.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="delay-100">
              <Card className="h-full border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={ebicLogo}
                        alt="EBIC Logo"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        European Biostimulants Industry Council (EBIC)
                      </CardTitle>
                      <Badge variant="outline" className="mt-2">
                        Active Member
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    EBIC fosters the role of the biostimulants sector in helping
                    farmers to grow adequate quantities of high quality crops
                    profitably while using resources wisely.
                  </p>
                  <p className="text-gray-700">
                    To do this, EBIC advocates an operating environment that
                    creates a truly European market for biostimulants and
                    recognises their contribution to sustainable agricultural
                    production, green innovation, economic growth and other
                    societal objectives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-200">
              <Card className="h-full border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={pbsgLogo}
                        alt="PBSG Logo"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Phosphite Biostimulant Stewardship Group (PBSG)
                      </CardTitle>
                      <Badge variant="outline" className="mt-2">
                        Active Member
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    The PBSG was created by a group of like-minded biostimulant
                    manufacturers to lobby Regulators for continued phosphite
                    use.
                  </p>
                  <p className="text-gray-700">
                    Our aim is to lobby the Regulators to support the continued
                    use of phosphites as biostimulants to enable subsequent
                    Registration under new EU and GB Regulations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Impact & Results
            </h2>
            <p className="text-lg text-gray-600">
              Proven results from comprehensive field trials and research
              programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeInUp} className="delay-100">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-l-blue-500">
                <div className="text-3xl font-bold text-blue-600 mb-2">178</div>
                <div className="text-gray-900 font-medium mb-1">
                  Individual Trials
                </div>
                <div className="text-sm text-gray-600">
                  Across 8 crops over 4 years
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-200">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-l-green-500">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  5.5%
                </div>
                <div className="text-gray-900 font-medium mb-1">
                  N-Use Efficiency
                </div>
                <div className="text-sm text-gray-600">
                  Improvement in trials
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-300">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-l-purple-500">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  16:1
                </div>
                <div className="text-gray-900 font-medium mb-1">
                  ROI in Oilseeds
                </div>
                <div className="text-sm text-gray-600">
                  Return on investment
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-400">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border-l-4 border-l-orange-500">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  40kg
                </div>
                <div className="text-gray-900 font-medium mb-1">
                  N Savings/Ha
                </div>
                <div className="text-sm text-gray-600">
                  Nitrogen reduction potential
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EU Regulation Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              EU Fertilising Products Regulation
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the regulatory framework for plant biostimulants in
              Europe
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="delay-100">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-l-blue-500">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Product Function Category (PFC) 6
                </h3>
                <p className="text-blue-800 text-sm">
                  Plant biostimulants are officially recognized under EU law
                  with common definitions across Member States
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-200">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-l-green-500">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Single European Market
                </h3>
                <p className="text-green-800 text-sm">
                  Starting July 2022, CE-marked EU Fertilising Products can be
                  placed on the market
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-300">
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-l-purple-500">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Safety & Effectiveness
                </h3>
                <p className="text-purple-800 text-sm">
                  Demanding safety requirements ensure products meet high
                  standards for farmer use
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry News */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry News & Research
            </h2>
            <p className="text-lg text-gray-600">
              Latest developments in biostimulant research, regulation, and
              industry insights
            </p>
          </motion.div>

          <div className="space-y-6">
            {industryNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center gap-2 mt-1">
                          {article.icon}
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            • {article.date}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleArticle(article.id)}
                        className="flex-shrink-0"
                      >
                        {expandedArticles[article.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <CardTitle className="text-lg leading-tight pr-8">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.summary}
                    </p>

                    {expandedArticles[article.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <Separator />
                        <p className="text-gray-700 leading-relaxed">
                          {article.content}
                        </p>
                        <Button variant="outline" size="sm">
                          Read Full Article
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Presentation
            </h2>
            <Card className="bg-slate-50 border-2 border-dashed border-slate-300">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-6">
                  <Eye className="h-12 w-12 text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Phosphites as biostimulants in the EU
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  David Booty, PBSG Chair
                </p>
                <Badge variant="outline" className="text-sm">
                  Video Presentation Available
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Stay Informed</h2>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Keep up to date with the latest regulatory developments and
                industry research. Contact us for detailed information about our
                regulatory compliance and industry partnerships.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Contact Regulatory Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-800"
                >
                  Download Research Papers
                  <FileText className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="delay-200">
              <div className="bg-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-300 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Ilex EnviroSciences Ltd</div>
                      <div className="text-slate-300">
                        Willingham Hall, Willingham Road
                      </div>
                      <div className="text-slate-300">Market  LN8 3RH</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-300" />
                    <span>+44 (0) 1673 885175</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-300" />
                    <span>office@ilex-envirosciences.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-slate-300" />
                    <span>Monday–Friday: 09:00–17:00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
