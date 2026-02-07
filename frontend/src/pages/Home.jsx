import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket, TrendingUp, Globe, Code, Search, Server,
  ArrowRight, CheckCircle, Users, Award, Clock
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Businesses Digitized', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24hr', label: 'Launch Time', icon: Clock },
    { number: '10x', label: 'Growth Boost', icon: TrendingUp }
  ];

  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Responsive, modern websites that convert visitors into customers.',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Meta & Google Ads that deliver real leads and measurable ROI.',
      color: 'bg-teal-500'
    },
    {
      icon: Search,
      title: 'SEO & Branding',
      description: 'Get found on Google with local SEO and brand identity creation.',
      color: 'bg-purple-500'
    },
    {
      icon: Server,
      title: 'Hosting & Support',
      description: 'Secure hosting, domain management, and 24/7 maintenance.',
      color: 'bg-orange-500'
    }
  ];

  const benefits = [
    '24/7 Online Visibility',
    'Credibility & Trust',
    'Reach New Customers',
    'Compete with Big Brands',
    'Easy Booking & Payments',
    'Data-Driven Growth'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-mesh overflow-hidden" data-testid="hero-section">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - 7 cols */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-6">
                Digitizing Bharat's SMB Landscape
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Your Online Store,{' '}
                <span className="text-gradient">Live Today</span> Quickly
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
                From local kirana to nationwide reach. We build professional websites, 
                run performance ads, and grow your business digitally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary"
                  data-testid="hero-cta-primary"
                >
                  Get Your Website
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/9663112394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  data-testid="hero-cta-whatsapp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Talk to Us
                </a>
              </div>
            </motion.div>

            {/* Visual - 5 cols */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1653976499575-6aacb2644727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBsYXB0b3B8ZW58MHx8fHwxNzcwNDc0MDkxfDA&ixlib=rb-4.1.0&q=85&w=800"
                  alt="Modern web design"
                  className="relative rounded-2xl shadow-2xl w-full"
                  data-testid="hero-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary" data-testid="stats-section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Go Digital Section */}
      <section className="py-24 bg-subtle" data-testid="why-digital-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full mb-4">
                Why Go Digital?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Your Customers Are Already Online
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Over 700 million Indians are on the internet. If your business isn't online, 
                you're missing out on growth opportunities every single day.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800"
                alt="Home based baker preparing delicious treats"
                className="rounded-2xl shadow-xl"
                data-testid="why-digital-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24" data-testid="services-overview-section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Everything You Need to Grow Online
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From website creation to digital marketing, we provide end-to-end solutions 
              tailored for Indian businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`service-card-${index}`}
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="btn-secondary"
              data-testid="view-all-services-btn"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary" data-testid="cta-section">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take Your Business Online?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join 500+ Indian businesses that have transformed their reach with MakeMyDukaan. 
              Get started today and see results within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-accent"
                data-testid="cta-get-quote-btn"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919663112394"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
                data-testid="cta-call-btn"
              >
                Call Now: +91 96631 12394
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
