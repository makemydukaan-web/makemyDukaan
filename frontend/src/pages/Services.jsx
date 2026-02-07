import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code, TrendingUp, Search, Server, CheckCircle, ArrowRight,
  Globe, Smartphone, ShoppingCart, Palette, Target, BarChart3,
  Map, FileText, Shield, Headphones, Settings, Database
} from 'lucide-react';

const Services = () => {
  const webDevFeatures = [
    { icon: Globe, text: 'Responsive Websites' },
    { icon: Smartphone, text: 'Mobile-First Design' },
    { icon: ShoppingCart, text: 'E-commerce Store Setup' },
    { icon: Code, text: 'Custom Business Websites' },
    { icon: Palette, text: 'Landing Pages' },
    { icon: FileText, text: 'Multilingual Support' }
  ];

  const marketingFeatures = [
    { icon: Target, text: 'Meta Ads (Facebook/Instagram)' },
    { icon: Search, text: 'Google Ads' },
    { icon: BarChart3, text: 'Budget Optimization' },
    { icon: TrendingUp, text: 'Lead Generation' },
    { icon: Target, text: 'Retargeting Campaigns' },
    { icon: BarChart3, text: 'Performance Dashboards' }
  ];

  const seoFeatures = [
    { icon: Map, text: 'Local SEO Optimization' },
    { icon: Globe, text: 'Google Business Profile' },
    { icon: Palette, text: 'Brand Identity Creation' },
    { icon: FileText, text: 'Content Strategy' }
  ];

  const hostingFeatures = [
    { icon: Shield, text: 'Secure Hosting' },
    { icon: Database, text: 'Domain Management' },
    { icon: Headphones, text: '24/7 Support' },
    { icon: Settings, text: 'Monthly Maintenance' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '1,499',
      period: '/month',
      description: 'Perfect for new businesses',
      features: [
        'Hosting (Netlify)',
        'Booking System',
        'Admin Panel Access',
        'Basic Support (WhatsApp/Email)',
        'Uptime Monitoring',
        '1 Admin User',
        'Limited Image Uploads'
      ],
      cta: 'Get Started',
      highlight: false
    },
    {
      name: 'Growth',
      price: '2,999',
      period: '/month',
      description: 'For serious businesses',
      features: [
        'Everything in Starter',
        'Unlimited Services & Images',
        'Gallery Management',
        'Appointment Management',
        'Priority Support',
        'Minor Content Updates'
      ],
      cta: 'Most Popular',
      highlight: true
    },
    {
      name: 'Premium',
      price: '4,999',
      period: '/month',
      description: 'Full-service solution',
      features: [
        'Everything in Growth',
        'Multiple Admins',
        'Custom Domain Support',
        'SEO Basics',
        'WhatsApp Booking Integration',
        'Monthly Performance Report'
      ],
      cta: 'Go Premium',
      highlight: false
    }
  ];

  const addons = [
    { name: 'Custom Design Tweaks', price: '₹3,000 - ₹10,000' },
    { name: 'Extra Pages (About, Careers, Offers)', price: '₹1,000/page' },
    { name: 'Google Maps + Reviews', price: '₹1,500' },
    { name: 'Payment Integration (Razorpay)', price: '₹2,000' },
    { name: 'WhatsApp Automation', price: '₹3,000' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-mesh" data-testid="services-hero">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete Digital Solutions for Your Business
            </h1>
            <p className="text-lg text-slate-600">
              From website development to performance marketing, we provide everything 
              you need to establish and grow your online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Development */}
      <section className="py-24" data-testid="web-dev-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Website Development
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Professional, modern websites that look great on all devices and help 
                convert visitors into customers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {webDevFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-secondary" />
                    <span className="text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="btn-primary"
                data-testid="web-dev-cta"
              >
                Get Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1653976499575-6aacb2644727?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBsYXB0b3B8ZW58MHx8fHwxNzcwNDc0MDkxfDA&ixlib=rb-4.1.0&q=85&w=800"
                alt="Web development"
                className="rounded-2xl shadow-xl"
                data-testid="web-dev-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Marketing */}
      <section className="py-24 bg-subtle" data-testid="marketing-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                alt="Performance marketing"
                className="rounded-2xl shadow-xl"
                data-testid="marketing-image"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Performance Marketing
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Data-driven ad campaigns that deliver real leads and measurable ROI 
                for your business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {marketingFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-accent" />
                    <span className="text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="btn-accent"
                data-testid="marketing-cta"
              >
                Start Campaign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO & Branding + Hosting */}
      <section className="py-24" data-testid="seo-hosting-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO & Branding */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                SEO & Branding
              </h3>
              <p className="text-slate-600 mb-6">
                Get found on Google and build a memorable brand identity.
              </p>
              <div className="space-y-3 mb-6">
                {seoFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="text-secondary font-medium hover:underline inline-flex items-center gap-2"
                data-testid="seo-cta"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Hosting & Maintenance */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                Hosting & Maintenance
              </h3>
              <p className="text-slate-600 mb-6">
                Reliable hosting and ongoing support to keep your site running smoothly.
              </p>
              <div className="space-y-3 mb-6">
                {hostingFeatures.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="text-secondary font-medium hover:underline inline-flex items-center gap-2"
                data-testid="hosting-cta"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-subtle" data-testid="pricing-section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full mb-4">
              Pricing
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Setup Fee: ₹15,000 - ₹30,000 (one-time) depending on pages, branding, and data migration.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`card ${plan.highlight ? 'pricing-highlight' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-primary">₹{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center block ${plan.highlight ? 'btn-accent' : 'btn-secondary'}`}
                  data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
              Add-ons
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex justify-between items-center p-4 bg-slate-50 rounded-xl"
                  data-testid={`addon-${addon.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="text-slate-700">{addon.name}</span>
                  <span className="font-medium text-secondary">{addon.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary" data-testid="services-cta">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your business needs and create a custom solution that fits your budget.
            </p>
            <Link
              to="/contact"
              className="btn-accent"
              data-testid="services-final-cta"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
