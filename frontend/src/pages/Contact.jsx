import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  Phone, Mail, MapPin, Clock, Send, ArrowRight
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Thank you! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          business_type: '',
          budget: '',
          message: ''
        });
      } else {
        toast.error(data.detail || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = [
    'Retail / Shop',
    'Restaurant / Cafe',
    'Salon / Spa',
    'Healthcare / Clinic',
    'Professional Services',
    'Manufacturing',
    'E-commerce',
    'Other'
  ];

  const budgetRanges = [
    '₹15,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+'
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-mesh" data-testid="contact-hero">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-4">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Build Your Digital Presence
            </h1>
            <p className="text-lg text-slate-600">
              Ready to take your business online? Fill out the form below and we'll 
              get back to you within 24 hours with a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" data-testid="contact-form-section">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form - 7 cols */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+91 98765 43210"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      name="business_type"
                      value={formData.business_type}
                      onChange={handleChange}
                      required
                      className="input-field"
                      data-testid="input-business-type"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="input-field"
                    data-testid="input-budget"
                  >
                    <option value="">Select your budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Describe your business and what you're looking for..."
                    data-testid="input-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center"
                  data-testid="submit-button"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info - 5 cols */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-primary rounded-2xl p-8 text-white mb-8">
                <h3 className="font-heading text-2xl font-bold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a
                    href="tel:+919663112394"
                    className="flex items-start gap-4 hover:text-accent transition-colors"
                    data-testid="contact-phone"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-slate-300">+91 96631 12394</p>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@makemydukaan.in"
                    className="flex items-start gap-4 hover:text-accent transition-colors"
                    data-testid="contact-email"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-slate-300">hello@makemydukaan.in</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-slate-300">Bangalore, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-slate-300">Mon - Sat: 9AM - 7PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/9663112394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#25D366] rounded-2xl text-white hover:bg-[#20bd5a] transition-colors"
                data-testid="whatsapp-cta"
              >
                <FaWhatsapp className="w-10 h-10" />
                <div>
                  <p className="font-heading font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">Get instant response</p>
                </div>
                <ArrowRight className="w-6 h-6 ml-auto" />
              </a>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452719816!3d12.954517008496057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704893200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MakeMyDukaan Location"
                  data-testid="google-map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-subtle" data-testid="faq-section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does it take to build a website?',
                a: 'Most websites are launched within 24-48 hours for standard packages. Complex e-commerce setups may take 3-5 days.'
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes! All our plans include support. Starter gets basic WhatsApp/email support, while Growth and Premium get priority support.'
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely! You can upgrade anytime and only pay the difference. We make it easy to scale as your business grows.'
              },
              {
                q: 'Do you work with businesses outside Bangalore?',
                a: 'Yes! We serve businesses across India. Everything is done remotely via video calls and WhatsApp.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`faq-${index}`}
              >
                <h4 className="font-heading font-bold text-primary mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
