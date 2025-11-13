import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import {
  Mail,
  Phone,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import logo from "/assets/ilexlogonobg.png";
import midlandLogo from "/assets/midchemnobg.png";
import sunnyImage from "/assets/sunny.jpg";
import brianImage from "/assets/Brian.png";
import robImage from "/assets/Rob.png";
import ebicLogo from "/assets/ebic-logo.png";
import pbsgLogo from "/assets/pbsg-logo.jpg";
import stopFamilyFarmTax from "/assets/stop-family-farm-tax.png";
import northhertsLogo from "/assets/northherts.png";
import samcoLogo from "/assets/samco.png";
import ouseLogo from "/assets/ouse.png";
import woldmarshLogo from "/assets/woldmarsh.png";
import afLogo from "/assets/af.png";
import orionLogo from "/assets/orion.png";
import framLogo from "/assets/fram.png";
import agricureLogo from "/assets/agricure.jpg";
import dbgLogo from "/assets/dbg.jpeg";
import bartholLogo from "/assets/barthol.png";
// Splash Screen Component
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.img
        src={logo}
        alt="Ilex Logo"
        className="w-48 h-auto"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

// Brands Marquee Component

function BrandsMarquee() {
  const navigate = useNavigate();
  const brands = [
    "logo_foliarboost.png",
    "logo_advocate.png",
    "logo_MnCuPlus.png",
    "logo_cuzin.png",
    "logo_startupmaxx.png",
    "logo_PKMaxx.png",
    "logo_Tensile.png",
    "logo_modiphyxtra.png",
    "logo_PKVeg.png",
    "logo_Capital.png",
    "logo_croprooter.png",
    "logo_MNSuper.png",
    "logo_procal.png",
    "logo_BeetRaiser.png",
    "logo_Maniphos.png",
    "logo_OilSeedRaiser.png",
    "logo_MagPlus.png",
    "logo_fulon.png",
  ];

  // Mapping between brand logo filenames and product links
  const brandToProductMap: {
    [key: string]: { category: string; product: string };
  } = {
    "logo_foliarboost.png": {
      category: "foliar-nutrients",
      product: "foliar-boost",
    },
    "logo_advocate.png": { category: "calcium-range", product: "advocate" },
    "logo_MnCuPlus.png": { category: "foliar-nutrients", product: "mn-cu-plus" },
    "logo_cuzin.png": { category: "foliar-nutrients", product: "cu-zin" },
    "logo_startupmaxx.png": {
      category: "seed-treatments",
      product: "start-up-maxx",
    },
    "logo_PKMaxx.png": { category: "phosphite-range", product: "pk-maxx" },
    "logo_Tensile.png": { category: "phosphite-range", product: "tensile" },
    "logo_modiphyxtra.png": {
      category: "water-conditioners",
      product: "modiphy-xtra",
    },
    "logo_PKVeg.png": { category: "phosphite-range", product: "pk-veg" },
    "logo_Capital.png": { category: "calcium-range", product: "capital" },
    "logo_croprooter.png": {
      category: "phosphite-range",
      product: "crop-rooter-plus",
    },
    "logo_MNSuper.png": { category: "foliar-nutrients", product: "mn-super" },
    "logo_procal.png": { category: "calcium-range", product: "pro-cal" },
    "logo_BeetRaiser.png": {
      category: "phosphite-range",
      product: "beet-raiser",
    },
    "logo_Maniphos.png": { category: "phosphite-range", product: "maniphos" },
    "logo_OilSeedRaiser.png": {
      category: "phosphite-range",
      product: "oilseed-raiser",
    },
    "logo_MagPlus.png": { category: "foliar-nutrients", product: "mag-plus" },
    "logo_fulon.png": { category: "foliar-nutrients", product: "ful-on" },
  };

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const dragStartX = useRef(0);
  const lastX = useRef(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  // 🧠 Measure width dynamically (handles resizing)
  useEffect(() => {
    const updateWidth = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.scrollWidth / 2); // because doubled
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // 🌀 Infinite animation loop
  useEffect(() => {
    let animationFrame: number;
    const baseSpeed = 0.75;

    const animate = () => {
      setPosition((prev) => {
        let newPos = prev;

        if (!isPaused && !isDragging) {
          newPos = prev - baseSpeed;
        } else if (!isDragging && velocity !== 0) {
          newPos = prev + velocity;
          setVelocity((v) => v * 0.95);
        }

        // 🔁 Loop seamlessly when passing width
        if (newPos <= -marqueeWidth) newPos = 0;
        if (newPos > 0) newPos = -marqueeWidth;

        return newPos;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isDragging, velocity, marqueeWidth]);

  // 🖱 Drag Controls
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.pageX;
    lastX.current = e.pageX;
    setVelocity(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.pageX - lastX.current;
    setPosition((prev) => prev + delta);
    setVelocity(delta);
    lastX.current = e.pageX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  // Handle brand click navigation
  const handleBrandClick = (brand: string) => {
    const productInfo = brandToProductMap[brand];
    if (productInfo) {
      navigate(`/products/${productInfo.category}/${productInfo.product}`);
    }
  };

  const doubledBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 relative pb-3">
          Our Products
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => !isDragging && setIsPaused(false)}
      >
        {/* Left and right fade gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={marqueeRef}
          className="flex cursor-grab active:cursor-grabbing py-5 select-none"
          style={{
            transform: `translateX(${position}px)`,
            willChange: "transform",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {doubledBrands.map((brand, index) => (
            <button
              key={index}
              className="flex-shrink-0 px-8 cursor-pointer hover:scale-105 transition-transform duration-200"
              draggable={false}
              onClick={() => handleBrandClick(brand)}
            >
              <img
                src={`/assets/${brand}`}
                alt={brand}
                className="h-16 w-auto object-contain pointer-events-none"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsMarquee;

// Team Member Modal Interface and Component
interface TeamMember {
  name: string;
  role: string;
  email: string;
  description: string;
  image: string;
}

function TeamModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  if (!member) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#ececec]/95 p-5"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#ececec] rounded-xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-700 hover:text-[#5bb63b] transition-colors"
        >
          <X size={28} />
        </button>

        <img
          src={member.image}
          alt={member.name}
          className="w-48 h-auto object-cover rounded-md shadow-lg flex-shrink-0"
        />

        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-[#6abf4b] mb-2">
            {member.name}
          </h3>
          <p className="text-xl font-semibold text-black mb-4">{member.role}</p>
          <div
            className="text-base text-gray-800 mb-4 leading-relaxed space-y-3"
            dangerouslySetInnerHTML={{ __html: member.description }}
          />
          <a
            href={`mailto:${member.email}?subject=Ilex%20Website%20Enquiry`}
            className="flex items-center gap-2 text-base text-black hover:text-[#6abf4b] transition-colors"
          >
            <Mail size={20} className="text-[#6abf4b]" />
            {member.email}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Testimonial Modal Interface and Component
interface Testimonial {
  company: string;
  testimonial: string;
}

function TestimonialModal({
  testimonial,
  onClose,
  onPrev,
  onNext,
}: {
  testimonial: Testimonial | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  if (!testimonial) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        className="bg-white rounded-xl p-8 max-w-2xl w-full relative shadow-2xl max-h-[70vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <X size={32} />
        </button>

        <div className="text-center mb-6">
          <h2
            className="text-2xl font-semibold mb-3"
            dangerouslySetInnerHTML={{ __html: testimonial.company }}
          />
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-[#6abf4b] text-[#6abf4b]"
              />
            ))}
          </div>
        </div>

        <div
          className="text-base leading-relaxed text-gray-700 space-y-3"
          dangerouslySetInnerHTML={{ __html: testimonial.testimonial }}
        />

        <div className="flex justify-between mt-8">
          <Button
            onClick={onPrev}
            className="bg-[#6abf4b] hover:bg-[#5aa338] text-white"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            onClick={onNext}
            className="bg-[#6abf4b] hover:bg-[#5aa338] text-white"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Main HomePage Component - Part 1: State and Data
export function HomePage() {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const [selectedTeamMember, setSelectedTeamMember] =
    useState<TeamMember | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Team Members Data
  const teamMembers: TeamMember[] = [
    {
      name: "Sunny Pathak",
      role: "Managing Director",
      email: "sunny@midlandchem.com",
      description: `<p>Sunny, founder of Midland Chemicals, has over 40 years of hands-on experience in the chemical industry.</p><p>For many years, before merging companies, Sunny worked closely with Ilex EnviroSciences, collaborating on complex formulation and process challenges.</p><p>His expertise and client-focused approach have consistently delivered practical, custom-made chemical solutions that help businesses succeed.</p>`,
      image: sunnyImage,
    },
    {
      name: "Brian Aconley",
      role: "Technical Consultant",
      email: "brian@ilex-envirosciences.com",
      description: `<p>With more than 35 years' experience in agricultural chemistry, Brian Aconley has helped farmers, growers, and agribusinesses across the UK and Europe with specialist crop nutrition and biostimulant products.</p><p>Previously one of the original Technical Directors at Ilex EnviroSciences, Brian brings his extensive expertise to Midland Chemicals.</p><p>He works closely with clients at every stage of the supply chain to design and develop bespoke, highly effective products tailored to their specific requirements.</p>`,
      image: brianImage,
    },
    {
      name: "Robert Cameron",
      role: "Head of Quality Control",
      email: "rob@midlandchem.com",
      description: `<p>Robert brings extensive expertise in analytical chemistry and quality assurance to Ilex EnviroSciences.</p><p>As Head of Quality Control, he ensures that every product meets the highest standards of consistency, safety, and performance.</p><p>With a practical, solutions-driven approach, Robert works closely with our production team to maintain regulatory compliance and deliver the reliability our customers depend on.</p>`,
      image: robImage,
    },
  ];

  // Testimonials Data
  const testimonials: Testimonial[] = [
    {
      company: "CJ Fountain and Son LTD",
      testimonial: `I have used a variety of Ilex products on various crops over the last 5 years and am always extremely pleased with the results. <p>My plants look stronger, healthier and root length is far more impressive than without Ilex treatment.<p>Service from Ilex is always professional, product delivery is usually received within 24 hrs. <p>The team are always on hand to help and advise. I highly recommend Ilex for both service and their range of excellent crop nutrition products.`,
    },
    {
      company: "Grange Farms Northampton",
      testimonial: `I was first introduced to Ilex EnviroSciences after commenting on how good the crops on my neighbouring farm looked. <p>I was given the details of the local Ilex rep and was visited by my local sales manager who took the time to talk to me about their range of phosphite nutrition products and even walked my fields with me. <p>This was in 2019 and am still very pleased with their products and level of service.`,
    },
    {
      company: "Flagleaf Farming Lincolnshire",
      testimonial: `We only really saw a visual difference in crops where Crop Rooter Plus had been applied, particularly with a larger root mass and healthier plants. <p>We have also seen trial data that supports a 20% increase in rooting where Crop Rooter Plus has been applied. <p>In our own crops we have seen deeper roots and generally more volume, which must be a positive for crops, especially those that are drought stressed and nutrient hungry.`,
    },
    {
      company: "Tall Oaks Farm<br>North Yorkshire",
      testimonial: `The phosphite in the Crop Rooter Plus has definitely helped the cereals develop better root mass, which in turn has encouraged the crop to forage for nutrients further away from the plant.`,
    },
    {
      company: "R & J Witters Farms",
      testimonial: `Mn SUPER™ – "Never have we used such an effective manganese product, that in just one application clears up manganese deficiency in cereals! Would strongly recommend."`,
    },
  ];

  // Products Data
  const products = [
    {
      title: "Phosphite Range",
      description:
        "The Phosphite range provides your crops with the nutrients they need, quickly and efficiently, and have shown consistent results in promoting root development.",
      link: "phosphite-range",
    },
    {
      title: "Foliar Nutrients",
      description:
        "The Foliar Nutrients targets nutrient deficiencies more efficiently by using formulations that deliver nutrients in more readily plant-available forms.",
      link: "foliar-nutrients",
    },
    {
      title: "Calcium Supplements",
      description:
        "Calcium supplements combine balanced nutrients with powerful biostimulants to boost uptake and activity.",
      link: "calcium-range",
    },
    {
      title: "Biostimulants",
      description:
        "Target nutrient deficiencies more efficiently by using advanced foliar formulations that deliver nutrients in more readily plant-available forms.",
      link: "biostimulants",
    },
    {
      title: "Seed Treatments",
      description:
        "Our seed treatments combine the proven phosphite chemistry with bioactive agents and a nutrient-rich package to promote rapid establishment and early vigour in a variety of crops.",
      link: "seed-treatments",
    },
    {
      title: "Water Conditioners",
      description:
        "Our solution optimises pH levels and improves coverage and leaf uptake, giving a more consistent product performance over a broad range of spraying conditions and crop situations.",
      link: "water-conditioners",
    },
  ];

  // Helper function for testimonial navigation
  const handleTestimonialNav = (direction: "prev" | "next") => {
    if (selectedTestimonial === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedTestimonial - 1 + testimonials.length) % testimonials.length
        : (selectedTestimonial + 1) % testimonials.length;
    setSelectedTestimonial(newIndex);
  };

  // Form validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/myznqarl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert(`Network error: ${error}. Please try again.`);
    }
  };

  // Render the HomePage
  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {selectedTeamMember && (
          <TeamModal
            member={selectedTeamMember}
            onClose={() => setSelectedTeamMember(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedTestimonial !== null && (
          <TestimonialModal
            testimonial={testimonials[selectedTestimonial]}
            onClose={() => setSelectedTestimonial(null)}
            onPrev={() => handleTestimonialNav("prev")}
            onNext={() => handleTestimonialNav("next")}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          id="top"
          className="relative h-[calc(100vh-80px)] mt-20 flex items-center justify-center text-white px-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1628407003079-820b34eee778?q=80&w=2344&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ADVANCED CROP NUTRITION
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Manufacturers of a comprehensive range of <br />
              <strong>Concentrated Foliar Nutrients</strong>,{" "}
              <strong>Biostimulants</strong> & <strong>Seed Treatments</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-[#6abf4b] hover:bg-[#5aa338] cursor-pointer text-white px-8 h-[60px] text-lg font-bold rounded-md transition-all hover:-translate-y-0.5 flex items-center justify-center"
                onClick={() => {
                  const productsSection = document.getElementById("products");
                  if (productsSection) {
                    const headerOffset = 80;
                    const elementPosition =
                      productsSection.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Our Products
              </Button>

              <Button
                variant="outline"
                className="bg-white/20 border-2 cursor-pointer border-white text-white hover:bg-white hover:text-[#6abf4b] px-8 h-[60px] text-lg font-bold rounded-md transition-all flex items-center justify-center"
                onClick={() => {
                  const contactSection = document.getElementById("contact-us");
                  if (contactSection) {
                    const headerOffset = 100;
                    const elementPosition =
                      contactSection.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Brands Marquee */}
        <BrandsMarquee />

        {/* About Section */}
        <section id="about-content" className="bg-white py-10 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 min-w-[320px] max-w-[460px] border border-gray-300 border-l-4 border-l-[#5bb63b] rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-4">
                  <img
                    src={logo}
                    alt="Ilex Logo"
                    className="w-32 h-auto mx-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center mb-3">
                  Our Mission
                </h4>
                <p className="text-gray-700 text-center text-lg leading-relaxed">
                  To deliver innovative crop nutrition solutions that optimise
                  plant health, improve yields, and support sustainable farming
                  practices worldwide.
                </p>
              </motion.div>

              {/* Expertise Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1 min-w-[320px] max-w-[460px] border border-gray-300 border-l-4 border-l-[#5bb63b] rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-0">
                  <a
                    href="https://www.midlandchem.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={midlandLogo}
                      alt="Midland Chem Logo"
                      height={10}
                      className="w-32 h-auto mx-auto -mt-4"
                    />
                  </a>
                </div>
                <h4 className="text-xl font-semibold text-center mb-3">
                  Our Expertise
                </h4>
                <p className="text-gray-700 text-lg text-center leading-relaxed">
                  Midland Chemicals three decades of experience in speciality chemicals
                  production, is now combined with the specialist crop nutrition knowledge
                  of Ilex Envirosciences, to further promote the highest standards
                  in product innovation and quality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section Header */}
        <section
          id="about-header"
          className="bg-[#ececec] py-8 px-5 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-5 relative pb-3">
              Our Team
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mx-auto">
              Originally formed in 2003 as Ilex Organics, in 2009
                <strong>Ilex Envirosciences</strong> was launched specialising in the
                supply of novel, cost-effective nutrition solutions to all areas
                of conventional and organic crop production. We specialise in
                the manufacture of advanced foliar nutrients advanced foliar nutrients,
                biostimulants and seed treatments, designed to optimise plant health
                and maximise yield potential.
              <br />
              <br />
              We specialise in the manufacture of{" "}
              <strong>advanced foliar nutrients</strong>,{" "}
              <strong>biostimulants</strong> and{" "}
              <strong>seed treatments</strong>, designed to optimise plant
              health and maximise yield potential.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="bg-[#ececec] py-12 px-5">
          <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto pb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-56 text-center cursor-pointer"
                onClick={() => setSelectedTeamMember(member)}
              >
                <div className="w-48 h-64 mx-auto mb-4 overflow-hidden shadow-lg transition-all hover:shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[0%] hover:grayscale-0 hover:scale-105 transition-all duration-400"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#6abf4b] mb-1">
                  {member.name}
                </h3>
                <p className="text-base font-semibold text-black mb-2">
                  {member.role}
                </p>
                <a
                  href={`mailto:${member.email}?subject=Ilex%20Website%20Enquiry`}
                  className="text-sm text-black hover:text-[#6abf4b] text-nowrap transition-colors flex items-center justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="text-[#6abf4b] h-5 w-5 flex-shrink-0" />
                  {member.email}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 px-5 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 relative pb-3">
              Our Products
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 border-l-4 hover:border-[#6abf4b] border-l-[#6abf4b] rounded-lg p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
                  onClick={() => navigate(`/products/${product.link}`)}
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#5aa338] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      className="bg-[#f0f0f0] max-w-24 cursor-pointer hover:bg-[#6abf4b] text-[#6abf4b] hover:text-white w-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.link}`);
                      }}
                    >
                      Explore
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Organic Range - Full Width Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white border border-gray-200 border-l-4 border-l-[#6abf4b] rounded-lg p-8 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col lg:flex-row items-start justify-between gap-6"
              onClick={() => navigate("/products/organic-range")}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5aa338] transition-colors">
                  Ilex Organic Range
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Ilex Organic Nutrition range delivers carefully balanced
                  liquid formulations, offering easy to use supplementary feeds
                  to improve crop development and alleviate nutritional stress.
                  All products are certified by the Soil Association and
                  licensed by Organic Farmers & Growers.
                </p>
                <Button
                  className="bg-gray-100 hover:bg-[#6abf4b] text-[#6abf4b] hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products/organic-range");
                  }}
                >
                  Explore
                </Button>
              </div>
              <div className="flex flex-row lg:flex-row gap-8 items-center lg:mt-6">
                <a
                  href="https://www.soilassociation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://naturalgrower.co.uk/cdn/shop/articles/sa_approved_black_JPG_1_520x500_1c39d99c-69fb-4c44-921c-926c42ddf2a9.jpg?v=1734106804&width=496"
                    alt="Soil Association Logo"
                    className="w-32 h-auto object-contain"
                  />
                </a>
                <a
                  href="https://ofgorganic.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWBfaTitAbWy4ygioex22HEmTEyNTfHz5WQ&s"
                    alt="Organic Farmers & Growers Logo"
                    className="w-32 h-auto object-contain"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regulatory & Industry Partnerships Section */}
        <section id="partnerships" className="py-16 px-5 bg-[#e1e1e1]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold mb-6 relative pb-3">
                Regulatory & Industry Partnerships
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
              </h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Ilex EnviroSciences is committed to supporting the safety and
                quality of our products together with independent qualified data
                to prove their value. Our membership of both EBIC & PBSG ensures
                our engagement with Regulators to defend and promote the value
                of Biostimulants.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* EBIC Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-8 shadow-md"
              >
                <div className="flex items-center gap-6 mb-6">
                  <a
                    href="https://biostimulants.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={ebicLogo}
                      alt="EBIC Logo"
                      className="w-24 h-auto object-contain"
                    />
                  </a>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900">
                      European Biostimulants Industry Council (EBIC)
                    </h4>
                    <span className="text-lg font-semibold text-[#6abf4b] uppercase">
                      Active Member
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  EBIC fosters the role of the biostimulants sector in helping
                  farmers to grow adequate quantities of high quality crops
                  profitably while using resources wisely.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To do this, EBIC advocates an operating environment that
                  creates a truly European market for biostimulants and
                  recognises their contribution to sustainable agricultural
                  production, green innovation, economic growth and other
                  societal objectives.
                </p>
              </motion.div>

              {/* PBSG Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md"
              >
                <div className="flex items-center gap-6 mb-6">
                  <a
                    href="https://phosphitebsg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={pbsgLogo}
                      alt="PBSG Logo"
                      className="w-24 h-auto object-contain"
                    />
                  </a>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900">
                      Phosphite Biostimulant Stewardship Group (PBSG)
                    </h4>
                    <span className="text-lg font-semibold text-[#6abf4b] uppercase">
                      Active Member
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  The PBSG was created by a group of like-minded biostimulant
                  manufacturers to lobby Regulators for continued phosphite use.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our aim is to lobby the Regulators to support the continued
                  use of phosphites as biostimulants to enable subsequent
                  registration under new EU and GB Regulations.
                </p>
              </motion.div>
            </div>

            {/* Campaign Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-12"
            >
              <a
                href="https://www.nfuonline.com/stopfamilyfarmtax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src={stopFamilyFarmTax}
                  alt="Stop The Family Farm Tax Campaign Banner"
                  className="max-w-full w-80 xl:w-full h-auto mx-auto"
                  style={{ maxWidth: "650px" }}
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Buying Groups Section */}
        <section id="buying-groups" className="py-16 px-5 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 relative pb-3">
                Buying Groups
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
              </h2>
              <p className="text-lg leading-relaxed max-w-7xl mx-auto">
                Ilex EnviroSciences works with leading agricultural buying
                groups to deliver reliable solutions and trusted partnerships
                across the UK.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "North Herts Farmers",
                  logo: northhertsLogo,
                  url: "https://www.nhfarmers.co.uk/",
                },
                {
                  name: "Samco",
                  logo: samcoLogo,
                  url: "https://www.samco.org.uk/",
                },
                {
                  name: "Ouse & Cherwell",
                  logo: ouseLogo,
                  url: "https://www.ouseandcherwell.co.uk/",
                },
                {
                  name: "Woldmarsh",
                  logo: woldmarshLogo,
                  url: "https://www.woldmarsh.com/",
                },
                { name: "AF", logo: afLogo, url: "https://af.farm/" },
                {
                  name: "Orion Farming Group",
                  logo: orionLogo,
                  url: "https://www.ofg.org.uk/",
                },
                {
                  name: "Fram Farmers",
                  logo: framLogo,
                  url: "https://www.framfarmers.co.uk/",
                },
                {
                  name: "Agricure",
                  logo: agricureLogo,
                  url: "https://www.agricure.co.uk/",
                },
                {
                  name: "DBG",
                  logo: dbgLogo,
                  url: "https://derwentbuyersgroup.com/",
                },
                {
                  name: "Bartholomews",
                  logo: bartholLogo,
                  url: "https://www.bartholomews.co.uk/",
                },
              ].map((group, index) => (
                <motion.a
                  key={index}
                  href={group.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center"
                >
                  <img
                    src={group.logo}
                    alt={`${group.name} Logo`}
                    className="max-h-20 w-auto object-contain grayscale-[0%] hover:grayscale-0 transition-all"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 relative pb-3">
              What Our Clients Say
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#f5f5f5] rounded-lg p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col h-full"
                  onClick={() => setSelectedTestimonial(index)}
                >
                  <div className="flex-1 flex flex-col">
                    <p
                      className="font-bold text-lg text-center "
                      dangerouslySetInnerHTML={{ __html: testimonial.company }}
                    />
                    <div className="mt-auto ">
                      <div className="flex justify-center pt-5 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[#6abf4b] text-[#6abf4b] flex-shrink-0"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-us" className="relative py-16 px-5">
          <div className="absolute inset-0 " />
          <div className="relative max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 relative pb-3">
              Get In Touch
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#6abf4b] rounded-full" />
            </h2>
            <p className="text-center text-gray-600 mb-12">
              We're here to answer your questions and discuss your needs.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Contact Info Column - 40% */}
              <div className="lg:w-2/5 flex flex-wrap gap-4">
                {/* Phone */}
                <div className="flex flex-col w-full gap-y-10">
                  <motion.a
                    href="tel:+441827722911"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-l-[5px] min-h-40 border-[#6abf4b] rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 flex-1 min-w-[calc(50%-0.5rem)] cursor-pointer relative"
                  >
                    <Phone size={24} className="text-[#6abf4b] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0 text-base">
                        Phone
                      </h3>
                      <p className="text-gray-600 text-sm mb-0">
                        +44 1827 722911
                      </p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:ilexsales@ilex-envirosciences.com

?subject=Ilex%20Website%20Enquiry"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white border-l-[5px] min-h-40 border-[#6abf4b] rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 flex-1 min-w-[calc(50%-0.5rem)] cursor-pointer relative"
                  >
                    <Mail size={24} className="text-[#6abf4b] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0 text-base">
                        Email
                      </h3>
                      <p className="text-gray-600 text-sm mb-0">
                        ilexsales@ilex-envirosciences.com
                      </p>
                    </div>
                  </motion.a>
                </div>

                {/* Address - Full Width */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border-l-[5px] py-20 my-5 border-[#6abf4b] rounded-lg p-6 shadow-sm flex items-center gap-4 w-full"
                >
                  <MapPin size={24} className="text-[#6abf4b] flex-shrink-0" />
                  <div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Ilex+EnviroSciences+Ltd+13a+Brindley+Close+Holly+Lane+Industrial+Estate+Atherstone+Warwickshire+CV9+2QZ+United+Kingdom"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-semibold text-gray-900 mb-3 text-base">
                        Our Headquarters
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-0">
                        <strong className="block mb-2">
                          Ilex Envirosciences Ltd
                        </strong>
                        13a Brindley Close,
                        <br />
                        Holly Lane Industrial Estate,
                        <br />
                        Atherstone,
                        <br />
                        Warwickshire,
                        <br />
                        CV9 2QZ,
                        <br />
                        United Kingdom.
                      </p>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form Column - 60% */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-3/5 bg-white w-full rounded-lg p-6 flex items-center justify-center"
              >
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#6abf4b] hover:bg-[#5aa338] text-white px-6 py-2 rounded-md transition-colors"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-full max-w-lg"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6abf4b] focus:border-transparent transition-all ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6abf4b] focus:border-transparent transition-all ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6abf4b] focus:border-transparent transition-all ${
                          errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6abf4b] focus:border-transparent resize-vertical flex-1 min-h-[120px] transition-all ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="bg-[#6abf4b] cursor-pointer text-lg shadow-lg hover:bg-[#5aa338] text-white px-8 py-6 rounded-md font-bold transition-all hover:shadow-lg self-start mt-2"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
