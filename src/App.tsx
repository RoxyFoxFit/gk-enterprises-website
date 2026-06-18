import { useState, useEffect, type SVGProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Phone, Mail, MapPin, ChevronRight, Star, CheckCircle,
  Factory, Building2, School, Shield, Hotel, HeartPulse, Scissors,
  Shirt, Printer, Gift, Award, Clock, Users, Sparkles,
  DollarSign, Gem, Briefcase, Truck, Settings, MessageCircle,
  Facebook, Instagram, Linkedin, ArrowRight, ChevronLeft, Quote, Send, ExternalLink
} from 'lucide-react';

const googleMapsLocationUrl = 'https://maps.app.goo.gl/zQd6gPAuQwaV2HRo6';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GK</span>
            </div>
            <div className={`font-display font-bold text-xl ${isScrolled ? 'text-secondary-900' : 'text-white'}`}>
              G.K. Enterprises
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-secondary-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white rounded-b-2xl shadow-lg overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/corporate.jpeg"
          alt="Professional uniforms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/80 to-secondary-900/60" />
      </div>

      {/* Content */}
      <div className="relative section-container py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-6">
            Trusted Uniform Partner Since Years
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            India's Trusted Partner for{' '}
            <span className="text-primary-400">Corporate, Industrial</span> &{' '}
            <span className="text-primary-400">Institutional Uniforms</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            From budget-friendly workwear to premium executive uniforms, G.K. Enterprises delivers quality, comfort, durability, and customization under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary group">
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#products" className="btn-white">
              View Products
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '1M+', label: 'Uniforms Delivered' },
              { number: '100%', label: 'Quality Assured' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Your Trusted Uniform Manufacturing Partner in Faridabad
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-6">
              G.K. Enterprises is a Faridabad-based uniform manufacturing company led by{' '}
              <strong className="text-secondary-900">Mr. Satnaam Singh Bagga</strong>. With years of experience in the garment and uniform industry, we provide customized uniform solutions tailored to the needs of businesses, industries, educational institutions, and organizations.
            </p>
            <p className="text-secondary-600 leading-relaxed mb-8">
              Our commitment to quality, timely delivery, and customer satisfaction has made us a trusted uniform partner for numerous reputed companies across India. We specialize in manufacturing uniforms ranging from economical budget-friendly options to premium-grade materials.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, text: 'Premium Quality' },
                { icon: Clock, text: 'Timely Delivery' },
                { icon: Users, text: '500+ Clients' },
                { icon: Sparkles, text: 'Custom Solutions' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-secondary-700">
                  <item.icon className="text-primary-500" size={20} />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary group">
              Partner With Us
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="G.K. Enterprises Manufacturing"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-primary-500 mb-1">15+</div>
              <div className="text-secondary-600">Years of Excellence in Uniform Manufacturing</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const uniformCategories = [
    {
      icon: Factory,
      title: 'Industrial Uniforms',
      items: ['Factory uniforms', 'Worker uniforms', 'Safety workwear', 'Technician uniforms'],
      image: '/industry.png',
    },
    {
      icon: Building2,
      title: 'Corporate Uniforms',
      items: ['Executive shirts', 'Formal trousers', 'Office uniforms', 'Reception uniforms'],
      image: '/uniform.jpg',
    },
    {
      icon: School,
      title: 'School Uniforms',
      items: ['Summer uniforms', 'Winter uniforms', 'Sports uniforms', ' Blazers & Ties'],
      image: '/school.jpeg',
    },
    {
      icon: Shield,
      title: 'Security Uniforms',
      items: ['Guard uniforms', 'Security accessories', 'Badges & Epaulletes', 'Belts & Caps'],
      image: '/Screenshot_2026-06-14_at_9.44.36_AM.png',
    },
    {
      icon: Hotel,
      title: 'Hospitality Uniforms',
      items: ['Hotel uniforms', 'Chef coats', 'Restaurant staff uniforms', 'Housekeeping uniforms'],
      image: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare Uniforms',
      items: ['Doctor coats', 'Nurse uniforms', 'Hospital staff uniforms', 'Lab coats'],
      image: '/doctor.png',
    },
    {
      icon: Gift,
      title: 'Premium Towels',
      items: ['Corporate towels', 'Hotel towels', 'Hospital towels', 'Salon towels'],
      image: '/first-image.jpg',
    },
  ];

  const brandingServices = [
    { icon: Scissors, title: 'Embroidery Services', desc: 'Professional logo embroidery on uniforms' },
    { icon: Shirt, title: 'Logo Embroidery', desc: 'Custom logo embroidery for branding' },
    { icon: Printer, title: 'T-Shirt Printing', desc: 'Screen printing and DTF printing' },
    { icon: Briefcase, title: 'Custom Caps', desc: 'Branded caps for promotions' },
    { icon: Gift, title: 'Customized Towels', desc: 'Corporate branded towels' },
    { icon: Sparkles, title: 'Promotional Apparel', desc: 'Custom promotional merchandise' },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold mb-2 block">Products & Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Complete Uniform Solutions
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            From industrial workwear to corporate executive wear, we manufacture a comprehensive range of uniforms for every sector.
          </p>
        </motion.div>

        {/* Uniform Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {uniformCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
                <category.icon className="absolute bottom-4 left-4 text-primary-400" size={32} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-secondary-600 text-sm">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Branding Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-display font-bold text-secondary-900 mb-6 text-center">
            Custom Branding Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">{service.title}</h4>
                  <p className="text-sm text-secondary-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Fabric Quality Section
function FabricSection() {
  const fabricTiers = [
    {
      icon: DollarSign,
      title: 'Budget Friendly',
      desc: 'Affordable uniforms without compromising durability',
      features: ['Cost-effective solutions', 'Durable materials', 'Bulk order discounts', 'Quick turnaround'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Briefcase,
      title: 'Standard Corporate',
      desc: 'Comfortable and professional fabrics for daily office use',
      features: ['Breathable fabrics', 'Professional look', 'Easy maintenance', 'Value for money'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Gem,
      title: 'Premium Collection',
      desc: 'High-end fabrics for executives and management teams',
      features: ['Premium materials', 'Executive finish', 'Custom tailoring', 'Premium branding'],
      color: 'from-primary-500 to-primary-700',
    },
  ];

  const fabricPartners = [
    {
      name: 'Mafatlal',
      logo: '/mafatlal-logo.png',
      tagline: '120+ years of textile excellence',
    },
    {
      name: 'Sparsh Fab',
      logo: '/sparsh-fab-logo.webp',
      tagline: 'Premium uniform fabric manufacturer',
    },
    {
      name: 'Valji',
      logo: '/valji-logo.webp',
      tagline: 'Trusted institutional & corporate fabrics',
    },
  ];

  return (
    <section className="section-padding gradient-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-semibold mb-2 block">Fabric Quality</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Premium Fabrics for Every Budget
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From economical workwear to executive-grade materials — we help you choose the right fabric based on usage, climate, comfort, durability, and budget.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Budget spectrum bar */}
          <div className="hidden md:flex items-center justify-between px-8 pt-8 pb-2">
            <span className="text-green-400 text-sm font-medium">Budget Friendly</span>
            <div className="flex-1 mx-6 h-1.5 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-primary-500" />
            <span className="text-primary-400 text-sm font-medium">Premium Collection</span>
          </div>

          {/* All tiers in one unified panel */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {fabricTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 hover:bg-white/5 transition-colors"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-4`}>
                  <tier.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.desc}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="text-primary-400 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Fabric partners */}
          <div className="border-t border-white/10 bg-white/5 px-6 md:px-10 py-8 md:py-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Trusted Fabric Partners
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                We source and collaborate with India's leading textile manufacturers to deliver consistent quality across every price range.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {fabricPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group flex flex-col items-center text-center"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2.5 + index * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                    className="relative w-28 h-20 md:w-32 md:h-24 bg-white rounded-xl flex items-center justify-center p-3 mb-3 shadow-lg group-hover:shadow-primary-500/30 transition-shadow"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                  <span className="text-white font-semibold text-sm">{partner.name}</span>
                  <span className="text-gray-500 text-xs mt-1">{partner.tagline}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseSection() {
  const reasons = [
    { icon: Award, title: 'Premium Quality Fabrics', desc: 'We source only the finest materials for lasting quality' },
    { icon: DollarSign, title: 'Competitive Pricing', desc: 'Best value for quality uniforms at every budget level' },
    { icon: Sparkles, title: 'Custom Branding & Embroidery', desc: 'Professional logo embroidery and printing services' },
    { icon: Package, title: 'Bulk Order Capability', desc: 'Large capacity for institutional and corporate orders' },
    { icon: Truck, title: 'Timely Delivery', desc: 'On-time delivery guaranteed for all orders' },
    { icon: Users, title: 'Experienced Manufacturing Team', desc: 'Skilled craftsmen with years of expertise' },
    { icon: Briefcase, title: 'Corporate & Industrial Expertise', desc: 'Understanding of diverse industry requirements' },
    { icon: Settings, title: 'End-to-End Uniform Solutions', desc: 'From design to delivery, we handle everything' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            The G.K. Enterprises Advantage
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Decades of experience, commitment to quality, and customer-centric approach make us the preferred uniform partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center p-6 rounded-xl hover:bg-primary-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
                <reason.icon className="text-primary-500 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="font-bold text-secondary-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-secondary-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type PackageProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

// Import Package icon for WhyChooseSection
function Package({ size = 24, className, ...props }: PackageProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

// Clients Section
type ClientLogoProps = {
  name: string;
  logo?: string;
  location?: string;
  initials?: string;
};

function ClientLogoCard({ name, logo, location, initials }: ClientLogoProps) {
  const [hasLogo, setHasLogo] = useState(Boolean(logo));
  const displayInitials = initials ?? name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group h-full min-h-[150px] bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col items-center justify-between text-center hover:shadow-lg transition-all"
    >
      <div className="h-16 w-full flex items-center justify-center">
        {logo && hasLogo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setHasLogo(false)}
            className="max-h-14 max-w-[150px] object-contain grayscale group-hover:grayscale-0 transition-all"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-secondary-900 text-white flex items-center justify-center font-bold text-sm tracking-wide">
            {displayInitials}
          </div>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-secondary-900 text-sm leading-snug">{name}</h3>
        {location && <p className="text-xs text-secondary-500 mt-1">{location}</p>}
      </div>
    </motion.div>
  );
}

function ClientsSection() {
  const clients = [
    { name: 'Imperial Auto', logo: '/client-logos/imperial-auto.jpeg' },
    { name: 'Denso Haryana', logo: '/client-logos/denso.jpeg', location: 'Haryana' },
    { name: 'Victura Technologies', logo: '/client-logos/victura-technologies.jpeg' },
    { name: 'Sledge Hammer Cricket Academy', logo: '/client-logos/sledge-hammer-cricket-academy.jpeg' },
    { name: 'Studds', logo: '/client-logos/studds.jpeg' },
    { name: 'Tata Motors', logo: '/client-logos/tata-motors.jpeg' },
    { name: 'Honda', logo: '/client-logos/honda.png' },
    { name: 'Dipak Colour Lab', logo: '/client-logos/dipak-colour-lab.jpeg' },
    { name: 'Joneja Bright Steels', logo: '/client-logos/joneja-bright-steels.jpeg' },
    { name: 'Trado Adhesives and Chemicals Pvt. Ltd.', initials: 'TA' },
    { name: 'Calista Salon & Academy', logo: '/client-logos/calista-salon-academy.jpeg', location: 'Ludhiana' },
    { name: 'Sadhu Forging Limited', logo: '/client-logos/sadhu-forging-limited.png' },
    { name: 'Falcon Cables', logo: '/client-logos/falcon-cables.jpeg', location: 'Faridabad' },
    { name: 'Mahindra Defence Systems Limited', logo: '/client-logos/mahindra-defence.png' },
    { name: 'Lubsa Multilab Systems Pvt. Ltd.', logo: '/client-logos/lubsa.png' },
    { name: 'Kataria Electricals', initials: 'KE' },
    { name: 'S J Rubber Industries Ltd.', logo: '/client-logos/sj-rubber.png' },
    { name: 'Yo Life Projects Private Limited', initials: 'YL' },
    { name: 'Techno Springs India Pvt. Ltd.', logo: '/client-logos/techno-springs-india.png' },
    { name: 'HPA Madhuban', logo: '/client-logos/hpa-madhuban.jpeg' },
    { name: 'Pioneer Services', initials: 'PS' },
    { name: 'Many More', initials: '+' },
  ];

  return (
    <section id="clients" className="section-padding bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold mb-2 block">Our Esteemed Clients</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Serving reputed manufacturing, automotive, steel, defence, retail, service, and lifestyle businesses across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <ClientLogoCard {...client} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'HR Manager, Imperial Auto',
      text: 'G.K. Enterprises has been our trusted uniform supplier for over 5 years. Their quality, timely delivery, and professional service is unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      position: 'Admin Head, Denso Haryana',
      text: 'The embroidery work quality is exceptional. They understood our branding requirements perfectly and delivered uniforms that truly represent our company image.',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      position: 'Procurement Manager, Studds',
      text: 'From industrial safety wear to corporate uniforms, G.K. Enterprises handles all our uniform needs efficiently. Their team is responsive and helpful.',
      rating: 5,
    },
  ];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-primary-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="text-primary-200 absolute top-8 left-8" size={48} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="relative z-10"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-secondary-700 text-center mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div className="text-center">
                  <h4 className="font-bold text-secondary-900">{testimonials[current].name}</h4>
                  <p className="text-secondary-600 text-sm">{testimonials[current].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={prev}
                className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={next}
                className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-primary-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    requirementType: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const requirementTypes = [
    'Industrial Uniforms',
    'Corporate Uniforms',
    'School Uniforms',
    'Security Uniforms',
    'Hospitality Uniforms',
    'Healthcare Uniforms',
    'Embroidery Services',
    'T-Shirt Printing',
    'Custom Caps',
    'Promotional Merchandise',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;

    if (!scriptUrl) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        requirementType: '',
        quantity: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold mb-2 block">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Get a Free Quote Today
            </h2>
            <p className="text-secondary-600 mb-8">
              Ready to upgrade your uniforms? Fill out the form and our team will get back to you within 24 hours with a customized quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Address</h4>
                  <p className="text-secondary-600">
                    D-532, 1st Floor, Behind Radha Soami Satsang Bhawan,<br />
                    Ajronda, Sector-15A, Faridabad, Haryana
                  </p>
                  <a
                    href={googleMapsLocationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    Open in Google Maps
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Phone</h4>
                  <a href="tel:+919911730008" className="text-primary-500 hover:text-primary-600">
                    +91 9911730008
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Email</h4>
                  <a href="mailto:gkuniforms@gmail.com" className="text-primary-500 hover:text-primary-600 block">
                    gkuniforms@gmail.com
                  </a>
                  <a href="mailto:satnaamsinghfbd@gmail.com" className="text-secondary-600 hover:text-primary-500 block">
                    satnaamsinghfbd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <a
              href={googleMapsLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 h-64 rounded-xl overflow-hidden shadow-lg bg-secondary-900 text-white flex flex-col items-center justify-center gap-4 text-center px-6 transition-transform hover:-translate-y-1"
              aria-label="Open G.K. Enterprises location in Google Maps"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <MapPin size={34} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">G.K. Enterprises Location</h4>
                <span className="inline-flex items-center justify-center gap-2 text-primary-200">
                  Open in Google Maps
                  <ExternalLink size={16} />
                </span>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Request a Quote</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Requirement Type *
                    </label>
                    <select
                      required
                      value={formData.requirementType}
                      onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select requirement</option>
                      {requirementTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">
                      Quantity Required *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="e.g., 100 units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your uniform requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Request a Quote
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                    Thank you! Your enquiry has been submitted successfully. We'll contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="gradient-dark text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GK</span>
              </div>
              <span className="font-display font-bold text-xl">G.K. Enterprises</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Complete Uniform Solutions - From Budget-Friendly to Premium Corporate & Industrial Wear. Trusted uniform partner for industries across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/919911730008" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Industrial Uniforms</li>
              <li>Corporate Uniforms</li>
              <li>School Uniforms</li>
              <li>Security Uniforms</li>
              <li>Embroidery Services</li>
              <li>T-Shirt Printing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={16} />
                <span>D-532, 1st Floor, Behind Radha Soami Satsang Bhawan, Ajronda, Sector-15A, Faridabad, Haryana</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-primary-400" size={16} />
                <a href="tel:+919911730008" className="hover:text-primary-400 transition-colors">+91 9911730008</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-primary-400" size={16} />
                <a href="mailto:gkuniforms@gmail.com" className="hover:text-primary-400 transition-colors">gkuniforms@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} G.K. Enterprises. All rights reserved.</p>
          <p className="mt-1">Proprietor: Mr. Satnaam Singh Bagga</p>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919911730008?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20uniforms"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all group"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="absolute right-full mr-3 bg-white text-secondary-900 px-3 py-2 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FabricSection />
      <WhyChooseSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
