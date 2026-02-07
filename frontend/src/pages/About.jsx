import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target, Eye, Zap, Shield, Clock, Heart, ArrowRight, Users
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Speed',
      description: 'Launch your website within 24-48 hours. No long waiting periods.'
    },
    {
      icon: Shield,
      title: 'Affordability',
      description: 'Enterprise-quality websites at SMB-friendly prices.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear pricing, no hidden costs. What you see is what you pay.'
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'We treat your business as our own. Your success is our success.'
    }
  ];

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      description: '10+ years in digital transformation'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1590905775253-a4f0f3c426ff?w=400',
      description: 'UI/UX expert with Indian context focus'
    },
    {
      name: 'Amit Kumar',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      description: 'Full-stack wizard, performance obsessed'
    },
    {
      name: 'Neha Singh',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
      description: 'Meta & Google certified expert'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-mesh" data-testid="about-hero">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-4">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Digitizing Bharat's SMB Landscape
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                We believe every local business deserves a professional online presence. 
                MakeMyDukaan was born from a simple vision: to make digital transformation 
                accessible, affordable, and effective for Indian SMBs.
              </p>
              <p className="text-slate-600">
                From kirana stores to boutiques, from salons to restaurants – we've helped 
                500+ businesses across India establish their digital footprint and grow 
                their customer base.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://images.unsplash.com/photo-1716703373020-17ff360924ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjcmVhdGl2ZSUyMG9mZmljZSUyMHRlYW0lMjBtZWV0aW5nJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MDQ3NDA3OXww&ixlib=rb-4.1.0&q=85&w=800"
                alt="Team meeting"
                className="rounded-2xl shadow-xl"
                data-testid="about-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" data-testid="mission-vision-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card bg-primary text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To digitize India's SMB landscape by providing world-class websites 
                and digital marketing solutions at prices every business can afford. 
                We're committed to bringing modern technology to traditional businesses.
              </p>
            </motion.div>
            <motion.div
              className="card bg-accent text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Eye className="w-12 h-12 text-white mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90">
                To empower every local business in India to have a powerful online 
                presence. We envision a future where digital equality enables even 
                the smallest shop to compete with the biggest brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-subtle" data-testid="why-choose-section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`value-card-${value.title.toLowerCase()}`}
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24" data-testid="team-section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet the People Behind MakeMyDukaan
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A passionate team of designers, developers, and marketers dedicated to 
              helping Indian businesses succeed online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`team-member-${index}`}
              >
                <div className="relative mb-4 inline-block">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary" data-testid="about-stats-section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Delivered' },
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Cities Served' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" data-testid="about-cta">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Join Our Growing Family
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Become part of 500+ businesses that trust MakeMyDukaan for their digital journey.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              data-testid="about-final-cta"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
