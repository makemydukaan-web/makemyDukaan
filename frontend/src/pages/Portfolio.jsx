import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Star, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sharma Electronics',
      category: 'ecommerce',
      description: 'Complete e-commerce solution for local electronics retailer',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      results: ['300% increase in online orders', '50K monthly visitors', '₹5L monthly revenue'],
      testimonial: 'MakeMyDukaan transformed our business completely. We went from zero online presence to 50K visitors a month!',
      client: 'Rajesh Sharma',
      location: 'Delhi'
    },
    {
      id: 2,
      title: 'Priya Salon & Spa',
      category: 'website',
      description: 'Modern booking website for premium salon chain',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      results: ['200+ bookings/month', '45% reduction in no-shows', '4.9 star rating'],
      testimonial: 'The online booking system has been a game-changer. Our customers love the convenience!',
      client: 'Priya Mehta',
      location: 'Mumbai'
    },
    {
      id: 3,
      title: 'Spice Kitchen Restaurant',
      category: 'website',
      description: 'Restaurant website with online ordering and reservations',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      results: ['150+ daily orders', '₹3L monthly online sales', '500+ reviews'],
      testimonial: 'Our restaurant now gets more online orders than walk-ins. Incredible transformation!',
      client: 'Vikram Singh',
      location: 'Bangalore'
    },
    {
      id: 4,
      title: 'Fashion Hub',
      category: 'ecommerce',
      description: 'Multi-vendor fashion marketplace for local boutiques',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600',
      results: ['10 boutiques onboarded', '2000+ products', '₹8L monthly GMV'],
      testimonial: 'From a single store to a marketplace - MakeMyDukaan made it possible!',
      client: 'Anita Desai',
      location: 'Jaipur'
    },
    {
      id: 5,
      title: 'HomeServ Pro',
      category: 'marketing',
      description: 'Performance marketing for home services company',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
      results: ['500+ leads/month', '₹150 cost per lead', '35% conversion rate'],
      testimonial: 'Their marketing team delivered exactly what they promised. ROI has been phenomenal.',
      client: 'Suresh Patel',
      location: 'Ahmedabad'
    },
    {
      id: 6,
      title: 'Green Grocers',
      category: 'ecommerce',
      description: 'Online grocery store with same-day delivery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600',
      results: ['1000+ orders/week', '95% delivery rating', '₹12L monthly sales'],
      testimonial: 'We now compete with BigBasket in our locality. Customers trust us more!',
      client: 'Mohan Kumar',
      location: 'Chennai'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const testimonials = [
    {
      quote: "MakeMyDukaan didn't just build us a website, they transformed how we do business. Our customers can now book appointments 24/7.",
      author: "Dr. Sneha Reddy",
      role: "Owner, Wellness Clinic",
      location: "Hyderabad"
    },
    {
      quote: "The team understood our local market perfectly. They created a website that resonates with our customers and reflects our brand.",
      author: "Mohammed Farhan",
      role: "Founder, Al-Baik Textiles",
      location: "Surat"
    },
    {
      quote: "From concept to launch in just 3 days! The speed and quality exceeded all expectations. Highly recommended for any SMB.",
      author: "Lakshmi Iyer",
      role: "Director, Iyer Catering",
      location: "Coimbatore"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-mesh" data-testid="portfolio-hero">
        <div className="container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full mb-4">
              Our Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Success Stories from Real Businesses
            </h1>
            <p className="text-lg text-slate-600">
              See how we've helped Indian SMBs transform their digital presence 
              and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-slate-100" data-testid="portfolio-filters">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-secondary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24" data-testid="projects-grid">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-testid={`project-card-${project.id}`}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-slate-700">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-slate-500 text-sm italic mb-2">
                    "{project.testimonial.slice(0, 80)}..."
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-primary">{project.client}</span>
                    <span className="text-slate-400"> • {project.location}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - No Images */}
      <section className="py-24 bg-subtle" data-testid="testimonials-section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`testimonial-${index}`}
              >
                <Quote className="w-10 h-10 text-secondary/20 mb-4" />
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-primary text-lg">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-slate-400 mt-1">{testimonial.location}</p>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary" data-testid="portfolio-cta">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ businesses that have transformed their digital presence with MakeMyDukaan.
            </p>
            <Link
              to="/contact"
              className="btn-accent"
              data-testid="portfolio-final-cta"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;