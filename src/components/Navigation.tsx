import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { 
  Leaf, 
  Menu, 
  X, 
  ChevronDown, 
  Beaker,
  Sprout,
  Shield,
  Wheat,
  FlaskConical,
  Phone,
  Mail,
  FileText
} from 'lucide-react';

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const productRanges = [
    {
      title: "The Ilex Phosphite Range",
      link: "phosphite-range",
      icon: <Beaker className="h-4 w-4" />,
      products: [
        { product: "Crop Rooter® Plus", link: "crop-rooter-plus" },
        { product: "PK MAXX™ +", link: "pk-maxx" },
        { product: "OilSeed Raiser™", link: "oilseed-raiser" },
        { product: "CaPITAL™", link: "capital" },
        { product: "Tensile™", link: "tensile" },
        { product: "Beet Raiser™", link: "beet-raiser" },
        { product: "Maniphos™", link: "maniphos" },
        { product: "PK VEG™", link: "pk-veg" }
      ]
    },
    {
      title: "The Ilex Foliar Nutrient Range",
      link: "foliar-range",
      icon: <Sprout className="h-4 w-4" />,
      products: [
        { product: "Mn SUPER™", link: "mn-super" },
        { product: "Mag Plus™", link: "mag-plus" },
        { product: "ful-oN™", link: "ful-on" },
        { product: "Mn-Cu Plus™", link: "mn-cu-plus" },
        { product: "Foliar Boost™", link: "foliar-boost" },
        { product: "Cu-Zin™", link: "cu-zin" },
        { product: "Pro-K™", link: "pro-k" },
        { product: "Pro-Sul™", link: "pro-sul" }
      ]
    },
    {
      title: "Calcium Supplements",
      link: "calcium-range",
      icon: <Shield className="h-4 w-4" />,
      products: [
        { product: "Pro-Cal™", link: "pro-cal" },
        { product: "Advocate™", link: "advocate" },
        { product: "CaPITAL™", link: "capital" }
      ]
    },
    {
      title: "Biostimulants",
      link: "biostimulants",
      icon: <Leaf className="h-4 w-4" />,
      products: [
        { product: "Stimplex®", link: "stimplex" },
        { product: "Toggle®", link: "toggle" }
      ]
    },
    {
      title: "Seed Treatments",
      link: "seed-treatments",
      icon: <Wheat className="h-4 w-4" />,
      products: [
        { product: "Start-uP® MAXX", link: "start-up-maxx" },
        { product: "Start-uP®", link: "start-up" },
        { product: "ProZest™", link: "prozest" },
        { product: "Man-uP™", link: "man-up" }
      ]
    },
    {
      title: "The Ilex Organic Range",
      link: "organic-range",
      icon: <FlaskConical className="h-4 w-4" />,
      products: [
        { product: "Complete™ (6-2-4)", link: "complete-6-2-4" },
        { product: "Complete Hi-Fruit™ (4-2-6)", link: "complete-hi-fruit-4-2-6" },
        { product: "K-Max™ (3-1-8)", link: "k-max-3-1-8" },
        { product: "N-Max™ (7-2-2)", link: "n-max-7-2-2" },
        { product: "Ultimate Gold™ (8-7-7)", link: "ultimate-gold-8-7-7" }
      ]
    }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity p-2 flex-shrink-0"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-900 leading-tight">Ilex EnviroSciences</h1>
              <p className="text-xs text-gray-500 leading-tight">Foliar Nutrition Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 flex-1 justify-end" ref={dropdownRef}>
            {/* Products Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className={`flex items-center gap-1 text-sm hover:bg-gray-100 px-3 py-2 h-auto ${
                  isActive('/products') ? 'bg-gray-100 text-blue-600' : ''
                }`}
                onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
              >
                Products
                <ChevronDown className="h-3 w-3" />
              </Button>
              
              <AnimatePresence>
                {openDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-80 z-50"
                  >
                    <Card className="shadow-xl border-0 bg-white/98 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 gap-1 max-h-96 overflow-y-auto">
                          {productRanges.map((range, rangeIndex) => (
                            <div key={rangeIndex} className="border-b border-gray-100 last:border-b-0 pb-2 mb-2 last:pb-0 last:mb-0">
                              <Link
                                to={`/products/${range.link}`}
                                className="w-full justify-start text-xs font-medium mb-1 h-auto py-1 px-2 flex items-center hover:bg-gray-50 rounded"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {range.icon}
                                <span className="ml-2">{range.title.replace('The Ilex ', '')}</span>
                                <Badge variant="secondary" className="ml-auto text-xs">
                                  {range.products.length}
                                </Badge>
                              </Link>
                              <div className="ml-4 space-y-0.5">
                                {range.products.slice(0, 4).map((product, productIndex) => (
                                  <Link
                                    key={productIndex}
                                    to={`/products/${range.link}/${product.link}`}
                                    className="block w-full text-xs py-0.5 px-2 text-gray-600 hover:bg-gray-50 rounded"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {product.product}
                                  </Link>
                                ))}
                                {range.products.length > 4 && (
                                  <Link
                                    to={`/products/${range.link}`}
                                    className="block w-full text-xs py-0.5 px-2 text-blue-600 hover:bg-gray-50 rounded"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    +{range.products.length - 4} more products
                                  </Link>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Other navigation items */}
            <Link
              to="/about"
              className={`text-sm hover:bg-gray-100 px-3 py-2 rounded transition-colors ${
                isActive('/about') ? 'bg-gray-100 text-blue-600' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm hover:bg-gray-100 px-3 py-2 rounded transition-colors ${
                isActive('/contact') ? 'bg-gray-100 text-blue-600' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              to="/how-to-buy"
              className={`text-sm hover:bg-gray-100 px-3 py-2 rounded transition-colors ${
                isActive('/how-to-buy') ? 'bg-gray-100 text-blue-600' : ''
              }`}
            >
              How to Buy
            </Link>
          </nav>

          {/* Mobile/Tablet Navigation for medium screens */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1 flex-1 justify-end" ref={dropdownRef}>
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-sm hover:bg-gray-100 px-3 py-2 h-auto"
                onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
              >
                Products
                <ChevronDown className="h-3 w-3" />
              </Button>
              
              <AnimatePresence>
                {openDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 w-72 z-50"
                  >
                    <Card className="shadow-xl border-0 bg-white/98 backdrop-blur-sm">
                      <CardContent className="p-3">
                        <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                          {productRanges.map((range, rangeIndex) => (
                            <Link
                              key={rangeIndex}
                              to={`/products/${range.link}`}
                              className="w-full justify-start text-xs h-auto py-2 px-2 flex flex-col items-start hover:bg-gray-50 rounded"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center gap-1 mb-1">
                                {range.icon}
                                <span className="font-medium">{range.title.replace('The Ilex ', '')}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {range.products.length} products
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/about"
              className="text-sm hover:bg-gray-100 px-3 py-2 rounded transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:bg-gray-100 px-3 py-2 rounded transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="xl:hidden flex-shrink-0 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="xl:hidden pb-4 border-t border-gray-200 mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 space-y-2">
                {/* Products Dropdown */}
                <div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-left p-3 h-auto"
                    onClick={() => setOpenDropdown(openDropdown === 'mobile-products' ? null : 'mobile-products')}
                  >
                    <span className="flex items-center gap-2">
                      <Beaker className="h-4 w-4" />
                      Products
                    </span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  <AnimatePresence>
                    {openDropdown === 'mobile-products' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-1 max-h-64 overflow-y-auto"
                      >
                        {productRanges.map((range, rangeIndex) => (
                          <div key={rangeIndex}>
                            <Link
                              to={`/products/${range.link}`}
                              className="w-full justify-start text-sm p-2 h-auto font-medium flex items-center gap-2 hover:bg-gray-50 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {range.icon}
                              {range.title.replace('The Ilex ', '')}
                              <Badge variant="secondary" className="ml-auto text-xs">
                                {range.products.length}
                              </Badge>
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Menu Items */}
                <Link
                  to="/about"
                  className="w-full justify-start p-3 h-auto flex items-center hover:bg-gray-50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  About Us
                </Link>
                
                <Link
                  to="/contact"
                  className="w-full justify-start p-3 h-auto flex items-center hover:bg-gray-50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
                
                <Link
                  to="/how-to-buy"
                  className="w-full justify-start p-3 h-auto flex items-center hover:bg-gray-50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  How to Buy
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
